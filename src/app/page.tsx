import { About } from "@/components/about"
import { Approach } from "@/components/approach"
import { Attendances } from "@/components/attendances"
import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { More } from "@/components/more"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Attendances />
      <HowItWorks />
      <Approach />
      <More />
      <Contact />
    </main>
  )
}
