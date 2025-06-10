import React from 'react'
import { getImagePath } from '../utils/imagePath'

interface MastheadProps {
  title: string
  subtitle: string
  backgroundImage: string
}

const Masthead: React.FC<MastheadProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[60vh] flex items-center justify-center"
      style={{ backgroundImage: `url(${getImagePath(backgroundImage)})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl">{subtitle}</p>
      </div>
    </div>
  )
}

export default Masthead
