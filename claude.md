# Claude Context - Gabriel Pastel 🥟

Este documento fornece contexto técnico detalhado sobre o projeto Gabriel Pastel para auxiliar desenvolvedores e agentes de IA a entender rapidamente a arquitetura, padrões e decisões técnicas do sistema.

---

## 📋 Visão Geral Técnica

### Stack Principal
- **Framework**: Next.js 15.3.2 (App Router)
- **Runtime**: React 19 (Server + Client Components)
- **Linguagem**: TypeScript 5
- **Database**: PostgreSQL via Prisma ORM 6.16.3
- **Autenticação**: NextAuth.js 4.24.11
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.507.0
- **Notifications**: Sonner 2.0.5

### Padrões de Arquitetura
- **App Router** do Next.js 15 (não Pages Router)
- **Server Components** por padrão, Client Components quando necessário
- **API Routes** em `app/api/`
- **Route Groups** para organização (`(main)/`)
- **Layouts aninhados** para compartilhar UI

---

## 🎨 Design System

### Paleta de Cores (Tailwind Config)
```typescript
// tailwind.config.ts
colors: {
  vegGreen: {
    DEFAULT: "#10806e",  // Cor principal - ações, links, highlights
    light: "#5cad9a",    // Variante clara - elementos secundários
  },
  vegYellow: "#f6a011",      // CTAs, alertas positivos, badges
  vegOrange: "#ff5500",      // Acentos, variações de badges
  vegRed: "#ab3f3f",         // Erros, alertas críticos
  vegBrown: {
    dark: "#6b4423",         // Títulos principais
    light: "#d4a574",        // Backgrounds sutis
  },
  pastel: "#fff8ea",         // Background suave
}
```

### Tipografia
```typescript
// src/assets/fonts.ts
import localFont from "next/font/local";

export const holtwood = localFont({
  src: "./fonts/HoltwoodOneSC.ttf",
  variable: "--font-holtwood",
});

export const gluten = localFont({
  src: "./fonts/Gluten-VariableFont_slnt,wght.ttf",
  variable: "--font-gluten",
});
```

**Uso:**
- `font-holtwood` → Todos os títulos (h1, h2, h3)
- `font-gluten` → Corpo de texto, parágrafos, UI

### Hierarquia de Texto
```css
text-5xl font-holtwood text-vegBrown-dark  /* Hero titles */
text-4xl font-holtwood text-vegBrown-dark  /* Section titles */
text-3xl font-holtwood text-vegBrown-dark  /* Subsection titles */
text-2xl font-semibold                     /* Card titles */
text-xl                                     /* Large body text */
text-base                                   /* Default body text */
text-sm                                     /* Small text */
text-xs                                     /* Captions, hints */
```

### Componentes Padrão

**Cards:**
```tsx
className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow p-8 space-y-6"
```

**Badges:**
```tsx
className="flex items-center gap-2 p-3 px-5 rounded-full bg-vegGreen/10 border-2 border-vegGreen/20 hover:scale-105 transition-transform"
```

**Buttons (Primary):**
```tsx
className="px-6 py-3 bg-vegGreen hover:bg-vegYellow text-white hover:text-background rounded-lg hover:scale-105 transition-all shadow-md"
```

**Icons:**
- Header sections: `w-12 h-12` (48px)
- Section titles: `w-10 h-10` (40px)
- Badges/Cards: `w-8 h-8` (32px)
- Small elements: `w-6 h-6` (24px)

### Animações e Hover Effects
```tsx
// Scale on hover (cards, buttons)
hover:scale-105

// Shadow progression
shadow-lg → hover:shadow-2xl

// Color transitions
hover:bg-vegYellow hover:text-background

// Smooth transitions
transition-all duration-200
```

---

## 🗄️ Banco de Dados

### Schema Prisma (Resumo)

```prisma
// prisma/schema.prisma

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String    // bcrypt hash
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  orders    Order[]
}

model Ingredient {
  id          String   @id @default(cuid())
  name        String   @unique
  slug        String   @unique
  description String
  imageUrl    String
  isVegan     Boolean  @default(true)
  isOrganic   Boolean  @default(true)
  isActive    Boolean  @default(true)
  // ... relationships
}

model PremadePastel {
  id          String   @id @default(cuid())
  name        String   @unique
  slug        String   @unique
  description String?
  imageUrl    String
  price       Float
  isActive    Boolean  @default(true)
  // ... relationships
}

model Order {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(...)
  status      OrderStatus
  totalPrice  Float
  createdAt   DateTime @default(now())
  // ... relationships
}

enum OrderStatus {
  PENDING
  PREPARING
  READY
  DELIVERED
  CANCELLED
}
```

