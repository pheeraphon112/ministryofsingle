# 🏛️ ministryofsingle.com — Web
## Next.js 14 | App Router | TypeScript | Tailwind

---

## Claude Code — อ่านก่อนทำงาน

**Domain role:** Brand HQ, media, community สำหรับคนโสด  
**Tone:** Editorial, warm, confident — ไม่ใช่ dating app  
**Design:** ดู `../design/BRAND.md` ก่อน implement UI  
**Colors/Fonts:** ดู `../../_shared/brand-tokens.ts` → `ministryOfSingle`  
**Types:** ดู `../../_shared/types/index.ts`

---

## Pages & Routes

```
app/
├── (marketing)/
│   ├── page.tsx              → Homepage
│   ├── about/page.tsx        → About Ministry
│   └── layout.tsx
│
├── (content)/
│   ├── articles/
│   │   ├── page.tsx          → Article listing
│   │   └── [slug]/page.tsx   → Article detail (MDX)
│   ├── categories/
│   │   └── [category]/page.tsx
│   └── layout.tsx
│
├── (community)/
│   ├── community/page.tsx    → Community hub
│   └── layout.tsx
│
├── (auth)/
│   ├── login/page.tsx
│   ├── signup/page.tsx
│   └── layout.tsx
│
├── (member)/               → Protected routes
│   ├── dashboard/page.tsx
│   ├── profile/page.tsx
│   └── layout.tsx
│
└── api/
    ├── auth/[...nextauth]/route.ts
    ├── articles/route.ts
    └── newsletter/route.ts
```

---

## Key Components to Build

| Component | Location | Description |
|-----------|----------|-------------|
| `Navbar` | components/layout/ | Main nav with auth state |
| `Footer` | components/layout/ | Links, newsletter signup |
| `ArticleCard` | components/content/ | Listing card |
| `ArticleHero` | components/content/ | Article header |
| `HeroSection` | components/marketing/ | Homepage hero |
| `CategoryFilter` | components/content/ | Filter bar |
| `NewsletterForm` | components/shared/ | Email capture |
| `MemberGate` | components/auth/ | Premium content blocker |

---

## Setup

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir

# Install additional deps
npm install @auth/prisma-adapter next-auth@beta
npm install @prisma/client prisma
npm install resend
npm install zustand
npm install @mdx-js/react @next/mdx gray-matter
npm install lucide-react
npm install clsx tailwind-merge
```

---

## package.json (key scripts)

```json
{
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "typecheck": "tsc --noEmit",
    "lint": "next lint"
  }
}
```

---

## Tailwind Config (globals.css)

```css
/* Import brand colors from tokens */
:root {
  --color-primary:   #1A1A2E;
  --color-accent:    #E63946;
  --color-gold:      #F4A261;
  --color-cream:     #F8F4EF;
  --color-charcoal:  #2D2D2D;
  --color-muted:     #8A8A9A;
  --color-border:    #E8E2DA;

  --font-display: 'Playfair Display', Georgia, serif;
  --font-heading: 'DM Serif Display', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
}

/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Serif+Display&family=DM+Sans:wght@300;400;500;600&display=swap');
```

---

## Priority Build Order (สำหรับ Claude Code)

1. `components/layout/Navbar.tsx` + `Footer.tsx`
2. `app/(marketing)/page.tsx` — Homepage
3. `app/(content)/articles/page.tsx` — Article listing
4. `app/(content)/articles/[slug]/page.tsx` — Article detail
5. `components/shared/NewsletterForm.tsx`
6. `app/(auth)/` — Auth flow
7. `app/(member)/` — Member dashboard
