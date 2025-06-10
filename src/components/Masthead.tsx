import React from 'react'
import { getImagePath } from '../utils/imagePath'

interface MastheadProps {
  title: string
  subtitle: string
  backgroundImage: string
}

const Masthead: React.FC<MastheadProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative h-[30vh] min-h-[300px] mt-24 flex items-center justify-center">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/40 z-10" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(0.85) contrast(1.1) saturate(1.1)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default Masthead
