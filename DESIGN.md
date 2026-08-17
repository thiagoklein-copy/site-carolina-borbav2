# Carolina Borba — visual system

> A warm paper room: cream ground, earthy greens, gold names over a grayscale portrait, and one Verde Médio action.

**Theme:** light (cream paper, not clinic white). Dark bands in Verde Sombra and Castanho for contrast, like turning a page into shadow.

The site follows the [Mariana Rosa](https://workspaceonline.my.canva.site/psi-mariana-rosa) page rhythm (full-bleed portrait hero, overlapping name + script, cream about, photographic divider, chocolate/green approach band, conversational close) and the cinematic hero of [Katachi](https://katachi-seven-gamma.vercel.app/) (viewport-tall image, slow parallax, oversized type). Color is the official brand palette. The Origin Financial `DESIGN.md` is archived at `brand/origin-design-reference.md` and is **not** the look of this site — only its spacing scale and the idea of a loud display colliding with a quieter body.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Creme | `#F4ECDC` | `--creme` | Page canvas |
| Papel | `#EFE4D0` | `--papel` | Alternate light band |
| Amarelo Manhã | `#E5C77A` | `--manha` | Hero names, script accents on dark |
| Verde Oliva | `#8C9B5A` | `--oliva` | Support |
| Verde Médio | `#78954B` | `--verde` | Primary action |
| Laranja Terroso | `#D08A5A` | `--laranja` | Rare warmth |
| Rosa Queimado | `#D48D83` | `--rosa` | Soft accent |
| Cinza Argila | `#A89B8A` | `--argila` | Hairline, mute |
| Castanho | `#6B4630` | `--castanho` | Display on cream |
| Verde Sombra | `#2E3A22` | `--sombra` | Dark bands, hero overlay |
| Bordô | `#A25957` | `--bordo` | Rare accent, not the primary button |
| Tinta | `#3D2E22` | `--tinta` | Body on cream (warm, never gray) |

None of the brand hues saturate. Temperature stays earthy.

## Tokens — Typography

- **Display:** Bricolage Grotesque, extra-bold, lowercase, tracking −0.04em. Headlines only.
- **Script:** Pinyon Script. One decorative word per section (“Borba”, “atendimentos”, “esquema”, “conversar”).
- **Body:** Figtree, 18px, line-height ~1.65, measure ≤62ch.

Do not use Inter, Playfair, DM Sans, or a coach-y geometric sans as the voice of the page.

## Components

### Primary CTA
Verde Médio fill, cream type, uppercase tracked label, no pill rounding. Ghost outline only on dark photography.

### Hero
Full viewport. Painterly field (`public/carolina/hero-fundo.jpg`). Audience and CRP in Castanho. Overlapping name in Verde Sombra (dark type on the light painting, never Amarelo Manhã or Bordô here). Brand line in Tinta. Bottom-center liquid-glass pill. No Bordô button in the hero — WhatsApp stays the conversion, later on the page.

### Photographic divider
Full-bleed grayscale photo with gold “meus / atendimentos”.

### Approach band
Verde Sombra canvas, cream body, script accent in Amarelo Manhã.

## Imagery

Real photos of Carolina only. Hero in grayscale; later sections in color. No stock therapy rooms, no invented patients.

## Motion

One slow hero parallax (image scale/translate on scroll). Section reveals: 0.7s ease, slight rise, once. No bounce.

## Do

- Keep “tu” and Carolina’s own Sobre Mim wording.
- Identify Psicóloga + nome completo + CRP on the first and last screens.
- WhatsApp is the only conversion.

## Don’t

- Dark-violet Origin look, glassmorphism nav, nested cards, testimonials, promised results, or a second primary button color.