### Prisma Client
```typescript
// src/lib/prisma.ts
import { PrismaClient } from '../generated/prisma'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') 
  globalForPrisma.prisma = prisma
```

**Importante:** O Prisma Client é gerado em `src/generated/prisma/` (não em `node_modules`).

---

## 🔐 Autenticação

### NextAuth Configuration
```typescript
// src/lib/auth.ts
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "./prisma"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Validação de credenciais
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email }
        })
        
        if (!user || !await bcrypt.compare(
          credentials?.password || '', 
          user.password
        )) {
          throw new Error("Invalid credentials")
        }
        
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      }
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/auth/signin" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
      }
      return session
    },
  },
}
```

### API Route
```typescript
// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
```

### Signup Endpoint
```typescript
// src/app/api/auth/signup/route.ts
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  const { name, email, password } = await req.json()
  
  // Validações...
  
  const hashedPassword = await bcrypt.hash(password, 10)
  
  const user = await prisma.user.create({
    data: { name, email, password: hashedPassword }
  })
  
  return NextResponse.json({ user }, { status: 201 })
}
```

### Client Usage
```typescript
// Em componentes
import { useSession, signIn, signOut } from "next-auth/react"

const { data: session, status } = useSession()

// status: "loading" | "authenticated" | "unauthenticated"
```

### Type Extension
```typescript
// src/types/next-auth.d.ts
import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name?: string | null
    }
  }
  
  interface User {
    id: string
    email: string
    name?: string | null
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
  }
}
```

---

## 🎭 Componentes Principais

### AuthModal
**Localização:** `src/components/AuthModal.tsx`

**Features:**
- Login e cadastro em modal único
- Validação de força de senha (4 níveis)
- Campo "Confirmar senha" com validação em tempo real
- Indicadores visuais de força (barras coloridas)
- Renderizado via `createPortal` para evitar problemas de z-index
- Bloqueia scroll do body quando aberto

**Estados:**
```typescript
const [mode, setMode] = useState<"signin" | "signup">("signin")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")

const getPasswordStrength = (pwd: string): {
  level: number  // 1-4
  label: string  // "Super Fraca" | "Fraca" | "Média" | "Forte"
  color: string  // bg-vegRed | bg-vegOrange | bg-vegYellow | bg-vegGreen
} => { /* ... */ }
```

**Validações:**
- Senha < 4 caracteres: **bloqueio**
- Senha 4-5 caracteres: permitido, mas fraca
- Confirmação de senha obrigatória

### Header
**Localização:** `src/components/Header.tsx`

**Features:**
- Fixed no topo com `z-[1000]`
- Menu de usuário com dropdown
- Botões de login/cadastro quando não autenticado
- Link para pedidos, perfil e logout
- AuthModal renderizado via portal

**Estrutura:**
```tsx
<header className="fixed top-0 w-full h-24 z-[1000] ...">
  {/* Logo */}
  {/* Navigation */}
  {/* User Menu or Auth Buttons */}
  
  {/* Portal para AuthModal */}
  {typeof window !== 'undefined' && createPortal(
    <AuthModal ... />,
    document.body
  )}
</header>
```

### Footer
**Localização:** `src/components/Footer.tsx`

Rodapé com links sociais, contato e copyright.

---

## 📡 API Routes

### Estrutura
```
app/api/
├── auth/
│   ├── [...nextauth]/route.ts    # NextAuth handler
│   └── signup/route.ts            # Cadastro de usuários
├── ingredients/
│   └── route.ts                   # GET ingredientes ativos
├── orders/
│   ├── route.ts                   # GET/POST pedidos
│   └── [id]/route.ts              # GET pedido específico
└── premade-pasteis/
    └── route.ts                   # GET pastéis pré-montados
```

### Padrão de API Route

```typescript
// app/api/example/route.ts
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(req: NextRequest) {
  try {
    // Autenticação (quando necessário)
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" }, 
        { status: 401 }
      )
    }
    
    // Lógica da API
    const data = await prisma.model.findMany()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json(
      { error: "Internal Server Error" }, 
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  // Similar structure
}
```

