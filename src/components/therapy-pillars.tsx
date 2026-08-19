import { Reveal } from "@/components/reveal"

const pillars = [
  {
    number: "01",
    title: "Contexto",
    description:
      "vamos entender como a tua história de vida e o teu contexto moldaram os teus padrões emocionais e qual a função que essas reações cumprem na tua rotina hoje. Sem reduzir sintomas a defeito pessoal.",
  },
  {
    number: "02",
    title: "Nomeação",
    description:
      "vamos identificar e entender melhor o que tu sente, dar nome às tuas necessidades e colocar em palavras o que antes só existia como sensação confusa, no corpo ou no silêncio.",
  },
  {
    number: "03",
    title: "Escolha",
    description:
      "fortalecermos a tua autonomia para que tu saia do piloto automático e faça escolhas com mais segurança em direção a uma vida que vale a pena ser vivida para ti.",
  },
] as const

export function TherapyPillars() {
  return (
    <section className="bg-papel py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="display text-[clamp(2.4rem,6vw,4.2rem)] text-castanho">
              processo terapêutico
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8 lg:gap-10">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.06 * index}>
              <article className="experience-card flex h-full flex-col border border-[color:var(--linha)] bg-creme px-6 py-7 md:px-7 md:py-8">
                <p className="text-[0.72rem] font-medium tracking-[0.22em] text-argila uppercase">
                  {pillar.number}
                </p>
                <h3 className="display mt-3 text-[clamp(1.65rem,3.2vw,2.15rem)] leading-[1.05] text-castanho normal-case">
                  {pillar.title}
                </h3>
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
