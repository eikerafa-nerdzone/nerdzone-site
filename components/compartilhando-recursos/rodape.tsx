import { contato, emissor } from "@/lib/compartilhando-recursos"

export function Rodape() {
  return (
    <footer className="border-t border-cr-linha">
      <div className="container-brand flex flex-col gap-2 py-8 pb-24 text-sm text-cr-bruma sm:pb-12">
        <p>
          {emissor.razaoSocial}
          <span className="block sm:inline sm:before:mx-2 sm:before:content-['·']">CNPJ {emissor.cnpj}</span>
        </p>
        <a
          href={contato.siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-cr-nevoa underline-offset-4 hover:underline"
        >
          {contato.site}
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
      </div>
    </footer>
  )
}