### Ingredientes API
```typescript
// GET /api/ingredients
// Retorna todos os ingredientes ativos
// Response: Ingredient[]

await fetch("/api/ingredients")
```

### Pedidos API
```typescript
// GET /api/orders
// Retorna pedidos do usuário autenticado
// Requer autenticação

// POST /api/orders
// Cria novo pedido
// Body: { items: OrderItem[], totalPrice: number }

await fetch("/api/orders", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ items, totalPrice })
})
```

---

## 🧩 Páginas Principais

### Home (`/home`)
**Componente:** `src/app/(main)/home/page.tsx`

Server Component que renderiza componentes de seção:
- `<Banner />` - Hero com imagem e CTA
- `<Ticker />` - Faixa com benefícios (sem conservantes, etc)
- `<PastelYourWay />` - CTA para monte seu pastel
- `<ArmazemDoCampo />` - Info sobre fornecedor

### Monte Seu Pastel (`/monte-seu-pastel`)
**Componente:** `src/app/(main)/monte-seu-pastel/page.tsx`

**Funcionalidades:**
- Busca ingredientes da API
- Seleção múltipla de ingredientes
- Controle de quantidade
- Carrinho lateral
- Cálculo de total
- Botão "Adicionar ao pedido"
- Toast notifications (Sonner)
- Sugestões de combinações

**Estados principais:**
```typescript
const [ingredients, setIngredients] = useState<Ingredient[]>([])
const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
const [quantity, setQuantity] = useState(1)
const [cart, setCart] = useState<CartItem[]>([])
```

### Nossa História (`/nossa-historia`)
**Componente:** `src/app/(main)/nossa-historia/page.tsx`

**Features:**
- Timeline vertical com marcos históricos
- Parallax de montanhas no background
- Cards de valores
- Tech stack showcase
- Badges animados
- Scroll-based parallax effect

**Parallax:**
```typescript
const [scrollY, setScrollY] = useState(0)

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY)
  window.addEventListener("scroll", handleScroll)
  return () => window.removeEventListener("scroll", handleScroll)
}, [])

// Uso:
<div style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
  {/* Montanha de fundo */}
</div>
```

### Nosso Impacto (`/nosso-impacto`)
**Componente:** `src/app/(main)/nosso-impacto/page.tsx`

**Seções:**
- Hero com estatísticas gerais
- Badges de impacto (com hover effects)
- Bem-estar animal
- Economia e redução de custos
- Sustentabilidade ambiental
- Depoimentos de animais (cards com humor)
- Contador de impacto global
- Calculadora de impacto individual (useState)

**Calculadora:**
```typescript
const [diasVegano, setDiasVegano] = useState(30)

const calcularImpacto = () => ({
  animais: (diasVegano / 365) * 200,
  agua: diasVegano * 1000, // litros
  co2: diasVegano * 2.5,   // kg
})
```

### Perfil (`/perfil`)
**Componente:** `src/app/(main)/perfil/page.tsx`

**Proteção:**
```typescript
const { data: session, status } = useSession()

if (status === "loading") return <LoadingSpinner />
if (!session) redirect("/auth/signin")
```

**Seções:**
- Card de informações do usuário
- Ações rápidas (ver pedidos, editar perfil, fazer pedido)
- Impacto individual do usuário
- Estatísticas personalizadas

### Meus Pedidos (`/perfil/pedidos`)
**Componente:** `src/app/(main)/perfil/pedidos/page.tsx`

**Features:**
- Busca pedidos do usuário na API
- Listagem com cards detalhados
- Status badges coloridos
- Botão "Pedir novamente"
- Empty state quando sem pedidos

**Fetch:**
```typescript
useEffect(() => {
  const fetchOrders = async () => {
    const res = await fetch("/api/orders")
    const data = await res.json()
    setOrders(data)
  }
  
  if (session) fetchOrders()
}, [session])
```

**Status Colors:**
```typescript
const statusColors = {
  PENDING: "bg-vegYellow/20 text-vegYellow",
  PREPARING: "bg-vegOrange/20 text-vegOrange",
  READY: "bg-vegGreen/20 text-vegGreen",
  DELIVERED: "bg-vegGreen text-white",
  CANCELLED: "bg-vegRed/20 text-vegRed",
}
```

