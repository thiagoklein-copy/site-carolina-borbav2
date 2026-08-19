import Image from "next/image"
import { Reveal } from "@/components/reveal"

export function TherapyQuote() {
  return (
    <section className="relative isolate overflow-hidden bg-sombra text-creme">
      <div className="relative overflow-hidden py-14 md:py-20">
        <Image
          src="/carolina/hero-fundo.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-sombra/82" />

        <div className="relative z-10 wrap">
          <Reveal delay={0.06}>
            <blockquote className="mx-auto w-full max-w-5xl text-center">
              <p className="display text-[clamp(1.85rem,5.2vw,3.65rem)] leading-[1.18] tracking-[-0.03em] text-creme normal-case">
                <span className="text-manha/90">&ldquo;</span>
                É na experiência de ser vista, ouvida e compreendida que a gente aprende a confiar em
                si, no outro e no mundo.
                <span className="text-manha/90">&rdquo;</span>
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
