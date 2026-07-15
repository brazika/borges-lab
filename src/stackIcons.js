// Ícones da stack.
// - SI: via cdn.simpleicons.org (colorido por brand). Valor = slug, OU [slug, corHex]
//   para forçar cor legível em ícones que seriam escuros demais no fundo dark.
// - LOCAL: SVGs auto-hospedados em public/icons/ (brancos), para brands que o
//   simple-icons não tem (ex.: OpenAI foi removido de lá; AssemblyAI não existe).
// Itens sem entrada em nenhum dos dois aparecem como chip de texto (sem ícone).

const SI = {
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
  MediaPipe: 'mediapipe',
  FFmpeg: 'ffmpeg',
  'Tailwind CSS': 'tailwindcss',
  'Pix EFI': 'pix',
  Cloudflare: 'cloudflare',
  'Fly.io': ['flydotio', 'eef3ea'],
  'Notion API': ['notion', 'eef3ea'],
  Telegram: 'telegram',
}

const LOCAL = {
  OpenAI: 'openai',
  'GPT-4o': 'openai',
  'GPT Image': 'openai',
  AssemblyAI: 'assemblyai',
}

export function iconUrl(label) {
  if (LOCAL[label]) return `${import.meta.env.BASE_URL}icons/${LOCAL[label]}.svg`
  const v = SI[label]
  if (!v) return null
  const [slug, color] = Array.isArray(v) ? v : [v, null]
  return `https://cdn.simpleicons.org/${slug}${color ? '/' + color : ''}`
}
