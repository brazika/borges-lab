import { useParams, Link, Navigate } from 'react-router-dom'
import { projects, getProject } from '../data/projects.js'
import { iconUrl } from '../stackIcons.js'
import { asset } from '../media.js'
import { useLang, ui } from '../i18n.jsx'

const CONTACT_EMAIL = 'contato@borges.lab' // ← troque pelo seu e-mail real

export default function CaseStudy() {
  const { slug } = useParams()
  const { lang } = useLang()
  const t = ui[lang]
  const project = slug ? getProject(slug) : undefined
  if (!project) return <Navigate to="/portfolio" replace />

  const c = project[lang]
  const idx = projects.findIndex((p) => p.slug === project.slug)
  const prev = projects[(idx - 1 + projects.length) % projects.length]
  const next = projects[(idx + 1) % projects.length]

  return (
    <div className="portfolio-page pf-project-detail">
      {/* NAV */}
      <nav className="pf-nav">
        <div className="pf-container pf-nav-inner">
          <Link to="/portfolio" className="pf-brand">
            <span className="pf-brand-mark">B</span>
            <span>BORGES.LAB</span>
          </Link>
          <div className="pf-nav-actions">
            <LangToggle />
            <a className="btn primary btnlink" href={`mailto:${CONTACT_EMAIL}`}>{t.nav.cta}</a>
          </div>
        </div>
      </nav>

      <div className="pf-container">
        <Link to="/portfolio" className="pf-back-link">{t.caseui.back}</Link>
      </div>

      {/* HERO */}
      <header className="pf-case-hero">
        <div className="pf-container">
          <div className="pf-case-client-line">
            <span className="pf-case-region">{t.region}</span>
            <span className="pf-case-tag">{c.category}</span>
          </div>
          <h1 className="pf-case-title">{project.title}</h1>
          <p className="pf-case-hero-tagline">{c.tagline}</p>
          {project.link && (
            <a className="btn ghost btnlink" href={project.link} target="_blank" rel="noreferrer" style={{ marginTop: '1.2rem' }}>
              {t.caseui.repo}
            </a>
          )}
        </div>
      </header>

      <div className="pf-container">
        {/* VISUAL */}
        <div className="pf-case-visual-large" style={{ background: project.accent }}>
          {project.videoSrc ? (
            <video className="pf-video-stage" src={asset(project.videoSrc)} controls playsInline preload="metadata" />
          ) : project.thumbnail ? (
            <img className="pf-video-stage" src={asset(project.thumbnail)} alt={project.title} />
          ) : (
            <span className="pf-case-play">▶</span>
          )}
        </div>

        {/* DEEP DIVE */}
        <div className="pf-deepdive">
          <div className="pf-deepdive-block">
            <div className="pf-deepdive-head">
              <span className="eyebrow">{t.caseui.overviewEy}</span>
              <h2>{t.caseui.overviewT}</h2>
            </div>
            <p className="lead-copy">{c.description}</p>
          </div>

          <div className="pf-deepdive-block">
            <div className="pf-deepdive-head">
              <span className="eyebrow">{t.caseui.hlEy}</span>
              <h2>{t.caseui.hlT}</h2>
            </div>
            <ul className="pf-highlights">
              {c.highlights.map((h, i) => (
                <li key={i} className="pf-highlight">
                  <span className="pf-highlight-dot" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="pf-deepdive-block">
            <div className="pf-deepdive-head">
              <span className="eyebrow">{t.caseui.stackEy}</span>
              <h2>{t.caseui.stackT}</h2>
            </div>
            <div className="pf-pill-row">
              {project.stack.map((s) => {
                const icon = iconUrl(s)
                return (
                  <span key={s} className="pf-stack-badge">
                    {icon && <img className="pf-stack-ico" src={icon} alt="" loading="lazy" />}
                    {s}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* PREV / NEXT */}
      <section className="pf-section">
        <div className="pf-container pf-case-nav-grid">
          <Link to={`/portfolio/${prev.slug}`} className="pf-case-nav-link">
            <span className="pf-case-nav-label">{t.caseui.prev}</span>
            <strong>{prev.title}</strong>
          </Link>
          <Link to={`/portfolio/${next.slug}`} className="pf-case-nav-link pf-case-nav-link-end">
            <span className="pf-case-nav-label">{t.caseui.next}</span>
            <strong>{next.title}</strong>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pf-footer">
        <div className="pf-container pf-footer-grid">
          <Link to="/portfolio" className="pf-brand">
            <span className="pf-brand-mark">B</span>
            <span>BORGES.LAB</span>
          </Link>
          <p>{t.caseui.liked} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          <span className="pf-origin-line">© {new Date().getFullYear()} borges.lab</span>
        </div>
      </footer>
    </div>
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
