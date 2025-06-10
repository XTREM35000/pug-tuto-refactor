
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Thierry Gogo</h3>
            <p className="text-gray-300">
              Expert en développement web et rédaction technique. 
              Créateur de solutions digitales innovantes et de contenus de qualité.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Développement Web</li>
              <li>Rédaction Technique</li>
              <li>Tutoriels Microsoft Office</li>
              <li>Consulting Digital</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="text-gray-300">
              <p>Email: contact@thierrygogo.com</p>
              <p>Téléphone: +33 1 23 45 67 89</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Thierry Gogo. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
