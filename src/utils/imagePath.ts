const isDevelopment = process.env.NODE_ENV === 'development'

export const getImagePath = (path: string): string => {
  // Si le chemin est déjà une URL (commence par http ou https)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  // Pour tous les chemins locaux, on les garde tels quels
  return path
}
