import React from 'react';
import { Star, Heart, ThumbsUp } from 'lucide-react';

const Menu: React.FC = () => {
  const reviews = [
    {
      name: 'Maëlle D.',
      rating: 5,
      comment: 'Excellent ! Les sandwichs sont délicieux et la terrasse est très agréable. Le personnel est souriant et accueillant.',
    },
    {
      name: 'Thomas M.',
      rating: 5,
      comment: 'Parfait pour le brunch du weekend ! Produits frais, service rapide et ambiance détendue. Je recommande vivement.',
    },
    {
      name: 'Aurélia P.',
      rating: 5,
      comment: 'Très bon ! Produits frais et bien situé près de la préfecture.',
    },
    {
      name: 'Léo D.',
      rating: 5,
      comment: 'Très bon snack avec une belle terrasse. Les prix sont corrects et la nourriture est fraîche. Parfait pour une pause déjeuner.',
    },
    {
      name: 'Camille B.',
      rating: 5,
      comment: 'L\'Atelier du Sandwich est devenu mon spot préféré ! Ambiance conviviale, Wi-Fi gratuit et des produits de qualité.',
    },
    {
      name: 'Rafael K.',
      rating: 5,
      comment: 'Excellent rapport qualité-prix ! Les brunchs sont copieux et savoureux. L\'équipe est très professionnelle.',
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-orange-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="avis-clients" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 px-4">
            Ce que disent nos <span className="text-orange-500">clients</span>
          </h2>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-6">
            Découvrez les avis de nos clients qui font confiance à L'Atelier du Sandwich.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-3 xs:p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xs xs:text-sm sm:text-base font-bold text-black">{review.name}</h4>
                </div>
                <div className="flex space-x-1">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-xs xs:text-sm sm:text-base text-gray-600 leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;