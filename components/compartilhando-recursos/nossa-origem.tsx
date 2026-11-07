import Image from "next/image"
import { CircleDot, Handshake, Sparkles, Users } from "lucide-react"
import { CabecalhoSecao } from "@/components/compartilhando-recursos/cabecalho-secao"
import { classeCartao } from "@/components/compartilhando-recursos/estilos"
import { iniciativa } from "@/lib/compartilhando-recursos"
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
    <section
      id="origem"
      aria-labelledby="origem-titulo"
      className="scroll-mt-24 border-t border-cr-linha py-20 sm:py-24"
    >
      <div className="container-brand">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <CabecalhoSecao id="origem" rotulo="Inspiração" titulo="Nossa origem">
              <p>A iniciativa nasceu de uma frase:</p>
            </CabecalhoSecao>

            <figure className="mt-6 border-l-2 border-cr-neon pl-6">
              <blockquote className="text-2xl font-medium leading-snug text-cr-nevoa sm:text-3xl">
                <p>“Onde dois ou três estiverem reunidos em meu nome, ali estou eu no meio deles.”</p>
              </blockquote>
              <figcaption className="mt-4 font-mono text-sm font-semibold uppercase tracking-widest text-cr-bruma">
                Mateus 18:20
              </figcaption>
            </figure>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cr-bruma">
              Dela vêm as duas ideias do símbolo: pessoas reunidas em volta de um centro que brilha. Esse centro, o “no
              meio deles”, é também o core que dá nome à sigla {iniciativa.sigla}.
            </p>
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

        <figure className={cn(classeCartao, "mx-auto mt-16 max-w-3xl p-8 text-center sm:p-12")}>
          <blockquote className="text-2xl font-medium leading-snug text-cr-nevoa sm:text-3xl">
            <p>“Tudo é para tua honra e glória. Me abençoe para que eu possa compartilhar cada vez mais recursos.”</p>
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center gap-3 font-mono text-sm font-semibold uppercase tracking-widest text-cr-bruma">
            <span className="h-px w-8 bg-cr-neon" aria-hidden="true" />
            Erick Prado, mentor
            <span className="h-px w-8 bg-cr-neon" aria-hidden="true" />
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
