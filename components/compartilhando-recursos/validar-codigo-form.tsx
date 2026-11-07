"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { classeBotao } from "@/components/compartilhando-recursos/estilos"
import { normalizarCodigo } from "@/lib/codigo-documento"
import { rotaValidacao } from "@/lib/compartilhando-recursos"
import { cn } from "@/lib/utils"

export function ValidarCodigoForm() {
  const router = useRouter()
  const [codigo, setCodigo] = useState("")
  const [erro, setErro] = useState(false)

  const aoEnviar = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const canonico = normalizarCodigo(codigo)
    if (!canonico) {
      setErro(true)
      return
    }
    setErro(false)
    router.push(`${rotaValidacao}/${canonico}`)
  }

  return (
    <form onSubmit={aoEnviar} noValidate>
      <label htmlFor="codigo-documento" className="mb-2 block text-sm font-medium text-cr-nevoa">
        Código do documento
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="codigo-documento"
          name="codigo"
          type="text"
          value={codigo}
          onChange={(evento) => {
            setCodigo(evento.target.value)
            if (erro) setErro(false)
          }}
          placeholder="XXXX-XXXX-XXXX"
          autoComplete="off"
          autoCapitalize="characters"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="go"
          maxLength={24}
          aria-invalid={erro}
          aria-describedby={erro ? "codigo-documento-dica codigo-documento-erro" : "codigo-documento-dica"}
          className={cn(
            "min-h-12 w-full flex-1 rounded-xl border bg-cr-noite px-4 py-3 font-mono text-lg uppercase tracking-wider text-cr-nevoa placeholder:normal-case placeholder:text-cr-bruma/75",
            erro ? "border-red-300" : "border-cr-bruma/70",
          )}
        />
        <button type="submit" className={classeBotao("primario", "cursor-pointer")}>
          <Search size={18} aria-hidden="true" />
          Validar documento
        </button>
      </div>
      <p id="codigo-documento-dica" className="mt-3 text-sm text-cr-bruma">
        São 12 letras e números, como aparecem no documento. Maiúsculas, minúsculas e hifens não fazem diferença.
      </p>
      {erro && (
        <p id="codigo-documento-erro" role="alert" className="mt-2 text-sm font-medium text-red-300">
          Código inválido. Confira o código impresso no documento e tente de novo.
        </p>
      )}
    </form>
  )
}
