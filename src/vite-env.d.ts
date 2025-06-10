/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PROD: boolean
  readonly DEV: boolean
  // plus de variables d'environnement si nécessaire
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
