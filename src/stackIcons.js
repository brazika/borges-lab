// Ícones da stack via cdn.simpleicons.org (colorido por brand).
// Valor = slug do simple-icons, OU [slug, corHex] para forçar cor legível
// em ícones que seriam escuros demais no fundo dark.
// Itens sem entrada aparecem como chip de texto (sem ícone) — tudo bem.

const ICONS = {
  React: 'react',
  TypeScript: 'typescript',
  'Next.js': ['nextdotjs', 'eef3ea'],
  Vite: 'vite',
  Flask: ['flask', 'eef3ea'],
  Python: 'python',
  'Node.js': 'nodedotjs',
  Supabase: 'supabase',
  Convex: 'convex',
  PostgreSQL: 'postgresql',
  Docker: 'docker',
  Streamlit: 'streamlit',
  Gemini: 'googlegemini',
  FFmpeg: 'ffmpeg',
  'Tailwind CSS': 'tailwindcss',
  'Pix EFI': 'pix',
  Cloudflare: 'cloudflare',
  'Fly.io': ['flydotio', 'eef3ea'],
  'Notion API': ['notion', 'eef3ea'],
  Telegram: 'telegram',
  Apify: 'apify',
}

export function iconUrl(label) {
  const v = ICONS[label]
  if (!v) return null
  const [slug, color] = Array.isArray(v) ? v : [v, null]
  return `https://cdn.simpleicons.org/${slug}${color ? '/' + color : ''}`
}
