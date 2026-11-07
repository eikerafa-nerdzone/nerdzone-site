import type { ReactNode } from "react"
import { GraduationCap, HandHeart, Laptop, Users, type LucideIcon } from "lucide-react"
import { CabecalhoSecao } from "@/components/compartilhando-recursos/cabecalho-secao"
import { classeCartao } from "@/components/compartilhando-recursos/estilos"
import { eventos } from "@/lib/compartilhando-recursos"
import { cn } from "@/lib/utils"

const eventoMaisRecente = eventos[0]
const ferramentas = [eventoMaisRecente.plataforma.nome, ...eventoMaisRecente.plataforma.ferramentas]

function Item({ titulo, icone: Icone, children }: { titulo: string; icone: LucideIcon; children: ReactNode }) {
  return (
    <li className={cn(classeCartao, "flex flex-col p-6")}>
      <span className="flex size-11 items-center justify-center rounded-xl bg-cr-noite text-cr-nevoa" aria-hidden="true">
        <Icone size={22} />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-cr-nevoa">{titulo}</h3>
      <div className="mt-2 space-y-4 leading-relaxed text-cr-bruma">{children}</div>
    </li>
  )
}

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-titulo"
      className="scroll-mt-24 border-t border-cr-linha bg-cr-noite-2/50 py-20 sm:py-24"
    >
      <div className="container-brand">
        <CabecalhoSecao id="como-funciona" rotulo="Na prática" titulo="Como funciona">
          <p>A formação acontece em edições, e cada edição é um evento com programa, datas e local próprios.</p>
        </CabecalhoSecao>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Item titulo="Gratuita" icone={HandHeart}>
            <p>Participar não custa nada. Encontros, práticas e materiais são oferecidos sem custo para quem participa.</p>
          </Item>
          <Item titulo="Encontros e práticas" icone={Users}>
            <p>
              Os encontros combinam explicação curta, demonstração e prática, em formato híbrido: presencial, com
              acompanhamento online. Entre um encontro e outro, os participantes fazem práticas com entregável.
            </p>
          </Item>
          <Item titulo="Mentoria" icone={GraduationCap}>
            <p>
              O mentor conduz as aulas, os workshops e as orientações, acompanha o grupo e revisa e aprova as práticas
              de cada participante.
            </p>
          </Item>
          <Item titulo="Ferramentas" icone={Laptop}>
            <p>Ferramentas do dia a dia de um time de tecnologia, do encontro online ao editor de código.</p>
            <div>
              <p className="text-sm">Na edição de {eventoMaisRecente.edicao}:</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {ferramentas.map((ferramenta) => (
                  <li
                    key={ferramenta}
                    className="rounded-full border border-cr-linha bg-cr-noite px-3 py-1 text-sm font-medium text-cr-nevoa"
                  >
                    {ferramenta}
                  </li>
                ))}
              </ul>
            </div>
          </Item>
        </ul>
      </div>
    </section>
  )
}
