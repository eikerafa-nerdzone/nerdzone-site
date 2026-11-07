import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // O ícone do site é app/icon.ico (não favicon.ico, que o Next põe em todas as páginas antes
      // dos ícones da iniciativa); quem pede /favicon.ico direto continua recebendo o mesmo arquivo
      { source: "/favicon.ico", destination: "/icon.ico" },
    ];
  },
  async headers() {
    return [
      {
        // Página da iniciativa, validação de documentos e arquivos para baixar
        source: "/compartilhando-recursos/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
