import React from 'react';
import { useState, useEffect } from 'react';
import { Award, MapPin, Users, Clock } from 'lucide-react';
import { getAboutData, urlForImage } from '../lib/sanity';

interface AboutData {
  title?: string;
  description?: string;
  qualityTitle?: string;
  qualityDescription?: string;
  qualityPoints?: string[];
  carouselImages?: Array<{
    asset?: {
      _ref: string;
    };
    alt?: string;
  }>;
  highlights?: Array<{
    title: string;
    description: string;
    icon: 'award' | 'mapPin' | 'users' | 'clock';
  }>;
}

const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Fallback carousel images
  const fallbackCarouselImages = [
    {
      url: "https://lh3.googleusercontent.com/pw/AP1GczN4xDqlvq_wiUpdsM6a-oS_umfouNWh_yrYrd3tmRb9WW-t358RlH4QbVqfFDqJyPcxXfREv5vpMwQXAhm3iGU7Dtrg38ckt2RYxD6hTOfucGhjpCqSW0j1Du5rwvNEmnPfQ7uI90bj2W8nNm_TY41Q=w1321-h931-s-no-gm?authuser=1",
      alt: "L'Atelier du Sandwich - Vue 1"
    },
    {
      url: "https://lh3.googleusercontent.com/pw/AP1GczOn47gzvgxrgo9uEU1PaC7jGGipZoSb4aP1HhCoNuMqOdfqy30D1vtL6VpFUVshMwImCBTVrsfNr9u24oESKAM7VWbBdY0v11UXR_PuUHwIV1jNq3xHD-XPSh98J3ViRCoIA33dZltOjPkcRCdI59Je=w2048-h1536-s-no-gm?authuser=1",
      alt: "L'Atelier du Sandwich - Vue 2"
    },
    {
      url: "https://lh3.googleusercontent.com/pw/AP1GczOhC-WW_TOmLnTILKe4T8XUJw_L2F5d6n2ltgLch4ZN9kBfrf6sgV-4gVbfsCsEvM9UF4I22jRpQqVDr0jYeoEWLo8Jrt9A_sno6pP9bnUVO9XFVsCvf8GoVkbKo3WnNA-JZmeGV8kCKMlbVKfjeAZU=w1290-h994-s-no-gm?authuser=1",
      alt: "L'Atelier du Sandwich - Vue 2"
    },
    {
      url: "https://lh3.googleusercontent.com/pw/AP1GczO7Zxu30QK4ptLTyKgMa6YOYGBFJT2jkj1ZvBEWJp7qy5524zmBvwAFtG0YSAszIUZ7fTMcLMnI79CU9HHRMfgeK-Lh5MZWTaUsxOhV5u-a2rvTqDQAeTq2f0HedSZuzmJzRHRNsRQN8cOtEEkNWCRm=w1105-h729-s-no-gm?authuser=1",
      alt: "L'Atelier du Sandwich - Vue 3"
    }
  ];

  // Fallback highlights
  const fallbackHighlights = [
    {
      icon: 'award' as const,
      title: 'Expertise reconnue',
      description: 'Une expertise reconnue dans l\'art du sandwich et du snacking de qualité'
    },
    {
      icon: 'mapPin' as const,
      title: 'Emplacement idéal',
      description: 'Situé à côté de la préfecture de Marseille, au cœur du 6ème arrondissement'
    },
    {
      icon: 'users' as const,
      title: 'Terrasse spacieuse',
      description: 'Profitez de notre grande terrasse pour vos pauses déjeuner et brunchs'
    },
    {
      icon: 'clock' as const,
      title: 'Parfait pour déjeuner',
      description: 'L\'endroit idéal pour vos déjeuners avec une ambiance conviviale et détendue'
    }
  ];

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await getAboutData();
        setAboutData(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  // Get carousel images - use Sanity data if available, otherwise fallback
  const carouselImages = aboutData?.carouselImages?.length 
    ? aboutData.carouselImages.map(img => ({
        url: img.asset ? urlForImage(img).width(800).height(600).url() : '',
        alt: img.alt || "L'Atelier du Sandwich"
      }))
    : fallbackCarouselImages;

  // Get highlights - use Sanity data if available, otherwise fallback
  const highlights = aboutData?.highlights?.length ? aboutData.highlights : fallbackHighlights;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'award': return <Award className="w-12 h-12 text-orange-500" />;
      case 'mapPin': return <MapPin className="w-12 h-12 text-orange-500" />;
      case 'users': return <Users className="w-12 h-12 text-orange-500" />;
      case 'clock': return <Clock className="w-12 h-12 text-orange-500" />;
      default: return <Award className="w-12 h-12 text-orange-500" />;
    }
  };

  // Content with fallbacks
  const title = aboutData?.title || "Pourquoi choisir L'Atelier du Sandwich ?";
  const description = aboutData?.description || "Nous vous proposons une cuisine de qualité avec des produits frais et locaux dans un cadre convivial au cœur de Marseille.";
  const qualityTitle = aboutData?.qualityTitle || "Notre engagement qualité";
  const qualityDescription = aboutData?.qualityDescription || "À L'Atelier du Sandwich, nous sélectionnons rigoureusement nos ingrédients pour vous offrir des produits frais et savoureux. Notre équipe passionnée prépare chaque commande avec soin et attention.";
  const qualityPoints = aboutData?.qualityPoints?.length ? aboutData.qualityPoints : [
    "Produits frais sélectionnés quotidiennement",
    "Préparation artisanale sur place",
    "Service rapide et personnalisé",
    "Ambiance conviviale et détendue"
  ];

  if (loading) {
    return (
      <section id="a-propos" className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-gray-500">Chargement...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="a-propos" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 px-4">
            {title.split(' ').map((word, index) => {
              if (word.toLowerCase().includes('sandwich')) {
                return <span key={index} className="text-orange-500">{word}</span>;
              }
              return word + ' ';
            })}
          </h2>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-6">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 xs:p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group hover:scale-105 transform transition-transform"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(highlight.icon)}
              </div>
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-black mb-4">{highlight.title}</h3>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 px-4">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-black text-center lg:text-left">
              {qualityTitle.split(' ').map((word, index) => {
                if (word.toLowerCase().includes('qualité')) {
                  return <span key={index} className="text-orange-500">{word}</span>;
                }
                return word + ' ';
              })}
            </h3>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              {qualityDescription}
            </p>
            <ul className="space-y-3 max-w-md mx-auto lg:mx-0">
              {qualityPoints.map((point, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-xs xs:text-sm sm:text-base text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative order-first lg:order-last">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-48 xs:h-64 sm:h-80 lg:h-96 object-cover flex-shrink-0"
                  />
                ))}
              </div>
              
              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-orange-500/80 scale-110' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Voir image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold">★</div>
                <div className="text-xs">Qualité<br />garantie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;