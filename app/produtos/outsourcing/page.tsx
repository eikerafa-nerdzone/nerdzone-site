import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Check, Users, Code2, Palette, Database, Smartphone, Shield, ExternalLink } from "lucide-react"
import { siteConfig } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Outsourcing de Profissionais",
  description:
    "Alocação de desenvolvedores, designers e analistas experientes para acelerar seus projetos sem a burocracia de uma contratação.",
}

const perfis = [
  { icon: Code2, title: "Desenvolvedores Full Stack", desc: "React, Next.js, .NET, Node.js, Java e mais." },
  { icon: Code2, title: "Desenvolvedores Back-end", desc: "APIs, microsserviços, integrações e bancos de dados." },
  { icon: Palette, title: "Designers UI/UX", desc: "Design de interfaces, protótipos e identidade visual." },
  { icon: Database, title: "DBAs & Analistas de Dados", desc: "Modelagem, otimização, BI e pipelines de dados." },
  { icon: Smartphone, title: "Mobile (iOS & Android)", desc: "Apps nativos e cross-platform com React Native e Flutter." },
  { icon: Shield, title: "QA & Analistas de Testes", desc: "Testes manuais, automatizados e garantia de qualidade." },
]

const beneficios = [
  "Profissionais pré-selecionados e avaliados",
  "Contratação rápida, sem burocracia",
  "Equipes dedicadas ou recursos compartilhados",
  "Gestão transparente e comunicação direta",
  "Flexibilidade: projeto, squad ou posição permanente",
  "Substituição garantida se não houver fit",
]

const etapas = [
  { num: "01", title: "Entendimento", desc: "Conversamos sobre seu projeto, stack, prazos e cultura de equipe." },
  { num: "02", title: "Match", desc: "Apresentamos profissionais alinhados ao seu perfil em até 72 horas." },
  { num: "03", title: "Onboarding", desc: "O profissional entra no seu time com acompanhamento da Nerdzone." },
  { num: "04", title: "Gestão contínua", desc: "Acompanhamos a performance e garantimos a satisfação da parceria." },
]

export default function OutsourcingPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Olá! Tenho interesse em outsourcing de profissionais. Pode me dar mais detalhes?"
  )}`

  return (
    <main className="min-h-screen bg-brand-dark pt-24 pb-20">
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <Link
          href="/#produtos"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-teal text-sm transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar para produtos
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-sm font-medium mb-6">
              <Users size={14} />
              Serviço Nerdzone
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Out<span className="text-brand-teal">sourcing</span>
            </h1>

            <p className="text-gray-400 text-xl leading-relaxed mb-4">
              Profissionais e equipes de tecnologia sob demanda. Acelere seus projetos com talentos
              pré-selecionados, sem a burocracia e o custo de uma contratação CLT.
            </p>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Seja para reforçar um time existente, montar uma squad completa ou cobrir uma posição
              especializada — temos o perfil certo para o seu momento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-teal/30"
                style={{ background: "linear-gradient(135deg, #0acdad, #089e86)" }}
              >
                <ExternalLink size={18} />
                Quero um profissional
              </a>
              <Link
                href="/#contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-300 border border-brand-teal/40 hover:border-brand-teal/60 hover:text-brand-teal transition-all duration-300"
              >
                Falar com especialista
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div
            className="relative h-80 lg:h-96 rounded-2xl border border-brand-teal/20 flex items-center justify-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(10,205,173,0.1) 0%, rgba(101,42,251,0.05) 100%)",
            }}
          >
            <div className="text-center">
              <Users size={64} className="text-brand-teal/40 mx-auto mb-4" />
              <p className="text-gray-500 text-sm">Sua equipe, nossa curadoria</p>
            </div>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(10,205,173,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(10,205,173,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Perfis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Perfis disponíveis</h2>
          <p className="text-gray-400">Tecnologistas experientes prontos para entrar no seu time</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perfis.map((p) => (
            <div
              key={p.title}
              className="p-6 rounded-xl border border-white/5 bg-white/3 hover:border-brand-teal/30 hover:bg-brand-teal/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-teal/20 flex items-center justify-center mb-4 group-hover:bg-brand-teal/30 transition-colors">
                <p.icon size={18} className="text-brand-teal" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Como funciona</h2>
          <p className="text-gray-400">Do briefing ao onboarding em dias, não semanas</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {etapas.map((e, i) => (
            <div key={e.num} className="relative p-6 rounded-xl border border-white/5 bg-white/3">
              <span className="text-4xl font-black text-brand-teal/20 block mb-3">{e.num}</span>
              <h3 className="text-white font-semibold mb-2">{e.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{e.desc}</p>
              {i < etapas.length - 1 && (
                <div
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-brand-teal/30"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl p-8 sm:p-12 border border-brand-teal/20"
          style={{
            background: "linear-gradient(135deg, rgba(10,205,173,0.1) 0%, rgba(101,42,251,0.05) 100%)",
          }}
        >
          <div className="grid sm:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Por que a Nerdzone?</h2>
              <div className="space-y-3">
                {beneficios.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <Check size={16} className="text-brand-teal flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-white font-semibold">Pronto para fortalecer seu time?</p>
              <p className="text-gray-400 text-sm">
                Fale conosco agora e receba indicações de perfis em até 72 horas.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-brand-teal/25"
                style={{ background: "linear-gradient(135deg, #0acdad, #652afb)" }}
              >
                Iniciar pelo WhatsApp
              </a>
              <Link
                href="/#contato"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-gray-300 border border-white/10 hover:border-brand-teal/40 hover:text-brand-teal transition-all duration-300 text-sm"
              >
                Ou preencher formulário
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
