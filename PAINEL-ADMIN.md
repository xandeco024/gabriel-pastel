# 🎛️ Painel Administrativo - Gabriel Pastel

Guia completo para implementação do painel admin focado no **MVP (Minimum Viable Product)**.

---

## 🎯 Objetivo do MVP

Criar um painel administrativo simples e funcional para gerenciar:

- ✅ **Pedidos** (visualizar, atualizar status)
- ✅ **Ingredientes** (CRUD completo)
- ✅ **Pastéis Pré-montados** (CRUD completo)
- ✅ **Usuários** (visualizar, gerenciar roles)
- ✅ **Analytics básico** (estatísticas e gráficos)

---

## 👥 Sistema de Roles (3 Níveis)

### 1. CUSTOMER (Cliente)

- Acesso: Site público apenas
- Pode: Fazer pedidos, ver histórico, editar perfil
- **Não tem acesso ao admin**

### 2. ADMIN (Gestor/Funcionário)

- Acesso: Painel admin completo
- Pode: Gerenciar pedidos, ingredientes, pastéis
- Pode: Ver analytics e relatórios
- **Não pode:** Gerenciar outros admins, mudar configurações críticas

### 3. SUPER_ADMIN (Dono)

- Acesso: Total
- Pode: Tudo que ADMIN pode
- Pode: Promover usuários a ADMIN
- Pode: Acessar configurações críticas
- Pode: Ver dados financeiros sensíveis

---

## 🗄️ Schema do Banco de Dados

### Atualizar Prisma Schema

```prisma
// prisma/schema.prisma

// ADICIONAR ao modelo User existente:
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String
  role      UserRole @default(CUSTOMER)  // ← NOVO
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  orders    Order[]
}

// NOVO ENUM
enum UserRole {
  CUSTOMER      // Cliente comum
  ADMIN         // Gestor/Funcionário
  SUPER_ADMIN   // Dono
}

// ATUALIZAR modelo Order para incluir tracking
model Order {
  id              String        @id @default(cuid())
  userId          String
  user            User          @relation(fields: [userId], references: [id])
  status          OrderStatus
  totalPrice      Float
  paymentStatus   PaymentStatus @default(PENDING)
  paymentId       String?
  stripeSessionId String?

  // ADICIONAR para tracking de mudanças de status:
  statusHistory   Json?         // Array de { status, timestamp, changedBy }
  notes           String?       // Notas internas do admin

  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt

  customPasteis   CustomPastel[]
  premadePasteis  OrderPremadePastel[]
}
```

**Migration:**

```bash
npx prisma migrate dev --name add_user_roles_and_admin_features
npx prisma generate
```

---

## 🏗️ Estrutura de Rotas

```
src/app/
├── (main)/                    # Site público (já existe)
│   └── ...
├── admin/                     # Painel admin (NOVO)
│   ├── layout.tsx            # Layout com sidebar
│   ├── page.tsx              # Dashboard (redireciona)
│   ├── dashboard/
│   │   └── page.tsx          # Dashboard principal
│   ├── pedidos/
│   │   ├── page.tsx          # Lista de pedidos
│   │   └── [id]/
│   │       └── page.tsx      # Detalhes do pedido
│   ├── ingredientes/
│   │   ├── page.tsx          # Lista de ingredientes
│   │   ├── novo/
│   │   │   └── page.tsx      # Criar ingrediente
│   │   └── [id]/
│   │       └── page.tsx      # Editar ingrediente
│   ├── pasteis/
│   │   ├── page.tsx          # Lista de pastéis
│   │   ├── novo/
│   │   │   └── page.tsx      # Criar pastel
│   │   └── [id]/
│   │       └── page.tsx      # Editar pastel
│   ├── usuarios/
│   │   ├── page.tsx          # Lista de usuários
│   │   └── [id]/
│   │       └── page.tsx      # Detalhes do usuário
│   └── analytics/
│       └── page.tsx          # Relatórios e gráficos
└── api/
    └── admin/                # API routes protegidas (NOVO)
        ├── orders/
        │   └── [id]/
        │       └── status/
        │           └── route.ts
        ├── users/
        │   └── [id]/
        │       └── role/
        │           └── route.ts
        └── stats/
            └── route.ts
```

