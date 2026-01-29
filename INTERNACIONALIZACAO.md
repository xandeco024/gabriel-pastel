# 🌍 Guia de Internacionalização (i18n)

Este documento descreve como implementar suporte a múltiplos idiomas no Gabriel Pastel usando Next.js 15 App Router.

---

## 🎯 O Que É Internacionalização?

**Internacionalização (i18n)** é o processo de adaptar sua aplicação para suportar múltiplos idiomas e regiões.

### Por Que Implementar?

#### Vantagens

- 🌎 **Alcance global**: Atenda usuários de diferentes países
- 💰 **Mais vendas**: 75% dos usuários preferem comprar em seu idioma nativo
- 🔍 **SEO**: Melhore rankeamento em buscas locais
- 👥 **Acessibilidade**: Inclusão de mais pessoas
- 🎯 **Diferencial competitivo**: Destaque-se da concorrência

#### Para Gabriel Pastel

- 🇧🇷 **Português** (idioma principal)
- 🇺🇸 **Inglês** (turistas, imigrantes, exportação)
- 🇪🇸 **Espanhol** (América Latina, mercado crescente)

---

## 📚 Bibliotecas Disponíveis

### 1. **next-intl** ⭐ (Recomendado)

- ✅ Feito especificamente para Next.js App Router
- ✅ Type-safe (TypeScript)
- ✅ Server + Client Components
- ✅ Formatação de datas/números/moedas
- ✅ Pluralização automática
- ✅ Bem mantido e documentado

### 2. **next-i18next**

- ⚠️ Melhor para Pages Router (antigo)
- ❌ Não otimizado para App Router

### 3. **react-i18next**

- ✅ Biblioteca clássica
- ⚠️ Requer configuração extra para Next.js
- ✅ Muito popular (comunidade grande)

### 4. **Intl API Nativa**

- ✅ Sem dependências
- ❌ Muito trabalhoso
- ❌ Sem gerenciamento de traduções

---

## 🚀 Implementação com next-intl

### 1. Instalação

```bash
npm install next-intl
```

### 2. Estrutura de Arquivos

```
src/
├── i18n/
│   ├── request.ts              # Configuração i18n
│   └── messages/               # Traduções
│       ├── pt.json             # Português
│       ├── en.json             # Inglês
│       └── es.json             # Espanhol
├── app/
│   └── [locale]/               # Rotas dinâmicas por idioma
│       ├── layout.tsx
│       ├── page.tsx
│       ├── home/
│       ├── monte-seu-pastel/
│       └── ...
└── middleware.ts               # Detectar idioma
```

---

## 📝 3. Criar Arquivos de Tradução

### src/i18n/messages/pt.json

