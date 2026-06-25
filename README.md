# Nerdzone Site

Site institucional da **Nerdzone Solutions** — engenharia de software, produtos digitais e IA aplicada. Construído com Next.js, TypeScript e Tailwind CSS, com identidade visual dark premium.

🌐 Produção: **https://nerdzone-site.vercel.app**

## Objetivo

Apresentar a Nerdzone Solutions, seus produtos (ERPSystem) e serviços (Outsourcing de tecnologia), o posicionamento de marca e os canais de contato — unindo personalidade técnica com clareza de negócio.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19** · **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animações)
- **React Hook Form** + **Zod** (formulário e validação)
- **Resend** (envio de e-mail do formulário de contato)
- Deploy: **Vercel** (integração Git)

## Rodando localmente

Requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Variáveis de ambiente

Crie um `.env.local` a partir do `.env.local.example`:

```env
# E-mail (Resend) — https://resend.com
RESEND_API_KEY=
# Remetente: onboarding@resend.dev (sem domínio verificado) ou contato@nerdzone.com.br
RESEND_FROM_EMAIL=onboarding@resend.dev
# Destino dos formulários de contato
CONTACT_EMAIL=contato@nerdzone.com.br

# URL de login do ERPSystem em produção
NEXT_PUBLIC_ERP_LOGIN_URL=https://app.nerdzone.com.br/login
```

Sem `RESEND_API_KEY`, o endpoint de contato apenas registra a submissão no log (fallback de desenvolvimento).

## Scripts

```bash
npm run dev     # servidor de desenvolvimento (Turbopack)
npm run build   # build de produção
npm run start   # servir o build de produção
npm run lint    # ESLint
```

## Estrutura do projeto

```txt
app/
  api/contact/        endpoint do formulário (Resend + Zod)
  produtos/           páginas de ERPSystem e Outsourcing
  globals.css         tokens da marca, utilitárias e base
  layout.tsx          fontes, metadata/SEO, navbar e footer
  page.tsx            composição das seções da home

components/
  layout/             navbar, footer, botão de WhatsApp
  sections/           hero, quem-somos, mvv, ia-orquestracao, produtos
  ui/                 primitivos reutilizáveis (Button, Badge, SectionTitle, GradientText)

lib/
  constants.ts        siteConfig, navegação, produtos, missão/visão/valores
  validations.ts      schema Zod compartilhado (contato)
  utils.ts            helpers (cn)

public/
  brand/              logo e monograma
  images/             mascote oficial
```

## Identidade visual

Base **dark premium** com gradiente roxo → verde água e destaque lime. Tokens em [`app/globals.css`](app/globals.css). Referência completa do design system em [`docs/brand-system.md`](docs/brand-system.md).

| Token | Cor | Uso |
|---|---|---|
| `--brand-purple` | `#652afb` | Primária |
| `--brand-purple-dark` | `#4d1fc4` | Primária escura |
| `--brand-teal` | `#0acdad` | Secundária |
| `--brand-teal-dark` | `#089e86` | Secundária escura |
| `--brand-accent` | `#ccff00` | Destaque (lime) |
| `--brand-dark` | `#19242f` | Fundo |
| `--brand-darker` | `#111820` | Fundo profundo |
| `--foreground` | `#e8edf2` | Texto (off white) |

- **Gradiente:** `--brand-gradient` (90°, texto) e `--brand-gradient-bg` (135°, superfícies); utilitárias `.gradient-text` / `.gradient-bg`.
- **Tipografia:** títulos em **Space Grotesk** (regra base `h1–h6` + utilitária `font-display`); interface/texto em **Geist**; código em **Geist Mono**.
- **Mascote:** ilustração semi-realista tech em [`public/images/mascote-nerdzone.webp`](public/images/mascote-nerdzone.webp).

## Convenções de componentes

- Seções da home ficam em `components/sections/` e são compostas em `app/page.tsx`.
- Primitivos de UI ficam em `components/ui/`:
  - **`Button`** — `variant` (primary/secondary/ghost), `size` (xs/sm/md), `gradient`, `accent`; polimórfico (`<button>` / `<a>` / `Link`).
  - **`Badge`** — `accent` (purple/teal/lime), `size` (sm/md), `code` (prefixo `</>`).
  - **`SectionTitle`** — eyebrow + título + descrição.
  - **`GradientText`** — texto com o gradiente oficial.
- Cores, gradientes e fontes vêm sempre dos tokens/utilitárias — evitar valores hardcoded.

## Deploy

Deploy automático na Vercel via integração Git: cada push em `main` publica em produção; pushes em outras branches geram deploys de preview.

## Roadmap

A evolução técnica é guiada pelo [`ROADMAP.md`](ROADMAP.md) (fundação técnica, documentação, SEO, responsividade e acessibilidade).
