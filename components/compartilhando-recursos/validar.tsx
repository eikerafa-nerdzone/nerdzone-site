import { QrCode } from "lucide-react"
import { CabecalhoSecao } from "@/components/compartilhando-recursos/cabecalho-secao"
import { classeCartao } from "@/components/compartilhando-recursos/estilos"
import { ValidarCodigoForm } from "@/components/compartilhando-recursos/validar-codigo-form"
import { validadorGovBr } from "@/lib/compartilhando-recursos"
import { cn } from "@/lib/utils"

export function Validar() {
  return (
    <section id="validar" aria-labelledby="validar-titulo" className="scroll-mt-24 border-t border-cr-linha py-20 sm:py-24">
      <div className="container-brand grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <CabecalhoSecao id="validar" rotulo="Verificação" titulo="Validar um documento">
            <p>Digite o código que consta no documento emitido para conferir o nome do titular, o evento e a data.</p>
          </CabecalhoSecao>
          <div className="mt-8">
            <ValidarCodigoForm />
          </div>
        </div>

        <div className={cn(classeCartao, "p-6 sm:p-8")}>
          <h3 className="flex items-center gap-3 text-xl font-semibold text-cr-nevoa">
            <span
              className="flex size-10 items-center justify-center rounded-lg bg-cr-noite text-cr-bruma"
              aria-hidden="true"
            >
              <QrCode size={22} />
            </span>
            Pelo QR Code
          </h3>
          <div className="mt-5 space-y-4 leading-relaxed text-cr-bruma">
            <p>
              Cada documento emitido traz um código único e um QR Code. Ao ler o QR Code com a câmera do celular, você
              chega direto à página que confirma o nome do titular, o evento e a data, sem digitar nada.
            </p>
            <p>Compare esses dados com os do documento em mãos.</p>
            <p>
              O PDF original é assinado digitalmente e pode ser conferido gratuitamente em{" "}
              <a
                href={validadorGovBr}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cr-nevoa underline underline-offset-4 hover:text-cr-bruma"
              >
                validar.iti.gov.br
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
