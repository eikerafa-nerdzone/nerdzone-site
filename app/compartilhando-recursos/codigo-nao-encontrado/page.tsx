import type { Metadata } from "next"
import { notFound } from "next/navigation"

/** O título fica na página (e não só no not-found) para valer também depois da hidratação. */
export const metadata: Metadata = {
  title: "Código não encontrado",
}

/**
 * Destino da reescrita feita pelo proxy quando o código não foi emitido: a
 * rota de validação só gera os códigos emitidos, e esta responde 404 com a
 * página "não encontrado" da iniciativa.
 */
export default function CodigoNaoEmitido() {
  notFound()
}
