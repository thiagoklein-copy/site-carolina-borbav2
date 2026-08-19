import { Reveal } from "@/components/reveal"

export function Approach() {
  return (
    <section className="bg-sombra py-24 text-creme md:py-32">
      <div className="wrap">
        <Reveal>
          <h2 className="display max-w-[16ch] text-[clamp(2.6rem,7vw,5.2rem)]">
            terapia do
            <span className="script ml-3 inline-block text-[1.08em] text-manha">esquema</span>
            <span className="block">contextual</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start md:gap-x-16 md:gap-y-0">
          <Reveal delay={0.05}>
            <div className="prose-brand [&_p+p]:mt-0 space-y-5 text-[1.05rem] text-creme/90 md:text-lg">
              <p>
                Meus atendimentos são guiados pela Terapia do Esquema e também integram princípios
                e recursos práticos das terapias comportamentais contextuais, como a Terapia de
                Aceitação e Compromisso (ACT) e o mindfulness.
              </p>
              <p>
                Na prática, isso significa que nosso objetivo não é apenas eliminar sintomas
                isolados. O foco é compreender e flexibilizar padrões emocionais e comportamentais
                que, muitas vezes, acabam causando sofrimento.
              </p>
              <p>
                Esses padrões se formam nas nossas primeiras experiências, ainda na infância e
                adolescência, e podem influenciar, no presente, a forma como nos relacionamos com nós
                mesmos e com os outros.
              </p>
              <p>
                Sabe aquela sensação de que tu precisas ser a melhor em tudo o que faz? Ou quando
                percebes que alguém importante se distanciou e logo tem certeza de que a culpa é tua
                ou de que será abandonada?
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="prose-brand [&_p+p]:mt-0 space-y-5 text-[1.05rem] text-creme/90 md:text-lg">
              <p>
                A Terapia do Esquema nos ajuda a compreender por que reagimos dessa forma e, a
                partir disso, a desenvolver novas maneiras de lidar com essas situações — de forma
                mais consciente e alinhada ao que é importante para nós no aqui e agora.
              </p>
              <p>
                Além disso, essa abordagem valoriza muito a relação terapêutica, ou seja, o vínculo
                construído entre paciente e psicóloga.
              </p>
              <p>
                Por isso, meu envolvimento no processo está longe da ideia de uma “cirurgiã fria” e
                distante. Prefiro estar presente como uma pessoa de verdade diante da tua
                vulnerabilidade e oferecer, dentro dos limites da relação terapêutica, aquilo de que
                o nosso processo precisar.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
