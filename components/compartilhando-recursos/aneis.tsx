const raios = [1.25, 1.6, 2.05, 2.6, 3.25]

/**
 * Anéis concêntricos que se abrem a partir do centro do símbolo (unidade: raio do símbolo).
 * Só decoração: a largura do elemento deve ser 4 vezes a do símbolo para o raio bater.
 */
export function Aneis({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-4 -4 8 8"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {raios.map((raio, indice) => (
        <circle key={raio} r={raio} strokeOpacity={1 - indice * 0.18} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  )
}
