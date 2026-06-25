# Roadmap Técnico — Nerdzone Site

Documento vivo de evolução técnica do site institucional da Nerdzone Solutions.
Objetivo: melhorar estrutura, manutenção, documentação, SEO, organização de assets,
consistência de componentes e responsividade — preservando a identidade visual dark premium.

> Atualizar o status de cada item conforme as entregas.
> Validação obrigatória antes de cada merge: `npm run lint` + `npm run build`.

## Stack

- Next.js 16 (App Router) · React 19 · TypeScript
- Tailwind CSS v4 · Framer Motion
- React Hook Form · Zod · Resend
- Deploy: Vercel (integração Git)

## Legenda

✅ Concluído · 🟡 Parcial · ⬜ Pendente

---

## Concluído ✅

- Paleta oficial centralizada em tokens (`app/globals.css`)
- Tipografia: Space Grotesk em todos os títulos (regra base `h1..h6` + token `--font-display`)
- Cor de destaque: token `brand-accent` = `#ccff00` (lime) — substituiu o amber `#ffb300`; contraste ajustado (ícone escuro sobre o lime nos tiles do MVV)
- Mascote oficial na seção Quem Somos (`next/image`, responsivo, moldura premium)
- Badges no estilo `</>` do kit nas tags de produto
- Favicon e apple-icon gerados a partir do monograma (convenção de arquivo do Next 16)
- Endpoint de contato (`/api/contact`): validação Zod, tratamento de erro do Resend, env vars, sem vazar detalhe sensível
- Formulário de contato: Zod, estados de loading/sucesso/erro, anti-duplo-envio
- `lib/constants.ts` com `siteConfig`, `navLinks`, `produtos`, `mvv`
- Hero: `h1` único e acessível, CTAs acima da dobra

## Parcial 🟡

- **SEO / metadata** — base pronta (title/template, keywords, OpenGraph, Twitter, metadataBase); falta copy mais forte e imagem OG 1200×630 real (hoje usa o logo 256×256)
- **Tokens de marca** — cores e tokens de gradiente (`--brand-gradient` 90°, `--brand-gradient-bg` 135°) centralizados; `.gradient-text` e `.gradient-bg` criadas e aplicadas (hero, IA, botões do hero/footer); faltam `.glass-card` / `.brand-glow` / `.section-padding` / `.container-default`; gradientes próprios dos botões das páginas de produto ainda inline
- **Assets** — favicon = monograma ok; falta convenção de nomes (logo horizontal, og-image) e remover os SVGs órfãos do create-next-app
- **Acessibilidade do formulário** — inputs apenas com `placeholder`; faltam `<label>` reais e `aria-describedby` ligando o erro ao campo

---

## Backlog por fase

### Fase 1 — Fundação técnica

Reduz duplicação e destrava a consistência das demais frentes.

- 🟡 Token de gradiente (`--brand-gradient`) e `.gradient-text` ✅ (aplicada em hero e IA); faltam `.gradient-bg`, `.glass-card`, `.brand-glow`, `.section-padding`, `.container-default`
- ✅ `lib/validations.ts` — schema Zod de contato centralizado (mensagens PT + limites `max`); `route.ts` e `footer.tsx` agora importam (duplicação eliminada)
- ✅ `lib/utils.ts` — `cn` minimalista (sem dependências)
- ✅ `components/ui/`: `GradientText`, `SectionTitle`, `Badge` (purple/teal/yellow, sm/md, `code`), `Button` polimórfico (`<button>`/`<a>`/`Link`; variants primary/secondary/ghost; `gradient` brand/purple/teal/teal-purple; `accent` purple/teal/neutral; `size` xs/sm/md). `Card`/`IconTile` **adiados para a Fase 4** — cards são animados (`motion`)/`Link` e bespoke; harmonizar junto com a responsividade
- 🟡 Refatorar seções → cabeçalhos produtos/mvv/IA usam `SectionTitle`; hero/IA usam `GradientText`; CTAs do hero, submit do footer e **todos os CTAs das páginas de produto** usam `Button` (gradientes temáticos preservados); tags/pills usam `Badge`. **Navbar mantido bespoke** de propósito (CTA compacto; `hover:scale` causaria layout shift na barra fixa). Falta quem-somos (será tratado na Fase 4)

