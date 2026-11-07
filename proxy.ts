import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { normalizarCodigo } from "@/lib/codigo-documento"
import { rotaCodigoNaoEncontrado, rotaValidacao } from "@/lib/compartilhando-recursos"
import { buscarDocumento } from "@/lib/compartilhando-recursos-documentos"

/**
 * A página de validação é estática e existe só para os códigos emitidos, no
 * formato canônico (XXXX-XXXX-XXXX). Aqui o código digitado em outra caixa, sem
 * hifens ou com espaços é redirecionado para o canônico. O código que não foi
 * emitido vai para um caminho sem página, e o roteador responde 404 com a página
 * "não encontrada" do site, renderizada no servidor.
 */
export function proxy(request: NextRequest) {
  const segmento = request.nextUrl.pathname.split("/").pop() ?? ""

  let recebido: string
  try {
    recebido = decodeURIComponent(segmento)
  } catch {
    return mostrarNaoEncontrado(request)
  }

  const canonico = normalizarCodigo(recebido)
  if (!canonico || !buscarDocumento(canonico)) return mostrarNaoEncontrado(request)
  if (canonico === recebido) return NextResponse.next()

  const destino = request.nextUrl.clone()
  destino.pathname = `${rotaValidacao}/${canonico}`
  const resposta = NextResponse.redirect(destino, 308)
  resposta.headers.set("X-Robots-Tag", "noindex, nofollow")
  return resposta
}

function mostrarNaoEncontrado(request: NextRequest) {
  return NextResponse.rewrite(new URL(rotaCodigoNaoEncontrado, request.url))
}

export const config = {
  matcher: "/compartilhando-recursos/v/:codigo",
}
