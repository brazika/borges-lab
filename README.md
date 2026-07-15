# borges.lab

Portfólio pessoal — React + Vite, SPA client-side. Mesmo design system (dark
lime/emerald, Bricolage Grotesque + Manrope) recriado do zero.

## Rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Editar o conteúdo

- **Projetos:** `src/data/projects.js` — cada objeto é um card + página de case.
  Os projetos atuais são CANDIDATOS puxados do que você já construiu. Ajuste,
  remova ou reordene à vontade. Para mostrar mídia, preencha `thumbnail` (imagem
  do card) e/ou `videoSrc` (vídeo do case).
- **Bio / About / Hero:** `src/pages/Portfolio.jsx` (a bio é um rascunho — corrija).
- **E-mail de contato:** troque `CONTACT_EMAIL` em `Portfolio.jsx` e `CaseStudy.jsx`.
- **Stack (marquee):** array `stack` em `Portfolio.jsx`.
- **Cores/fontes:** tokens no topo de `src/styles.css`.

## Deploy (Cloudflare Pages)

Build command `npm run build`, output `dist`. O `public/_redirects` já cuida do
roteamento SPA. Aponte o domínio `borges.lab` para o projeto no painel do Pages.

## Rotas

- `/portfolio` — home
- `/portfolio/:slug` — página de case (ex.: `/portfolio/brazika`)