---

## 🔧 Utilitários

### Utils Functions
```typescript
// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Uso:
<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className
)} />
```

### Toast Notifications
```typescript
import { toast } from "sonner"

// Success
toast.success("Pedido realizado!", {
  description: "Seu pastel está sendo preparado 🥟"
})

// Error
toast.error("Erro ao processar pedido", {
  description: "Tente novamente mais tarde."
})

// Loading
const toastId = toast.loading("Processando...")
// Depois:
toast.success("Concluído!", { id: toastId })
```

---

## 🚀 Comandos Importantes

### Development
```bash
npm run dev              # Inicia dev server com Turbopack
npm run build            # Build de produção
npm run start            # Servidor de produção
npm run lint             # ESLint
```

### Database
```bash
npx prisma generate      # Gera Prisma Client
npx prisma migrate dev   # Cria e aplica migration
npx prisma migrate reset # Reset DB (cuidado!)
npx prisma studio        # GUI para visualizar dados
npm run db:seed          # Popula com dados iniciais
```

### Prisma Seed
```typescript
// prisma/seed.ts
import { prisma } from '../src/lib/prisma'

async function main() {
  // Criar ingredientes
  await prisma.ingredient.createMany({
    data: [
      { name: "Tomate", slug: "tomate", /* ... */ },
      // ...
    ]
  })
  
  // Criar pastéis pré-montados
  // ...
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
```

---

## ⚙️ Configurações

### Next.js Config
```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Configurar específico em produção
      }
    ]
  }
};

export default nextConfig;
```

### Tailwind Config
```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vegGreen: { DEFAULT: "#10806e", light: "#5cad9a" },
        vegYellow: "#f6a011",
        vegOrange: "#ff5500",
        vegRed: "#ab3f3f",
        vegBrown: { dark: "#6b4423", light: "#d4a574" },
        pastel: "#fff8ea",
      },
      fontFamily: {
        holtwood: ["var(--font-holtwood)"],
        gluten: ["var(--font-gluten)"],
      },
    },
  },
  plugins: [],
};
```

### TypeScript Config
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

---

## 🎯 Padrões de Código

### Server Components (Padrão)
```typescript
// Sem "use client"
// Pode fazer fetch diretamente
// Não usa hooks (useState, useEffect)

export default async function Page() {
  const data = await fetch("...")
  return <div>{/* ... */}</div>
}
```

### Client Components
```typescript
"use client"  // OBRIGATÓRIO no topo

import { useState, useEffect } from "react"

export default function ClientComponent() {
  const [state, setState] = useState()
  // Pode usar hooks
  // Pode usar event handlers
  return <div onClick={handler}>{/* ... */}</div>
}
```

### Fetch Patterns

**Client-side:**
```typescript
const [data, setData] = useState()
const [loading, setLoading] = useState(true)

useEffect(() => {
  fetch("/api/endpoint")
    .then(res => res.json())
    .then(setData)
    .finally(() => setLoading(false))
}, [])
```

**Server-side:**
```typescript
async function getData() {
  const res = await fetch("...", { 
    cache: 'no-store'  // ou next: { revalidate: 3600 }
  })
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <div>{/* ... */}</div>
}
```

### Error Handling
```typescript
try {
  // Operação
  const result = await riskyOperation()
  toast.success("Sucesso!")
} catch (error) {
  console.error("Error:", error)
  toast.error("Algo deu errado", {
    description: error instanceof Error 
      ? error.message 
      : "Tente novamente."
  })
}
```

---

## 📊 Convenções de Nomenclatura

### Arquivos
- Componentes: `PascalCase.tsx` (ex: `AuthModal.tsx`)
- Pages: `page.tsx` (Next.js App Router)
- Layouts: `layout.tsx`
- API Routes: `route.ts`
- Utils: `camelCase.ts` (ex: `utils.ts`)
- Types: `camelCase.d.ts` (ex: `next-auth.d.ts`)

### Componentes
```typescript
// PascalCase
export default function ComponentName() {}
```

### Funções
```typescript
// camelCase
function handleClick() {}
async function fetchData() {}
```

### Variáveis
```typescript
// camelCase
const userName = "Gabriel"
const isActive = true
```

### Constantes
```typescript
// SCREAMING_SNAKE_CASE ou camelCase (preferência)
const MAX_INGREDIENTS = 10
const apiBaseUrl = "https://..."
```

