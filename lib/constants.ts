export const siteConfig = {
  name: "Nerdzone Solutions",
  tagline: "Desenvolvendo para conectar você",
  description:
    "Engenharia de software com alma nerd: unimos código, produto e IA para transformar ideias em soluções digitais que resolvem problemas reais de negócio. Outsourcing de talentos e o ERPSystem para a sua empresa.",
  url: "https://nerdzone-site.vercel.app",
  email: "contato@nerdzone.com.br",
  whatsapp: "5511939117113",
  whatsappMessage: "Olá! Vim pelo site da Nerdzone e gostaria de saber mais.",
  linkedin: "https://linkedin.com/company/nerdzone-solutions",
  instagram: "https://instagram.com/nerdzone.solutions",
  youtube: "https://www.youtube.com/@NerdzoneIA",
}

/** Tema temporário da Copa do Mundo 2026. Remover ao encerrar (~2026-07-19): basta `false`. */
export const worldCupTheme = true

export const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Nossa Missão", href: "#mvv" },
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
]

export const mvv = [
  {
    icon: "rocket",
    title: "Missão",
    text: "Incentivar o uso do conhecimento com uma dose extra de adrenalina, entregando soluções que fazem diferença real no dia a dia das empresas.",
  },
  {
    icon: "binoculars",
    title: "Visão",
    text: "Coisas grandes nunca são feitas por uma pessoa só — são feitas por uma equipe. Queremos ser a equipe que faz a diferença no seu negócio.",
  },
  {
    icon: "diamond",
    title: "Valores",
    text: "Os colaboradores são a primeira fronteira para a lealdade dos clientes. Investimos em pessoas antes de investir em publicidade.",
  },
]

export const produtos = [
  {
    slug: "erpsystem",
    name: "ERPSystem",
    tagline: "Gestão completa para sua empresa",
    shortDescription:
      "Sistema ERP moderno e intuitivo para centralizar pedidos, clientes, produtos, financeiro e muito mais em um só lugar.",
    icon: "monitor",
    color: "purple",
    cta: "Conhecer o ERPSystem",
  },
  {
    slug: "outsourcing",
    name: "Outsourcing",
    tagline: "Profissionais e equipes sob demanda",
    shortDescription:
      "Alocação de desenvolvedores, designers e analistas experientes para acelerar seus projetos sem a burocracia de uma contratação.",
    icon: "users",
    color: "teal",
    cta: "Conhecer o Outsourcing",
  },
]
