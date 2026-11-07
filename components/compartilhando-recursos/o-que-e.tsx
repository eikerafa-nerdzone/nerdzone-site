import Image from "next/image"
import { BookOpen, GraduationCap, Wrench } from "lucide-react"
import { CabecalhoSecao } from "@/components/compartilhando-recursos/cabecalho-secao"
import { classeCartao } from "@/components/compartilhando-recursos/estilos"
import { iniciativa } from "@/lib/compartilhando-recursos"
import { cn } from "@/lib/utils"

const recursos = [
  { nome: "Conhecimento", icone: BookOpen },
  { nome: "Ferramentas", icone: Wrench },
  { nome: "Mentoria", icone: GraduationCap },
]

export function OQueE() {
  return (
    <section id="o-que-e" aria-labelledby="o-que-e-titulo" className="scroll-mt-24 border-t border-cr-linha py-20 sm:py-24">
      <div className="container-brand grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <CabecalhoSecao id="o-que-e" rotulo="A iniciativa" titulo="O que é">
            <p className="text-xl text-cr-nevoa">
              {iniciativa.nome}, ou {iniciativa.sigla} (lê-se “core”, o centro), é a iniciativa da NerdZone de formação
              gratuita em tecnologia. Ela reúne pessoas em torno de um centro comum e coloca à disposição de quem
              participa conhecimento, ferramentas e mentoria.
            </p>
            <p>
              Compartilhar recursos é colocar em comum o que ajuda alguém a aprender e a trabalhar com tecnologia, sem
              custo para quem participa. O que cada pessoa recebe pode, depois, ser passado adiante.
            </p>
          </CabecalhoSecao>

          <div className="mt-10">
            <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-cr-bruma">
              O que compartilhamos
            </h3>
            <ul className="mt-4 flex flex-wrap gap-3">
              {recursos.map(({ nome, icone: Icone }) => (
                <li
                  key={nome}
                  className="inline-flex items-center gap-2 rounded-full border border-cr-linha bg-cr-noite-2 px-4 py-2 text-sm font-medium text-cr-nevoa"
                >
                  <Icone size={16} className="text-cr-bruma" aria-hidden="true" />
                  {nome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={cn(classeCartao, "mx-auto w-full max-w-sm p-8 text-center")}>
          <Image
            src={iniciativa.palavraMarca.src}
            alt={iniciativa.sigla}
            width={iniciativa.palavraMarca.largura}
            height={iniciativa.palavraMarca.altura}
            sizes="224px"
            className="mx-auto h-auto w-56"
          />
          <p className="mt-6 text-xl font-semibold text-cr-nevoa">Lê-se “core”: o centro</p>
          <p className="mt-2 text-cr-bruma">
            No nome, o anel de pessoas ocupa o lugar do “o”. No centro do anel, o que compartilhamos.
          </p>
        </div>
      </div>
    </section>
  )
}
