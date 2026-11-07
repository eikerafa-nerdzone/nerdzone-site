import { Download, FileText, Presentation } from "lucide-react"
import { CabecalhoSecao } from "@/components/compartilhando-recursos/cabecalho-secao"
import { classeBotao, classeCartao } from "@/components/compartilhando-recursos/estilos"
import type { MaterialDisponivel } from "@/lib/compartilhando-recursos-materiais"
import { cn } from "@/lib/utils"

export function Materiais({ materiais }: { materiais: MaterialDisponivel[] }) {
  if (materiais.length === 0) return null

  return (
    <section
      id="materiais"
      aria-labelledby="materiais-titulo"
      className="scroll-mt-24 border-t border-cr-linha bg-cr-noite-2/50 py-20 sm:py-24"
    >
      <div className="container-brand">
        <CabecalhoSecao id="materiais" rotulo="Downloads" titulo="Materiais para baixar">
          <p>Documentação e apresentação do programa, para consulta e compartilhamento.</p>
        </CabecalhoSecao>

        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {materiais.map((material) => (
            <li key={material.id} className={cn(classeCartao, "flex flex-col p-6 sm:p-8")}>
              <div className="flex items-start justify-between gap-4">
                <span
                  className="flex size-12 items-center justify-center rounded-xl bg-cr-noite text-cr-nevoa"
                  aria-hidden="true"
                >
                  {material.formato === "PDF" ? <FileText size={24} /> : <Presentation size={24} />}
                </span>
                <span className="rounded-full border border-cr-bruma/70 px-3 py-1 font-mono text-xs font-semibold text-cr-nevoa">
                  {material.formato} · {material.tamanho}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-cr-nevoa">{material.titulo}</h3>
              <p className="mt-2 flex-1 text-cr-bruma">{material.descricao}</p>
              <a href={material.href} download className={classeBotao("secundario", "mt-6 w-full sm:w-fit")}>
                <Download size={18} aria-hidden="true" />
                Baixar {material.formato}
                <span className="sr-only">
                  : {material.titulo}, {material.tamanho}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