```json
{
  "common": {
    "loading": "Carregando...",
    "error": "Erro",
    "success": "Sucesso",
    "cancel": "Cancelar",
    "confirm": "Confirmar",
    "save": "Salvar",
    "delete": "Excluir",
    "edit": "Editar",
    "close": "Fechar"
  },
  "nav": {
    "home": "Início",
    "ourStory": "Nossa História",
    "ourImpact": "Nosso Impacto",
    "buildYourPastel": "Monte Seu Pastel",
    "menu": "Cardápio",
    "profile": "Perfil",
    "myOrders": "Meus Pedidos",
    "login": "Entrar",
    "signup": "Cadastrar",
    "logout": "Sair"
  },
  "home": {
    "title": "O PASTEL QUE TE LEVA ATÉ O CÉU",
    "subtitle": "Com a união de dois Gabriéis, que gostavam de pastéis, surge a <strong>Gabriel Pastel</strong>.",
    "description": "A lanchonete com o melhor pastel da região, <strong>100% vegana</strong>, e com o preço que cabe no seu bolso.",
    "cta": "PEÇA JÁ!",
    "benefits": {
      "vegan": "100% VEGANO",
      "organic": "INGREDIENTES ORGÂNICOS",
      "affordable": "PREÇOS ACESSÍVEIS",
      "noPreservatives": "SEM CONSERVANTES",
      "noTransFat": "SEM GORDURA TRANSGÊNICA",
      "fresh": "SEMPRE FRESCO"
    }
  },
  "builder": {
    "title": "MONTE SEU PASTEL",
    "subtitle": "Escolha seus ingredientes favoritos e crie o pastel perfeito!",
    "selectIngredients": "Selecione os Ingredientes",
    "ingredientsSelected": "{count} ingrediente(s) selecionado(s)",
    "quantity": "Quantidade",
    "addToCart": "ADICIONAR AO CARRINHO",
    "cart": "Seu Carrinho",
    "emptyCart": "Seu carrinho está vazio",
    "emptyCartDescription": "Adicione alguns pastéis deliciosos!",
    "item": "Item",
    "remove": "Remover",
    "total": "Total",
    "checkout": "FINALIZAR PEDIDO",
    "suggestions": "Combinações Populares",
    "customPastel": "Pastel Personalizado",
    "ingredients": "ingredientes"
  },
  "auth": {
    "welcomeBack": "Bem-vindo de volta!",
    "joinFamily": "Junte-se à nossa família! 🌱",
    "signin": "Entre na sua conta",
    "signup": "Criar conta",
    "name": "Nome completo",
    "namePlaceholder": "Como você gostaria de ser chamado?",
    "email": "Email",
    "emailPlaceholder": "Seu melhor email",
    "password": "Senha",
    "passwordPlaceholder": "Sua senha",
    "confirmPassword": "Confirmar senha",
    "confirmPasswordPlaceholder": "Digite a senha novamente",
    "minCharacters": "Mínimo {min} caracteres",
    "passwordStrength": {
      "superWeak": "Super Fraca",
      "weak": "Fraca",
      "medium": "Média",
      "strong": "Forte"
    },
    "passwordHints": {
      "superWeak": "Use pelo menos 4 caracteres",
      "weak": "Tente adicionar números ou símbolos",
      "medium": "Boa senha! 👍",
      "strong": "Excelente! 🔒"
    },
    "passwordMismatch": "⚠️ As senhas não coincidem",
    "passwordMatch": "✓ Senhas coincidem!",
    "signinButton": "ENTRAR",
    "signupButton": "CRIAR CONTA",
    "signingIn": "Entrando...",
    "creatingAccount": "Criando conta...",
    "noAccount": "Não tem conta?",
    "hasAccount": "Já tem conta?",
    "createAccountLink": "Criar conta",
    "signinLink": "Fazer login"
  },
  "profile": {
    "title": "MEU PERFIL",
    "subtitle": "Gerencie suas informações e acompanhe seus pedidos",
    "welcome": "Olá, {name}! 🌱",
    "memberSince": "Membro desde {date}",
    "quickActions": "Ações Rápidas",
    "viewOrders": "Ver Pedidos",
    "makeOrder": "Fazer Pedido",
    "editProfile": "Editar Perfil",
    "myImpact": "MEU IMPACTO",
    "impactDescription": "Ao escolher pastéis veganos, você está fazendo a diferença! 🌍",
    "ordersCount": "{count} pedidos realizados",
    "animalsSaved": "~{count} animais poupados",
    "waterSaved": "~{liters}L de água economizados",
    "co2Reduced": "~{kg}kg de CO₂ reduzidos"
  },
  "orders": {
    "title": "MEUS PEDIDOS",
    "subtitle": "Acompanhe todos os seus pedidos",
    "emptyTitle": "Nenhum pedido ainda",
    "emptyDescription": "Que tal fazer seu primeiro pedido de pastéis deliciosos?",
    "makeFirstOrder": "FAZER PRIMEIRO PEDIDO",
    "orderNumber": "Pedido #{id}",
    "status": {
      "PENDING": "Pendente",
      "CONFIRMED": "Confirmado",
      "PREPARING": "Em Preparo",
      "READY": "Pronto",
      "DELIVERED": "Entregue",
      "CANCELLED": "Cancelado"
    },
    "items": "Itens",
    "total": "Total",
    "orderAgain": "PEDIR NOVAMENTE",
    "orderedAt": "Pedido em {date}"
  },
  "impact": {
    "title": "NOSSO IMPACTO",
    "subtitle": "Transformando o mundo, um pastel de cada vez 🌱",
    "animalWelfare": "BEM-ESTAR ANIMAL",
    "economy": "Economia e Redução",
    "sustainability": "SUSTENTABILIDADE",
    "calculator": "CALCULE SEU IMPACTO",
    "calculatorDescription": "Descubra quanto você pode fazer pela diferença:",
    "daysVegan": "Dias sendo vegano",
    "calculate": "CALCULAR",
    "results": {
      "animals": "Animais poupados",
      "water": "Litros de água economizados",
      "co2": "Kg de CO₂ reduzidos",
      "land": "m² de terra preservados"
    }
  },
  "footer": {
    "slogan": "Pastéis veganos que transformam o mundo, um sabor de cada vez.",
    "allRightsReserved": "Todos os direitos reservados.",
    "madeWith": "Feito com",
    "and": "e"
  },
  "messages": {
    "loginRequired": "Faça login para continuar",
    "loginSuccess": "Login realizado com sucesso!",
    "loginError": "Login falhou! Verifique suas credenciais.",
    "signupSuccess": "Conta criada com sucesso! Agora faça login.",
    "signupError": "Erro ao criar conta",
    "orderSuccess": "Pedido realizado com sucesso! 🎉",
    "orderError": "Erro ao processar pedido",
    "addedToCart": "Adicionado ao carrinho!",
    "removedFromCart": "Removido do carrinho",
    "emptyCart": "Seu carrinho está vazio",
    "genericError": "Algo deu errado. Tente novamente."
  },
  "currency": {
    "symbol": "R$",
    "format": "{symbol} {value}"
  }
}
```