---

## 🔐 Middleware de Autenticação

### src/lib/admin.ts

```typescript
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { redirect } from "next/navigation";

export async function requireAdmin() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin?callbackUrl=/admin");
  }

  if (session.user.role === "CUSTOMER") {
    redirect("/perfil"); // Cliente não pode acessar admin
  }

  return session;
}

export async function requireSuperAdmin() {
  const session = await requireAdmin();

  if (session.user.role !== "SUPER_ADMIN") {
    redirect("/admin/dashboard"); // Admin normal não pode acessar
  }

  return session;
}

// Hook para client components
export function useAdmin() {
  const { data: session, status } = useSession();

  const isAdmin =
    session?.user.role === "ADMIN" || session?.user.role === "SUPER_ADMIN";
  const isSuperAdmin = session?.user.role === "SUPER_ADMIN";

  return {
    session,
    status,
    isAdmin,
    isSuperAdmin,
  };
}
```

### Atualizar tipos do NextAuth

```typescript
// src/types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string | null;
      role: "CUSTOMER" | "ADMIN" | "SUPER_ADMIN"; // ← ADICIONAR
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string | null;
    role: "CUSTOMER" | "ADMIN" | "SUPER_ADMIN"; // ← ADICIONAR
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "CUSTOMER" | "ADMIN" | "SUPER_ADMIN"; // ← ADICIONAR
  }
}
```

### Atualizar callbacks do NextAuth

```typescript
// src/lib/auth.ts
export const authOptions: NextAuthOptions = {
  // ... config existente
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role; // ← ADICIONAR
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as any; // ← ADICIONAR
      }
      return session;
    },
  },
};
```

---

## 🎨 Layout do Admin

### src/app/admin/layout.tsx

```typescript
import { requireAdmin } from "@/lib/admin"
import AdminSidebar from "@/components/admin/AdminSidebar"
import AdminHeader from "@/components/admin/AdminHeader"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Proteger toda a área admin
  const session = await requireAdmin()

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar session={session} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AdminHeader session={session} />

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
```

---

## 📊 1. Dashboard Principal

### src/app/admin/dashboard/page.tsx

```typescript
import { requireAdmin } from "@/lib/admin"
import { prisma } from "@/lib/prisma"
import StatsCards from "@/components/admin/StatsCards"
import RecentOrders from "@/components/admin/RecentOrders"
import SalesChart from "@/components/admin/SalesChart"

export default async function DashboardPage() {
  await requireAdmin()

  // Buscar estatísticas
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const [
    todayOrders,
    todayRevenue,
    pendingOrders,
    totalCustomers,
  ] = await Promise.all([
    prisma.order.count({
      where: { createdAt: { gte: today } }
    }),
    prisma.order.aggregate({
      where: {
        createdAt: { gte: today },
        paymentStatus: "PAID"
      },
      _sum: { totalPrice: true }
    }),
    prisma.order.count({
      where: { status: { in: ["PENDING", "CONFIRMED"] } }
    }),
    prisma.user.count({
      where: { role: "CUSTOMER" }
    }),
  ])

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-holtwood text-vegBrown-dark">
          Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          Visão geral do seu negócio
        </p>
      </div>

      {/* Stats Cards */}
      <StatsCards
        todayOrders={todayOrders}
        todayRevenue={todayRevenue._sum.totalPrice || 0}
        pendingOrders={pendingOrders}
        totalCustomers={totalCustomers}
      />

      {/* Charts e Recent Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <RecentOrders />
      </div>
    </div>
  )
}
```

### src/components/admin/StatsCards.tsx

