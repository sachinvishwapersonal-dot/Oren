# Oren Brand Tokens

Source: `Oren Palette - Silver Garnet.png` and `07 Oren Colour Palette - Silver Garnet.docx`.

## Colour

| Token | Hex | Use |
| --- | --- | --- |
| Ink | `#0F1E20` | Headlines, body text, dark sections |
| White | `#FFFFFF` | Main background, product pages, packs |
| Fog | `#F2F2F2` | Cards, sections, packaging panels |
| Silver | `#CECECE` | Lines, borders, sheen |
| Graphite | `#5F6466` | Secondary text and metadata |
| Garnet | `#B3263E` | Primary buttons, links, tags, pack stripe |

Derived hover values:

| Token | Value |
| --- | --- |
| Garnet hover | `#8A1C30` |
| Ink soft | `#5F6466` |

Garnet is not used for text on ink or other dark surfaces. White buttons are used on dark sections instead.

## Typography

| Role | Font | Setting |
| --- | --- | --- |
| Display and headings | Inter | Bold or ExtraBold |
| Body | Inter | Regular 400, Semibold 600 for emphasis |
| Labels and data | Inter | Semibold or Bold, spaced uppercase |

The site loads Inter through `next/font/google` and uses it for both body and label styles.

## Implementation

- Tokens live in `src/app/globals.css` under `@theme` and `:root`.
- Font loading lives in `src/app/layout.tsx`.
- Product artwork is neutral white and Fog with a Garnet stripe.
- SVG favicon and social image use the same palette.
