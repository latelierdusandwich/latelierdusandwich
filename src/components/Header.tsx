import React, { useState } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import MenuModal from './MenuModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // Hauteur approximative du header avec top bar
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const openMenuModal = () => {
    setIsMenuModalOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const closeMenuModal = () => {
    setIsMenuModalOpen(false);
  };

  return (
    <>
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        {/* Top bar with contact info */}
        <div className="bg-gray-900 py-2 px-4 text-xs sm:text-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* LEFT: stack on mobile, inline on md+ */}
            <div className="min-w-0">
              {/* use flex-col on mobile and flex-row from md */}
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                {/* Address (full) */}
                <div className="flex items-start md:items-center space-x-2 min-w-0">
                  {/* negative bottom margin only on mobile, removed on md+ */}
                  <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mb-[-1.5rem] md:mb-0" />
                  <span className="text-sm leading-snug break-words">
                    3 Pl. Félix Baret, 13006 Marseille
                  </span>
                </div>

                {/* On mobile give small spacing between stacked rows */}
                <div className="mt-1 md:mt-0" />

                {/* Phone */}
                <div className="flex items-start md:items-center space-x-2 min-w-0">
                  <Phone className="w-4 h-4 text-orange-500 flex-shrink-0 mb-[-1.5rem] md:mb-0" />
                  <span className="text-sm whitespace-nowrap">06 66 10 31 11</span>
                </div>
              </div>
            </div>

            {/* RIGHT: special notice (hidden on small screens) */}
            <div className="hidden lg:block text-orange-500 font-medium">
              Fermé les jours fériés
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-orange-500 transition-colors duration-200"
            >
              L'Atelier du <span className="text-orange-500">Sandwich</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('accueil')}
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('a-propos')}
                className="hover:text-orange-500 transition-colors duration-200"
              >
                À propos
              </button>
              <button
                onClick={openMenuModal}
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Notre Menu
              </button>
              <button
                onClick={() => scrollToSection('avis-clients')}
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Avis Clients
              </button>
              <a
                href="https://maps.app.goo.gl/jNNiNZsNaeHQFTeR8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors duration-200 inline-block"
              >
                Itinéraire
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-orange-500 transition-colors duration-200"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900 rounded-lg mb-4 py-4 px-4 space-y-2 animate-in slide-in-from-top duration-200">
              <button
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left hover:text-orange-500 transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-gray-800"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('a-propos')}
                className="block w-full text-left hover:text-orange-500 transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-gray-800"
              >
                À propos
              </button>
              <button
                onClick={openMenuModal}
                className="block w-full text-left hover:text-orange-500 transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-gray-800"
              >
                Notre Menu
              </button>
              <button
                onClick={() => scrollToSection('avis-clients')}
                className="block w-full text-left hover:text-orange-500 transition-colors duration-200 py-3 px-2 rounded-lg hover:bg-gray-800"
              >
                Avis Clients
              </button>
              <a
                href="https://maps.app.goo.gl/jNNiNZsNaeHQFTeR8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded-lg transition-colors duration-200 mt-4 font-semibold"
              >
                Itinéraire
              </a>
              <div className="text-center text-orange-500 text-xs mt-4 pt-4 border-t border-gray-700">
                Fermé les jours fériés
              </div>
            </div>
          )}
        </nav>
      </header>

      <MenuModal isOpen={isMenuModalOpen} onClose={closeMenuModal} />
    </>
  );
};

export default Header;
