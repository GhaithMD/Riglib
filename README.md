# RigLab Maintenance

Site web professionnel pour **RigLab Maintenance** — maintenance PC, installation Windows et optimisation gaming à Tunis, Tunisia.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS

## Démarrage

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:5173`.

## Build production

```bash
npm run build
npm run preview
```

Les fichiers de production seront générés dans le dossier `dist/`.

## Assets

- Logo : `public/assets/logo.png`
- Packages : `public/assets/package-1.png` à `package-5.png`

## Structure

```
src/
├── components/     # Composants UI réutilisables
├── data/           # Données services et contact
├── hooks/          # Hooks (scroll animation)
├── App.tsx
├── main.tsx
└── index.css
```
