import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Wifi } from 'lucide-react';
import PicnicTableIcon from './PicnicTableIcon';
import ToiletIcon from './ToiletIcon';
import { getContactData } from '../lib/sanity';

interface ContactData {
  title?: string;
  description?: string;
  address?: {
    street: string;
    city: string;
    postalCode: string;
  };
  phone?: string;
  email?: string;
  googleMapsUrl?: string;
  googleMapsEmbed?: string;
  amenities?: Array<{
    title: string;
    description: string;
    icon: 'wifi' | 'picnicTable' | 'toilet';
  }>;
}

const Contact: React.FC = () => {
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback amenities
  const fallbackAmenities = [
    {
      icon: 'wifi' as const,
      title: 'Wi-Fi Gratuit',
      description: 'Connexion internet haute vitesse'
    },
    {
      icon: 'picnicTable' as const,
      title: 'Terrasse',
      description: 'Grande terrasse pour profiter de l\'extérieur'
    },
    {
      icon: 'toilet' as const,
      title: 'Toilettes',
      description: 'Installations propres et accessibles'
    }
  ];

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const data = await getContactData();
        setContactData(data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'wifi': return <Wifi className="w-6 h-6" />;
      case 'picnicTable': return <PicnicTableIcon className="w-6 h-6" />;
      case 'toilet': return <ToiletIcon className="w-6 h-6" />;
      default: return <Wifi className="w-6 h-6" />;
    }
  };

  // Content with fallbacks
  const title = contactData?.title || "Venez nous rencontrer";
  const description = contactData?.description || "Situé au cœur du 6ème arrondissement de Marseille, à côté de la préfecture de Marseille.";
  const amenities = contactData?.amenities?.length ? contactData.amenities : fallbackAmenities;
  
  // Address formatting
  const address = contactData?.address 
    ? `${contactData.address.street}, ${contactData.address.postalCode} ${contactData.address.city}`
    : "3 Pl. Félix Baret, 13006 Marseille";
  
  // Maps URLs
  const googleMapsUrl = contactData?.googleMapsUrl || "https://www.google.com/maps/place/3+Pl.+F%C3%A9lix+Baret,+13006+Marseille,+France";
  const googleMapsEmbed = contactData?.googleMapsEmbed || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8234567890123!2d5.3797!3d43.2951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0c6b1234567%3A0x1234567890abcdef!2s3%20Pl.%20F%C3%A9lix%20Baret%2C%2013006%20Marseille%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr";

  if (loading) {
    return (
      <section id="contact" className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="text-gray-500">Chargement...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 px-4">
            {title.split(' ').map((word, index) => {
              if (word.toLowerCase().includes('rencontrer')) {
                return <span key={index} className="text-orange-500">{word}</span>;
              }
              return word + ' ';
            })}
          </h2>
          <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-6">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 px-4">
          {/* Contact Info */}
          <div className="space-y-6">
            

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-4 xs:p-6 shadow-lg">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold text-black mb-4 xs:mb-6">Services & Équipements</h3>
              
              <div className="grid gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-start sm:items-center space-x-3 p-2 xs:p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors">
                    <div className="text-orange-500">
                      {getIcon(amenity.icon)}
                    </div>
                    <div>
                      <h4 className="text-xs xs:text-sm sm:text-base font-semibold text-black">{amenity.title}</h4>
                      <p className="text-gray-600 text-xs xs:text-sm">{amenity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-white rounded-2xl p-3 xs:p-4 shadow-lg">
              <h4 className="text-xs xs:text-sm sm:text-base font-semibold text-black mb-2">Comment nous trouver ?</h4>
                <p className="text-gray-600 text-xs xs:text-sm leading-relaxed">
                  Idéalement situés Place Félix Baret, à quelques pas de la préfecture. 
                  Facilement accessible en transport en commun.
                </p>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src={googleMapsEmbed}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation L'Atelier du Sandwich"
                className="w-full h-64 xs:h-80 lg:h-96"
              />
              <div className="p-3 xs:p-4 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs xs:text-sm sm:text-base font-semibold text-black mb-1">L'Atelier du Sandwich</h4>
                    <p className="text-gray-600 text-xs xs:text-sm">{address}</p>
                  </div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-2 xs:px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap touch-manipulation"
                  >
                    <span className="hidden sm:inline">Ouvrir dans </span>Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;