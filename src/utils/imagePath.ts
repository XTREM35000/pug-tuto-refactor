const isDevelopment = process.env.NODE_ENV === 'development'

export const getImagePath = (path: string): string => {
  // Si le chemin est déjà une URL (commence par http ou https)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  // Si c'est une image importée (commence par /assets)
  if (path.startsWith('/assets')) {
    return path
  }

  // En production, on utilise le chemin relatif à partir de /assets
  if (!isDevelopment) {
    return path.replace('/src/assets', '/assets')
  }

  // En développement, on garde le chemin complet
  return path
}
