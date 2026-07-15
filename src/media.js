// Resolve o caminho de um asset local (em public/) respeitando o base do build,
// ou devolve a URL como está se já for absoluta (http/https).
export function asset(path) {
  if (!path) return path
  if (/^https?:\/\//.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
