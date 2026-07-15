import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

const CONTACT_EMAIL = 'contato@borges.lab' // ← troque pelo seu e-mail real

const principles = [
  {
    index: '01',
    title: 'Contexto é rei.',
    body: 'O contexto certo deixa um LLM resolver quase qualquer tarefa bem. A maior parte da engenharia está em acertar esse contexto — não na chamada do modelo.',
  },
  {
    index: '02',
    title: 'Determinístico > mágica.',
    body: 'Automação tem que ser auditável e reversível em cada etapa, com gate de aprovação humana no que é crítico — não uma caixa-preta opaca.',
  },
  {
    index: '03',
    title: 'Sistemas de agentes.',
    body: 'A espinha dorsal de uma operação moderna é um conjunto coordenado de agentes com memória e ferramentas — não um chatbot genérico colado num site.',
  },
]

// Tecnologias que aparecem nos projetos — edite à vontade.
const stack = [
  'React', 'TypeScript', 'Next.js', 'Vite', 'Flask', 'Python',
  'Node.js', 'Supabase', 'Convex', 'PostgreSQL', 'Docker', 'Streamlit',
  'OpenAI', 'GPT-4o', 'Gemini', 'MediaPipe', 'FFmpeg', 'Tailwind CSS',
  'Pix EFI', 'Teldrive', 'Cloudflare', 'Fly.io', 'Notion API', 'Telegram',
]

export default function Portfolio() {
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
            <a href="#about">About</a>
            <a href="#work">Selected Work</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#stack">Stack</a>
          </div>
          <a className="btn primary btnlink" href={`mailto:${CONTACT_EMAIL}`}>
            Get in touch
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="pf-hero">
        <div className="pf-container">
          <span className="eyebrow">Portfolio</span>
          <h1>
            <span className="gradient-text">AI infrastructure</span>
            <br />
            automation, agents & sistemas em produção.
          </h1>
          <p className="lead-copy">
            Henrique Borges — engenheiro de sistemas que constrói produtos de IA,
            esteiras de conteúdo automatizadas e infraestrutura de verdade, do banco
            ao deploy. Foco em automação determinística, pipelines de mídia e agentes
            que rodam sozinhos.
          </p>
          <p className="pf-origin-line">
            Baseado no Brasil, construindo do zero: de content farms lo-fi e lojas com
            Pix nativo a servidores de jogo customizados e motores agentic de leads.
          </p>
          <div className="pf-hero-actions">
            <a href="#work" className="btn primary btnlink">View Selected Work</a>
            <a href="#stack" className="btn ghost btnlink">See the Stack</a>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="pf-section pf-about">
        <div className="pf-container pf-about-grid">
          <div className="pf-about-copy">
            <span className="eyebrow">About</span>
            <h2>Construindo sistemas, não demos.</h2>
            <p className="lead-copy">
              Gosto de ir fundo onde a maioria para na superfície: entender o sistema
              camada por camada — do frontend ao banco, do worker de pagamento à VPS —
              até a coisa funcionar de verdade em produção. Essa teimosia de ir até a
              raiz virou o método de tudo que faço.
            </p>
            <p className="lead-copy">
              Isso vira produto: uma loja com checkout Pix real, esteiras de conteúdo
              com IA, um app de vistoria self-service, storage próprio sobre o Telegram,
              dashboards de operação e ferramentas de vídeo. Full-stack de verdade — do
              banco ao deploy.
            </p>
            <p className="pf-origin-line">
              Bilíngue, Brasil. Entrego sistemas que ficam de pé sozinhos.
              <br />
              <em>(rascunho de bio — me corrija que ajusto)</em>
            </p>
          </div>
          <div className="pf-about-stats">
            <div className="pf-about-stat">
              <strong>Full-stack</strong>
              <span>do banco ao deploy</span>
            </div>
            <div className="pf-about-stat">
              <strong>AI pipelines</strong>
              <span>imagem, vídeo, texto e voz</span>
            </div>
            <div className="pf-about-stat">
              <strong>Infra própria</strong>
              <span>VPS, Fly.io, Cloudflare, self-hosted</span>
            </div>
            <div className="pf-about-stat">
              <strong>borges.lab</strong>
              <span>builder & systems architect</span>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="pf-section pf-philosophy">
        <div className="pf-container">
          <div className="pf-section-head">
            <span className="eyebrow">Philosophy</span>
            <h2>Como os sistemas são construídos aqui.</h2>
            <p>Os princípios por trás de cada projeto deste portfólio.</p>
          </div>
          <div className="pf-principle-grid">
            {principles.map((p) => (
              <div key={p.index} className="pf-principle-card">
                <span className="pf-principle-index">{p.index}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="pf-section">
        <div className="pf-container">
          <div className="pf-section-head">
            <span className="eyebrow">Selected work</span>
            <h2>Sistemas colocados em produção.</h2>
            <p>Projetos próprios e de cliente — escolha um para ver o case completo.</p>
          </div>
          <div className="pf-case-grid">
            {projects.map((e) => (
              <Link key={e.slug} to={`/portfolio/${e.slug}`} className="pf-case-card">
                <div
                  className="pf-case-card-visual"
                  style={
                    e.thumbnail
                      ? {
                          backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.05), rgba(0,0,0,.55)), url(${e.thumbnail})`,
                        }
                      : { background: e.accent }
                  }
                >
                  {e.videoSrc && <span className="pf-case-play">▶</span>}
                </div>
                <div className="pf-case-card-body">
                  <div className="pf-case-card-meta">
                    <span className="pf-case-region">{e.region}</span>
                    <span className="pf-case-tag">{e.category}</span>
                  </div>
                  <h3 className="pf-case-title">{e.title}</h3>
                  <p className="pf-case-tagline">{e.tagline}</p>
                  {e.client && <span className="pf-case-client">{e.client}</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="pf-section pf-section-tight">
        <div className="pf-container">
          <div className="pf-section-head">
            <span className="eyebrow">Stack</span>
            <h2>Ferramentas que uso no dia a dia.</h2>
            <p>Do frontend ao banco, do render de vídeo aos agentes.</p>
          </div>
        </div>
        <div className="pf-stack-marquee">
          <div className="pf-stack-track">
            {[...rowA, ...rowA].map((s, i) => (
              <span key={`a${i}`} className="pf-stack-chip">{s}</span>
            ))}
          </div>
          <div className="pf-stack-track pf-stack-track-reverse">
            {[...rowB, ...rowB].map((s, i) => (
              <span key={`b${i}`} className="pf-stack-chip">{s}</span>
            ))}
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
          <p>
            Vamos construir algo que fica de pé sozinho.{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <span className="pf-origin-line">© {`${new Date().getFullYear()}`} borges.lab</span>
        </div>
      </footer>
    </div>
  )
}
