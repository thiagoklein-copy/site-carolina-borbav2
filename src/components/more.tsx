import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { site } from "@/lib/site"

const experiences = [
  {
    title: "Autocrítica intensa",
    description:
      "Sentir uma cobrança interna que nunca desliga e a sensação constante de que nunca é o bastante.",
  },
  {
    title: "Medo de rejeição ou abandono",
    description:
      "Oscilar entre se doar em excesso para manter uma relação e se fechar completamente em uma postura distante para não se machucar.",
  },
  {
    title: "Dificuldade de pedir ajuda",
    description:
      "Achar que precisar de suporte é sinal de fraqueza ou ter receio de ser um peso para os outros.",
  },
  {
    title: "Padrões repetitivos nos relacionamentos",
    description:
      "Perceber que as tuas relações amorosas ou amizades sempre esbarram nas mesmas dores e inseguranças.",
  },
  {
    title: "Pressão do cotidiano e identidade",
    description:
      "Lidar com a sobrecarga das exigências da escola, da faculdade e das expectativas da família enquanto tenta entender quem tu é.",
  },
  {
    title: "Processos de luto e términos",
    description:
      "Atravessar perdas significativas e transições difíceis ao longo da vida.",
  },
] as const

function CardAsterisk() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0 -rotate-[9deg] text-oliva/80"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.4 3.1c-.35 4.2.55 8.6-.15 12.9.2 4.4-.45 8.7.25 12.8" strokeWidth="1.85" />
        <path d="M6.1 8.4c3.6 2.15 8.1 4.35 11.7 6.55 3.2 1.85 7.9 4.7 11.3 6.2" strokeWidth="1.7" />
        <path d="M25.9 7.9c-3.35 2.55-7.9 4.7-11.6 6.85-3.85 2-8.35 4.45-12.2 6.15" strokeWidth="1.75" />
      </g>
    </svg>
  )
}

export function More() {
  return (
    <section className="bg-creme py-24 md:py-32">
      <div className="wrap">
        <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-8 lg:gap-x-10">
          <Reveal>
            <h2 className="display max-w-[11ch] text-[clamp(2.4rem,6vw,4.4rem)] text-castanho">
              pra quem é esse espaço
            </h2>
            <div className="prose-brand mt-8 max-w-[52ch] text-[1.05rem] md:text-lg">
              <p>
                Atendo mulheres e adolescentes que desconfiam da própria necessidade de pedir ajuda e
                convivem com emoções intensas, medo de abandono, impulsividade e relações instáveis.
              </p>
              <p className="mt-4">Este espaço é pra ti se tu te reconhece em vivências como:</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="mx-auto shrink-0 md:mx-0 md:-ml-2 md:justify-self-start md:pt-2">
              <div className="relative h-44 w-44 overflow-hidden rounded-full border border-[color:var(--linha)] bg-papel md:h-52 md:w-52">
                <Image
                  src="/carolina/chao.jpg"
                  alt={`${site.name} sorrindo, em um retrato acolhedor`}
                  fill
                  sizes="(max-width: 768px) 176px, 208px"
                  className="object-cover object-[50%_24%] scale-[1.12]"
                />
              </div>
            </figure>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item, index) => (
            <Reveal key={item.title} delay={0.04 * index}>
              <article className="experience-card h-full border border-[color:var(--linha)] bg-papel px-5 py-5">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="display text-[1rem] leading-tight text-castanho normal-case md:text-[1.05rem]">
                    {item.title}
                  </h3>
                  <CardAsterisk />
                </div>
                <p className="text-[0.98rem] leading-relaxed text-tinta md:text-[1.02rem]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
