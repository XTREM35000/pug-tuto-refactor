import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  Menu,
  X,
  ChevronDown,
  Home,
  User,
  Mail,
  BookOpen,
  FileText,
  Table,
  Presentation,
  Database,
  Linkedin,
  Twitter,
  Phone
} from 'lucide-react'
import { toast } from 'sonner'
import { motion, AnimatePresence } from 'framer-motion'
import { getImagePath } from '../utils/imagePath'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isTutorialsOpen, setIsTutorialsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsOpen(false)
    setIsTutorialsOpen(false)
  }, [location])

  const handleTutorialClick = (tutorial: string) => {
    if (tutorial !== 'word') {
      toast.info('Ce tutoriel sera bientôt disponible !')
    }
  }

  const handleNavigation = (path: string) => {
    if (location.pathname === path) return
    navigate(path)
  }

  const tutorials = [
    { id: 'word', label: 'Tutoriels Word', href: '/tuto-word', icon: FileText },
    { id: 'excel', label: 'Tutoriels Excel', href: '#', icon: Table },
    { id: 'powerpoint', label: 'Tutoriels PowerPoint', href: '#', icon: Presentation },
    { id: 'access', label: 'Tutoriels Access', href: '#', icon: Database }
  ]

  const navItems = [
    { href: '/', label: 'Accueil', icon: Home },
    { href: '/contact', label: 'Contact', icon: Mail },
    { href: '/about', label: 'À Propos', icon: User },
  ]

  const socialLinks = [
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Twitter, label: 'Twitter' }
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2"
      >
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <motion.a
              href="mailto:2024dibo@gmail.com"
              className="hover:text-blue-200 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              <span>2024dibo@gmail.com</span>
            </motion.a>
            <motion.a
              href="tel:+2250758966156"
              className="hover:text-blue-200 transition-colors flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span>+225 07 58 96 61 56</span>
            </motion.a>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="hover:text-blue-200 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-lg'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/" className="flex items-center space-x-3">
                <motion.img
                  src={getImagePath('/images/profile/profile01.png')}
                  alt="Thierry Gogo Logo"
                  className="h-12 w-auto rounded-full"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Thierry Gogo
                  </span>
                  <span className="text-sm text-gray-600">Formation Office</span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                </motion.div>
              ))}

              {/* Tutorials Dropdown */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsTutorialsOpen(!isTutorialsOpen)}
                  className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isTutorialsOpen || location.pathname.startsWith('/tuto-')
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Vos Tutoriels</span>
                  <motion.div
                    animate={{ rotate: isTutorialsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isTutorialsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    >
                      {tutorials.map((tutorial) => (
                        <motion.div
                          key={tutorial.id}
                          whileHover={{ x: 5 }}
                        >
                          <button
                            onClick={() => {
                              handleTutorialClick(tutorial.id)
                              if (tutorial.id === 'word') {
                                handleNavigation(tutorial.href)
                              }
                            }}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center space-x-2"
                          >
                            <tutorial.icon className="w-4 h-4" />
                            <span>{tutorial.label}</span>
                          </button>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t"
            >
              <div className="container-custom py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className={`w-full flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </motion.button>
                ))}

                <div className="pt-2 border-t">
                  <div className="px-4 py-2 text-sm font-medium text-gray-700">
                    Tutoriels
                  </div>
                  {tutorials.map((tutorial) => (
                    <motion.button
                      key={tutorial.id}
                      onClick={() => {
                        handleTutorialClick(tutorial.id)
                        if (tutorial.id === 'word') {
                          handleNavigation(tutorial.href)
                        }
                      }}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      whileHover={{ x: 5 }}
                    >
                      <tutorial.icon className="w-4 h-4" />
                      <span>{tutorial.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}

export default Navbar