### src/i18n/messages/en.json

```json
{
  "common": {
    "loading": "Loading...",
    "error": "Error",
    "success": "Success",
    "cancel": "Cancel",
    "confirm": "Confirm",
    "save": "Save",
    "delete": "Delete",
    "edit": "Edit",
    "close": "Close"
  },
  "nav": {
    "home": "Home",
    "ourStory": "Our Story",
    "ourImpact": "Our Impact",
    "buildYourPastel": "Build Your Pastel",
    "menu": "Menu",
    "profile": "Profile",
    "myOrders": "My Orders",
    "login": "Sign In",
    "signup": "Sign Up",
    "logout": "Sign Out"
  },
  "home": {
    "title": "THE PASTEL THAT TAKES YOU TO HEAVEN",
    "subtitle": "From the union of two Gabriels who loved pastels, <strong>Gabriel Pastel</strong> was born.",
    "description": "The snack bar with the best pastel in the region, <strong>100% vegan</strong>, and with prices that fit your budget.",
    "cta": "ORDER NOW!",
    "benefits": {
      "vegan": "100% VEGAN",
      "organic": "ORGANIC INGREDIENTS",
      "affordable": "AFFORDABLE PRICES",
      "noPreservatives": "NO PRESERVATIVES",
      "noTransFat": "NO TRANS FAT",
      "fresh": "ALWAYS FRESH"
    }
  },
  "builder": {
    "title": "BUILD YOUR PASTEL",
    "subtitle": "Choose your favorite ingredients and create the perfect pastel!",
    "selectIngredients": "Select Ingredients",
    "ingredientsSelected": "{count} ingredient(s) selected",
    "quantity": "Quantity",
    "addToCart": "ADD TO CART",
    "cart": "Your Cart",
    "emptyCart": "Your cart is empty",
    "emptyCartDescription": "Add some delicious pastels!",
    "item": "Item",
    "remove": "Remove",
    "total": "Total",
    "checkout": "CHECKOUT",
    "suggestions": "Popular Combinations",
    "customPastel": "Custom Pastel",
    "ingredients": "ingredients"
  },
  "auth": {
    "welcomeBack": "Welcome back!",
    "joinFamily": "Join our family! 🌱",
    "signin": "Sign in to your account",
    "signup": "Create account",
    "name": "Full name",
    "namePlaceholder": "What should we call you?",
    "email": "Email",
    "emailPlaceholder": "Your best email",
    "password": "Password",
    "passwordPlaceholder": "Your password",
    "confirmPassword": "Confirm password",
    "confirmPasswordPlaceholder": "Type password again",
    "minCharacters": "Minimum {min} characters",
    "passwordStrength": {
      "superWeak": "Super Weak",
      "weak": "Weak",
      "medium": "Medium",
      "strong": "Strong"
    },
    "passwordHints": {
      "superWeak": "Use at least 4 characters",
      "weak": "Try adding numbers or symbols",
      "medium": "Good password! 👍",
      "strong": "Excellent! 🔒"
    },
    "passwordMismatch": "⚠️ Passwords don't match",
    "passwordMatch": "✓ Passwords match!",
    "signinButton": "SIGN IN",
    "signupButton": "CREATE ACCOUNT",
    "signingIn": "Signing in...",
    "creatingAccount": "Creating account...",
    "noAccount": "Don't have an account?",
    "hasAccount": "Already have an account?",
    "createAccountLink": "Create account",
    "signinLink": "Sign in"
  },
  "currency": {
    "symbol": "$",
    "format": "{symbol}{value}"
  }
}
```

