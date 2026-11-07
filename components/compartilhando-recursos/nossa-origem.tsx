import Image from "next/image"
import { CircleDot, Handshake, Sparkles, Users } from "lucide-react"
import { CabecalhoSecao } from "@/components/compartilhando-recursos/cabecalho-secao"
import { classeCartao } from "@/components/compartilhando-recursos/estilos"
import { iniciativa, origem } from "@/lib/compartilhando-recursos"
import { cn } from "@/lib/utils"

const leituras = [
  {
    titulo: "Pessoas reunidas",
    texto: "Seis pessoas à mesma distância do centro, sem ninguém na frente ou acima.",
    icone: Users,
  },
  {
    titulo: "Um centro comum",
    texto: "O núcleo que brilha é o “no meio deles” e o core que dá nome à sigla.",
    icone: CircleDot,
  },
  {
    titulo: "Recursos compartilhados",
    texto: "O centro é o que todos recebem e passam adiante.",
    icone: Handshake,
  },
  {
    titulo: "Honra e glória como luz",
    texto: "O halo em volta do núcleo é a luz que o centro espalha sobre quem está em volta.",
    icone: Sparkles,
  },
]

export function NossaOrigem() {
  return (
    <section id="origem" aria-labelledby="origem-titulo" className="scroll-mt-24 border-t border-cr-linha py-20 sm:py-24">
      <div className="container-brand">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <CabecalhoSecao id="origem" rotulo="Inspiração" titulo="Nossa origem">
              <p>A iniciativa nasceu de um versículo, na forma como o mentor o carrega consigo:</p>
            </CabecalhoSecao>

            <figure className="mt-6 border-l-2 border-cr-neon pl-6">
              <blockquote className="text-2xl font-medium leading-snug text-cr-nevoa sm:text-3xl">
                <p>“{origem.frase}”</p>
              </blockquote>
              <figcaption className="mt-4 max-w-xl text-sm leading-relaxed text-cr-bruma">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest">Referência</span>{" "}
                {origem.referencia.passagem} ({origem.referencia.traducao}): “{origem.referencia.texto}”
              </figcaption>
            </figure>

            <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-cr-bruma">
              <p>
                Dessa frase vem a imagem que dá forma à iniciativa: pessoas reunidas em torno de um centro comum. Basta
                alguém disposto a ensinar e alguém disposto a aprender para que o encontro aconteça.
              </p>
              <p>
                Da oração do mentor vem o propósito: compartilhar cada vez mais recursos. Por isso a formação é
                gratuita, e o que cada participante recebe pode ser passado adiante.
              </p>
            </div>
          </div>

          <div className="mx-auto w-[min(72vw,20rem)] lg:w-full lg:max-w-sm">
            <Image
              src={iniciativa.simbolo.src}
              alt=""
              width={iniciativa.simbolo.largura}
              height={iniciativa.simbolo.altura}
              className="h-auto w-full"
            />
          </div>
        </div>

        <figure className={cn(classeCartao, "mx-auto mt-16 max-w-3xl p-8 text-center sm:p-12")}>
          <blockquote className="text-2xl font-medium leading-snug text-cr-nevoa sm:text-3xl">
            <p>“{origem.oracao.texto}”</p>
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center gap-3 font-mono text-sm font-semibold uppercase tracking-widest text-cr-bruma">
            <span className="h-px w-8 bg-cr-neon" aria-hidden="true" />
            {origem.oracao.assinatura}
            <span className="h-px w-8 bg-cr-neon" aria-hidden="true" />
          </figcaption>
        </figure>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-cr-nevoa">Como ler o símbolo</h3>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leituras.map(({ titulo, texto, icone: Icone }) => (
              <li key={titulo} className="rounded-xl border border-cr-linha bg-cr-noite-2 p-5">
                <Icone size={22} className="text-cr-bruma" aria-hidden="true" />
                <p className="mt-4 font-semibold text-cr-nevoa">{titulo}</p>
                <p className="mt-2 text-cr-bruma">{texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
