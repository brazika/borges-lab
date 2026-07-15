import { createContext, useContext, useEffect, useState } from 'react'

const LangContext = createContext({ lang: 'pt', toggle: () => {}, setLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('lang')
      if (saved === 'pt' || saved === 'en') return saved
    } catch {}
    const nav = (typeof navigator !== 'undefined' && navigator.language) || ''
    return nav.toLowerCase().startsWith('pt') ? 'pt' : 'en'
  })

  useEffect(() => {
    try { localStorage.setItem('lang', lang) } catch {}
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const toggle = () => setLang((l) => (l === 'pt' ? 'en' : 'pt'))
  return <LangContext.Provider value={{ lang, setLang, toggle }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

// ── UI copy (chrome do site) ────────────────────────────────────────────────
export const ui = {
  pt: {
    region: 'Brasil',
    nav: { work: 'Trabalhos', philosophy: 'Filosofia', stack: 'Stack', cta: 'Fale comigo' },
    hero: {
      h1a: 'AI infrastructure',
      h1b: 'automação, agentes & sistemas em produção.',
      lead:
        'Leonardo Borges — engenheiro de sistemas que constrói produtos de IA, esteiras de conteúdo automatizadas e infraestrutura de verdade, do banco ao deploy. Foco em automação determinística, pipelines de mídia e agentes que rodam sozinhos.',
      origin:
        'Baseado no Brasil, construindo do zero: de content farms e lojas com Pix nativo a apps validados por IA e infraestrutura self-hosted.',
      cta1: 'Ver trabalhos',
      cta2: 'Ver a stack',
    },
    philosophy: {
      eyebrow: 'Filosofia',
      title: 'Como os sistemas são construídos aqui.',
      sub: 'Os princípios por trás de cada projeto deste portfólio.',
      items: [
        { i: '01', t: 'Contexto é rei.', b: 'O contexto certo deixa um LLM resolver quase qualquer tarefa bem. A maior parte da engenharia está em acertar esse contexto — não na chamada do modelo.' },
        { i: '02', t: 'Determinístico > mágica.', b: 'Automação tem que ser auditável e reversível em cada etapa, com gate de aprovação humana no que é crítico — não uma caixa-preta opaca.' },
        { i: '03', t: 'Sistemas de agentes.', b: 'A espinha dorsal de uma operação moderna é um conjunto coordenado de agentes com memória e ferramentas — não um chatbot genérico colado num site.' },
      ],
    },
    work: { eyebrow: 'Trabalhos', title: 'Sistemas em produção.', sub: 'Projetos próprios e de produto — escolha um para ver o case completo.' },
    stack: { eyebrow: 'Stack', title: 'Ferramentas que uso no dia a dia.', sub: 'Do frontend ao banco, do render de vídeo aos agentes.' },
    footer: { line: 'Vamos construir algo que fica de pé sozinho.' },
    caseui: {
      back: '← Todos os trabalhos',
      overviewEy: 'Overview', overviewT: 'O que é.',
      hlEy: 'Highlights', hlT: 'O que importa.',
      stackEy: 'Stack', stackT: 'Como foi feito.',
      prev: 'Anterior', next: 'Próximo', repo: 'Ver repositório ↗',
      liked: 'Gostou do que viu?',
    },
  },
  en: {
    region: 'Brazil',
    nav: { work: 'Selected Work', philosophy: 'Philosophy', stack: 'Stack', cta: 'Get in touch' },
    hero: {
      h1a: 'AI infrastructure',
      h1b: 'automation, agents & production systems.',
      lead:
        'Leonardo Borges — a systems engineer who builds AI products, automated content pipelines, and real infrastructure, from database to deploy. Focused on deterministic automation, media pipelines, and agents that run on their own.',
      origin:
        'Based in Brazil, building from scratch: from content farms and native-Pix stores to AI-validated apps and self-hosted infrastructure.',
      cta1: 'View Work',
      cta2: 'See the Stack',
    },
    philosophy: {
      eyebrow: 'Philosophy',
      title: 'How systems get built here.',
      sub: 'The principles behind every project in this portfolio.',
      items: [
        { i: '01', t: 'Context is king.', b: 'The right context lets an LLM do almost any task well. Most of the engineering goes into getting that context right — not the model call itself.' },
        { i: '02', t: 'Deterministic over magic.', b: 'Automation should be auditable and reversible at every step, with a human-approval gate on anything high-stakes — not an opaque black box.' },
        { i: '03', t: 'Systems of agents.', b: 'The backbone of a modern operation is a coordinated set of agents with memory and tools — not a generic chatbot bolted onto a website.' },
      ],
    },
    work: { eyebrow: 'Selected work', title: 'Systems shipped to production.', sub: 'Own projects and products — pick one to see the full case.' },
    stack: { eyebrow: 'Stack', title: 'Tools I use day to day.', sub: 'From frontend to database, from video rendering to agents.' },
    footer: { line: "Let's build something that stands on its own." },
    caseui: {
      back: '← All work',
      overviewEy: 'Overview', overviewT: 'What it is.',
      hlEy: 'Highlights', hlT: 'What matters.',
      stackEy: 'Stack', stackT: "How it's built.",
      prev: 'Previous', next: 'Next', repo: 'View repo ↗',
      liked: 'Liked what you saw?',
    },
  },
}