### src/i18n/messages/es.json

```json
{
  "common": {
    "loading": "Cargando...",
    "error": "Error",
    "success": "Éxito",
    "cancel": "Cancelar",
    "confirm": "Confirmar",
    "save": "Guardar",
    "delete": "Eliminar",
    "edit": "Editar",
    "close": "Cerrar"
  },
  "nav": {
    "home": "Inicio",
    "ourStory": "Nuestra Historia",
    "ourImpact": "Nuestro Impacto",
    "buildYourPastel": "Arma Tu Pastel",
    "menu": "Menú",
    "profile": "Perfil",
    "myOrders": "Mis Pedidos",
    "login": "Iniciar Sesión",
    "signup": "Registrarse",
    "logout": "Cerrar Sesión"
  },
  "home": {
    "title": "EL PASTEL QUE TE LLEVA AL CIELO",
    "subtitle": "De la unión de dos Gabrieles que amaban los pasteles, nace <strong>Gabriel Pastel</strong>.",
    "description": "La cafetería con el mejor pastel de la región, <strong>100% vegano</strong>, y con precios que caben en tu bolsillo.",
    "cta": "¡PIDE YA!",
    "benefits": {
      "vegan": "100% VEGANO",
      "organic": "INGREDIENTES ORGÁNICOS",
      "affordable": "PRECIOS ACCESIBLES",
      "noPreservatives": "SIN CONSERVANTES",
      "noTransFat": "SIN GRASA TRANS",
      "fresh": "SIEMPRE FRESCO"
    }
  },
  "currency": {
    "symbol": "$",
    "format": "{symbol}{value}"
  }
}
```

---

## ⚙️ 4. Configuração

### src/i18n/request.ts

```typescript
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Idiomas suportados
export const locales = ["pt", "en", "es"] as const;
export type Locale = (typeof locales)[number];

// Idioma padrão
export const defaultLocale: Locale = "pt";

// Nomes dos idiomas para exibir no seletor
export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

export default getRequestConfig(async ({ locale }) => {
  // Validar que o locale é suportado
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
```

### src/middleware.ts

```typescript
import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/request";

export default createMiddleware({
  // Lista de todos os locales suportados
  locales,

  // Locale padrão se nenhum for detectado
  defaultLocale,

  // Detectar locale automaticamente do header Accept-Language
  localeDetection: true,
});

export const config = {
  // Aplicar middleware em todas as rotas exceto:
  matcher: [
    // Incluir todas as rotas
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // Incluir rotas dinâmicas com locale
    "/(pt|en|es)/:path*",
  ],
};
```

### next.config.ts

```typescript
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
```

---

## 🏗️ 5. Reestruturar Rotas

### Mover tudo para [locale]

```
src/app/
├── [locale]/                   # Todas as rotas agora dentro do locale
│   ├── layout.tsx              # Layout com locale
│   ├── page.tsx                # Redirect para /home
│   ├── (main)/
│   │   ├── layout.tsx
│   │   ├── home/
│   │   │   └── page.tsx
│   │   ├── monte-seu-pastel/
│   │   │   └── page.tsx
│   │   ├── nossa-historia/
│   │   │   └── page.tsx
│   │   ├── nosso-impacto/
│   │   │   └── page.tsx
│   │   └── perfil/
│   │       ├── page.tsx
│   │       └── pedidos/
│   │           └── page.tsx
│   └── api/                    # APIs não precisam de locale
│       └── ...
└── layout.tsx                  # Root layout
```

