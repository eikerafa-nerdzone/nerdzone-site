const TAMANHO_CODIGO = 12
const TAMANHO_GRUPO = 4
const SEPARADORES = /[\s-]/g
const FORMATO_CODIGO = /^[A-Z0-9]{12}$/

/**
 * Normaliza o que a pessoa digitou ou o que veio na URL: ignora caixa,
 * hifens e espaços. Retorna o código no formato canônico (XXXX-XXXX-XXXX)
 * ou null quando o formato não é o de um código.
 */
export function normalizarCodigo(entrada: string): string | null {
  const limpo = entrada.replace(SEPARADORES, "").toUpperCase()
  if (limpo.length !== TAMANHO_CODIGO || !FORMATO_CODIGO.test(limpo)) return null

  const grupos: string[] = []
  for (let i = 0; i < limpo.length; i += TAMANHO_GRUPO) {
    grupos.push(limpo.slice(i, i + TAMANHO_GRUPO))
  }
  return grupos.join("-")
}
