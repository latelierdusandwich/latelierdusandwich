import React from 'react';
import { ChefHat, MapPin, Utensils } from 'lucide-react';
import MenuModal from './MenuModal';

const Hero: React.FC = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = React.useState(false);

  const openMenuModal = () => {
    setIsMenuModalOpen(true);
  };

  const closeMenuModal = () => {
    setIsMenuModalOpen(false);
  };

  return (
    <>
      <section id="accueil" className="relative bg-black text-white py-12 sm:py-20 lg:py-32 overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: 'url(https://lh3.googleusercontent.com/pw/AP1GczP9l4X6uXu2nhySB-IPLK4V347O3hOQ9j1UVg-aLxLYQyJ-BDvzwi9yXUn38TXN3v_So-OhglMySrZ5A4qCoN0TLwac2slY4f6nLbvGU7cQnvGjSNj5fvFpbGTkl0HxE9ZqWn_kFkeuQG3ATDvWMINW=w3012-h2008-s-no-gm?authuser=1)' 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-orange-500 justify-center lg:justify-start px-2">
              <ChefHat className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="text-sm sm:text-base lg:text-lg font-medium">Snack & Brunch de qualité</span>
            </div>
            
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-center lg:text-left px-2">
              L'Atelier du <br />
              <span className="text-orange-500">Sandwich</span>
            </h1>
            
            <p className="text-base xs:text-lg sm:text-xl md:text-lg text-gray-300 leading-relaxed text-center lg:text-left px-4">
              Découvrez notre carte complète de snacks avec des produits qualitatifs et frais. 
              L'endroit parfait pour vos déjeuners à Marseille.
            </p>

            <div className="flex flex-col gap-4 items-center lg:items-start px-4">
              <button
                onClick={openMenuModal}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm xs:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto max-w-xs touch-manipulation"
              >
                Découvrir notre menu
              </button>
              <div className="flex items-center space-x-2 text-gray-300 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                <span className="text-xs xs:text-sm sm:text-base">À côté de la préfecture de Marseille</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 xs:gap-4 sm:gap-6 pt-4 justify-center lg:justify-start px-4">
              <div className="flex items-center space-x-2 text-xs xs:text-sm sm:text-base">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300">Terrasse spacieuse</span>
              </div>
              <div className="flex items-center space-x-2 text-xs xs:text-sm sm:text-base">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300">Wi-Fi gratuit</span>
              </div>
              <div className="flex items-center space-x-2 text-xs xs:text-sm sm:text-base">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-gray-300">Toilettes</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      <MenuModal isOpen={isMenuModalOpen} onClose={closeMenuModal} />
    </>
  );
};

export default Hero;