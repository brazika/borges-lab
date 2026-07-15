// ─────────────────────────────────────────────────────────────────────────────
// borges.lab — projetos
//
// Estes são CANDIDATOS puxados do que você já construiu. Edite livremente:
// remova o que não quer expor, ajuste descrições, troque os `client`,
// e depois é só apontar `thumbnail` / `videoSrc` para seus assets reais.
//
// Cada card usa um gradiente `accent` próprio (mesma paleta lime/emerald/roxo/ciano
// do design original). Campos: slug, title, client?, category, region, tagline,
// description, highlights[], stack[], accent, thumbnail?, videoSrc?
// ─────────────────────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: 'brazika',
    title: 'brazika',
    client: 'Projeto próprio',
    category: 'E-commerce',
    region: 'Brazil',
    tagline: 'Loja completa com checkout Pix nativo e tráfego pago integrado.',
    description:
      'Uma operação de e-commerce ponta a ponta: loja própria com editor de checkout e landing pages, pagamento Pix real via EFI (worker dedicado na Fly.io), painel de pedidos com dados completos do cliente e campanhas conectadas ao Meta Ads. Recuperada e remontada a partir de um deploy antigo do Cloudflare e migrada para uma conta Supabase nova.',
    highlights: [
      'Checkout com Pix EFI real, processado por worker dedicado',
      'Editor próprio de checkout e landing pages',
      'Backend migrado para Supabase e religado do zero',
      'Campanhas conectadas ao Meta Ads',
    ],
    stack: ['React', 'Supabase', 'Pix EFI', 'Fly.io', 'Cloudflare', 'Meta'],
    accent: 'linear-gradient(135deg, #cdfb5f, #2fe6a8)',
  },
  {
    slug: 'peixe-de-fogo',
    title: 'Peixe de Fogo',
    client: 'Projeto próprio',
    category: 'Content system',
    region: 'Brazil',
    tagline: 'Content farm de Reels lo-fi com curadoria e legenda automáticas.',
    description:
      'Uma plataforma que roda uma esteira de conteúdo lo-fi: gera vídeos curtos curados, escreve legenda em PT e organiza um banco de imagens geradas por IA em temas. Dashboard próprio (Flask) exposto por túnel, pensada para publicar Reels de forma contínua com o mínimo de trabalho manual.',
    highlights: [
      'Geração de vídeos curados com legenda automática em PT',
      'Banco de dezenas de imagens IA organizadas por tema',
      'Dashboard Flask próprio, publicação contínua',
    ],
    stack: ['Flask', 'Python', 'OpenAI', 'FFmpeg', 'Cloudflared'],
    accent: 'linear-gradient(135deg, #2fe6a8, #37d5ff)',
  },
  {
    slug: 'borges-studio',
    title: 'borges.studio',
    client: 'Projeto próprio',
    category: 'Brand / Product',
    region: 'Brazil',
    tagline: 'Pipeline de imagem-para-vídeo para uma marca de roupas.',
    description:
      'A esteira criativa de uma marca de roupas própria: referências entram, passam por análise com GPT-4o, viram prompt para geração de imagem e depois um render de vídeo em loop boomerang — track fixo, sem zoom. Tudo orquestrado por um dashboard Flask único, do briefing ao vídeo final.',
    highlights: [
      'Referências → GPT-4o → prompt de imagem → vídeo em loop',
      'Render boomerang com track fixo, sem zoom',
      'Pipeline única, do briefing ao entregável',
    ],
    stack: ['Flask', 'GPT-4o', 'GPT Image', 'Seedance', 'FFmpeg'],
    accent: 'linear-gradient(135deg, #37d5ff, #7c5cff)',
  },
  {
    slug: 'crossfire-master',
    title: 'CrossFire Master',
    client: 'Projeto próprio',
    category: 'Game infrastructure',
    region: 'Brazil',
    tagline: 'Servidor privado de CrossFire com armas custom, loja e economia.',
    description:
      'Um servidor privado de CrossFire rodando em produção com site próprio. Inclui armas customizadas de verdade — modelagem em quatro camadas (butes do cliente + modelos + banco + butes do servidor) até a arma aparecer em partida — além de loja, economia in-game, missões e correções de bugs de billing e clan direto no banco T-SQL.',
    highlights: [
      'Arma custom completa: cliente + modelos + banco + servidor',
      'Loja, economia e missões in-game funcionando',
      'Correções de billing e ClanServer direto no T-SQL',
      'Servidor ativo com site público',
    ],
    stack: ['T-SQL', 'Game files', 'Windows Server', 'Web panel'],
    accent: 'linear-gradient(135deg, #7c5cff, #cdfb5f)',
  },
  {
    slug: 'gta-nostalgia',
    title: 'GTA Nostalgia Farm',
    client: 'Projeto próprio',
    category: 'Content system',
    region: 'Brazil',
    tagline: 'Content farm de nostalgia com pipeline image-to-video.',
    description:
      'Uma content farm apoiada na onda de nostalgia em torno do universo GTA, com pipeline de image-to-video, branding e calendário editorial próprios. Dashboard de fila e geração pensado para produzir conteúdo em série.',
    highlights: [
      'Pipeline image-to-video em série',
      'Branding e calendário editorial próprios',
      'Dashboard de fila e geração',
    ],
    stack: ['Image-to-video', 'Dashboard', 'AI pipeline'],
    accent: 'linear-gradient(135deg, #2fe6a8, #cdfb5f)',
  },
  {
    slug: 'mission-control-video',
    title: 'Mission Control — Apresentação',
    client: 'Projeto próprio',
    category: 'Motion / Video',
    region: 'Brazil',
    tagline: 'Vídeo de apresentação de produto, programático em Remotion.',
    description:
      'Um vídeo de apresentação de produto construído inteiramente em código com Remotion — reproduzindo o visual real do app (não um mock) — com narração gerada por TTS e renderização automatizada. Motion design tratado como software: versionável, reproduzível e ajustável por parâmetro.',
    highlights: [
      'Vídeo 100% em código (Remotion), fiel ao visual real do app',
      'Narração automatizada por TTS',
      'Render reproduzível e versionável',
    ],
    stack: ['Remotion', 'React', 'edge-tts', 'FFmpeg'],
    accent: 'linear-gradient(135deg, #37d5ff, #cdfb5f)',
  },
  {
    slug: 'agentic-lead-engine',
    title: 'Agentic Lead Engine',
    client: 'Automatrix',
    category: 'Client project',
    region: 'Brazil',
    tagline: 'Motor agentic de leads em produção, com observabilidade embutida.',
    description:
      'Um motor de agentes vivo processando um pipeline de leads em escala, com inbox de SDR, atividade de agentes e crons — tudo em cima de um data layer reativo e integrado a um inbox self-hosted. Cada decisão automatizada é inspecionável, com análise de cena por visão e observabilidade de LLM embutida.',
    highlights: [
      'Motor agentic de leads rodando em escala',
      'Inbox de SDR e atividade de agentes em tempo real',
      'Data layer reativo + inbox self-hosted',
      'Análise por visão e observabilidade de LLM',
    ],
    stack: ['Convex', 'Chatwoot', 'Gemini', 'n8n', 'nginx'],
    accent: 'linear-gradient(135deg, #cdfb5f, #37d5ff)',
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
