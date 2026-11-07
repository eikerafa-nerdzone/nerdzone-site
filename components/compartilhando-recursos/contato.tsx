import { MessageCircle } from "lucide-react"
import { CabecalhoSecao } from "@/components/compartilhando-recursos/cabecalho-secao"
import { classeBotao, classeCartao } from "@/components/compartilhando-recursos/estilos"
import { contato, linkWhatsapp } from "@/lib/compartilhando-recursos"
import { cn } from "@/lib/utils"

export function Contato() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="scroll-mt-24 border-t border-cr-linha bg-cr-noite-2/50 py-20 sm:py-24"
    >
      <div className="container-brand">
        <div className={cn(classeCartao, "grid gap-8 p-8 sm:p-12 md:grid-cols-[1.2fr_1fr] md:items-center")}>
          <CabecalhoSecao id="contato" rotulo="Contato" titulo="Fale com a NerdZone">
            <p>Quer saber mais sobre a iniciativa? Chame a NerdZone pelo WhatsApp.</p>
          </CabecalhoSecao>

          <div className="flex flex-col gap-4">
            <a href={linkWhatsapp} target="_blank" rel="noopener noreferrer" className={classeBotao("primario")}>
              <MessageCircle size={18} aria-hidden="true" />
              Conversar no WhatsApp
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <p className="text-cr-bruma">
              WhatsApp: <span className="text-cr-nevoa">{contato.whatsappExibicao}</span>
            </p>
            <p className="text-cr-bruma">
              Site:{" "}
              <a
                href={contato.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cr-nevoa underline underline-offset-4 hover:text-cr-bruma"
              >
                {contato.site}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
