/**
 * Logotipo horizontal NerdZone do kit oficial, recortado na tinta e exportado em
 * 1x e 2x em public/brand. A área de proteção (H/4, com H a altura visível do NZ)
 * fica por conta do espaço em volta, no layout de quem usa.
 */
const pecas = {
  menu: { arquivo: "nerdzone-logotipo-horizontal-roxo-verde-agua-fundo-escuro-174", largura: 174, altura: 41 },
  rodape: { arquivo: "nerdzone-logotipo-horizontal-roxo-verde-agua-fundo-escuro-226", largura: 226, altura: 53 },
  // Endosso nas páginas da iniciativa: o verde-água é o tom da NerdZone junto da CoRe
  endosso: { arquivo: "nerdzone-logotipo-horizontal-verde-agua-fundo-escuro-162", largura: 162, altura: 39 },
} as const

type UsoLogotipo = keyof typeof pecas

export function LogotipoNerdZone({ uso, className }: { uso: UsoLogotipo; className?: string }) {
  const { arquivo, largura, altura } = pecas[uso]
  const src = `/brand/${arquivo}.png`

  return (
    <picture className={className}>
      <source srcSet={`${src} 1x, /brand/${arquivo}@2x.png 2x`} />
      <img src={src} alt="NerdZone" width={largura} height={altura} className="block" />
    </picture>
  )
}
