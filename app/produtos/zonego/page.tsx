import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Bell, PackageSearch, MessageCircle, ShieldCheck, Smartphone, Zap } from "lucide-react"
import { siteConfig } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "ZoneGo",
  description:
    "Aplicativo mobile complementar ao ZoneManager para o cliente final acompanhar pedidos, status e notificações em tempo real.",
}

const features = [
  { icon: PackageSearch, title: "Acompanhamento de Pedidos", desc: "Status, histórico e atualizações do pedido em tempo real, direto no celular." },
  { icon: Bell, title: "Notificações Push", desc: "Alertas instantâneos sobre mudanças de status, entregas e novidades." },
  { icon: MessageCircle, title: "Comunicação Direta", desc: "Canal simples para falar com a empresa sem sair do app." },
  { icon: ShieldCheck, title: "Login Seguro", desc: "Autenticação vinculada à conta do cliente no ZoneManager." },
  { icon: Smartphone, title: "iOS & Android", desc: "Aplicativo nativo mobile, pensado para o dia a dia do cliente final." },
  { icon: Zap, title: "Sincronização em Tempo Real", desc: "Tudo o que acontece no ZoneManager reflete instantaneamente no app." },
]

const highlights = [
  "Sincronização em tempo real com o ZoneManager",
  "Interface simples e intuitiva para o cliente final",
  "Notificações push instantâneas",
  "Aplicativo nativo para iOS e Android",
  "Autenticação segura vinculada à conta do cliente",
  "Suporte e atualizações contínuas",
]

export default function ZoneGoPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    "Olá! Tenho interesse em saber mais sobre o ZoneGo. Pode me dar mais detalhes?"
  )}`

  return (
    <main className="min-h-screen bg-brand-dark pt-24 pb-20">
      {/* Back link */}
      <div className="container-brand mb-12">
        <Link
          href="/#produtos"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-teal text-sm transition-colors"
        >
          <ArrowLeft size={16} />
          Voltar para produtos
        </Link>
      </div>

      {/* Hero */}
      <section className="container-brand mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge accent="lime" size="md" code className="mb-6">
              Aplicativo Nerdzone
            </Badge>

            <h1 className="text-fluid-h1 font-extrabold text-white mb-6 leading-tight">
              Zone<span className="text-brand-accent">Go</span>
            </h1>

            <p className="text-gray-400 text-xl leading-relaxed mb-8">
              O aplicativo mobile do ZoneManager para o cliente final. Pedidos, status e notificações
              sempre à mão, com a mesma informação do sistema em tempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={whatsappUrl} external gradient="teal-purple">
                <MessageCircle size={18} />
                Falar sobre o ZoneGo
              </Button>
              <Button href="/#contato" variant="secondary" accent="neutral">
                Solicitar demonstração
              </Button>
            </div>
          </div>

          {/* Logo showcase */}
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-3xl blur-2xl opacity-25"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(204,255,0,0.35) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex items-center justify-center p-12 rounded-2xl border border-brand-accent/20 shadow-2xl bg-white/3">
              <Image
                src="/brand/logo-zonego.png"
                alt="ZoneGo"
                width={2172}
                height={724}
                sizes="(max-width: 1024px) 100vw, 600px"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container-brand mb-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">O que o ZoneGo entrega</h2>
          <p className="text-gray-400">Tudo que o cliente precisa acompanhar, direto do celular</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl border border-white/5 bg-white/3 hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center mb-4 group-hover:bg-brand-accent/30 transition-colors">
                <f.icon size={18} className="text-brand-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="container-brand mb-20">
        <div
          className="rounded-2xl p-8 sm:p-12 border border-brand-accent/20"
          style={{
            background: "linear-gradient(135deg, rgba(204,255,0,0.08) 0%, rgba(101,42,251,0.05) 100%)",
          }}
        >
          <h2 className="text-2xl font-bold text-white mb-8">Por que escolher o ZoneGo?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check size={16} className="text-brand-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold mb-1">Quer levar o ZoneGo para seus clientes?</p>
              <p className="text-gray-400 text-sm">Fale conosco e entenda como integrar o ZoneGo ao seu ZoneManager.</p>
            </div>
            <Button href={whatsappUrl} external size="sm" gradient="teal-purple" className="flex-shrink-0">
              <MessageCircle size={16} />
              Falar pelo WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
