import React, { useEffect, useState } from 'react';
import { ChefHat, MapPin, Utensils } from 'lucide-react';
import MenuModal from './MenuModal';
import { getHeroData, urlForImage } from '../lib/sanity';

interface HeroData {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: {
    asset?: {
      _ref: string;
    };
  };
  ctaText?: string;
  locationText?: string;
  amenities?: string[];
}

const Hero: React.FC = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = React.useState(false);
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const data = await getHeroData();
        setHeroData(data);
      } catch (error) {
        console.error('Error fetching hero data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  const openMenuModal = () => {
    setIsMenuModalOpen(true);
  };

  const closeMenuModal = () => {
    setIsMenuModalOpen(false);
  };

  if (loading) {
    return (
      <div className="relative bg-black text-white py-32 flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    );
  }

  // Fallback values if no data from Sanity
  const title = heroData?.title || "L'Atelier du Sandwich";
  const subtitle = heroData?.subtitle || "Snack & Brunch de qualité";
  const description = heroData?.description || "Découvrez notre carte complète de snacks avec des produits qualitatifs et frais. L'endroit parfait pour vos déjeuners à Marseille.";
  const ctaText = heroData?.ctaText || "Découvrir notre menu";
  const locationText = heroData?.locationText || "À côté de la préfecture de Marseille";
  const amenities = heroData?.amenities || ["Terrasse spacieuse", "Wi-Fi gratuit", "Toilettes"];

  // Use Sanity image if available, otherwise fallback to the existing image
  const backgroundImageUrl = heroData?.backgroundImage 
    ? urlForImage(heroData.backgroundImage).width(1920).height(1080).url()
    : 'https://lh3.googleusercontent.com/pw/AP1GczP9l4X6uXu2nhySB-IPLK4V347O3hOQ9j1UVg-aLxLYQyJ-BDvzwi9yXUn38TXN3v_So-OhglMySrZ5A4qCoN0TLwac2slY4f6nLbvGU7cQnvGjSNj5fvFpbGTkl0HxE9ZqWn_kFkeuQG3ATDvWMINW=w3012-h2008-s-no-gm?authuser=1';

  return (
    <>
      <section id="accueil" className="relative bg-black text-white py-12 sm:py-20 lg:py-32 overflow-hidden">
        {/* Background image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: `url(${backgroundImageUrl})` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-0">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-2 text-orange-500 justify-center lg:justify-start px-2">
                <ChefHat className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-sm sm:text-base lg:text-lg font-medium">{subtitle}</span>
              </div>
              
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-center lg:text-left px-2">
                {title.split(' ').map((word, index) => {
                  // Make "Sandwich" orange if it exists in the title
                  if (word.toLowerCase().includes('sandwich')) {
                    return <span key={index} className="text-orange-500">{word}</span>;
                  }
                  return word + ' ';
                })}
              </h1>
              
              <p className="text-base xs:text-lg sm:text-xl md:text-lg text-gray-300 leading-relaxed text-center lg:text-left px-4">
                {description}
              </p>

              <div className="flex flex-col gap-4 items-center lg:items-start px-4">
                <button
                  onClick={openMenuModal}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm xs:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto max-w-xs touch-manipulation"
                >
                  {ctaText}
                </button>
                <div className="flex items-center space-x-2 text-gray-300 justify-center lg:justify-start">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  <span className="text-xs xs:text-sm sm:text-base">{locationText}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 xs:gap-4 sm:gap-6 pt-4 justify-center lg:justify-start px-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2 text-xs xs:text-sm sm:text-base">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">{amenity}</span>
                  </div>
                ))}
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