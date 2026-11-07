import type { ReactNode } from "react"

type CabecalhoSecaoProps = {
  /** Identificador da seção; o título recebe o id `${id}-titulo`. */
  id: string
  rotulo: string
  titulo: string
  children?: ReactNode
}

export function CabecalhoSecao({ id, rotulo, titulo, children }: CabecalhoSecaoProps) {
  return (
    <div className="max-w-3xl">
      <p className="flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-widest text-cr-bruma">
        <span className="size-2 flex-none rounded-full bg-cr-neon" aria-hidden="true" />
        {rotulo}
      </p>
      <h2
        id={`${id}-titulo`}
        className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-cr-nevoa sm:text-4xl"
      >
        {titulo}
      </h2>
      {children && <div className="mt-5 space-y-4 text-lg leading-relaxed text-cr-bruma">{children}</div>}
    </div>
  )
}
