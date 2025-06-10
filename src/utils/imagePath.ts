const isDevelopment = process.env.NODE_ENV === 'development'

export const getImagePath = (path: string): string => {
  // En production, on utilise le chemin relatif à partir de /assets
  if (!isDevelopment) {
    return path.replace('/src/assets', '/assets')
  }
  // En développement, on garde le chemin complet
  return path
}
