# 💳 Guia de Implementação: Pagamentos e Emails

Este documento descreve como implementar sistemas de pagamento e email no Gabriel Pastel **sem custos**, usando ambientes de teste gratuitos.

---

## 🎯 Visão Geral

### O Que Vamos Implementar

- ✅ **Pagamentos com Stripe** (modo teste - grátis)
- ✅ **Emails com Resend** (100/dia grátis)
- ✅ **Webhooks para confirmar pagamentos**
- ✅ **Templates de email profissionais**
- ✅ **Fluxo completo de checkout**

### Custo Total: **R$ 0,00** 🎉

---

## 📋 Pré-requisitos

### 1. Criar Conta Stripe (Modo Teste)

1. Acesse [stripe.com](https://stripe.com)
2. Sign up (não precisa de CNPJ para teste)
3. Acesse **Developers → API Keys**
4. Copie as chaves de **Test mode**:
   - `Publishable key`: `pk_test_...`
   - `Secret key`: `sk_test_...`

### 2. Criar Conta Resend

1. Acesse [resend.com](https://resend.com)
2. Sign up com GitHub
3. Crie uma API Key
4. Copie: `re_...`

### 3. Atualizar .env

```env
# Stripe (Modo Teste - GRÁTIS)
STRIPE_SECRET_KEY="sk_test_51ABC..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."  # Configurar depois

# Resend (100 emails/dia GRÁTIS)
RESEND_API_KEY="re_..."

# NextAuth (já existe)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="..."

# Database (já existe)
DATABASE_URL="postgresql://..."
```

---

## 🗄️ 1. Atualizar Schema Prisma

```prisma
// prisma/schema.prisma

model Order {
  id          String      @id @default(cuid())
  userId      String
  user        User        @relation(fields: [userId], references: [id])
  status      OrderStatus
  totalPrice  Float

  // ADICIONAR:
  paymentStatus PaymentStatus @default(PENDING)
  paymentId     String?           // ID do pagamento no Stripe
  stripeSessionId String?         // ID da sessão de checkout

  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt

  customPasteis CustomPastel[]
  premadePasteis OrderPremadePastel[]
}

enum PaymentStatus {
  PENDING      // Aguardando pagamento
  PROCESSING   // Processando
  PAID         // Pago com sucesso
  FAILED       // Falhou
  REFUNDED     // Reembolsado
}

enum OrderStatus {
  PENDING      // Aguardando confirmação
  CONFIRMED    // Confirmado (após pagamento)
  PREPARING    // Em preparo
  READY        // Pronto para entrega
  DELIVERED    // Entregue
  CANCELLED    // Cancelado
}
```

**Executar:**

```bash
npx prisma migrate dev --name add_payment_fields
npx prisma generate
```

---

## 📦 2. Instalar Dependências

```bash
npm install stripe @stripe/stripe-js resend
npm install -D @types/node
```

---

## 🔧 3. Criar Configurações

### src/lib/stripe.ts

```typescript
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY não está definida");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
  typescript: true,
});
```

### src/lib/resend.ts

```typescript
import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY não está definida");
}

export const resend = new Resend(process.env.RESEND_API_KEY);
```

---

## 💻 4. Implementar Checkout

### src/app/api/checkout/route.ts

```typescript
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    // Verificar autenticação
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
    }

    const { items } = await req.json();

    // Validar items
    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Carrinho vazio" }, { status: 400 });
    }

    // Calcular total no servidor (SEGURANÇA - nunca confiar no frontend)
    let totalPrice = 0;
    const lineItems = [];

    for (const item of items) {
      // Se for pastel personalizado
      if (item.type === "custom") {
        const ingredients = await prisma.ingredient.findMany({
          where: { id: { in: item.ingredientIds } },
        });
        const itemPrice = ingredients.length * 2.5; // R$2.50 por ingrediente
        totalPrice += itemPrice * item.quantity;

        lineItems.push({
          price_data: {
            currency: "brl",
            product_data: {
              name: `Pastel Personalizado (${ingredients.length} ingredientes)`,
              description: ingredients.map((i) => i.name).join(", "),
              images: ["https://gabrielpastel.com/icon.png"],
            },
            unit_amount: Math.round(itemPrice * 100), // centavos
          },
          quantity: item.quantity,
        });
      }

      // Se for pastel pré-montado
      if (item.type === "premade") {
        const premade = await prisma.premadePastel.findUnique({
          where: { id: item.premadeId },
        });
        if (!premade) continue;

        totalPrice += premade.price * item.quantity;

        lineItems.push({
          price_data: {
            currency: "brl",
            product_data: {
              name: premade.name,
              description: premade.description || "",
              images: [premade.imageUrl],
            },
            unit_amount: Math.round(premade.price * 100),
          },
          quantity: item.quantity,
        });
      }
    }

    // Criar pedido no banco ANTES do pagamento
    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        totalPrice,
        status: "PENDING",
        paymentStatus: "PENDING",
      },
    });

    // Criar sessão de checkout no Stripe
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.NEXTAUTH_URL}/pedido-confirmado?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/monte-seu-pastel?cancelled=true`,
      customer_email: session.user.email || undefined,
      client_reference_id: order.id,
      metadata: {
        orderId: order.id,
        userId: session.user.id,
      },
    });

    // Salvar session ID no pedido
    await prisma.order.update({
      where: { id: order.id },
      data: { stripeSessionId: checkoutSession.id },
    });

    return NextResponse.json({
      checkoutUrl: checkoutSession.url,
      orderId: order.id,
    });
  } catch (error) {
    console.error("Erro no checkout:", error);
    return NextResponse.json(
      { error: "Erro ao processar checkout" },
      { status: 500 },
    );
  }
}
```

---

## 🪝 5. Implementar Webhook

### src/app/api/webhooks/stripe/route.ts

```typescript
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";
import Stripe from "stripe";