### src/app/[locale]/layout.tsx

```typescript
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n/request'
import { holtwood, gluten } from '@/assets/fonts'
import '../globals.css'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Validar locale
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Buscar mensagens do idioma
  const messages = await getMessages()

  return (
    <html lang={locale} className={`${holtwood.variable} ${gluten.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
```

---

## 🎨 6. Usar Traduções nos Componentes

### Server Components

```typescript
// src/app/[locale]/(main)/home/page.tsx
import { useTranslations } from 'next-intl'

export default function HomePage() {
  const t = useTranslations('home')

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
      <button>{t('cta')}</button>
    </div>
  )
}
```

### Client Components

```typescript
"use client"

import { useTranslations } from 'next-intl'

export default function AuthModal() {
  const t = useTranslations('auth')
  const tCommon = useTranslations('common')

  return (
    <div>
      <h1>{t('signin')}</h1>
      <button>{tCommon('cancel')}</button>
    </div>
  )
}
```

### Com Interpolação

```typescript
const t = useTranslations('builder')

// JSON: "ingredientsSelected": "{count} ingredient(s) selected"
<p>{t('ingredientsSelected', { count: selectedIngredients.length })}</p>

// Com rich text
// JSON: "subtitle": "Com a união de <strong>dois Gabriéis</strong>"
<p>{t.rich('subtitle', {
  strong: (chunks) => <strong className="text-vegGreen">{chunks}</strong>
})}</p>
```

### Pluralização

```typescript
// messages/pt.json
{
  "items": {
    "zero": "Nenhum item",
    "one": "1 item",
    "other": "{count} itens"
  }
}

// Uso:
t('items', { count: cart.length })
```

---

## 🌐 7. Seletor de Idioma

### src/components/LanguageSelector.tsx

```typescript
"use client"

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { locales, localeNames, type Locale } from '@/i18n/request'
import { Globe } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export default function LanguageSelector() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleLocaleChange = (newLocale: Locale) => {
    // Substituir locale na URL
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPathname)
    setIsOpen(false)
  }

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botão */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-vegGreen/10 transition-colors"
        aria-label="Selecionar idioma"
      >
        <Globe className="w-5 h-5 text-vegGreen" />
        <span className="font-semibold text-sm uppercase">{locale}</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-2xl border-2 border-vegGreen/20 overflow-hidden z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={`w-full px-4 py-3 text-left hover:bg-vegGreen/10 transition-colors flex items-center justify-between ${
                locale === loc ? 'bg-vegGreen/5 text-vegGreen font-semibold' : 'text-gray-700'
              }`}
            >
              <span>{localeNames[loc]}</span>
              {locale === loc && <span className="text-vegGreen">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
```

### Adicionar ao Header

```typescript
// src/components/Header.tsx
import LanguageSelector from './LanguageSelector'

export default function Header() {
  return (
    <header>
      {/* ... outros elementos ... */}

      {/* Seletor de idioma */}
      <LanguageSelector />

      {/* ... menu de usuário ... */}
    </header>
  )
}
```

---

## 💰 8. Formatação de Moedas

### useFormatter Hook

```typescript
import { useFormatter } from 'next-intl'

export default function PriceDisplay({ amount }: { amount: number }) {
  const format = useFormatter()

  return (
    <span>
      {format.number(amount, {
        style: 'currency',
        currency: 'BRL', // ou 'USD', 'EUR' baseado no locale
      })}
    </span>
  )
}

// Resultado:
// pt: R$ 25,00
// en: $25.00
// es: $ 25,00
```

### Configurar moeda por locale

```typescript
// src/i18n/request.ts
export const currencyByLocale: Record<Locale, string> = {
  pt: "BRL",
  en: "USD",
  es: "USD",
};

// Uso:
const locale = useLocale();
const currency = currencyByLocale[locale as Locale];

format.number(amount, {
  style: "currency",
  currency,
});
```

---

## 📅 9. Formatação de Datas

```typescript
import { useFormatter } from 'next-intl'

export default function OrderDate({ date }: { date: Date }) {
  const format = useFormatter()

  return (
    <time>
      {format.dateTime(date, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })}
    </time>
  )
}

