# Design System — Nerdzone

Referência da identidade visual aplicada no site. Estilo **dark premium**: glow sutil, elementos de código, UI limpa e cards com borda suave. Todos os tokens vivem em [`app/globals.css`](../app/globals.css).

## Princípios

- Fundo escuro como base; cores da marca usadas com intenção (não saturar).
- Gradiente roxo → verde água como assinatura.
- Lime (`#ccff00`) apenas como **destaque** — eyebrows, badges e pontos de atenção.
- Tipografia geométrica nos títulos; texto limpo no corpo; mono para código.
- Acessibilidade: contraste adequado (texto escuro sobre preenchimentos lime).

## Paleta

| Token CSS | Utilitária Tailwind | Hex | Uso |
|---|---|---|---|
| `--brand-purple` | `brand-purple` | `#652afb` | Primária |
| `--brand-purple-dark` | `brand-purple-dark` | `#4d1fc4` | Primária escura |
| `--brand-teal` | `brand-teal` | `#0acdad` | Secundária |
| `--brand-teal-dark` | `brand-teal-dark` | `#089e86` | Secundária escura |
| `--brand-accent` | `brand-accent` | `#ccff00` | Destaque (lime) |
| `--brand-dark` | `brand-dark` | `#19242f` | Fundo |
| `--brand-darker` | `brand-darker` | `#111820` | Fundo profundo |
| `--foreground` | — | `#e8edf2` | Texto (off white) |

> O destaque foi migrado do âmbar `#ffb300` (kit original) para o lime `#ccff00`. O token antigo `brand-yellow` foi renomeado para `brand-accent`.

## Gradiente

Assinatura da marca, roxo → verde água. Dois tokens conforme o uso:

| Token | Ângulo | Utilitária | Uso |
|---|---|---|---|
| `--brand-gradient` | 90° | `.gradient-text` | Texto com gradiente |
| `--brand-gradient-bg` | 135° | `.gradient-bg` | Superfícies / botões |

Gradientes temáticos das páginas de produto: `.gradient-bg-purple`, `.gradient-bg-teal`, `.gradient-bg-teal-purple`.

```tsx
<GradientText>conectar você</GradientText>
<button className="gradient-bg ...">CTA</button>
```

## Tipografia

| Papel | Fonte | Como aplicar |
|---|---|---|
| Títulos | **Space Grotesk** | Regra base `h1–h6` (automática) + utilitária `font-display` |
| Interface / texto | **Geist** | Padrão do `body` (`font-sans`) |
| Código / snippets | **Geist Mono** | `font-mono` |

Todos os headings (`h1`–`h6`) herdam Space Grotesk via regra base. Para títulos que não são heading semântico (ex.: wordmark do navbar), use `font-display`.

## Logo e monograma

- **Logo principal (horizontal):** [`public/brand/logo-nerdzone.png`](../public/brand/logo-nerdzone.png) — navbar, footer, og:image.
- **Monograma (compacto):** [`public/brand/monograma-nerdzone.png`](../public/brand/monograma-nerdzone.png) — base do favicon e do apple-icon (gerados em `app/favicon.ico` e `app/apple-icon.png`).

## Mascote

[`public/images/mascote-nerdzone.webp`](../public/images/mascote-nerdzone.webp) — ilustração semi-realista tech, usada na seção Quem Somos. Representa a essência: inteligência, criatividade e foco em soluções reais.

## Componentes de UI (`components/ui/`)

### `Button`

Polimórfico: renderiza `<button>`, `<a>` (externo) ou `Link` (interno).

| Prop | Valores | Padrão |
|---|---|---|
| `variant` | `primary` · `secondary` · `ghost` | `primary` |
| `size` | `xs` · `sm` · `md` | `md` |
| `gradient` | `brand` · `purple` · `teal` · `teal-purple` | `brand` |
| `accent` | `purple` · `teal` · `neutral` (outline) | `purple` |
| `fullWidth` | boolean | `false` |
| `href` + `external` | string + boolean | — |

```tsx
<Button onClick={...}>Conheça nossos produtos</Button>
<Button variant="secondary" href="/#contato">Fale conosco</Button>
<Button href={url} external gradient="purple">Acessar o ERPSystem</Button>
```

### `Badge`

| Prop | Valores | Padrão |
|---|---|---|
| `accent` | `purple` · `teal` · `lime` | `teal` |
| `size` | `sm` · `md` | `sm` |
| `code` | boolean (prefixo `</>` em mono) | `false` |
| `icon` | ReactNode | — |

```tsx
<Badge accent="purple" code>Gestão completa</Badge>
<Badge accent="lime" icon={<Sparkles size={10} />}>Orquestração de IA</Badge>
```

### `SectionTitle`

Cabeçalho padrão de seção: eyebrow + título + descrição (centralizado).

| Prop | Valores |
|---|---|
| `eyebrow` | string |
| `accent` | `teal` · `purple` · `lime` |
| `icon` | ReactNode (opcional) |
| `title` | ReactNode |
| `description` | ReactNode (opcional) |

```tsx
<SectionTitle
  eyebrow="Metodologia"
  accent="lime"
  icon={<Sparkles size={14} />}
  title={<>Desenvolvemos com <GradientText>Orquestração de IA</GradientText></>}
  description="..."
/>
```

### `GradientText`

Texto com o gradiente oficial. `children` + `className` opcional.

## Cards e badges (padrão atual)

Cards seguem `rounded-2xl border border-white/5 bg-white/3` com hover por accent. A consolidação em componentes `Card`/`IconTile` está prevista na fase de responsividade do [ROADMAP](../ROADMAP.md) (os cards atuais são animados/bespoke).
