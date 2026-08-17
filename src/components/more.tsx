import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { site } from "@/lib/site"

export function More() {
  return (
    <section className="bg-creme py-24 md:py-32">
      <div className="wrap grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="display mb-8 max-w-[11ch] text-[clamp(2.4rem,6vw,4.4rem)] text-castanho">
            pra quem é esse espaço
          </h2>
          <div className="prose-brand text-[1.05rem] md:text-lg">
            <p>
              Atendo mulheres jovens e adolescentes — pessoas que aprenderam cedo a se virar
              sozinhas, que desconfiam da própria necessidade de pedir ajuda, que repetem o mesmo
              padrão de relacionamento e ainda acham que o problema é um defeito pessoal.
            </p>
            <p>
              Se tu sente que as pessoas te abandonam, que não sabe falar sobre o que sente, ou que
              precisa performar competência pra não ser deixada: faz sentido a gente conversar.
            </p>
            <p>
              A terapia não promete cura rápida nem felicidade eterna. Promete um lugar onde tua dor
              pode ser traduzida, sem ser reduzida a diagnóstico.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Image
            src="/carolina/chao.jpg"
            alt={`${site.name} sentada no chão, sorrindo, em um ambiente claro`}
            width={900}
            height={1200}
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}
