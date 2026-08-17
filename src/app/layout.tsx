import { Bricolage_Grotesque, Figtree, Pinyon_Script } from "next/font/google"
import type { Metadata } from "next"
import { site } from "@/lib/site"
import "./globals.css"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-carolina-display",
  display: "swap",
})

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-carolina-body",
  display: "swap",
})

const script = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-carolina-script",
  display: "swap",
})

export const metadata: Metadata = {
  title: `${site.name} · Psicóloga`,
  description:
    "Um lugar seguro pra quem aprendeu a dar conta de tudo sozinha. Terapia do Esquema Contextual em Novo Hamburgo e online.",
  authors: [{ name: site.fullName }],
  openGraph: {
    title: `${site.fullName} · Psicóloga`,
    description:
      "Traduzir dores que nunca tiveram nome. Atendimento presencial em Novo Hamburgo/RS e online.",
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body>
        {/*
          THESIS: a landing that feels like being received in a warm room, not a clinic funnel — names overlapping a real portrait, then a long conversation down the page.
          OWN-WORLD: cream paper, earthy greens and burnt rose, bold lowercase grotesque colliding with a slanted script, Bordô plates as the only hard action.
          STORY: she is not a defect; patterns learned in relation can be named; WhatsApp is the door.
          FIRST VIEWPORT: full-bleed grayscale portrait; gold “carolina” / script “Borba”; CRP and audience in the corners; Bordô CTA bottom-right.
          FORM: Mariana Rosa page rhythm + Katachi cinematic hero. Seed: user-pinned 2026-08-17.
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
        */}
        {children}
      </body>
    </html>
  )
}
