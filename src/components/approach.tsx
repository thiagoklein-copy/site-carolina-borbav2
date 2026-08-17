import { Reveal } from "@/components/reveal"

export function Approach() {
  return (
    <section className="bg-sombra py-24 text-creme md:py-32">
      <div className="wrap">
        <Reveal>
          <h2 className="display max-w-[16ch] text-[clamp(2.6rem,7vw,5.2rem)]">
            terapia do
            <span className="script ml-3 inline-block text-[0.72em] text-manha">esquema</span>
            <span className="block">contextual</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.05}>
            <div className="prose-brand text-[1.05rem] text-creme/90 md:text-lg">
              <p>
                Padrões emocionais rígidos se formam na relação — e é também através da relação que
                podem ser reparados. A Terapia do Esquema Contextual olha pra história e pro
                contexto que formaram o que tu vive hoje: medo de abandono, autocrítica, dificuldade
                de pedir ajuda, a sensação de que tem alguma coisa de errado com você.
              </p>
              <p>
                Não é defeito. É um modo que fez sentido um dia. O trabalho é compreender esse
                modo, com rigor e com cuidado, pra que tu possa escolher de outro jeito.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="prose-brand text-[1.05rem] text-creme/90 md:text-lg">
              <p>
                Escolhi essa abordagem pelo olhar integrativo: ela une teoria do apego, elementos da
                psicanálise, da gestalt e das terapias contextuais. Cito Bowlby, Ainsworth, Young —
                não pra dar aula, e sim pra ter chão quando a gente for nomear o que dói.
              </p>
              <p>
                No consultório, meu envolvimento é distante do “cirurgião frio”. É sobre ser uma
                pessoa real contigo diante da tua vulnerabilidade: amparo, segurança ou limites, o
                que a relação pedir.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
