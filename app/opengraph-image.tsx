import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/constants"

export const alt = `${siteConfig.name}: engenharia de software, produtos digitais e IA`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** Logotipo do kit no 2x do menu, exibido em tamanho real. */
const logotipo = { largura: 348, altura: 82 }

export default async function Image() {
  const logotipoBase64 = await readFile(
    join(process.cwd(), "public/brand/nerdzone-logotipo-horizontal-roxo-verde-agua-fundo-escuro-174@2x.png"),
    "base64",
  )

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background: "linear-gradient(135deg, #19242f 0%, #1a1040 55%, #111820 100%)",
          color: "#e8edf2",
          position: "relative",
        }}
      >
        {/* Brand glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 760,
            height: 760,
            display: "flex",
            background:
              "radial-gradient(circle at center, rgba(101,42,251,0.35) 0%, transparent 60%)",
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse desenha <img>; next/image não se aplica aqui */}
        <img
          src={`data:image/png;base64,${logotipoBase64}`}
          alt=""
          width={logotipo.largura}
          height={logotipo.altura}
        />

        <div style={{ display: "flex", marginTop: 36, fontSize: 84, letterSpacing: -2, color: "#ffffff" }}>
          {siteConfig.name}
        </div>

        <div
          style={{
            display: "flex",
            width: 240,
            height: 10,
            borderRadius: 6,
            marginTop: 32,
            marginBottom: 32,
            background: "linear-gradient(90deg, #652afb, #0acdad)",
          }}
        />

        <div style={{ display: "flex", fontSize: 40, color: "#94a3b8" }}>
          Engenharia de Software · Produtos Digitais · IA
        </div>

        <div style={{ display: "flex", marginTop: 48, fontSize: 28, color: "#0acdad", letterSpacing: 4 }}>
          TECNOLOGIA · INTELIGÊNCIA · RESULTADOS
        </div>
      </div>
    ),
    { ...size },
  )
}
