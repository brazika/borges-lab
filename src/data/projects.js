// ─────────────────────────────────────────────────────────────────────────────
// borges.lab — projetos (bilíngue PT/EN)
//
// Campos fixos: slug, title, stack[], accent, link?, thumbnail?, videoSrc?
// Campos por idioma (pt/en): category, tagline, description, highlights[]
//
// Para exibir mídia: preencha `thumbnail` (imagem do card) e/ou `videoSrc`
// (vídeo do case). Os vídeos dos projetos entram aqui quando chegarem.
// ─────────────────────────────────────────────────────────────────────────────

const g1 = 'linear-gradient(135deg, #cdfb5f, #2fe6a8)'
const g2 = 'linear-gradient(135deg, #2fe6a8, #37d5ff)'
const g3 = 'linear-gradient(135deg, #37d5ff, #7c5cff)'
const g4 = 'linear-gradient(135deg, #7c5cff, #cdfb5f)'

export const projects = [
  {
    slug: 'brazika',
    title: 'brazika',
    stack: ['React', 'Supabase', 'Pix EFI', 'Fly.io', 'Cloudflare'],
    accent: g1,
    pt: {
      category: 'E-commerce próprio',
      tagline: 'Loja própria com checkout Pix nativo, automação de Reels e nuvem própria.',
      description:
        'Um ecossistema de e-commerce construído do zero em torno de uma marca própria: loja com editor de checkout e landing pages, pagamento Pix real via EFI (worker dedicado na Fly.io), automação de Reels para alimentar o topo de funil e uma camada de storage própria. Tudo em produção, do banco ao deploy.',
      highlights: [
        'Checkout com Pix EFI real, processado por worker dedicado',
        'Editor próprio de checkout e landing pages',
        'Automação de Reels para tráfego orgânico',
        'Backend em Supabase, deploy em Cloudflare/Fly.io',
      ],
    },
    en: {
      category: 'Own e-commerce',
      tagline: 'Own store with native Pix checkout, Reels automation and a self-hosted cloud.',
      description:
        'An end-to-end e-commerce ecosystem built from scratch around an own brand: a store with a custom checkout and landing-page editor, real Pix payments via EFI (a dedicated worker on Fly.io), Reels automation to feed the top of the funnel, and an own storage layer. All in production, from database to deploy.',
      highlights: [
        'Real Pix (EFI) checkout via a dedicated worker',
        'Custom checkout and landing-page editor',
        'Reels automation for organic traffic',
        'Supabase backend, deployed on Cloudflare/Fly.io',
      ],
    },
  },
  {
    slug: 'borges-studio',
    title: 'borges.studio',
    stack: ['Flask', 'GPT-4o', 'GPT Image', 'Seedance', 'FFmpeg'],
    accent: g2,
    pt: {
      category: 'Marca / Produto',
      tagline: 'Pipeline de imagem-para-vídeo para uma marca de roupas própria.',
      description:
        'A esteira criativa de uma marca de roupas própria: referências entram, passam por análise com GPT-4o, viram prompt para geração de imagem e depois um render de vídeo em loop boomerang — track fixo, sem zoom. Tudo orquestrado por um dashboard único, do briefing ao vídeo final.',
      highlights: [
        'Referências → GPT-4o → prompt de imagem → vídeo em loop',
        'Render boomerang com track fixo, sem zoom',
        'Pipeline única, do briefing ao entregável',
      ],
    },
    en: {
      category: 'Brand / Product',
      tagline: 'An image-to-video pipeline for an own clothing brand.',
      description:
        'The creative assembly line of an own clothing brand: references come in, get analyzed with GPT-4o, become an image-generation prompt, and then a boomerang-loop video render — fixed track, no zoom. All orchestrated by a single dashboard, from brief to final video.',
      highlights: [
        'References → GPT-4o → image prompt → looping video',
        'Boomerang render with a fixed track, no zoom',
        'One pipeline, from brief to deliverable',
      ],
    },
  },
  {
    slug: 'gta6-video-factory',
    title: 'GTA6 Video Factory',
    stack: ['Python', 'Image-to-video', 'AI pipeline', 'FFmpeg'],
    accent: g3,
    pt: {
      category: 'Content system',
      tagline: 'Fábrica de vídeos de nostalgia com pipeline image-to-video.',
      description:
        'Uma content farm apoiada na onda de expectativa em torno de GTA VI: pipeline de image-to-video que gera conteúdo em série, com branding e calendário editorial próprios. Pensada para produzir e publicar de forma contínua, tratando conteúdo como uma esteira e não como peça avulsa.',
      highlights: [
        'Pipeline image-to-video em série',
        'Branding e calendário editorial próprios',
        'Geração e publicação contínuas',
      ],
    },
    en: {
      category: 'Content system',
      tagline: 'A nostalgia video factory with an image-to-video pipeline.',
      description:
        'A content farm riding the hype around GTA VI: an image-to-video pipeline that generates content in series, with its own branding and editorial calendar. Built to produce and publish continuously, treating content as an assembly line rather than one-off pieces.',
      highlights: [
        'Image-to-video pipeline in series',
        'Own branding and editorial calendar',
        'Continuous generation and publishing',
      ],
    },
  },
  {
    slug: 'clipify',
    title: 'Clipify',
    stack: ['Python', 'MediaPipe', 'Streamlit', 'FFmpeg'],
    accent: g4,
    link: 'https://github.com/brazika/Clipify',
    pt: {
      category: 'Open source / Tooling',
      tagline: 'App que transforma vídeos longos em cortes curtos, com IA.',
      description:
        'Uma ferramenta desktop que pega vídeos longos e devolve cortes curtos prontos para publicar: ranqueamento mais esperto dos melhores trechos, legendas estilo karaokê, tracking de rosto com MediaPipe e uma interface em Streamlit. Projeto próprio e de código aberto.',
      highlights: [
        'Seleção automática dos melhores trechos',
        'Legendas karaokê e tracking de rosto (MediaPipe)',
        'Interface em Streamlit, roda local',
      ],
    },
    en: {
      category: 'Open source / Tooling',
      tagline: 'An app that turns long videos into short clips, with AI.',
      description:
        'A desktop tool that takes long videos and returns short, ready-to-post clips: smarter ranking of the best moments, karaoke-style captions, face tracking with MediaPipe, and a Streamlit interface. An own, open-source project.',
      highlights: [
        'Automatic selection of the best moments',
        'Karaoke captions and face tracking (MediaPipe)',
        'Streamlit interface, runs locally',
      ],
    },
  },
  {
    slug: 'vistoria-app',
    title: 'Vistoria App',
    stack: ['Next.js', 'Supabase', 'OpenAI', 'TypeScript'],
    accent: g1,
    pt: {
      category: 'Produto',
      tagline: 'Vistoria veicular self-service, validada por IA.',
      description:
        'Um app de vistoria veicular self-service: o próprio cliente faz a vistoria do veículo pelo celular, seguindo um fluxo guiado de captura, e a IA valida as fotos e extrai os dados — trocando um processo manual e presencial por um fluxo digital e auditável.',
      highlights: [
        'Fluxo guiado de captura pelo celular do cliente',
        'Validação e extração de dados por IA',
        'Next.js + Supabase, pronto para escala',
      ],
    },
    en: {
      category: 'Product',
      tagline: 'Self-service vehicle inspection, validated by AI.',
      description:
        'A self-service vehicle inspection app: the customer inspects their own vehicle from their phone through a guided capture flow, and AI validates the photos and extracts the data — replacing a manual, in-person process with a digital, auditable flow.',
      highlights: [
        'Guided capture from the customer’s phone',
        'AI validation and data extraction',
        'Next.js + Supabase, ready to scale',
      ],
    },
  },
  {
    slug: 'mission-control',
    title: 'Mission Control',
    stack: ['React', 'TypeScript', 'Convex', 'Tailwind CSS', 'Notion API'],
    accent: g2,
    videoSrc: 'videos/mc-en.mp4',
    pt: {
      category: 'Produto interno',
      tagline: 'Dashboard de operações para um pipeline de leads.',
      description:
        'Um painel self-hosted que dá visibilidade completa de um pipeline de leads: scraping, scoring, inbox de SDR, atividade de agentes e jobs agendados, tudo numa interface única em modo command-center. Cada etapa fica inspecionável em vez de virar caixa-preta.',
      highlights: [
        'Visão em tempo real de cada etapa do pipeline',
        'Agentes de scraping e project management + sync com Notion',
        'Crons e observabilidade num só painel',
      ],
    },
    en: {
      category: 'Internal product',
      tagline: 'Operations dashboard for a lead pipeline.',
      description:
        'A self-hosted dashboard giving full visibility into a lead pipeline: scraping, scoring, SDR inbox, agent activity and scheduled jobs, all in one command-center interface. Every stage stays inspectable instead of a black box.',
      highlights: [
        'Real-time view of every pipeline stage',
        'Scraping and project-management agents + Notion sync',
        'Crons and observability in one panel',
      ],
    },
  },
  {
    slug: 'vexa',
    title: 'Vexa',
    stack: ['Python', 'Transcription', 'Docker', 'PostgreSQL'],
    accent: g3,
    pt: {
      category: 'Produto interno',
      tagline: 'Notetaker que entra na call, grava e transcreve automaticamente.',
      description:
        'Um bot de reuniões self-hosted que entra na chamada, grava o áudio e devolve a transcrição — a camada que transforma qualquer call em texto pesquisável, sem depender de anotação manual. É o motor que alimenta a biblioteca de reuniões.',
      highlights: [
        'Bot que entra na call e grava sozinho',
        'Transcrição automática do áudio',
        'Self-hosted, roda em VPS própria',
      ],
    },
    en: {
      category: 'Internal product',
      tagline: 'A notetaker that joins the call, records and transcribes automatically.',
      description:
        'A self-hosted meeting bot that joins the call, records the audio and returns the transcript — the layer that turns any call into searchable text, with no manual note-taking. It’s the engine that feeds the meeting library.',
      highlights: [
        'A bot that joins and records the call on its own',
        'Automatic audio transcription',
        'Self-hosted, runs on an own VPS',
      ],
    },
  },
  {
    slug: 'meet',
    title: 'Meeting Library',
    stack: ['Node.js', 'PostgreSQL', 'Docker'],
    accent: g4,
    pt: {
      category: 'Produto interno',
      tagline: 'Biblioteca pesquisável de tudo que foi dito nas reuniões.',
      description:
        'A camada de consulta em cima das reuniões gravadas: cada call transcrita vira conteúdo organizado e pesquisável, de forma que qualquer decisão ou detalhe possa ser reencontrado depois — reunião deixa de ser algo que se perde no ar.',
      highlights: [
        'Biblioteca pesquisável de reuniões',
        'Em cima das transcrições do notetaker',
        'Self-hosted, roda em VPS própria',
      ],
    },
    en: {
      category: 'Internal product',
      tagline: 'A searchable library of everything said in your meetings.',
      description:
        'The query layer on top of recorded meetings: every transcribed call becomes organized, searchable content, so any decision or detail can be found again later — a meeting stops being something that vanishes into thin air.',
      highlights: [
        'Searchable meeting library',
        'Built on top of the notetaker’s transcripts',
        'Self-hosted, runs on an own VPS',
      ],
    },
  },
  {
    slug: 'cap',
    title: 'Cap',
    stack: ['Self-hosted', 'Screen recording', 'Docker'],
    accent: g1,
    pt: {
      category: 'Infra / Tooling',
      tagline: 'Gravador de tela self-hosted para demos e walkthroughs.',
      description:
        'Uma instância própria de gravador de tela, self-hosted, usada para produzir os vídeos de demo e walkthrough dos projetos — controle total das gravações, sem depender de ferramenta de terceiros nem de limites de nuvem.',
      highlights: [
        'Gravação de tela self-hosted',
        'Usado para demos e walkthroughs dos projetos',
        'Sem depender de serviço externo',
      ],
    },
    en: {
      category: 'Infra / Tooling',
      tagline: 'A self-hosted screen recorder for demos and walkthroughs.',
      description:
        'An own, self-hosted screen-recorder instance, used to produce the demo and walkthrough videos of the projects — full control over the recordings, with no reliance on a third-party tool or cloud limits.',
      highlights: [
        'Self-hosted screen recording',
        'Used for project demos and walkthroughs',
        'No dependency on an external service',
      ],
    },
  },
  {
    slug: 'youtube-os',
    title: 'YouTube OS',
    stack: ['Next.js', 'Supabase', 'Gemini', 'AssemblyAI'],
    accent: g2,
    pt: {
      category: 'Content intelligence',
      tagline: 'Analisador de conteúdo do YouTube com IA, ciente de papéis.',
      description:
        'Uma ferramenta que analisa um canal do YouTube e seus concorrentes com IA: análise de vídeos com Gemini, thumbnails contextuais e um pipeline consciente de papéis para gerar insights de conteúdo — transformando horas de vídeo em direção editorial.',
      highlights: [
        'Análise de canal + concorrentes com Gemini',
        'Thumbnails contextuais geradas por IA',
        'Pipeline de análise consciente de papéis',
      ],
    },
    en: {
      category: 'Content intelligence',
      tagline: 'A role-aware AI analyzer for YouTube content.',
      description:
        'A tool that analyzes a YouTube channel and its competitors with AI: video analysis with Gemini, contextual thumbnails, and a role-aware pipeline that turns hours of video into content insight — turning footage into editorial direction.',
      highlights: [
        'Channel + competitor analysis with Gemini',
        'AI-generated contextual thumbnails',
        'Role-aware analysis pipeline',
      ],
    },
  },
  {
    slug: 'instagram-os',
    title: 'Instagram OS',
    stack: ['TypeScript', 'Supabase', 'Gemini', 'Apify', 'AssemblyAI'],
    accent: g3,
    pt: {
      category: 'Content intelligence',
      tagline: 'Analisador de Instagram estilo Notion, com IA.',
      description:
        'O equivalente para Instagram: um analisador de perfis estilo Notion que puxa conteúdo via Apify, guarda no Supabase e roda análise com Gemini (com toggle CLI/API) e transcrição com AssemblyAI — de post a insight acionável.',
      highlights: [
        'Coleta via Apify → Supabase',
        'Análise com Gemini (toggle CLI/API)',
        'Transcrição de áudio com AssemblyAI',
      ],
    },
    en: {
      category: 'Content intelligence',
      tagline: 'A Notion-style Instagram analyzer, powered by AI.',
      description:
        'The Instagram counterpart: a Notion-style profile analyzer that pulls content via Apify, stores it in Supabase, and runs analysis with Gemini (CLI/API toggle) plus AssemblyAI transcription — from post to actionable insight.',
      highlights: [
        'Collection via Apify → Supabase',
        'Analysis with Gemini (CLI/API toggle)',
        'Audio transcription with AssemblyAI',
      ],
    },
  },
  {
    slug: 'brazika-drive',
    title: 'brazika drive',
    stack: ['Teldrive', 'Fly.io', 'PostgreSQL', 'Cloudflare', 'Telegram'],
    accent: g4,
    pt: {
      category: 'Infra',
      tagline: 'Nuvem ilimitada self-hosted em cima do Telegram.',
      description:
        'Uma camada de storage própria e praticamente ilimitada, construída sobre o Telegram com Teldrive self-hosted: backend em Fly.io com Postgres + pgroonga para busca e Cloudflare na frente, servindo em drive.brazika.online. Storage de verdade sem pagar por GB.',
      highlights: [
        'Teldrive self-hosted sobre a API do Telegram',
        'Busca full-text com Postgres + pgroonga',
        'Deploy em Fly.io atrás do Cloudflare',
      ],
    },
    en: {
      category: 'Infra',
      tagline: 'An unlimited self-hosted cloud on top of Telegram.',
      description:
        'An own, practically unlimited storage layer built on Telegram with self-hosted Teldrive: a Fly.io backend with Postgres + pgroonga for search and Cloudflare in front, serving at drive.brazika.online. Real storage without paying per GB.',
      highlights: [
        'Self-hosted Teldrive over the Telegram API',
        'Full-text search with Postgres + pgroonga',
        'Deployed on Fly.io behind Cloudflare',
      ],
    },
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
