import Link from "next/link"
import { LogotipoNerdZone } from "@/components/layout/logotipo-nerdzone"
import { contato, emissor, iniciativa, rotaIniciativa } from "@/lib/compartilhando-recursos"

export function Rodape() {
  return (
    <footer className="border-t border-cr-linha">
      <div className="container-brand py-10 pb-24 sm:pb-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <LogotipoNerdZone uso="endosso" className="block w-fit" />
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-cr-bruma">Iniciativas</p>
            <ul className="mt-3">
              <li>
                <Link href={rotaIniciativa} className="text-sm text-cr-nevoa underline-offset-4 hover:underline">
                  {iniciativa.nome}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 text-sm text-cr-bruma">
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
      </div>
    </footer>
  )
}