// IMPORTANTE: Desabilitar parsing de body para webhooks
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    // Verificar que webhook veio do Stripe
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  console.log(`Webhook recebido: ${event.type}`);

  try {
    // Lidar com checkout completado
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const orderId = session.metadata?.orderId;

      if (!orderId) {
        console.error("Webhook sem orderId");
        return NextResponse.json({ error: "No orderId" }, { status: 400 });
      }

      // Atualizar pedido no banco
      const order = await prisma.order.update({
        where: { id: orderId },
        data: {
          paymentStatus: "PAID",
          paymentId: session.payment_intent as string,
          status: "CONFIRMED",
        },
        include: {
          user: true,
          customPasteis: {
            include: {
              ingredients: {
                include: {
                  ingredient: true,
                },
              },
            },
          },
        },
      });

      // Enviar email de confirmação
      if (order.user.email) {
        await resend.emails.send({
          from: "Gabriel Pastel <noreply@gabrielpastel.com>",
          to: order.user.email,
          subject: `✅ Pedido #${order.id.slice(0, 8)} Confirmado!`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <style>
                  body { 
                    font-family: Arial, sans-serif; 
                    line-height: 1.6;
                    color: #333;
                  }
                  .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background: #fff8ea;
                  }
                  .header {
                    background: #10806e;
                    color: white;
                    padding: 20px;
                    text-align: center;
                    border-radius: 10px 10px 0 0;
                  }
                  .content {
                    padding: 30px;
                    background: white;
                    border-radius: 0 0 10px 10px;
                  }
                  .total {
                    font-size: 24px;
                    font-weight: bold;
                    color: #10806e;
                    margin: 20px 0;
                  }
                  .footer {
                    text-align: center;
                    margin-top: 30px;
                    color: #666;
                    font-size: 12px;
                  }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h1>🥟 Pedido Confirmado!</h1>
                  </div>
                  <div class="content">
                    <p>Olá <strong>${order.user.name}</strong>,</p>
                    
                    <p>Seu pedido foi confirmado e já estamos preparando seus deliciosos pastéis veganos! 🌱</p>
                    
                    <p><strong>Número do Pedido:</strong> #${order.id.slice(0, 8)}</p>
                    
                    <div class="total">
                      Total: R$ ${order.totalPrice.toFixed(2)}
                    </div>
                    
                    <p>Você pode acompanhar o status do seu pedido acessando seu perfil no site.</p>
                    
                    <p>Obrigado por escolher o Gabriel Pastel! ❤️</p>
                    
                    <div class="footer">
                      <p>Gabriel Pastel - 100% Vegano, Orgânico e Delicioso</p>
                      <p>Este é um email automático, não responda.</p>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
        });
      }

      console.log(`Pedido ${orderId} confirmado e email enviado`);
    }

    // Lidar com pagamento falhou
    if (event.type === "payment_intent.payment_failed") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;

      // Buscar pedido
      const order = await prisma.order.findFirst({
        where: { paymentId: paymentIntent.id },
      });

      if (order) {
        await prisma.order.update({
          where: { id: order.id },
          data: {
            paymentStatus: "FAILED",
            status: "CANCELLED",
          },
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Erro processando webhook:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 },
    );
  }
}
```

---

## 🌐 6. Atualizar Frontend

### src/app/(main)/monte-seu-pastel/page.tsx

```typescript
// Adicionar no componente existente:

