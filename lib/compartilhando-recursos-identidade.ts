import { iniciativa, rotaIniciativa } from "@/lib/compartilhando-recursos"

/*
 * Peças da identidade CoRe (versão 4) usadas pelas páginas além das que já
 * estão em `iniciativa`. Os arquivos ficam em public/compartilhando-recursos.
 */

/** Símbolo com a luz do núcleo: só em tela escura e a partir de cerca de 64 px. */
export const simboloDigitalLuz = {
  src: `${rotaIniciativa}/compartilhando-recursos-simbolo-digital-luz-escuro.svg`,
  largura: 200,
  altura: 200,
}

/** Favicon a partir do símbolo reduzido, sobre a base azul-noite. */
export const faviconIniciativa = {
  ico: `${rotaIniciativa}/compartilhando-recursos-favicon.ico`,
  svg: iniciativa.favicon.svg,
  png32: `${rotaIniciativa}/compartilhando-recursos-favicon-32.png`,
  png180: `${rotaIniciativa}/compartilhando-recursos-favicon-180.png`,
  png512: iniciativa.favicon.png,
}
