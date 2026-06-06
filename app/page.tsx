import { Hero } from "@/components/sections/hero"
import { QuemSomos } from "@/components/sections/quem-somos"
import { MVV } from "@/components/sections/mvv"
import { IaOrquestracao } from "@/components/sections/ia-orquestracao"
import { Produtos } from "@/components/sections/produtos"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <>
      <Hero />
      <QuemSomos />
      <MVV />
      <IaOrquestracao />
      <Produtos />
      <Footer />
    </>
  )
}
