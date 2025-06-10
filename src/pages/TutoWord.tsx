import React from 'react'
import Masthead from '../components/Masthead'
import { Book, Clock, Users } from 'lucide-react'
import GeneratePDFButton from '../components/GeneratePDFButton'

const TutoWord = () => {
  const tutorials = [
    {
      id: 1,
      title: 'Introduction à Microsoft Word',
      description: 'Découvrez l\'interface et les fonctionnalités de base de Word',
      duration: '15 min',
      level: 'Débutant',
      image: '/word/introduction.png'
    },
    {
      id: 2,
      title: 'Mise en forme du texte',
      description: 'Apprenez à formater votre texte avec style et professionnalisme',
      duration: '20 min',
      level: 'Débutant',
      image: '/word/mise-en-forme.png'
    },
    {
      id: 3,
      title: 'Insertion d\'images et objets',
      description: 'Maîtrisez l\'insertion et la gestion des images dans vos documents',
      duration: '25 min',
      level: 'Intermédiaire',
      image: '/word/insertion-image.png'
    },
    {
      id: 4,
      title: 'Création de tableaux',
      description: 'Créez et formatez des tableaux professionnels dans Word',
      duration: '30 min',
      level: 'Intermédiaire',
      image: '/word/tableaux.png'
    },
    {
      id: 5,
      title: 'Mise en page avancée',
      description: 'Optimisez la mise en page de vos documents pour un rendu parfait',
      duration: '35 min',
      level: 'Avancé',
      image: '/word/mise-en-page.png'
    },
    {
      id: 6,
      title: 'Export et impression',
      description: 'Maîtrisez l\'export PDF et les options d\'impression',
      duration: '20 min',
      level: 'Intermédiaire',
      image: '/word/export-pdf.png'
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Débutant':
        return 'bg-green-100 text-green-800'
      case 'Intermédiaire':
        return 'bg-yellow-100 text-yellow-800'
      case 'Avancé':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      <Masthead
        title="Tutoriels Microsoft Word"
        subtitle="Maîtrisez Word de A à Z avec nos guides complets"
        backgroundImage="/tutoriels-bg.jpg"
      />

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cours Gratuits Microsoft Word
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos tutoriels gratuits pour apprendre à utiliser Microsoft Word efficacement,
              du niveau débutant au niveau avancé.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={tutorial.image}
                  alt={tutorial.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getLevelColor(tutorial.level)}`}>
                      {tutorial.level}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {tutorial.duration}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {tutorial.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {tutorial.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                      <Book className="w-4 h-4" />
                      <span>Commencer le tutoriel</span>
                    </button>
                    <GeneratePDFButton chapterTitle={tutorial.title} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Besoin d'un accompagnement personnalisé ?
              </h3>
              <p className="text-gray-600 mb-6">
                Je propose également des formations individuelles et des sessions de coaching
                pour vous aider à maîtriser Word selon vos besoins spécifiques.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Demander une formation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TutoWord
