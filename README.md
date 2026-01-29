# 🥟 Gabriel Pastel

**Lanchonete 100% vegana, com ingredientes orgânicos e preços acessíveis**

Uma plataforma web moderna para pedidos de pastéis veganos, construída com Next.js 15, Prisma e NextAuth. O projeto combina uma experiência de usuário excepcional com conscientização sobre alimentação vegana e impacto ambiental.

---

## 🌱 Sobre o Projeto

Gabriel Pastel nasceu da união de dois Gabriéis apaixonados por pastéis. A lanchonete oferece:

- **100% Vegano**: Todos os ingredientes são de origem vegetal
- **Orgânico**: Ingredientes frescos e orgânicos do Armazém do Campo
- **Acessível**: Preços justos que cabem no seu bolso
- **Sustentável**: Foco em reduzir impacto ambiental

## ✨ Principais Funcionalidades

### 🎨 Design System
- Interface moderna com Tailwind CSS
- Paleta de cores vegana customizada
- Tipografia com fontes Holtwood e Gluten
- Componentes reutilizáveis com hover effects e animações
- Responsividade completa

### 🔐 Autenticação
- Sistema de login e cadastro com NextAuth
- Autenticação por credenciais
- Medidor de força de senha inteligente
- Validação em tempo real
- Sessões JWT seguras

### 🛒 Sistema de Pedidos
- Monte seu pastel personalizado
- Pastéis pré-montados com receitas especiais
- Carrinho de compras interativo
- Histórico de pedidos
- Função "Pedir novamente"

### 👤 Perfil do Usuário
- Dashboard pessoal
- Gerenciamento de informações
- Histórico de pedidos detalhado
- Contador de impacto individual (animais salvos, água economizada)

### 📊 Calculadora de Impacto
- Calcule o impacto ambiental de se tornar vegano
- Estatísticas de animais salvos, água economizada, CO2 reduzido
- Interface interativa e educativa

### 📖 Páginas Institucionais
- **Nossa História**: Timeline da jornada dos Gabriéis
- **Nosso Impacto**: Estatísticas de impacto ambiental e social
- **Armazém do Campo**: Parceria com fornecedores orgânicos

---

## 🛠️ Tecnologias

