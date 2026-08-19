import { About } from "@/components/about"
import { Approach } from "@/components/approach"
import { Attendances } from "@/components/attendances"
import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { More } from "@/components/more"
import { TherapyPillars } from "@/components/therapy-pillars"
import { TherapyQuote } from "@/components/therapy-quote"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Attendances />
      <HowItWorks />
      <TherapyQuote />
      <TherapyPillars />
      <Approach />
      <More />
      <Contact />
    </main>
  )
}
