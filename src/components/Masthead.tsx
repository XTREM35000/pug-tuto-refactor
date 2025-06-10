import React from 'react'

interface MastheadProps {
  title: string
  subtitle: string
  backgroundImage: string
}

const Masthead: React.FC<MastheadProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(0.8) contrast(1.1)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 font-light max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default Masthead