### CSS Classes
```css
/* kebab-case (mas com Tailwind, usa utility classes) */
.custom-class-name { }
```

---

## 🐛 Debugging

### Prisma Queries
```typescript
// Habilitar logs
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})
```

### NextAuth Debug
```env
# .env
NEXTAUTH_DEBUG=true
```

### React Dev Tools
- **React Developer Tools** (browser extension)
- **Prisma Studio**: `npx prisma studio`

---

## 🔒 Segurança

### Passwords
- **Hash**: bcryptjs com salt rounds 10
- **Mínimo**: 4 caracteres (bloqueio)
- **Recomendado**: 8+ caracteres com complexidade

### Session
- **Strategy**: JWT (stateless)
- **Secret**: `NEXTAUTH_SECRET` obrigatório em produção

### API Protection
```typescript
// Sempre validar sessão em rotas protegidas
const session = await getServerSession(authOptions)
if (!session) {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
}
```

### Environment Variables
- Nunca commitar `.env`
- Usar `.env.example` como template
- Em produção, configurar via plataforma de deploy

---

## 🌐 Deploy Checklist

- [ ] `NEXTAUTH_SECRET` gerado (openssl rand -base64 32)
- [ ] `NEXTAUTH_URL` configurado com URL de produção
- [ ] `DATABASE_URL` apontando para PostgreSQL de produção
- [ ] Migrations aplicadas no DB de produção
- [ ] Build bem-sucedido (`npm run build`)
- [ ] Imagens otimizadas (Next.js Image)
- [ ] `next.config.ts` com domínios de imagem autorizados
- [ ] Variáveis de ambiente configuradas na plataforma

---

## 📚 Recursos Adicionais

### Documentação Oficial
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Prisma Docs](https://www.prisma.io/docs)
- [NextAuth Docs](https://next-auth.js.org)
- [Tailwind Docs](https://tailwindcss.com/docs)

### Comunidade
- [Next.js Discord](https://discord.gg/nextjs)
- [Prisma Discord](https://pris.ly/discord)

---

## 🎓 Contexto Histórico de Desenvolvimento

### Decisões Técnicas

**Por que Next.js 15?**
- App Router mais maduro e performático
- Server Components por padrão
- Turbopack para dev mais rápido
- React 19 suportado

**Por que Prisma?**
- Type-safe ORM
- Migrations automáticas
- Excelente DX com VS Code
- Prisma Studio para debug

**Por que NextAuth?**
- Solução completa de auth
- Suporte a múltiplos providers (preparado para OAuth)
- Session management integrado
- Type-safe com TypeScript

**Por que Tailwind?**
- Produtividade alta
- Design system consistente
- Purge automático (bundle pequeno)
- Excelente para prototipagem rápida

### Design Decisions

**Títulos em vegBrown-dark (não verde):**
- Reduzir sobrecarga visual de verde
- Melhor hierarquia visual
- Verde reservado para highlights e ações

**Bold highlights coloridos:**
- Mais efetivo que gradientes
- Mantém legibilidade
- Direciona atenção estrategicamente

**Portal para AuthModal:**
- Evita conflitos de z-index com header fixed
- Modal sempre renderizado corretamente no top-level

**Senha mínima 4 caracteres:**
- Balanço entre segurança e UX
- Recomenda senhas fortes mas não força
- Bloqueia apenas senhas "super fracas"

---

## 🔮 Futuro / TODOs

### Features Planejadas
- [ ] Sistema de pagamento (Stripe)
- [ ] Emails transacionais (Resend)
- [ ] Upload de avatar (Cloudinary)
- [ ] Rastreamento de pedidos real-time (WebSockets)
- [ ] Dashboard admin
- [ ] Testes (Jest + React Testing Library)
- [ ] CI/CD (GitHub Actions)
- [ ] Monitoramento (Sentry)

### Melhorias Técnicas
- [ ] Adicionar loading states globais
- [ ] Implementar error boundaries
- [ ] Cache strategy mais agressiva
- [ ] Image optimization workflow
- [ ] Internacionalização (i18n)
- [ ] Modo escuro
- [ ] PWA (service workers)
- [ ] Analytics (Vercel Analytics)

---

**Última atualização:** Janeiro 2026  
**Versão do documento:** 1.0  
**Maintainer:** Alexandre Batista
