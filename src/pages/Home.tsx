import React from 'react'
import { Link } from 'react-router-dom'
import { getImagePath } from '../utils/imagePath'
import Masthead from '../components/Masthead'
import { FileText, Code, BookOpen, Users } from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Création de sites web modernes et responsifs avec les dernières technologies.'
    },
    {
      icon: FileText,
      title: 'Rédaction Technique',
      description: 'Documentation claire et précise pour vos projets techniques et logiciels.'
    },
    {
      icon: BookOpen,
      title: 'Tutoriels Office',
      description: 'Guides complets pour maîtriser Word, Excel, PowerPoint et autres outils Office.'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Accompagnement personnalisé pour vos projets digitaux et formation.'
    }
  ]

  return (
    <>
      <Masthead
        title="Thierry Gogo"
        subtitle="Expert Développement Web & Rédaction Technique"
        backgroundImage={getImagePath('/src/assets/img/home-bg.jpg')}
      />

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Je vous accompagne dans vos projets digitaux avec expertise et passion,
              de la conception à la réalisation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <service.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Demander un Devis
            </Link>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tutoriels Gratuits
            </h2>
            <p className="text-xl text-gray-600">
              Apprenez à maîtriser les outils Microsoft Office avec mes guides détaillés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/src/assets/img/word/word.png"
                alt="Tutoriel Word"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Microsoft Word</h3>
                <p className="text-gray-600 mb-4">
                  Maîtrisez toutes les fonctionnalités de Word, de la mise en forme au publipostage.
                </p>
                <Link
                  to="/tuto-word"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Voir les tutoriels →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/src/assets/img/excel/excel.png"
                alt="Tutoriel Excel"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Microsoft Excel</h3>
                <p className="text-gray-600 mb-4">
                  Découvrez les formules, graphiques et tableaux croisés dynamiques.
                </p>
                <span className="text-gray-400">Bientôt disponible</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/src/assets/img/ppoint/ppoint.png"
                alt="Tutoriel PowerPoint"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Microsoft PowerPoint</h3>
                <p className="text-gray-600 mb-4">
                  Créez des présentations professionnelles et captivantes.
                </p>
                <span className="text-gray-400">Bientôt disponible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