const [isCheckingOut, setIsCheckingOut] = useState(false)

const handleCheckout = async () => {
  if (!session) {
    toast.error("Faça login para finalizar o pedido")
    return
  }

  if (cart.length === 0) {
    toast.error("Seu carrinho está vazio")
    return
  }

  setIsCheckingOut(true)

  try {
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart }),
    })

    if (!response.ok) {
      throw new Error("Erro ao criar checkout")
    }

    const { checkoutUrl } = await response.json()

    // Redirecionar para Stripe
    window.location.href = checkoutUrl

  } catch (error) {
    console.error("Erro no checkout:", error)
    toast.error("Erro ao processar pagamento", {
      description: "Tente novamente mais tarde",
    })
    setIsCheckingOut(false)
  }
}

// Substituir o botão "Adicionar ao Pedido" por:
<button
  onClick={handleCheckout}
  disabled={isCheckingOut || cart.length === 0}
  className={cn(
    "w-full py-4 px-6 rounded-lg font-semibold text-lg",
    "bg-vegGreen hover:bg-vegYellow text-white hover:text-background",
    "transition-all duration-200 shadow-lg hover:shadow-2xl hover:scale-105",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
  )}
>
  {isCheckingOut ? (
    <span className="flex items-center justify-center gap-2">
      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      Processando...
    </span>
  ) : (
    <>🛒 FINALIZAR PEDIDO - R$ {getTotal().toFixed(2)}</>
  )}
</button>
```

---

## ✅ 7. Página de Confirmação

### src/app/(main)/pedido-confirmado/page.tsx

```typescript
"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { CheckCircle, Package, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PedidoConfirmado() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular verificação (em produção, buscar detalhes do pedido)
    setTimeout(() => setLoading(false), 1500)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-vegGreen border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-pastel">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-vegGreen/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-vegGreen" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-5xl font-holtwood text-vegBrown-dark">
              PEDIDO CONFIRMADO! 🎉
            </h1>
            <p className="text-xl text-gray-600">
              Seu pagamento foi processado com sucesso
            </p>
          </div>

          {/* Info */}
          <div className="bg-vegGreen/5 rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-center gap-3 text-vegGreen">
              <Package className="w-6 h-6" />
              <p className="text-lg font-semibold">
                Seus pastéis já estão sendo preparados!
              </p>
            </div>
            <p className="text-gray-600">
              Um email de confirmação foi enviado para você com todos os detalhes.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/perfil/pedidos"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-vegGreen hover:bg-vegYellow text-white hover:text-background rounded-lg font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Ver Meus Pedidos
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/monte-seu-pastel"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-vegGreen text-vegGreen hover:bg-vegGreen/5 rounded-lg font-semibold transition-all"
            >
              Fazer Novo Pedido
            </Link>
          </div>

          {/* Thank You */}
          <div className="pt-6 border-t">
            <p className="text-gray-500">
              Obrigado por escolher o Gabriel Pastel! 🌱❤️
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## 🧪 8. Testar o Sistema

### Cartões de Teste Stripe

```
✅ APROVADO:
4242 4242 4242 4242
CVV: qualquer 3 dígitos
Data: qualquer data futura

❌ RECUSADO:
4000 0000 0000 0002

⏳ REQUER AUTENTICAÇÃO:
4000 0025 0000 3155
```

### Fluxo de Teste

1. **Monte um pastel**
   - Adicione ingredientes
   - Veja o total

2. **Clique "Finalizar Pedido"**
   - Aguarde redirecionamento

3. **Na página do Stripe:**
   - Email: seu@email.com
   - Cartão: 4242 4242 4242 4242
   - CVV: 123
   - Data: 12/25
   - Clique "Pay"

4. **Verifique:**
   - Redireciona para /pedido-confirmado
   - Email chega na caixa de entrada
   - Pedido aparece em "Meus Pedidos"
   - Status: CONFIRMED
   - Payment Status: PAID

5. **No Dashboard Stripe:**
   - Veja a "transação" (modo teste)
   - Veja o webhook disparado
   - Veja os logs

---

## 🔐 9. Configurar Webhook no Stripe

### Desenvolvimento Local (Stripe CLI)

