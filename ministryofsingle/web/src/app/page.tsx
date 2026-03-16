// app/(marketing)/page.tsx
// ministryofsingle.com — Homepage
// ============================================================

import Link from 'next/link'
import type { Article } from '../../../../_shared/types'

// ─── Placeholder data (replace with API calls) ───────────────
const featuredArticles: Partial<Article>[] = [
  {
    id: '1',
    slug: 'guide-finance-for-singles',
    title: 'คู่มือการเงินฉบับคนโสด: วางแผนเองได้ ไม่ต้องง้อใคร',
    excerpt: 'คนโสดมีข้อได้เปรียบที่คนมีคู่ไม่มี — อิสระในการตัดสินใจ 100%',
    category: 'finance' as const,
    readingTimeMinutes: 8,
    publishedAt: '2026-03-01',
    coverImage: '/images/articles/finance-cover.jpg',
  },
  {
    id: '2',
    slug: 'solo-travel-thailand-guide',
    title: '50 ที่ในไทยที่คนโสดต้องไปสักครั้งในชีวิต',
    excerpt: 'เที่ยวคนเดียวไม่ได้แปลว่าเหงา — แต่แปลว่าเสรีภาพ',
    category: 'travel' as const,
    readingTimeMinutes: 12,
    publishedAt: '2026-02-28',
    coverImage: '/images/articles/travel-cover.jpg',
  },
  {
    id: '3',
    slug: 'thriving-single-stories',
    title: 'Thriving Single: 5 คนโสดไทยที่ใช้ชีวิตได้ดีกว่าตอนมีแฟน',
    excerpt: 'พวกเขาไม่ได้โสดเพราะไม่มีตัวเลือก แต่เพราะพวกเขาเลือกแล้ว',
    category: 'community' as const,
    readingTimeMinutes: 6,
    publishedAt: '2026-02-25',
    coverImage: '/images/articles/community-cover.jpg',
  },
]

const stats = [
  { number: '15M+', label: 'คนโสดในไทย' },
  { number: '40%', label: 'ของ Gen Y โสดอยู่' },
  { number: '1 ใน 3', label: 'ครัวเรือนไทยเป็น single household' },
]

// ─── Page ────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">

      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'url(/images/noise.png)', backgroundSize: '200px' }}
        />

        <div className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-6">
              Ministry of Single — Thailand
            </p>

            {/* Headline */}
            <h1 className="font-display text-5xl lg:text-7xl text-cream leading-[1.05] mb-8">
              คนโสด<br />
              <span className="text-accent">ไม่ได้ต้องการ</span><br />
              ให้ใครมา fix
            </h1>

            {/* Subtext */}
            <p className="font-body text-cream/70 text-xl lg:text-2xl max-w-2xl mb-12 leading-relaxed">
              พวกเขาต้องการให้ใครมา <span className="text-gold font-medium">serve</span> ในแบบที่พวกเขาเป็น
              Ministry of Single คือ platform สำหรับคนโสดไทยที่ใช้ชีวิตเต็มที่
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/articles"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-body font-medium text-lg rounded-full hover:bg-accent/90 transition-colors"
              >
                เริ่มอ่านบทความ
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center justify-center px-8 py-4 border border-cream/30 text-cream font-body font-medium text-lg rounded-full hover:bg-cream/10 transition-colors"
              >
                เข้าร่วม Community
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 hidden lg:block">
          <div className="w-full h-full bg-gradient-to-l from-gold/30 to-transparent" />
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-accent py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl lg:text-4xl text-white font-bold">
                  {stat.number}
                </p>
                <p className="font-body text-white/80 text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Articles ── */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-body text-accent text-sm tracking-[0.2em] uppercase mb-2">
                บทความล่าสุด
              </p>
              <h2 className="font-display text-4xl text-primary">
                อ่านอะไรดีวันนี้?
              </h2>
            </div>
            <Link
              href="/articles"
              className="font-body text-charcoal/60 hover:text-accent transition-colors underline underline-offset-4"
            >
              ดูทั้งหมด →
            </Link>
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
          <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-4">
            Newsletter
          </p>
          <h2 className="font-display text-4xl text-cream mb-6">
            ข่าวสารสำหรับคนโสด<br />ส่งตรงถึง inbox
          </h2>
          <p className="font-body text-cream/60 mb-10">
            บทความใหม่ + insight จาก What Single Want + ข่าว Single Expo
            ทุกสัปดาห์ — ไม่ spam
          </p>
          <NewsletterInline />
        </div>
      </section>

    </main>
  )
}

// ─── Sub-components ──────────────────────────────────────────

function ArticleCard({ article }: { article: Partial<Article> }) {
  const categoryColors: Record<string, string> = {
    finance:   'bg-blue-100 text-blue-800',
    travel:    'bg-green-100 text-green-800',
    community: 'bg-purple-100 text-purple-800',
    lifestyle: 'bg-orange-100 text-orange-800',
    wellness:  'bg-pink-100 text-pink-800',
    career:    'bg-yellow-100 text-yellow-800',
  }

  return (
    <Link href={`/articles/${article.slug}`} className="group">
      <article className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Cover image placeholder */}
        <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10" />

        <div className="p-6">
          {/* Category badge */}
          {article.category && (
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium font-body mb-3 ${categoryColors[article.category] ?? 'bg-gray-100 text-gray-700'}`}>
              {article.category}
            </span>
          )}

          {/* Title */}
          <h3 className="font-heading text-xl text-charcoal leading-snug mb-3 group-hover:text-accent transition-colors">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="font-body text-muted text-sm leading-relaxed mb-4 line-clamp-2">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-3 text-muted text-xs font-body">
            <span>{article.readingTimeMinutes} นาที</span>
            <span>·</span>
            <span>{article.publishedAt}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

function NewsletterInline() {
  return (
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        placeholder="your@email.com"
        className="flex-1 px-5 py-4 rounded-full bg-white/10 border border-cream/20 text-cream placeholder:text-cream/40 font-body focus:outline-none focus:border-gold"
      />
      <button
        type="submit"
        className="px-8 py-4 bg-accent text-white font-body font-medium rounded-full hover:bg-accent/90 transition-colors whitespace-nowrap"
      >
        สมัคร ฟรี
      </button>
    </form>
  )
}
