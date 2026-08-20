import { Reveal } from "@/components/reveal"

export function TherapyQuote() {
  return (
    <section className="bg-papel pb-16 pt-14 text-castanho md:pb-24 md:pt-20">
      <div className="wrap">
        <Reveal delay={0.06}>
          <blockquote className="mx-auto w-full max-w-5xl text-center">
            <p className="display text-[clamp(1.55rem,4.2vw,2.75rem)] leading-[1.2] tracking-[-0.03em] normal-case">
              <span className="text-manha">&ldquo;</span>
              É na experiência de ser{" "}
              <span className="script text-[1.08em] text-manha">vista, ouvida e compreendida</span>{" "}
              que a gente aprende a confiar em si, no outro e no mundo.
              <span className="text-manha">&rdquo;</span>
            </p>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
