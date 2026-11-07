import { notFound } from "next/navigation"

/**
 * Destino da reescrita feita pelo proxy quando o código não foi emitido: a
 * rota de validação só gera os códigos emitidos, e esta responde 404 com a
 * página "não encontrado" da iniciativa.
 */
export default function CodigoNaoEmitido() {
  notFound()
}