// Resultado:
// pt: 29 de janeiro de 2026, 14:30
// en: January 29, 2026, 2:30 PM
// es: 29 de enero de 2026, 14:30
```

---

## 🔗 10. Links com Locale

### Componente Link Customizado

```typescript
// src/components/LocaleLink.tsx
"use client"

import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function LocaleLink({
  href,
  children,
  ...props
}: {
  href: string
  children: React.ReactNode
  [key: string]: any
}) {
  const locale = useLocale()

  // Adicionar locale automaticamente
  const localizedHref = `/${locale}${href}`

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  )
}
```

### Uso

```typescript
import LocaleLink from '@/components/LocaleLink'

<LocaleLink href="/monte-seu-pastel">
  {t('nav.buildYourPastel')}
</LocaleLink>

// Resultado:
// pt: /pt/monte-seu-pastel
// en: /en/monte-seu-pastel
// es: /es/monte-seu-pastel
```

---

## 🔍 11. SEO Multi-idioma

### Metadata por Locale

```typescript
// src/app/[locale]/(main)/home/page.tsx
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/home`,
      languages: {
        pt: "/pt/home",
        en: "/en/home",
        es: "/es/home",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale,
    },
  };
}
```

### hreflang Tags

```typescript
// src/app/[locale]/layout.tsx
export default async function LocaleLayout({ params }: any) {
  return (
    <html lang={params.locale}>
      <head>
        {/* hreflang alternates */}
        <link rel="alternate" hrefLang="pt" href="/pt" />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="es" href="/es" />
        <link rel="alternate" hrefLang="x-default" href="/pt" />
      </head>
      {/* ... */}
    </html>
  )
}
```

---

## 🍪 12. Persistir Preferência

### Usar Cookies

```typescript
// middleware.ts
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default createMiddleware({
  locales: ["pt", "en", "es"],
  defaultLocale: "pt",

  // Usar cookie para persistir escolha
  localePrefix: "as-needed",

  // Função customizada para detectar locale
  localeDetection: true,
});
```

O next-intl já gerencia cookies automaticamente! Quando o usuário escolhe um idioma, ele fica salvo.

---

## 📊 13. Exemplo Completo: Página Home

```typescript
// src/app/[locale]/(main)/home/page.tsx
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import LocaleLink from '@/components/LocaleLink'
import type { Metadata } from 'next'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'home' })

  return {
    title: `${t('title')} | Gabriel Pastel`,
    description: t('description'),
  }
}

export default function HomePage() {
  const t = useTranslations('home')
  const tNav = useTranslations('nav')

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-6xl font-holtwood text-vegBrown-dark mb-6">
          {t('title')}
        </h1>

        <p className="text-2xl mb-8">
          {t.rich('subtitle', {
            strong: (chunks) => <strong className="text-vegGreen">{chunks}</strong>
          })}
        </p>

        <p className="text-xl text-gray-600 mb-12">
          {t.rich('description', {
            strong: (chunks) => <strong className="text-vegGreen">{chunks}</strong>
          })}
        </p>

        <LocaleLink
          href="/monte-seu-pastel"
          className="px-8 py-4 bg-vegGreen hover:bg-vegYellow text-white rounded-lg text-xl font-semibold"
        >
          {t('cta')}
        </LocaleLink>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-vegGreen/5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {(['vegan', 'organic', 'affordable', 'noPreservatives', 'noTransFat', 'fresh'] as const).map((benefit) => (
            <div key={benefit} className="text-center p-6">
              <p className="font-semibold text-vegGreen">
                {t(`benefits.${benefit}`)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
```

---

## 🚀 14. Passo a Passo para Implementar

### 1. Instalar

```bash
npm install next-intl
```

### 2. Criar estrutura

