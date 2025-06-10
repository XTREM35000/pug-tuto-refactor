const isDevelopment = process.env.NODE_ENV === 'development'

export const getImagePath = (path: string): string => {
  // Si le chemin est déjà une URL (commence par http ou https)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  // Si le chemin commence par /images, on le garde tel quel
  if (path.startsWith('/images')) {
    return path
  }

  // Pour tous les autres cas, on s'assure que le chemin commence par /images
  return path.replace(/^\/src\/assets\/img/, '/images')
}
