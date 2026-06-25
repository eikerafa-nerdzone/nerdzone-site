"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Code2, Coffee, Lightbulb } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    label: "Linhas de código",
    desc: "Apaixonados pela craft do desenvolvimento",
  },
  {
    icon: Coffee,
    label: "Tela preta + café",
    desc: "Nosso cenário favorito de produção",
  },
  {
    icon: Lightbulb,
    label: "Algoritmo Nerdzone",
    desc: "Feito é melhor que perfeito — entregamos valor real",
  },
]

export function QuemSomos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="quem-somos" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(10,205,173,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-brand">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mascot side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Soft brand glow behind the mascot */}
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-30"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #652afb 0%, #0acdad 65%, transparent 100%)",
                }}
                aria-hidden="true"
              />
              <Image
                src="/images/mascote-nerdzone.png"
                alt="Mascote oficial Nerdzone — desenvolvedor com mindset de engenharia"
                width={1382}
                height={1138}
                className="relative z-10 w-full h-auto max-w-[540px] rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <span className="text-brand-teal text-sm font-semibold tracking-widest uppercase mb-4 block">
              Quem somos
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Nerds que trabalham para tornar o mundo mais{" "}
              <span className="text-brand-teal">aberto</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Nascemos da paixão por linhas de código e da insatisfação com oportunidades ilusórias.
              Abrimos mão da estabilidade para correr riscos e construir algo que realmente importa
              — soluções digitais que conectam pessoas, empresas e possibilidades.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Aplique o{" "}
              <strong className="text-brand-purple">Algoritmo Nerdzone</strong> em seu projeto e
              sua solução será desenvolvida sob medida, alcançando a qualidade e excelência que
              você merece. Feito é melhor do que perfeito — mas feito com excelência é o ideal.
            </p>

            {/* Highlight cards */}
            <div className="flex flex-col gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/3 hover:border-brand-purple/30 hover:bg-brand-purple/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-purple/20 to-brand-teal/20 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{item.label}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
