import { Reveal } from "@/components/reveal"

const pillars = [
  {
    number: "01",
    title: "Contexto",
    description:
      "vamos entender como a tua história de vida e o teu contexto moldaram os teus padrões emocionais e qual a função que essas reações cumprem na tua rotina hoje.",
  },
  {
    number: "02",
    title: "Nomeação",
    description:
      "vamos identificar e compreender o que tu sente, dando nome às tuas emoções e necessidades com cuidado e compaixão.",
  },
  {
    number: "03",
    title: "Escolha",
    description:
      "fortaleceremos a tua autonomia para que tu saia do piloto automático e faça escolhas com mais segurança em direção a uma vida que vale a pena ser vivida para ti.",
  },
] as const

export function TherapyPillars() {
  return (
    <section className="bg-papel pt-12 pb-12 md:pt-14 md:pb-16">
      <div className="wrap">
        <Reveal>
          <h3 className="max-w-2xl text-[clamp(1.5rem,3.2vw,2rem)] font-semibold leading-snug tracking-[-0.02em] text-castanho [font-family:var(--font-carolina-display)] normal-case">
            processo terapêutico
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.06 * index}>
              <article className="experience-card flex h-full flex-col border border-[color:var(--linha)] bg-creme px-6 py-7 md:px-7 md:py-8">
                <p className="text-[0.72rem] font-medium tracking-[0.22em] text-argila uppercase">
                  {pillar.number}
                </p>
                <h4 className="mt-3 text-[clamp(1.15rem,2.3vw,1.4rem)] font-medium leading-tight tracking-[-0.02em] text-castanho [font-family:var(--font-carolina-display)] normal-case">
                  {pillar.title}
                </h4>
                <p className="mt-4 flex-1 text-[1.02rem] leading-relaxed text-tinta md:text-[1.05rem]">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
