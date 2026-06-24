import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Check, Monitor, BarChart3, Users, ShoppingCart, Package, FileText, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "ERPSystem",
  description:
    "Sistema ERP moderno para centralizar pedidos, clientes, produtos, financeiro e gestão de equipes em um só lugar.",
}

const features = [
  { icon: Users, title: "Gestão de Clientes", desc: "Cadastro completo, histórico e segmentação de clientes e prospects." },
  { icon: ShoppingCart, title: "Pedidos & Vendas", desc: "Controle de pedidos, status, faturamento e acompanhamento em tempo real." },
  { icon: Package, title: "Estoque & Produtos", desc: "Catálogo de produtos, controle de estoque e movimentações automáticas." },
  { icon: BarChart3, title: "Financeiro", desc: "Transações, contas a pagar/receber, relatórios e fluxo de caixa." },
  { icon: Users, title: "Gestão de Equipes", desc: "Controle de usuários, permissões granulares e log de atividades." },
  { icon: FileText, title: "Relatórios", desc: "Dashboards e relatórios gerenciais para tomada de decisão ágil." },
]

const highlights = [
  "Interface moderna e responsiva",
  "Controle de acesso por perfil e permissão",
  "Multi-empresa e multi-usuário",
  "Seguro com autenticação robusta",
  "API REST documentada",
  "Suporte e atualizações contínuas",
]

// TODO: Atualize esta URL quando o ERPSystem tiver domínio de produção
const ERP_LOGIN_URL = process.env.NEXT_PUBLIC_ERP_LOGIN_URL ?? "https://app.nerdzone.com.br/login"

export default function ERPSystemPage() {
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
            <Badge accent="purple" size="md" code className="mb-6">
              Produto Nerdzone
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              ERP<span className="text-brand-purple">System</span>
            </h1>

            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              Sistema de gestão empresarial moderno e intuitivo. Centralize clientes, pedidos, produtos,
              financeiro e equipes em uma plataforma única, segura e acessível de qualquer lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={ERP_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-purple/30"
                style={{ background: "linear-gradient(135deg, #652afb, #4d1fc4)" }}
              >
                <ExternalLink size={18} />
                Acessar o ERPSystem
              </a>
              <Link
                href="/#contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-gray-300 border border-brand-purple/40 hover:border-brand-teal/60 hover:text-brand-teal transition-all duration-300"
              >
                Solicitar demonstração
              </Link>
            </div>
          </div>

          {/* Visual placeholder — substituir por screenshot do sistema */}
          <div
            className="relative h-80 lg:h-96 rounded-2xl border border-brand-purple/20 flex items-center justify-center overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(101,42,251,0.15) 0%, rgba(10,205,173,0.05) 100%)",
            }}
          >
            <div className="text-center">
              <Monitor size={64} className="text-brand-purple/40 mx-auto mb-4" />
              <p className="text-gray-500 text-sm">Screenshot do sistema</p>
              <p className="text-gray-600 text-xs mt-1">(adicionar imagem em /public/images/erp-preview.png)</p>
            </div>
            {/* Grid lines decoration */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(101,42,251,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(101,42,251,0.5) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Módulos do sistema</h2>
          <p className="text-gray-400">Tudo que sua empresa precisa em um só lugar</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl border border-white/5 bg-white/3 hover:border-brand-purple/30 hover:bg-brand-purple/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center mb-4 group-hover:bg-brand-purple/30 transition-colors">
                <f.icon size={18} className="text-brand-purple" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div
          className="rounded-2xl p-8 sm:p-12 border border-brand-purple/20"
          style={{
            background: "linear-gradient(135deg, rgba(101,42,251,0.1) 0%, rgba(10,205,173,0.05) 100%)",
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">Por que escolher o ERPSystem?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check size={16} className="text-brand-teal flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold mb-1">Pronto para começar?</p>
              <p className="text-gray-400 text-sm">Acesse agora ou entre em contato para uma demonstração personalizada.</p>
            </div>
            <a
              href={ERP_LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-brand-purple/25"
              style={{ background: "linear-gradient(135deg, #652afb, #0acdad)" }}
            >
              <ExternalLink size={16} />
              Acessar o sistema
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