### Fase 2 — Documentação

- ✅ `README.md` reescrito: descrição, objetivo, stack, como rodar / env / scripts / deploy, estrutura de pastas, identidade visual (paleta com lime), convenções de componentes, roadmap. URL canônica `nerdzone-site.vercel.app` aplicada no `siteConfig.url`
- ✅ `docs/brand-system.md`: paleta (com lime), tipografia, gradiente, logo/monograma, mascote e os primitivos UI com exemplos

### Fase 3 — SEO & social

- ⬜ Imagem Open Graph 1200×630 — gerar via código (`app/opengraph-image.tsx` com `ImageResponse` do Next), evitando depender de asset manual
- ⬜ Reforçar `description` e `keywords` no metadata
- ⬜ Definir e aplicar a URL canônica (ver Decisões pendentes)

### Fase 4 — Responsividade total (adaptação completa por dispositivo) ⭐

Objetivo: o layout deve **se adaptar completamente** a cada contexto — mobile, tablet, desktop e ultrawide — não apenas "não quebrar", mas otimizar uso de espaço, escala e densidade.
Ponto observado em uso: em monitor grande / desktop há espaço ocioso e a composição pode evoluir.

Abordagem com a stack mais moderna disponível, **sem novas dependências** (Tailwind v4 + CSS moderno):

- ⬜ **Container queries** (`@container` nativo do Tailwind v4) — responsividade por componente, não apenas por viewport
- ⬜ **Tipografia fluida** com `clamp()` — escala contínua entre breakpoints (títulos, eyebrows, corpo)
- ⬜ **Espaçamento fluido** com `clamp()` — padding de seção e gaps adaptáveis
- ⬜ **Unidades de viewport modernas** `dvh / svh / lvh` — o Hero usa `min-h-screen` (100vh, com bug da barra de endereço no mobile); migrar para `min-h-dvh`
- ⬜ **`text-wrap: balance`** em títulos e **`pretty`** em parágrafos longos
- ⬜ **Grids fluidos** (`auto-fit` + `minmax`) onde fizer sentido
- ⬜ **Ultrawide** — revisar comportamento acima de ~1280px (containers travam em `max-w-7xl`); decidir entre expandir, aumentar densidade ou centralizar com respiro intencional
- ⬜ `next/image` com `sizes` adequados por breakpoint
- ⬜ Auditoria por seção × breakpoint: Navbar (menu mobile), Hero, Quem Somos (mascote sem sobrepor texto), MVV, IA, Produtos (empilhamento), Footer/formulário, páginas de produto
- ⬜ Botão flutuante de WhatsApp não cobrir conteúdo importante no mobile

### Fase 5 — Acessibilidade & performance

- ⬜ Acessibilidade: `<label>` reais no formulário, `aria-describedby` nos erros, foco visível (`focus-visible`), contraste adequado (`aria-label` em ícones já parcialmente feito)
- ⬜ Performance: peso das imagens-fonte (mascote 1.8MB, monograma 1.3MB), `MatrixRain` com `setInterval` 40ms contínuo (avaliar `requestAnimationFrame`, pausar fora da viewport e respeitar `prefers-reduced-motion`), excesso de glows/shadows, revisão das animações do Framer Motion
- ⬜ Limpeza: remover SVGs órfãos do create-next-app em `public/` (`file`, `globe`, `next`, `vercel`, `window`)

---

## Decisões (resolvidas)

- **Tom textual** → meio-termo (personalidade nerd + clareza de negócio) — aplicar na copy na Fase 2
- **Cor de destaque** → trocada de `#ffb300` para `#ccff00` (lime), token `brand-accent` ✅
- **URL canônica** → `nerdzone-site.vercel.app` — aplicar em `siteConfig.url` + README/SEO na Fase 2 (e-mail segue `@nerdzone.com.br`)

## Processo

- `npm run lint` + `npm run build` verdes antes de cada merge
- Mudanças pequenas e revisáveis, uma frente por vez
- Branch de trabalho: `feat/site-evolution`