```bash
# Instalar Stripe CLI
# https://stripe.com/docs/stripe-cli

# Login
stripe login

# Encaminhar webhooks para localhost
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

O CLI retornará um **webhook secret**. Copie para `.env`:

```env
STRIPE_WEBHOOK_SECRET="whsec_..."
```

### Produção (Deploy)

1. Acesse **Stripe Dashboard → Developers → Webhooks**
2. Clique **Add endpoint**
3. URL: `https://seusite.com/api/webhooks/stripe`
4. Eventos para ouvir:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copie o **Signing secret** para `.env` de produção

---

## 📧 10. Templates de Email Adicionais

### Email de Boas-vindas (cadastro)

```typescript
// src/app/api/auth/signup/route.ts
// Adicionar após criar usuário:

await resend.emails.send({
  from: "Gabriel Pastel <noreply@gabrielpastel.com>",
  to: email,
  subject: "🥟 Bem-vindo ao Gabriel Pastel!",
  html: `
    <h1>Olá ${name}!</h1>
    <p>Bem-vindo à família Gabriel Pastel! 🌱</p>
    <p>Estamos muito felizes em ter você conosco.</p>
    <p>Aqui você encontra os melhores pastéis veganos, 100% orgânicos e deliciosos!</p>
    <p><a href="${process.env.NEXTAUTH_URL}/monte-seu-pastel">Monte seu primeiro pastel</a></p>
  `,
});
```

---

## 📊 11. Monitoramento

### Stripe Dashboard

- Veja todas as transações (modo teste)
- Logs de webhooks
- Eventos de pagamento
- Gráficos e relatórios

### Resend Dashboard

- Emails enviados
- Taxa de entrega
- Bounces e complaints
- Logs detalhados

---

## 🚀 12. Deploy

### Variáveis de Ambiente (Vercel/Railway/etc)

```env
# Stripe (MANTENHA EM TESTE SE SITE É FICTÍCIO)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Resend
RESEND_API_KEY=re_...

# NextAuth
NEXTAUTH_URL=https://seusite.com
NEXTAUTH_SECRET=...

# Database
DATABASE_URL=postgresql://...
```

### Checklist

- [ ] Variáveis de ambiente configuradas
- [ ] Webhook endpoint configurado no Stripe
- [ ] Migrations aplicadas no DB de produção
- [ ] Email de remetente verificado no Resend
- [ ] Testado com cartão de teste
- [ ] Webhook funcionando (verificar logs)

---

## 💡 Dicas

### Segurança

- ✅ **Sempre calcule o total no backend** (não confie no frontend)
- ✅ **Valide webhook signature** (verificar que veio do Stripe)
- ✅ **Use HTTPS em produção** (obrigatório)
- ✅ **Nunca exponha SECRET_KEY** no frontend

### Performance

- ⚡ Use `loading` states durante checkout
- ⚡ Mostre feedback visual claro
- ⚡ Error handling robusto

### UX

- 👤 Exija login antes do checkout
- 🛒 Mostre resumo do pedido claro
- 📧 Envie emails de confirmação
- 📱 Certifique-se que é responsivo

### Debug

```typescript
// Habilitar logs detalhados
console.log("Checkout data:", { items, total });
console.log("Stripe session:", checkoutSession.id);
console.log("Webhook event:", event.type);
```

---

## 🎓 Recursos Adicionais

### Documentação Oficial

- [Stripe Docs](https://stripe.com/docs)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)
- [Resend Docs](https://resend.com/docs)
- [React Email](https://react.email)

### Tutoriais

- [Stripe + Next.js Tutorial](https://stripe.com/docs/payments/checkout/quickstart?lang=node)
- [Webhook Testing](https://stripe.com/docs/webhooks/test)

---

## ✅ Resumo

### O Que Você Ganha

- ✅ Sistema de pagamento completo
- ✅ Aceita cartões (modo teste)
- ✅ Emails transacionais
- ✅ Confirmação de pedidos
- ✅ Dashboard para monitorar
- ✅ Webhook para automação
- ✅ **CUSTO: R$ 0,00**

### Limitações (Modo Teste)

- ❌ Dinheiro não entra de verdade
- ❌ Só aceita cartões de teste
- ✅ **Perfeito para portfolio e demonstração**

### Quando Ir para Produção

Quando o site for real e você quiser receber pagamentos de verdade:

1. Troque para chaves `live` do Stripe
2. Configure webhook de produção
3. Verifique domínio no Resend
4. Comece a receber dinheiro! 💰

---

**Última atualização:** Janeiro 2026  
**Autor:** Alexandre Batista
