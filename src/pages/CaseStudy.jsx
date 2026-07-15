import { useParams, Link, Navigate } from 'react-router-dom'
import { projects, getProject } from '../data/projects.js'

const CONTACT_EMAIL = 'contato@borges.lab' // ← troque pelo seu e-mail real

export default function CaseStudy() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined
  if (!project) return <Navigate to="/portfolio" replace />

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
          <div className="pf-nav-links">
            <Link to="/portfolio#work">Selected Work</Link>
            <Link to="/portfolio#stack">Stack</Link>
          </div>
          <a className="btn primary btnlink" href={`mailto:${CONTACT_EMAIL}`}>
            Get in touch
          </a>
        </div>
      </nav>

      <div className="pf-container">
        <Link to="/portfolio" className="pf-back-link">← All work</Link>
      </div>

      {/* HERO */}
      <header className="pf-case-hero">
        <div className="pf-container">
          <div className="pf-case-client-line">
            {project.client && <span className="pf-case-client">{project.client}</span>}
            <span className="pf-case-region">{project.region}</span>
            <span className="pf-case-tag">{project.category}</span>
          </div>
          <h1 className="pf-case-title">{project.title}</h1>
          <p className="pf-case-hero-tagline">{project.tagline}</p>
        </div>
      </header>

      <div className="pf-container">
        {/* VISUAL */}
        <div className="pf-case-visual-large" style={{ background: project.accent }}>
          {project.videoSrc ? (
            <video className="pf-video-stage" src={project.videoSrc} controls playsInline />
          ) : project.thumbnail ? (
            <img className="pf-video-stage" src={project.thumbnail} alt={project.title} />
          ) : (
            <span className="pf-case-play">▶</span>
          )}
        </div>

        {/* DEEP DIVE */}
        <div className="pf-deepdive">
          <div className="pf-deepdive-block">
            <div className="pf-deepdive-head">
              <span className="eyebrow">Overview</span>
              <h2>O que é.</h2>
            </div>
            <p className="lead-copy">{project.description}</p>
          </div>

          <div className="pf-deepdive-block">
            <div className="pf-deepdive-head">
              <span className="eyebrow">Highlights</span>
              <h2>O que importa.</h2>
            </div>
            <ul className="pf-highlights">
              {project.highlights.map((h, i) => (
                <li key={i} className="pf-highlight">
                  <span className="pf-highlight-dot" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="pf-deepdive-block">
            <div className="pf-deepdive-head">
              <span className="eyebrow">Stack</span>
              <h2>Como foi feito.</h2>
            </div>
            <div className="pf-pill-row">
              {project.stack.map((s) => (
                <span key={s} className="pf-stack-badge">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PREV / NEXT */}
      <section className="pf-section">
        <div className="pf-container pf-case-nav-grid">
          <Link to={`/portfolio/${prev.slug}`} className="pf-case-nav-link">
            <span className="pf-case-nav-label">← Previous</span>
            <strong>{prev.title}</strong>
          </Link>
          <Link to={`/portfolio/${next.slug}`} className="pf-case-nav-link pf-case-nav-link-end">
            <span className="pf-case-nav-label">Next →</span>
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
          <p>
            Gostou do que viu?{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <span className="pf-origin-line">© {`${new Date().getFullYear()}`} borges.lab</span>
        </div>
      </footer>
    </div>
  )
}
