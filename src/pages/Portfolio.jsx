import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { iconUrl } from '../stackIcons.js'
import { useLang, ui } from '../i18n.jsx'

const CONTACT_EMAIL = 'contato@borges.lab' // ← troque pelo seu e-mail real

// Tecnologias em destaque no marquee — edite à vontade.
const stack = [
  'React', 'TypeScript', 'Next.js', 'Vite', 'Flask', 'Python',
  'Node.js', 'Supabase', 'Convex', 'PostgreSQL', 'Docker', 'Streamlit',
  'OpenAI', 'GPT-4o', 'Gemini', 'Apify', 'FFmpeg', 'Tailwind CSS',
  'Pix EFI', 'Cloudflare', 'Fly.io', 'Notion API', 'Telegram',
]

function Chip({ label }) {
  const icon = iconUrl(label)
  return (
    <span className="pf-stack-chip">
      {icon && <img className="pf-stack-ico" src={icon} alt="" loading="lazy" />}
      {label}
    </span>
  )
}

function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="pf-lang" role="group" aria-label="Idioma / Language">
      <button className={lang === 'pt' ? 'active' : ''} onClick={() => setLang('pt')}>PT</button>
      <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
    </div>
  )
}

export default function Portfolio() {
  const { lang } = useLang()
  const t = ui[lang]

  const half = Math.ceil(stack.length / 2)
  const rowA = stack.slice(0, half)
  const rowB = stack.slice(half)

  return (
    <div className="portfolio-page">
      {/* NAV */}
      <nav className="pf-nav">
        <div className="pf-container pf-nav-inner">
          <div className="pf-brand">
            <span className="pf-brand-mark">B</span>
            <span>BORGES.LAB</span>
          </div>
          <div className="pf-nav-links">
            <a href="#work">{t.nav.work}</a>
            <a href="#philosophy">{t.nav.philosophy}</a>
            <a href="#stack">{t.nav.stack}</a>
          </div>
          <div className="pf-nav-actions">
            <LangToggle />
            <a className="btn primary btnlink" href={`mailto:${CONTACT_EMAIL}`}>{t.nav.cta}</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="pf-hero">
        <div className="pf-container">
          <span className="eyebrow">Portfolio</span>
          <h1>
            <span className="gradient-text">{t.hero.h1a}</span>
            <br />
            {t.hero.h1b}
          </h1>
          <p className="lead-copy">{t.hero.lead}</p>
          <p className="pf-origin-line">{t.hero.origin}</p>
          <div className="pf-hero-actions">
            <a href="#work" className="btn primary btnlink">{t.hero.cta1}</a>
            <a href="#stack" className="btn ghost btnlink">{t.hero.cta2}</a>
          </div>
        </div>
      </header>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="pf-section pf-philosophy">
        <div className="pf-container">
          <div className="pf-section-head">
            <span className="eyebrow">{t.philosophy.eyebrow}</span>
            <h2>{t.philosophy.title}</h2>
            <p>{t.philosophy.sub}</p>
          </div>
          <div className="pf-principle-grid">
            {t.philosophy.items.map((p) => (
              <div key={p.i} className="pf-principle-card">
                <span className="pf-principle-index">{p.i}</span>
                <h3>{p.t}</h3>
                <p>{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="pf-section">
        <div className="pf-container">
          <div className="pf-section-head">
            <span className="eyebrow">{t.work.eyebrow}</span>
            <h2>{t.work.title}</h2>
            <p>{t.work.sub}</p>
          </div>
          <div className="pf-case-grid">
            {projects.map((e) => {
              const c = e[lang]
              return (
                <Link key={e.slug} to={`/portfolio/${e.slug}`} className="pf-case-card">
                  <div
                    className="pf-case-card-visual"
                    style={
                      e.thumbnail
                        ? { backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.55)), url(${e.thumbnail})` }
                        : { background: e.accent }
                    }
                  >
                    {e.videoSrc && <span className="pf-case-play">▶</span>}
                  </div>
                  <div className="pf-case-card-body">
                    <div className="pf-case-card-meta">
                      <span className="pf-case-region">{t.region}</span>
                      <span className="pf-case-tag">{c.category}</span>
                    </div>
                    <h3 className="pf-case-title">{e.title}</h3>
                    <p className="pf-case-tagline">{c.tagline}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="pf-section pf-section-tight">
        <div className="pf-container">
          <div className="pf-section-head">
            <span className="eyebrow">{t.stack.eyebrow}</span>
            <h2>{t.stack.title}</h2>
            <p>{t.stack.sub}</p>
          </div>
        </div>
        <div className="pf-stack-marquee">
          <div className="pf-stack-track">
            {[...rowA, ...rowA].map((s, i) => <Chip key={`a${i}`} label={s} />)}
          </div>
          <div className="pf-stack-track pf-stack-track-reverse">
            {[...rowB, ...rowB].map((s, i) => <Chip key={`b${i}`} label={s} />)}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pf-footer">
        <div className="pf-container pf-footer-grid">
          <div className="pf-brand">
            <span className="pf-brand-mark">B</span>
            <span>BORGES.LAB</span>
          </div>
          <p>{t.footer.line} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          <span className="pf-origin-line">© {new Date().getFullYear()} borges.lab</span>
        </div>
      </footer>
    </div>
  )
}