```bash
mkdir -p src/i18n/messages
touch src/i18n/request.ts
touch src/i18n/messages/pt.json
touch src/i18n/messages/en.json
touch src/i18n/messages/es.json
touch src/middleware.ts
```

### 3. Mover rotas

```bash
# Mover tudo de app/ para app/[locale]/
mv src/app/\(main\) src/app/temp
mkdir src/app/\[locale\]
mv src/app/temp src/app/\[locale\]/\(main\)
```

### 4. Criar arquivos de tradução

- Copiar JSONs acima para `src/i18n/messages/`

### 5. Configurar

- Copiar `src/i18n/request.ts`
- Copiar `src/middleware.ts`
- Atualizar `next.config.ts`

### 6. Atualizar layouts

- `src/app/[locale]/layout.tsx` com `NextIntlClientProvider`

### 7. Traduzir componentes

- Substituir textos hardcoded por `t('key')`
- Adicionar chaves correspondentes nos JSONs

### 8. Criar seletor de idioma

- Componente `LanguageSelector`
- Adicionar ao Header

### 9. Testar

- Navegar para `/pt`, `/en`, `/es`
- Trocar idioma pelo seletor
- Verificar traduções

---

## 💡 Dicas e Boas Práticas

### Organização

- ✅ Agrupe traduções por contexto (nav, auth, home, etc)
- ✅ Use namespaces para evitar conflitos
- ✅ Mantenha JSONs organizados e indentados

### Traduções

- ✅ Use chaves descritivas (`button.submit` não `btn1`)
- ✅ Evite traduzir nomes próprios (Gabriel Pastel)
- ✅ Contextualize (adicione comentários nos JSONs)
- ❌ Não traduza URLs de imagens
- ❌ Não traduza valores técnicos (enums, etc)

### Performance

- ✅ next-intl faz code splitting automático
- ✅ Apenas o JSON do idioma atual é carregado
- ✅ Traduções são cache-friendly

### SEO

- ✅ Use hreflang tags
- ✅ Metadata por locale
- ✅ Sitemap multi-idioma

### UX

- ✅ Detecte idioma do navegador automaticamente
- ✅ Persista escolha do usuário
- ✅ Seletor de idioma visível
- ✅ Bandeiras ou nomes de idiomas claros

---

## 🎯 Prioridades para Gabriel Pastel

### Fase 1: Setup Básico

1. ✅ Instalar next-intl
2. ✅ Criar estrutura [locale]
3. ✅ Traduzir apenas 3 idiomas principais
4. ✅ Seletor de idioma no header

### Fase 2: Traduzir Conteúdo

1. ✅ Navegação e header
2. ✅ Página home
3. ✅ Sistema de autenticação
4. ✅ Builder de pastéis

### Fase 3: Refinamento

1. ✅ Formatação de moedas
2. ✅ Formatação de datas
3. ✅ SEO multi-idioma
4. ✅ Mensagens de toast

### Fase 4: Conteúdo Dinâmico

1. ✅ Ingredientes do banco (traduzir no schema)
2. ✅ Descrições de pastéis
3. ✅ Emails transacionais

---

## 🔮 Recursos Adicionais

### Documentação

- [next-intl Docs](https://next-intl-docs.vercel.app/)
- [Next.js i18n](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [Intl API MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

### Ferramentas

- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) (VS Code extension)
- [Google Translate API](https://cloud.google.com/translate) (tradução automática)
- [Lokalise](https://lokalise.com/) (gerenciar traduções em equipe)

---

## ✅ Checklist de Implementação

- [ ] next-intl instalado
- [ ] Estrutura de pastas criada
- [ ] JSONs de tradução criados (pt, en, es)
- [ ] middleware.ts configurado
- [ ] next.config.ts com plugin
- [ ] Rotas movidas para [locale]
- [ ] Layout com NextIntlClientProvider
- [ ] Componentes traduzidos
- [ ] Seletor de idioma funcional
- [ ] Formatação de moedas
- [ ] Formatação de datas
- [ ] Links com locale
- [ ] SEO com hreflang
- [ ] Metadata por idioma
- [ ] Testado em todos os idiomas

---

**Última atualização:** Janeiro 2026  
**Autor:** Alexandre Batista
