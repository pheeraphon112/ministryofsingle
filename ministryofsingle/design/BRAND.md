# 🎨 Brand Guide — ministryofsingle.com
## Design System & UI Specifications

---

## Brand Essence

| Attribute | Detail |
|-----------|--------|
| **Personality** | Editorial, warm, confident, witty |
| **Tone** | Respectful of singlehood — never pitying |
| **Feeling** | "This platform gets me" |
| **NOT** | Sad, desperate, try-hard, generic lifestyle |

---

## Color System

### Primary Palette
```
Primary (Navy)    #1A1A2E    ████  Authority, depth, brand anchor
Accent (Red)      #E63946    ████  Energy, CTA, callouts
Gold              #F4A261    ████  Warmth, celebration, highlight
Cream             #F8F4EF    ████  Background (warm, not cold white)
```

### Supporting Palette
```
Charcoal          #2D2D2D    ████  Body text
Muted             #8A8A9A    ████  Secondary text, placeholders
Border            #E8E2DA    ████  Dividers, card borders
Surface           #FFFFFF    ████  Card backgrounds
```

### Usage Rules
- **Navy** = Headers, navbar, footer, premium sections
- **Red Accent** = CTAs (1 per screen max), links, badges
- **Gold** = Highlights, rewards, special moments
- **Cream** = Page backgrounds (never pure white for comfort)
- **Never** use purple — that's Single Expo territory

---

## Typography

### Font Stack
```
Display:   Playfair Display (900, 700, 400)    → Big headlines only
Heading:   DM Serif Display (400)               → Section headers
Body:      DM Sans (600, 500, 400, 300)         → Everything else
Mono:      JetBrains Mono                       → Code, data
```

### Type Scale
```
Hero (display):      64–96px / 1.0 line-height
Section H2:          36–48px / 1.1
Card Title:          20–24px / 1.3
Body Large:          18px / 1.6
Body Regular:        16px / 1.6
Body Small:          14px / 1.5
Caption:             12px / 1.4
Label (uppercase):   11–12px / letter-spacing 0.15–0.3em
```

---

## Spacing System

```
4px   xs
8px   sm
16px  md (base unit)
24px  lg
32px  xl
48px  2xl
64px  3xl
96px  4xl
```

Container max-width: **1200px**  
Content max-width: **680px** (articles)  
Page horizontal padding: **24px mobile / 48px desktop**

---

## Component Specs

### Buttons
```
Primary CTA:
  bg: #E63946 | text: white | padding: 16px 32px
  border-radius: 9999px (full pill)
  font: DM Sans 600 16px
  hover: opacity 0.9
  
Secondary:
  bg: transparent | border: 1.5px #E8E2DA | text: #2D2D2D
  same shape + padding
  hover: bg #F8F4EF
  
Text link:
  color: #E63946 | underline-offset: 4px
  hover: opacity 0.8
```

### Cards
```
Article card:
  bg: white | border: 1px #E8E2DA
  border-radius: 16px
  padding: 24px
  shadow: none (flat design)
  hover: box-shadow 0 8px 32px rgba(0,0,0,0.08) + translate-y -4px
```

### Navigation
```
Desktop navbar:
  bg: #1A1A2E (primary)
  height: 64px
  logo: left | links: center | auth: right
  link color: white/70 → white on hover

Mobile navbar:
  Bottom tab bar
  bg: white | border-top: 1px #E8E2DA
  active: #E63946 | inactive: #8A8A9A
```

---

## Iconography

- Use **Lucide React** (web) / **Material Icons Outlined** (Flutter)
- Stroke weight: 1.5px
- Size: 20px standard, 24px for nav items
- Color: inherit from parent text color

---

## Imagery & Photography

### Art Direction
- **Real people** — authentic, not stock-photo perfect
- **Solo subjects** — person alone, happy, engaged in activity
- **Thai context** — Thai faces, Thai environments
- **Warm tone** — slight warm grade, not cold blue
- **Activities** > portraits — person doing something interesting

### Aspect Ratios
```
Hero: 16:9 or full-width
Article cover: 16:9
Thumbnail: 3:2
Avatar: 1:1 (circle)
```

---

## Do / Don't

| ✅ Do | ❌ Don't |
|-------|---------|
| Show singles living fully | Show sad/lonely person |
| Warm editorial headlines | Corporate jargon |
| Cream/navy background | Pure white or grey |
| Playfair Display for big moments | Overuse display font |
| Single CTA per section | Multiple competing CTAs |
| Authentic Thai photography | Western stock photos |

---

## Figma File Structure (to be created)

```
Pages:
├── 🎨 Design System     → Colors, typography, components
├── 📱 Mobile (375px)    → Key screens
├── 💻 Desktop (1440px)  → Key pages
├── 🧩 Components        → Reusable component library
└── 📝 Content Templates → Article, homepage, category
```

---

*Design review: Before each major release*  
*Figma link: [add when created]*
