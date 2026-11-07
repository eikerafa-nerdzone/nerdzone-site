import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { codigoNaoEncontrado } from "@/lib/compartilhando-recursos"

/**
 * Também declarado no not-found: o HTML do 404 usa os metadados do not-found e,
 * depois da hidratação, o cliente usa os desta página.
 */
export const metadata: Metadata = {
  title: codigoNaoEncontrado.titulo,
  description: codigoNaoEncontrado.descricao,
}

/**
 * Destino da reescrita feita pelo proxy quando o código não foi emitido: a
 * rota de validação só gera os códigos emitidos, e esta responde 404 com a
 * página "não encontrado" da iniciativa.
 */
export default function CodigoNaoEmitido() {
  notFound()
}
