import Image from "next/image"
import { CalendarDays, ShieldCheck } from "lucide-react"
import { Aneis } from "@/components/compartilhando-recursos/aneis"
import { classeBotao } from "@/components/compartilhando-recursos/estilos"
import { iniciativa } from "@/lib/compartilhando-recursos"
import { simboloDigitalLuz } from "@/lib/compartilhando-recursos-identidade"

export function Hero() {
  return (
    <section aria-labelledby="hero-titulo" className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-36 sm:pb-28">
      <div className="container-brand grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div className="order-2 lg:order-1">
          <p className="inline-flex items-center gap-2.5 rounded-full border border-cr-linha px-4 py-1.5 font-mono text-sm font-semibold text-cr-bruma">
            <span className="size-2 rounded-full bg-cr-neon" aria-hidden="true" />
            {iniciativa.sigla}
          </p>
          <h1
            id="hero-titulo"
            className="mt-6 text-[clamp(2.125rem,1rem+4.4vw,4.5rem)] font-semibold leading-[1.04] tracking-tight text-cr-nevoa"
          >
            {iniciativa.nome}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cr-bruma sm:text-xl">{iniciativa.descritor}.</p>
          <p className="mt-8 text-2xl font-medium text-cr-nevoa sm:text-3xl">{iniciativa.slogan}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#validar" className={classeBotao("primario")}>
              <ShieldCheck size={18} aria-hidden="true" />
              Validar um documento
            </a>
            <a href="#eventos" className={classeBotao("secundario")}>
              <CalendarDays size={18} aria-hidden="true" />
              Conhecer os eventos
            </a>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-[min(62vw,24rem)] lg:order-2 lg:w-full lg:max-w-md">
          <Aneis className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[400%] max-w-none -translate-x-1/2 -translate-y-1/2 text-cr-linha" />
          <Image
            src={simboloDigitalLuz.src}
            alt="Símbolo da iniciativa: seis pessoas em círculo, voltadas para um centro que brilha"
            width={simboloDigitalLuz.largura}
            height={simboloDigitalLuz.altura}
            loading="eager"
            fetchPriority="high"
            className="relative h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
