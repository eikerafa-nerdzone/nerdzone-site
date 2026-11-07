import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { normalizarCodigo } from "@/lib/codigo-documento"

/**
 * A página de validação é estática e existe só para o código no formato
 * canônico (XXXX-XXXX-XXXX). Aqui o código digitado em outra caixa, sem hifens
 * ou com espaços é redirecionado para o canônico.
 */
export function proxy(request: NextRequest) {
  const segmento = request.nextUrl.pathname.split("/").pop() ?? ""

  let recebido: string
  try {
    recebido = decodeURIComponent(segmento)
  } catch {
    return NextResponse.next()
  }

  const canonico = normalizarCodigo(recebido)
  if (!canonico || canonico === recebido) return NextResponse.next()

  const destino = request.nextUrl.clone()
  destino.pathname = `/compartilhando-recursos/v/${canonico}`
  const resposta = NextResponse.redirect(destino, 308)
  resposta.headers.set("X-Robots-Tag", "noindex, nofollow")
  return resposta
}

export const config = {
  matcher: "/compartilhando-recursos/v/:codigo",
}