```typescript
import { TrendingUp, DollarSign, Clock, Users } from "lucide-react"

export default function StatsCards({
  todayOrders,
  todayRevenue,
  pendingOrders,
  totalCustomers
}: {
  todayOrders: number
  todayRevenue: number
  pendingOrders: number
  totalCustomers: number
}) {
  const stats = [
    {
      label: "Pedidos Hoje",
      value: todayOrders,
      icon: TrendingUp,
      color: "bg-blue-500",
    },
    {
      label: "Receita Hoje",
      value: `R$ ${todayRevenue.toFixed(2)}`,
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      label: "Pedidos Pendentes",
      value: pendingOrders,
      icon: Clock,
      color: "bg-yellow-500",
      alert: pendingOrders > 5,
    },
    {
      label: "Total de Clientes",
      value: totalCustomers,
      icon: Users,
      color: "bg-purple-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`bg-white rounded-2xl shadow-lg p-6 ${
            stat.alert ? "ring-2 ring-red-500" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
            <div className={`${stat.color} p-4 rounded-xl`}>
              <stat.icon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
```

---

## 📦 2. Gerenciamento de Pedidos

### src/app/admin/pedidos/page.tsx

```typescript
import { requireAdmin } from "@/lib/admin"
import { prisma } from "@/lib/prisma"
import OrdersTable from "@/components/admin/OrdersTable"
import OrderFilters from "@/components/admin/OrderFilters"

export default async function PedidosPage({
  searchParams,
}: {
  searchParams: { status?: string; search?: string }
}) {
  await requireAdmin()

  // Filtros
  const where: any = {}

  if (searchParams.status && searchParams.status !== "all") {
    where.status = searchParams.status
  }

  if (searchParams.search) {
    where.user = {
      OR: [
        { name: { contains: searchParams.search, mode: "insensitive" } },
        { email: { contains: searchParams.search, mode: "insensitive" } },
      ]
    }
  }

  // Buscar pedidos
  const orders = await prisma.order.findMany({
    where,
    include: {
      user: true,
      customPasteis: {
        include: {
          ingredients: {
            include: { ingredient: true }
          }
        }
      },
      premadePasteis: {
        include: { premadePastel: true }
      }
    },
    orderBy: { createdAt: "desc" },
    take: 50,
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-holtwood text-vegBrown-dark">
            Pedidos
          </h1>
          <p className="text-gray-600 mt-1">
            Gerencie todos os pedidos
          </p>
        </div>
      </div>

      <OrderFilters />

      <OrdersTable orders={orders} />
    </div>
  )
}
```

### src/components/admin/OrdersTable.tsx

```typescript
"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, Clock } from "lucide-react"
import { toast } from "sonner"

const statusColors = {
  PENDING: "bg-yellow-100 text-yellow-800",
  CONFIRMED: "bg-blue-100 text-blue-800",
  PREPARING: "bg-orange-100 text-orange-800",
  READY: "bg-green-100 text-green-800",
  DELIVERED: "bg-gray-100 text-gray-800",
  CANCELLED: "bg-red-100 text-red-800",
}

const statusLabels = {
  PENDING: "Pendente",
  CONFIRMED: "Confirmado",
  PREPARING: "Preparando",
  READY: "Pronto",
  DELIVERED: "Entregue",
  CANCELLED: "Cancelado",
}

export default function OrdersTable({ orders }: { orders: any[] }) {
  const [updatingStatus, setUpdatingStatus] = useState<string | null>(null)

  const updateStatus = async (orderId: string, newStatus: string) => {
    setUpdatingStatus(orderId)

    try {
      const res = await fetch(`/api/admin/orders/${orderId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })

      if (!res.ok) throw new Error()

      toast.success("Status atualizado!")
      window.location.reload()
    } catch (error) {
      toast.error("Erro ao atualizar status")
    } finally {
      setUpdatingStatus(null)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Pedido
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Cliente
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Total
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Data
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <span className="font-mono text-sm font-semibold">
                    #{order.id.slice(0, 8)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{order.user.name}</p>
                    <p className="text-sm text-gray-500">{order.user.email}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold">
                    R$ {order.totalPrice.toFixed(2)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <select
                    value={order.status}
                    onChange={(e) => updateStatus(order.id, e.target.value)}
                    disabled={updatingStatus === order.id}
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      statusColors[order.status as keyof typeof statusColors]
                    } disabled:opacity-50`}
                  >
                    {Object.entries(statusLabels).map(([value, label]) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(order.createdAt).toLocaleString("pt-BR")}
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={`/admin/pedidos/${order.id}`}
                    className="text-vegGreen hover:text-vegYellow"
                  >
                    <Eye className="w-5 h-5" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
```

---

## 🥬 3. Gerenciamento de Ingredientes

### src/app/admin/ingredientes/page.tsx

```typescript
import { requireAdmin } from "@/lib/admin"
import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { Plus } from "lucide-react"
import IngredientsTable from "@/components/admin/IngredientsTable"

export default async function IngredientesPage() {
  await requireAdmin()

  const ingredients = await prisma.ingredient.findMany({
    orderBy: { name: "asc" },
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-holtwood text-vegBrown-dark">
            Ingredientes
          </h1>
          <p className="text-gray-600 mt-1">
            {ingredients.length} ingredientes cadastrados
          </p>
        </div>

        <Link
          href="/admin/ingredientes/novo"
          className="flex items-center gap-2 px-6 py-3 bg-vegGreen hover:bg-vegYellow text-white hover:text-background rounded-lg font-semibold transition-all shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Novo Ingrediente
        </Link>
      </div>

      <IngredientsTable ingredients={ingredients} />
    </div>
  )
}
```

### src/app/admin/ingredientes/novo/page.tsx

```typescript
import { requireAdmin } from "@/lib/admin"
import IngredientForm from "@/components/admin/IngredientForm"

export default async function NovoIngredientePage() {
  await requireAdmin()

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-holtwood text-vegBrown-dark">
          Novo Ingrediente
        </h1>
        <p className="text-gray-600 mt-1">
          Adicione um novo ingrediente ao cardápio
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <IngredientForm />
      </div>
    </div>
  )
}
```

### src/components/admin/IngredientForm.tsx

```typescript
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import Image from "next/image"

export default function IngredientForm({
  ingredient
}: {
  ingredient?: any
}) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: ingredient?.name || "",
    slug: ingredient?.slug || "",
    description: ingredient?.description || "",
    imageUrl: ingredient?.imageUrl || "",
    isVegan: ingredient?.isVegan ?? true,
    isOrganic: ingredient?.isOrganic ?? true,
    isActive: ingredient?.isActive ?? true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const url = ingredient
        ? `/api/admin/ingredients/${ingredient.id}`
        : "/api/admin/ingredients"

      const method = ingredient ? "PATCH" : "POST"

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error()

      toast.success(ingredient ? "Ingrediente atualizado!" : "Ingrediente criado!")
      router.push("/admin/ingredientes")
      router.refresh()
    } catch (error) {
      toast.error("Erro ao salvar ingrediente")
    } finally {
      setLoading(false)
    }
  }

  // Auto-gerar slug
  const handleNameChange = (name: string) => {
    setFormData({
      ...formData,
      name,
      slug: name.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nome */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Nome *
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => handleNameChange(e.target.value)}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-vegGreen focus:ring-2 focus:ring-vegGreen/20"
          placeholder="Tomate"
        />
      </div>

      {/* Slug */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Slug (URL) *
        </label>
        <input
          type="text"
          required
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-vegGreen focus:ring-2 focus:ring-vegGreen/20 font-mono text-sm"
          placeholder="tomate"
        />
        <p className="text-xs text-gray-500 mt-1">
          Gerado automaticamente, mas você pode editar
        </p>
      </div>

      {/* Descrição */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Descrição *
        </label>
        <textarea
          required
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-vegGreen focus:ring-2 focus:ring-vegGreen/20"
          placeholder="Tomate orgânico fresco do Armazém do Campo"
        />
      </div>

      {/* Imagem */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          URL da Imagem *
        </label>
        <input
          type="url"
          required
          value={formData.imageUrl}
          onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-vegGreen focus:ring-2 focus:ring-vegGreen/20"
          placeholder="https://..."
        />
        {formData.imageUrl && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Preview:</p>
            <Image
              src={formData.imageUrl}
              alt="Preview"
              width={200}
              height={200}
              className="rounded-lg border-2 border-gray-200"
            />
          </div>
        )}
      </div>

      {/* Checkboxes */}
      <div className="space-y-3">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={formData.isVegan}
            onChange={(e) => setFormData({ ...formData, isVegan: e.target.checked })}
            className="w-5 h-5 text-vegGreen rounded focus:ring-vegGreen"
          />
          <span className="text-sm font-medium text-gray-700">É vegano</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={formData.isOrganic}
            onChange={(e) => setFormData({ ...formData, isOrganic: e.target.checked })}
            className="w-5 h-5 text-vegGreen rounded focus:ring-vegGreen"
          />
          <span className="text-sm font-medium text-gray-700">É orgânico</span>
        </label>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={formData.isActive}
            onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
            className="w-5 h-5 text-vegGreen rounded focus:ring-vegGreen"
          />
          <span className="text-sm font-medium text-gray-700">
            Ativo (visível no site)
          </span>
        </label>
      </div>

      {/* Botões */}
      <div className="flex gap-4 pt-6 border-t">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={loading}
          className="flex-1 px-6 py-3 bg-vegGreen hover:bg-vegYellow text-white hover:text-background rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Salvando..." : ingredient ? "Atualizar" : "Criar"}
        </button>
      </div>
    </form>
  )
}
```

---

## 📈 4. Analytics Básico

### src/app/admin/analytics/page.tsx

```typescript
import { requireAdmin } from "@/lib/admin"
import { prisma } from "@/lib/prisma"
import { subDays } from "date-fns"
import SalesChart from "@/components/admin/charts/SalesChart"
import PopularIngredients from "@/components/admin/charts/PopularIngredients"
import TopPasteis from "@/components/admin/charts/TopPasteis"

export default async function AnalyticsPage() {
  await requireAdmin()

  // Últimos 30 dias de vendas
  const thirtyDaysAgo = subDays(new Date(), 30)

  const salesData = await prisma.order.groupBy({
    by: ["createdAt"],
    where: {
      createdAt: { gte: thirtyDaysAgo },
      paymentStatus: "PAID",
    },
    _sum: { totalPrice: true },
    _count: true,
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-holtwood text-vegBrown-dark">
          Analytics
        </h1>
        <p className="text-gray-600 mt-1">
          Insights sobre suas vendas
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart data={salesData} />
        <PopularIngredients />
      </div>

      <TopPasteis />
    </div>
  )
}
```

---

## 🔧 API Routes Admin

### src/app/api/admin/orders/[id]/status/route.ts

```typescript
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role === "CUSTOMER") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { status } = await req.json();
    const orderId = params.id;

    // Atualizar status
    const order = await prisma.order.update({
      where: { id: orderId },
      data: {
        status,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Erro ao atualizar status:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar status" },
      { status: 500 },
    );
  }
}
```

### src/app/api/admin/users/[id]/role/route.ts

```typescript
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  try {
    const session = await getServerSession(authOptions);

    // Apenas SUPER_ADMIN pode mudar roles
    if (!session || session.user.role !== "SUPER_ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { role } = await req.json();
    const userId = params.id;

    // Não pode mudar o próprio role
    if (userId === session.user.id) {
      return NextResponse.json(
        { error: "Você não pode mudar seu próprio role" },
        { status: 400 },
      );
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: { role },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("Erro ao atualizar role:", error);
    return NextResponse.json(
      { error: "Erro ao atualizar role" },
      { status: 500 },
    );
  }
}
```

---

## 🎨 Componentes Compartilhados

### src/components/admin/AdminSidebar.tsx

```typescript
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  Leaf,
  Pizza,
  Users,
  BarChart3,
  Settings
} from "lucide-react"

export default function AdminSidebar({ session }: { session: any }) {
  const pathname = usePathname()

  const menuItems = [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Pedidos", href: "/admin/pedidos", icon: Package },
    { label: "Ingredientes", href: "/admin/ingredientes", icon: Leaf },
    { label: "Pastéis", href: "/admin/pasteis", icon: Pizza },
    { label: "Usuários", href: "/admin/usuarios", icon: Users, superAdminOnly: true },
    { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { label: "Configurações", href: "/admin/configuracoes", icon: Settings, superAdminOnly: true },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-holtwood text-vegBrown-dark">
          🥟 Gabriel Pastel
        </h1>
        <p className="text-sm text-gray-500 mt-1">Painel Admin</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          // Ocultar itens de super admin
          if (item.superAdminOnly && session.user.role !== "SUPER_ADMIN") {
            return null
          }

          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-vegGreen text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-vegGreen/10 rounded-full flex items-center justify-center">
            <span className="text-vegGreen font-bold">
              {session.user.name?.[0] || "A"}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">
              {session.user.name}
            </p>
            <p className="text-xs text-gray-500">
              {session.user.role === "SUPER_ADMIN" ? "Super Admin" : "Admin"}
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
```

---

## 🚀 Instalação e Setup

### 1. Instalar Dependências

```bash
npm install date-fns recharts
```

### 2. Atualizar Schema

```bash
# Editar prisma/schema.prisma (adicionar UserRole e campos do Order)
npx prisma migrate dev --name add_admin_system
npx prisma generate
```

### 3. Promover Usuário a SUPER_ADMIN

```bash
# Via Prisma Studio
npx prisma studio

# Ou via script Node:
node -e "
const { PrismaClient } = require('./src/generated/prisma');
const prisma = new PrismaClient();
prisma.user.update({
  where: { email: 'seu@email.com' },
  data: { role: 'SUPER_ADMIN' }
}).then(() => console.log('Promovido!')).finally(() => prisma.\$disconnect());
"
```

### 4. Testar

```bash
npm run dev

# Acessar: http://localhost:3000/admin
```

---

## ✅ Checklist do MVP

### Fase 1: Setup

- [ ] Atualizar schema Prisma com UserRole
- [ ] Rodar migration
- [ ] Criar helpers de autenticação (requireAdmin, requireSuperAdmin)
- [ ] Atualizar tipos NextAuth
- [ ] Promover primeiro usuário a SUPER_ADMIN

### Fase 2: Layout

- [ ] Criar layout do admin com sidebar
- [ ] Criar AdminSidebar component
- [ ] Criar AdminHeader component
- [ ] Testar proteção de rotas

### Fase 3: Dashboard

- [ ] Página de dashboard
- [ ] Stats cards
- [ ] Gráfico de vendas básico
- [ ] Lista de pedidos recentes

### Fase 4: Pedidos

- [ ] Página de listagem de pedidos
- [ ] Filtros por status
- [ ] Mudar status (dropdown inline)
- [ ] Página de detalhes do pedido

### Fase 5: Ingredientes

- [ ] Listagem de ingredientes
- [ ] Criar ingrediente
- [ ] Editar ingrediente
- [ ] Deletar ingrediente (soft delete)

### Fase 6: Pastéis

- [ ] Listagem de pastéis pré-montados
- [ ] Criar pastel
- [ ] Editar pastel
- [ ] Ativar/desativar

### Fase 7: Usuários

- [ ] Listagem de usuários
- [ ] Detalhes do usuário
- [ ] Promover a ADMIN (só SUPER_ADMIN)
- [ ] Ver histórico de pedidos do usuário

### Fase 8: Analytics

- [ ] Gráfico de vendas (últimos 30 dias)
- [ ] Ingredientes mais populares
- [ ] Pastéis mais vendidos
- [ ] Export CSV básico

---

## 🔮 Próximos Passos (Pós-MVP)

### Fase 2 (Futuro)

- [ ] Mobile responsivo
- [ ] Notificações real-time (WebSocket/Pusher)
- [ ] Upload de imagens (UploadThing)
- [ ] Sistema de estoque
- [ ] Relatórios avançados
- [ ] Dashboard customizável
- [ ] Tema escuro
- [ ] Multi-idioma no admin
- [ ] Logs de auditoria (quem mudou o quê)
- [ ] Backup automático de dados

---

**Última atualização:** Janeiro 2026  
**Autor:** Alexandre Batista  
**Status:** MVP Planejado