### Core
- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca UI
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Lucide React](https://lucide.dev/)** - Ícones SVG
- Custom design tokens (vegGreen, vegYellow, vegOrange, vegRed, vegBrown)

### Backend & Database
- **[Prisma](https://www.prisma.io/)** - ORM TypeScript-first
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[NextAuth.js](https://next-auth.js.org/)** - Autenticação
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)** - Hash de senhas

### Utils
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[clsx](https://github.com/lukeed/clsx)** + **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Class management

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+ 
- PostgreSQL
- npm ou yarn ou pnpm

### 1. Clone o repositório
```bash
git clone https://github.com/xandeco024/gabriel-pastel.git
cd gabriel-pastel
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/gabriel_pastel"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="sua-chave-secreta-super-segura-aqui"
```

### 4. Configure o banco de dados
```bash
# Gerar Prisma Client
npx prisma generate

# Executar migrations
npx prisma migrate dev

# (Opcional) Popular com dados de exemplo
npm run db:seed
```

### 5. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📁 Estrutura do Projeto

```
gabriel-pastel/
├── prisma/
│   ├── schema.prisma          # Schema do banco de dados
│   ├── seed.ts                # Dados iniciais
│   └── migrations/            # Histórico de migrations
├── public/
│   ├── banner/                # Imagens do banner
│   ├── flavours/              # Imagens dos sabores
│   └── ...                    # Outros assets
├── src/
│   ├── app/
│   │   ├── (main)/            # Rotas principais
│   │   │   ├── home/          # Página inicial
│   │   │   ├── monte-seu-pastel/   # Builder de pastéis
│   │   │   ├── nossa-historia/     # História da empresa
│   │   │   ├── nosso-impacto/      # Impacto ambiental
│   │   │   └── perfil/             # Área do usuário
│   │   ├── api/               # API Routes
│   │   │   ├── auth/          # Endpoints de autenticação
│   │   │   ├── ingredients/   # Endpoints de ingredientes
│   │   │   ├── orders/        # Endpoints de pedidos
│   │   │   └── premade-pasteis/    # Endpoints de pastéis pré-montados
│   │   ├── layout.tsx         # Layout raiz
│   │   └── page.tsx           # Página de redirect
│   ├── components/
│   │   ├── AuthModal.tsx      # Modal de login/cadastro
│   │   ├── Header.tsx         # Cabeçalho global
│   │   ├── Footer.tsx         # Rodapé global
│   │   ├── Banner/            # Componente de banner
│   │   ├── Ticker/            # Ticker de informações
│   │   └── ui/                # Componentes UI reutilizáveis
│   ├── lib/
│   │   ├── auth.ts            # Configuração NextAuth
│   │   ├── prisma.ts          # Cliente Prisma
│   │   └── utils.ts           # Funções utilitárias
│   ├── types/
│   │   └── next-auth.d.ts     # Type extensions
│   └── generated/
│       └── prisma/            # Cliente Prisma gerado
├── tailwind.config.ts         # Configuração Tailwind
├── next.config.ts             # Configuração Next.js
└── package.json
```

---

## 🗄️ Modelo de Dados

### User
- Informações do usuário
- Autenticação
- Relacionamento com pedidos

### Ingredient
- Ingredientes disponíveis
- Informações nutricionais
- Status (ativo/inativo)

### PremadePastel
- Pastéis pré-montados
- Receitas especiais
- Preços e descrições

### CustomPastel
- Pastéis personalizados
- Ingredientes escolhidos pelo usuário

### Order
- Pedidos realizados
- Status de entrega
- Histórico completo

---

## 🎨 Design System

### Paleta de Cores
```css
vegGreen: #10806e (Verde principal - ações e destaques)
vegGreen-light: #5cad9a (Verde claro - elementos secundários)
vegYellow: #f6a011 (Amarelo - CTAs e alertas)
vegOrange: #ff5500 (Laranja - acentos e variações)
vegRed: #ab3f3f (Vermelho - erros e alertas críticos)
vegBrown-dark: #6b4423 (Marrom escuro - títulos)
vegBrown-light: #d4a574 (Marrom claro - backgrounds)
```

### Tipografia
- **Holtwood** - Títulos e headings
- **Gluten** - Corpo de texto

### Componentes
- Cards com `rounded-2xl` e `shadow-lg`
- Hover effects com `scale-105` e `shadow-2xl`
- Badges com padding `p-3 px-5`
- Ícones Lucide em 3 tamanhos: 12px, 10px, 8px

---

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Linter
npm run lint

# Popular banco de dados
npm run db:seed

# Prisma Studio (visualizar dados)
npx prisma studio

# Gerar tipos do Prisma
npx prisma generate

# Criar nova migration
npx prisma migrate dev --name nome_da_migration

# Reset do banco (cuidado!)
npx prisma migrate reset
```

---

## 🌍 Variáveis de Ambiente

```env
# Banco de Dados
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="chave-secreta-aqui"

# (Opcionais - para futuras integrações)
# STRIPE_SECRET_KEY=""
# RESEND_API_KEY=""
# CLOUDINARY_URL=""
```

---

## 🚢 Deploy

### Vercel (Recomendado)
1. Faça push do código para o GitHub
2. Conecte o repositório no [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente
4. Deploy automático a cada push

### Outras opções
- **Railway**: Deploy com PostgreSQL integrado
- **Render**: Plano gratuito com PostgreSQL
- **Fly.io**: Deploy global com PostgreSQL

---

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Roadmap

### Curto Prazo
- [ ] Sistema de pagamento (Stripe/PagSeguro)
- [ ] Notificações por email (Resend)
- [ ] Upload de fotos de perfil
- [ ] Rastreamento de pedidos em tempo real

### Médio Prazo
- [ ] Dashboard administrativo
- [ ] Sistema de cupons de desconto
- [ ] Programa de fidelidade
- [ ] Avaliações e reviews

### Longo Prazo
- [ ] App mobile (React Native)
- [ ] Sistema de delivery próprio
- [ ] Integração com iFood/Rappi
- [ ] Expansão para outras cidades

---

## 📄 Licença

Este projeto é privado e pertence ao Gabriel Pastel.

---

## 👥 Autores

**Gabriel Pastel** - *Conceito e Produto*  
**Desenvolvido com ❤️ e 🌱** por Alexandre Batista

---

## 📞 Contato

- **Email**: contato@gabrielpastel.com.br
- **Instagram**: [@gabrielpastel](https://instagram.com/gabrielpastel)
- **Website**: [gabrielpastel.com.br](https://gabrielpastel.com.br)

---

## 🙏 Agradecimentos

- Armazém do Campo - Fornecedor de ingredientes orgânicos
- Comunidade vegana brasileira
- Todos os clientes que acreditam em um mundo mais sustentável

---

**Feito com 🥟 e muito ❤️**


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
