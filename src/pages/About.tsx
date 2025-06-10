import React from 'react'
import Masthead from '../components/Masthead'
import { CheckCircle } from 'lucide-react'

const About = () => {
  const values = [
    'Qualité et professionnalisme dans chaque projet',
    'Communication claire et transparente',
    'Respect des délais et des engagements',
    'Veille technologique constante'
  ]

  return (
    <>
      <Masthead
        title="À Propos de Moi"
        subtitle="Expertise en Développement Web & Rédaction Technique"
        backgroundImage="/src/assets/img/about-bg.jpg"
      />

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Mon Expertise</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Passionné par le développement web et la rédaction technique, je mets mon expertise au service
              de vos projets pour créer des solutions innovantes et efficaces.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Développement Web</h3>
                <p className="text-gray-600 mb-4">
                  Fort de plusieurs années d'expérience dans le développement web, je maîtrise les technologies
                  modernes (HTML5, CSS3, JavaScript, React, TypeScript) et les frameworks populaires.
                </p>
                <p className="text-gray-600">
                  Je crée des sites web responsifs, performants et optimisés pour le référencement.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rédaction Technique</h3>
                <p className="text-gray-600 mb-4">
                  Spécialisé dans la rédaction technique et la documentation, je transforme des concepts
                  complexes en contenus clairs et accessibles.
                </p>
                <p className="text-gray-600">
                  Mon expertise s'étend de la rédaction de guides utilisateurs à la documentation technique détaillée.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mes Valeurs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Me Contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
