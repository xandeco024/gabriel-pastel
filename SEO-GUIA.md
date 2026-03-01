# 🚀 Guia de SEO - Gabriel Pastel

## ✅ O que já foi implementado:

### 1. **Meta Tags Completas**

- ✅ Title otimizado com palavras-chave
- ✅ Description detalhada e atrativa
- ✅ Keywords relevantes
- ✅ Open Graph para redes sociais (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Configurações de robots (index, follow)

### 2. **Arquivos Essenciais**

- ✅ `robots.txt` - permite crawlers do Google e IAs
- ✅ `sitemap.xml` - dinâmico, atualiza automaticamente
- ✅ `manifest.json` - PWA pronto

### 3. **Structured Data (Schema.org)**

- ✅ JSON-LD com dados estruturados
- ✅ Marcação de Restaurant
- ✅ Marcação de Organization
- ✅ Marcação de WebSite
- ✅ Marcação de Menu

### 4. **Internacionalização (i18n)**

- ✅ Tags hreflang para pt, en, es
- ✅ Sitemap multilíngue
- ✅ Alternate languages configuradas

---

## 🎯 Próximos Passos (IMPORTANTE):

### 1. **Configurar Domínio Real** ✅ CONCLUÍDO

✅ Domínio configurado: `https://gabriel-pastel.vercel.app`
✅ Todos os arquivos atualizados com o domínio correto
✅ Informações de contato adicionadas:

- Telefone: +55 11 95113-8721
- Email: alepbravo1702@gmail.com
- Endereço: Rua dos bobos, 0, Rochdale, Osasco - SP
  ✅ Redes sociais configuradas:
- Instagram: https://www.instagram.com/xandeco420/
- TikTok: https://www.tiktok.com/@cozinhadoromilto
- YouTube: https://www.youtube.com/@xandeco420
- WhatsApp: +55 11 95113-8721

### 2. **Google Search Console**

1. Acesse: https://search.google.com/search-console
2. Adicione sua propriedade (domínio): `gabriel-pastel.vercel.app`
3. Verifique a propriedade com um dos métodos:
   - Tag HTML (adicione no `src/app/layout.tsx`)
   - Arquivo HTML
   - Google Analytics
   - DNS
4. Envie o sitemap: `https://gabriel-pastel.vercel.app/sitemap.xml`
5. Solicite indexação das páginas principais

### 3. **Google Business (se aplicável)**

Se você tem endereço físico:

1. Crie perfil no Google Business
2. Adicione fotos dos produtos
3. Mantenha informações atualizadas
4. Responda avaliações

### 4. **Adicionar Informações de Contato** ✅ CONCLUÍDO

✅ Telefone, email e endereço já configurados em `StructuredData.tsx`

### 5. **Adicionar Redes Sociais** ✅ CONCLUÍDO

✅ Instagram, TikTok, YouTube e WhatsApp já configurados em `StructuredData.tsx`

### 6. **Verificação de Códigos**

Em `src/app/layout.tsx`, adicione os códigos após verificar:

```typescript
verification: {
  google: 'seu-codigo-aqui',  // Do Google Search Console
  bing: 'seu-codigo-aqui',     // Do Bing Webmaster
},
```

### 7. **Google Analytics** (Opcional mas Recomendado)

1. Crie conta em https://analytics.google.com
2. Crie propriedade GA4
3. Adicione o script no `src/app/layout.tsx`:

```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

### 8. **Conteúdo Adicional (Melhora Indexação)**

Considere adicionar:

- ✍️ Blog com receitas e dicas veganas
- 📝 FAQ (Perguntas Frequentes)
- 📄 Página de contato
- 🗺️ Endereço e horário de funcionamento

### 9. **Performance e Core Web Vitals**

Execute testes:

```bash
npm run build
npx lighthouse https://gabriel-pastel.vercel.app
```

Otimize:

- Imagens (já usando Next.js Image ✅)
- Loading speed
- Mobile responsiveness

### 10. **Backlinks e Marketing**

- Cadastre em diretórios locais
- Parcerias com blogs veganos
- Conteúdo compartilhável nas redes sociais
- Reviews de clientes

---

## 📊 Ferramentas para Monitorar SEO:

### Gratuitas:

1. **Google Search Console** - https://search.google.com/search-console
   - Indexação
   - Erros de crawl
   - Performance de busca

2. **Google Analytics** - https://analytics.google.com
   - Tráfego
   - Comportamento dos usuários
   - Conversões

3. **PageSpeed Insights** - https://pagespeed.web.dev
   - Performance
   - Core Web Vitals

4. **Mobile-Friendly Test** - https://search.google.com/test/mobile-friendly

5. **Rich Results Test** - https://search.google.com/test/rich-results
   - Teste seu structured data

### Para Verificar Implementação:

```bash
# Ver robots.txt
curl https://gabriel-pastel.vercel.app/robots.txt

# Ver sitemap
curl https://gabriel-pastel.vercel.app/sitemap.xml

# Ver structured data
view-source:https://gabriel-pastel.vercel.app
```

---

## 🔍 Como Forçar Google a Rastrear:

### Método 1: Search Console (Mais Rápido)

1. Entre no Google Search Console
2. Vá em "Inspeção de URL"
3. Cole a URL da sua página
4. Clique em "Solicitar indexação"

### Método 2: Criar Backlinks

- Compartilhe nas redes sociais
- Publique em fóruns relevantes
- Cadastre em diretórios

### Método 3: Google My Business

- Se tiver endereço físico, crie perfil

---

## ⏱️ Tempo de Indexação:

**Normal:**

- Primeiras páginas: 3-7 dias
- Site completo: 2-4 semanas

**Acelerado (com Search Console):**

- Páginas solicitadas: 1-3 dias

---

## 🎨 Imagem para Redes Sociais:

Para melhor aparência no Google e redes sociais, crie uma imagem:

- **Tamanho:** 1200x630 pixels
- **Formato:** PNG ou JPG
- **Conteúdo:** Logo + slogan + foto do produto
- **Salve como:** `/public/og-image.png`

Depois atualize em:

- `src/app/layout.tsx` (openGraph.images)
- `src/components/StructuredData.tsx` (image URLs)

---

## 📝 Checklist Final:

- [x] Substituir todos os domínios pelo real (`gabriel-pastel.vercel.app`)
- [x] Adicionar telefone e email (StructuredData.tsx)
- [x] Adicionar redes sociais (StructuredData.tsx)
- [x] Adicionar endereço completo (StructuredData.tsx)
- [x] Adicionar horários de funcionamento (StructuredData.tsx)
- [ ] Fazer deploy do site (se ainda não fez)
- [ ] Cadastrar no Google Search Console
- [ ] Enviar sitemap
- [ ] Solicitar indexação das páginas principais
- [ ] Criar imagem OG otimizada (1200x630) - opcional
- [ ] Instalar Google Analytics (opcional)
- [ ] Verificar em Rich Results Test
- [ ] Testar em PageSpeed Insights
- [ ] Compartilhar nas redes sociais

---

## 💡 Dicas Extras:

1. **Conteúdo é Rei**: Quanto mais conteúdo relevante, melhor
2. **Atualização Regular**: Sites ativos ranqueiam melhor
3. **Mobile First**: Google prioriza versão mobile
4. **Velocidade**: Sites rápidos ranqueiam melhor
5. **Experiência do Usuário**: Taxa de rejeição afeta ranking

---

**Boa sorte! 🚀 Em breve "Gabriel Pastel" vai aparecer no topo do Google!**
