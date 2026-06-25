import { ImageResponse } from "next/og"

export const alt = "Nerdzone Solutions — Engenharia de Software, Produtos Digitais e IA"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
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

        <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#ccff00" }}>
          {"</>"}
        </div>

        <div style={{ display: "flex", marginTop: 28, fontSize: 96, fontWeight: 700, letterSpacing: -2 }}>
          <span style={{ color: "#ffffff" }}>Nerd</span>
          <span style={{ color: "#0acdad" }}>zone</span>
          <span style={{ color: "#652afb", marginLeft: 24 }}>Solutions</span>
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

        <div style={{ display: "flex", marginTop: 56, fontSize: 28, color: "#0acdad", letterSpacing: 4 }}>
          TECNOLOGIA · INTELIGÊNCIA · RESULTADOS
        </div>
      </div>
    ),
    { ...size },
  )
}
