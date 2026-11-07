import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { rotaIniciativa } from "@/lib/compartilhando-recursos"

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "O endereço não existe ou foi digitado com algum erro.",
  robots: { index: false, follow: false },
}

/**
 * 404 de todo o site, inclusive dos caminhos da iniciativa e dos códigos de
 * documento não emitidos: renderizado no servidor, em português.
 */
export default function NotFound() {
  return (
    <section aria-labelledby="nao-encontrada-titulo" className="pt-32 pb-24 sm:pt-40">
      <div className="container-brand">
        <div className="max-w-2xl">
          <p className="text-brand-teal text-sm font-semibold tracking-widest uppercase">Erro 404</p>
          <h1 id="nao-encontrada-titulo" className="mt-4 text-fluid-h2 font-bold text-white leading-tight">
            Página não encontrada
          </h1>
          <p className="mt-4 text-lg text-gray-300">O endereço não existe ou foi digitado com algum erro.</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/" size="sm">
              Ir para o início
            </Button>
            <Button href={`${rotaIniciativa}#validar`} variant="secondary" accent="teal" size="sm">
              Validar um documento
            </Button>
          </div>

          <p className="mt-10 text-gray-400 leading-relaxed">
            Chegou aqui pelo código de um documento da iniciativa Compartilhando Recursos? Confira o código impresso
            no documento e digite de novo na validação. São 12 letras e números; maiúsculas, minúsculas e hifens não
            fazem diferença.
          </p>
        </div>
      </div>
    </section>
  )
}
