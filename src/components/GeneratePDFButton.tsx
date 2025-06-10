import React from 'react'
import { FileDown } from 'lucide-react'
import { toast } from 'sonner'

interface GeneratePDFButtonProps {
  chapterTitle: string
}

const GeneratePDFButton: React.FC<GeneratePDFButtonProps> = ({ chapterTitle }) => {
  const handleGeneratePDF = () => {
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve('PDF généré avec succès !')
        }, 2000)
      }),
      {
        loading: 'Génération du PDF en cours...',
        success: 'PDF généré avec succès !',
        error: 'Erreur lors de la génération du PDF'
      }
    )
  }

  return (
    <button
      onClick={handleGeneratePDF}
      className="w-full bg-green-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
    >
      <FileDown className="w-4 h-4" />
      <span>Générer le PDF</span>
    </button>
  )
}

export default GeneratePDFButton
