import Link from "next/link"
import { SearchX, ShieldCheck } from "lucide-react"
import { classeBotao, classeCartao } from "@/components/compartilhando-recursos/estilos"
import { rotaIniciativa } from "@/lib/compartilhando-recursos"
import { cn } from "@/lib/utils"

export default function CodigoNaoEncontrado() {
  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-24">
      <div className="container-brand">
        <article aria-labelledby="nao-encontrado-titulo" className={cn(classeCartao, "mx-auto max-w-2xl p-6 sm:p-10")}>
          <span
            className="flex size-14 items-center justify-center rounded-full border border-cr-bruma/70 text-cr-nevoa sm:size-16"
            aria-hidden="true"
          >
            <SearchX size={28} />
          </span>
          <h1 id="nao-encontrado-titulo" className="mt-6 text-3xl font-semibold leading-tight text-cr-nevoa sm:text-4xl">
            Código não encontrado
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-cr-bruma">
            Nenhum documento emitido pela iniciativa corresponde a este código.
          </p>

          <div className="mt-8 rounded-xl border border-cr-linha bg-cr-noite p-5 sm:p-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-cr-bruma">Confira o código</p>
            <p className="mt-3 text-cr-nevoa">
              São 12 caracteres, letras e números, em três grupos de quatro, como aparecem no documento:
            </p>
            <p className="mt-3 font-mono text-xl tracking-wider text-cr-nevoa" aria-hidden="true">
              XXXX-XXXX-XXXX
            </p>
            <p className="mt-3 text-sm text-cr-bruma">Maiúsculas, minúsculas e hifens não fazem diferença.</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href={`${rotaIniciativa}#validar`} className={classeBotao("primario")}>
              <ShieldCheck size={18} aria-hidden="true" />
              Digitar o código de novo
            </Link>
            <Link href={rotaIniciativa} className={classeBotao("secundario")}>
              Página da iniciativa
            </Link>
          </div>

          <p className="mt-8 text-cr-bruma">
            O código está certo e o documento não aparece?{" "}
            <Link href={`${rotaIniciativa}#contato`} className="text-cr-nevoa underline underline-offset-4 hover:text-cr-bruma">
              Fale com a NerdZone
            </Link>
            .
          </p>
        </article>
      </div>
    </div>
  )
}
