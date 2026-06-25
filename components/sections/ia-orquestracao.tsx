"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Zap,
  ShieldCheck,
  Layers,
  Bug,
  TrendingUp,
  GitMerge,
  Sparkles,
} from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { GradientText } from "@/components/ui/gradient-text"

const pilares = [
  {
    icon: Zap,
    title: "Performance em Sprint",
    desc: "Entregas consistentes a cada ciclo — análise, implementação e validação em menos tempo sem sacrificar qualidade.",
  },
  {
    icon: Layers,
    title: "Consistência",
    desc: "Padrões de arquitetura, nomenclatura e contratos mantidos automaticamente ao longo de todo o projeto.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade & Segurança",
    desc: "Revisão adversarial antes de cada PR: vulnerabilidades, code smells, complexidade cognitiva e Quality Gate.",
  },
  {
    icon: Bug,
    title: "Sanitização",
    desc: "Detecção proativa de código morto, duplicações, acoplamento excessivo e dados sensíveis expostos.",
  },
  {
    icon: TrendingUp,
    title: "Evolução de Produto",
    desc: "Decisões rastreáveis, ADRs gerados, backlog técnico mapeado — produto que cresce com consciência.",
  },
  {
    icon: GitMerge,
    title: "Rastreabilidade",
    desc: "Do requisito ao commit: contexto preservado, impacto documentado e risco residual sempre visível.",
  },
]

export function IaOrquestracao() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="ia-orquestracao"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(101,42,251,0.04) 30%, rgba(10,205,173,0.04) 70%, transparent 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(101,42,251,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="Metodologia"
            accent="lime"
            icon={<Sparkles size={14} />}
            title={
              <>
                Desenvolvemos com <GradientText>Orquestração de IA</GradientText>
              </>
            }
            description="A IA atua como engenheiro sênior em cada sprint — revisando arquitetura, antecipando riscos e garantindo que o que entra em produção está correto, seguro e rastreável."
          />
        </motion.div>

        {/* Pilares grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pilares.map((pilar, i) => {
            const Icon = pilar.icon
            return (
              <motion.div
                key={pilar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-white/5 bg-white/2 hover:border-brand-purple/30 hover:bg-white/4 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple/30 to-brand-teal/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={18} className="text-brand-teal" strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-1">{pilar.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pilar.desc}</p>
                </div>

                {/* Hover accent */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at top left, rgba(101,42,251,0.06) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/5">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-brand-accent text-sm font-medium">
              Cada entrega passa por revisão adversarial antes do PR
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
