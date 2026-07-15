// ─────────────────────────────────────────────────────────────────────────────
// borges.lab — projetos
//
// Trabalho seu, no nível de altitude de um portfólio (nada de segredo interno).
// Edite livremente: ajuste descrições, adicione outros repositórios seus,
// e para exibir mídia preencha `thumbnail` (imagem do card) e/ou `videoSrc`.
//
// Campos: slug, title, client?, category, region, tagline, description,
// highlights[], stack[], accent, link?, thumbnail?, videoSrc?
// ─────────────────────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'brazika',
    title: 'brazika',
    category: 'E-commerce próprio',
    region: 'Brazil',
    tagline: 'Loja própria com checkout Pix nativo, automação de Reels e nuvem própria.',
    description:
      'Um ecossistema de e-commerce construído do zero em torno de uma marca própria: loja com editor de checkout e landing pages, pagamento Pix real via EFI (worker dedicado na Fly.io), automação de Reels para alimentar o topo de funil e uma camada de storage própria. Tudo em produção, do banco ao deploy.',
    highlights: [
      'Checkout com Pix EFI real, processado por worker dedicado',
      'Editor próprio de checkout e landing pages',
      'Automação de Reels para tráfego orgânico',
      'Backend em Supabase, deploy em Cloudflare/Fly.io',
    ],
    stack: ['React', 'Supabase', 'Pix EFI', 'Fly.io', 'Cloudflare'],
    accent: 'linear-gradient(135deg, #cdfb5f, #2fe6a8)',
  },
  {
    slug: 'mission-control',
    title: 'Mission Control',
    category: 'Internal product',
    region: 'Brazil',
    tagline: 'Dashboard de operações para um pipeline de leads.',
    description:
      'Um painel self-hosted que dá visibilidade completa de um pipeline de leads: scraping, scoring, inbox de SDR, atividade de agentes e jobs agendados, tudo numa interface única em modo command-center. Cada etapa fica inspecionável em vez de virar caixa-preta.',
    highlights: [
      'Visão em tempo real de cada etapa do pipeline',
      'Agentes de scraping e project management + sync com Notion',
      'Crons e observabilidade num só painel',
    ],
    stack: ['React', 'TypeScript', 'Convex', 'Tailwind CSS', 'Notion API'],
    accent: 'linear-gradient(135deg, #2fe6a8, #37d5ff)',
  },
  {
    slug: 'vistoria-app',
    title: 'Vistoria App',
    category: 'Product',
    region: 'Brazil',
    tagline: 'Vistoria veicular self-service, validada por IA.',
    description:
      'Um app de vistoria veicular self-service: o próprio cliente faz a vistoria do veículo pelo celular, seguindo um fluxo guiado de captura, e a IA valida as fotos e extrai os dados — trocando um processo manual e presencial por um fluxo digital e auditável.',
    highlights: [
      'Fluxo guiado de captura pelo celular do cliente',
      'Validação e extração de dados por IA',
      'Next.js + Supabase, pronto para escala',
    ],
    stack: ['Next.js', 'Supabase', 'OpenAI', 'TypeScript'],
    accent: 'linear-gradient(135deg, #37d5ff, #7c5cff)',
  },
  {
    slug: 'meet',
    title: 'Meet — Notetaker & Library',
    category: 'Internal product',
    region: 'Brazil',
    tagline: 'Bot de reuniões que grava, transcreve e organiza numa biblioteca pesquisável.',
    description:
      'Um sistema de reuniões ponta a ponta: um bot entra na call, grava e transcreve, e joga tudo numa biblioteca pesquisável — de forma que qualquer reunião vira conteúdo consultável depois, sem depender de anotação manual.',
    highlights: [
      'Bot que entra na call, grava e transcreve',
      'Biblioteca de reuniões pesquisável',
      'Self-hosted, roda em VPS própria',
    ],
    stack: ['Python', 'Transcription', 'PostgreSQL', 'Docker'],
    accent: 'linear-gradient(135deg, #7c5cff, #cdfb5f)',
  },
  {
    slug: 'brazika-drive',
    title: 'brazika drive',
    category: 'Infra',
    region: 'Brazil',
    tagline: 'Nuvem ilimitada self-hosted em cima do Telegram.',
    description:
      'Uma camada de storage própria e praticamente ilimitada, construída sobre o Telegram com Teldrive self-hosted: backend em Fly.io com Postgres + pgroonga para busca e Cloudflare na frente, servindo em drive.brazika.online. Storage de verdade sem pagar por GB.',
    highlights: [
      'Teldrive self-hosted sobre a API do Telegram',
      'Busca full-text com Postgres + pgroonga',
      'Deploy em Fly.io atrás do Cloudflare',
    ],
    stack: ['Teldrive', 'Fly.io', 'PostgreSQL', 'Cloudflare'],
    accent: 'linear-gradient(135deg, #cdfb5f, #37d5ff)',
  },
  {
    slug: 'gta6-video-factory',
    title: 'GTA6 Video Factory',
    category: 'Content system',
    region: 'Brazil',
    tagline: 'Fábrica de vídeos de nostalgia com pipeline image-to-video.',
    description:
      'Uma content farm apoiada na onda de expectativa em torno de GTA VI: pipeline de image-to-video que gera conteúdo em série, com branding e calendário editorial próprios. Pensada para produzir e publicar de forma contínua, tratando conteúdo como uma esteira e não como peça avulsa.',
    highlights: [
      'Pipeline image-to-video em série',
      'Branding e calendário editorial próprios',
      'Geração e publicação contínuas',
    ],
    stack: ['Python', 'Image-to-video', 'AI pipeline', 'FFmpeg'],
    accent: 'linear-gradient(135deg, #2fe6a8, #cdfb5f)',
  },
  {
    slug: 'borges-studio',
    title: 'borges.studio',
    category: 'Brand / Product',
    region: 'Brazil',
    tagline: 'Pipeline de imagem-para-vídeo para uma marca de roupas própria.',
    description:
      'A esteira criativa de uma marca de roupas própria: referências entram, passam por análise com GPT-4o, viram prompt para geração de imagem e depois um render de vídeo em loop boomerang — track fixo, sem zoom. Tudo orquestrado por um dashboard único, do briefing ao vídeo final.',
    highlights: [
      'Referências → GPT-4o → prompt de imagem → vídeo em loop',
      'Render boomerang com track fixo, sem zoom',
      'Pipeline única, do briefing ao entregável',
    ],
    stack: ['Flask', 'GPT-4o', 'GPT Image', 'Seedance', 'FFmpeg'],
    accent: 'linear-gradient(135deg, #37d5ff, #2fe6a8)',
  },
  {
    slug: 'clipify',
    title: 'Clipify',
    category: 'Open source / Tooling',
    region: 'Brazil',
    tagline: 'App que transforma vídeos longos em cortes curtos, com IA.',
    description:
      'Uma ferramenta desktop que pega vídeos longos e devolve cortes curtos prontos para publicar: ranqueamento mais esperto dos melhores trechos, legendas estilo karaokê, tracking de rosto com MediaPipe e uma interface em Streamlit. Projeto próprio e de código aberto.',
    highlights: [
      'Seleção automática dos melhores trechos',
      'Legendas karaokê e tracking de rosto (MediaPipe)',
      'Interface em Streamlit, roda local',
    ],
    stack: ['Python', 'MediaPipe', 'Streamlit', 'FFmpeg'],
    link: 'https://github.com/brazika/Clipify',
    accent: 'linear-gradient(135deg, #7c5cff, #cdfb5f)',
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
