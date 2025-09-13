import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Clock, Heart, Sparkles } from 'lucide-react';
import { getFooterData, getContactData, getHoursData } from '../lib/sanity';

interface FooterData {
  brandDescription?: string;
  tagline?: string;
  copyright?: string;
  createdByUrl?: string;
  createdByText?: string;
}

interface ContactData {
  address?: {
    street: string;
    city: string;
    postalCode: string;
  };
  phone?: string;
}

interface HoursData {
  schedule?: Array<{
    day: string;
    openTime?: string;
    closeTime?: string;
    isClosed?: boolean;
  }>;
  holidayNote?: string;
}

const Footer: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [hoursData, setHoursData] = useState<HoursData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [footer, contact, hours] = await Promise.all([
          getFooterData(),
          getContactData(),
          getHoursData()
        ]);
        setFooterData(footer);
        setContactData(contact);
        setHoursData(hours);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fallback values
  const brandDescription = footerData?.brandDescription || "Nous vous proposons des produits frais et de qualité dans une ambiance conviviale au cœur de Marseille.";
  const tagline = footerData?.tagline || "Fait avec passion à Marseille";
  const copyright = footerData?.copyright || "© 2025 L'Atelier du Sandwich. Tous droits réservés.";
  const createdByText = footerData?.createdByText || "Développé avec passion pour L'Atelier du Sandwich";
  
  // Address formatting
  const address = contactData?.address 
    ? {
        street: contactData.address.street,
        cityCode: `${contactData.address.postalCode} ${contactData.address.city}`
      }
    : {
        street: "3 Pl. Félix Baret",
        cityCode: "13006 Marseille"
      };
  
  const phone = contactData?.phone || "06 66 10 31 11";

  // Format hours - use the actual schema structure
  const formatSchedule = () => {
    if (!hoursData?.schedule?.length) {
      return (
        <>
          <div className="flex justify-between">
            <span className="text-gray-300">Lun - Sam</span>
            <span className="text-white">07:00 - 16:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Dimanche</span>
            <span className="text-red-400">Fermé</span>
          </div>
        </>
      );
    }

    return hoursData.schedule.map((daySchedule, index) => (
      <div key={index} className="flex justify-between">
        <span className="text-gray-300">{daySchedule.day}</span>
        {!daySchedule.isOpen ? (
          <span className="text-red-400">Fermé</span>
        ) : (
          <span className="text-white">{daySchedule.hours}</span>
        )}
      </div>
    ));
  };

  const holidayNote = hoursData?.specialNotice || "Fermé les jours fériés";

  if (loading) {
    return (
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
          <div className="text-gray-500">Chargement...</div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 xs:py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-center sm:text-left">
              L'Atelier du <span className="text-orange-500">Sandwich</span>
            </h3>
            <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed text-center sm:text-left">
              {brandDescription}
            </p>
            <div className="flex items-center space-x-2 text-orange-500 justify-center sm:justify-start">
              <Sparkles className="w-5 h-5 text-orange-500" />
              <span className="text-xs xs:text-sm">{tagline}</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm xs:text-base sm:text-lg font-semibold text-orange-500 text-center sm:text-left">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                <div>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-300">{address.street}</p>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-300">{address.cityCode}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="w-5 h-5 text-orange-500" />
                <a 
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="text-xs xs:text-sm sm:text-base text-gray-300 hover:text-orange-500 transition-colors touch-manipulation"
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-sm xs:text-base sm:text-lg font-semibold text-orange-500 text-center sm:text-left">Horaires</h4>
            <div className="space-y-2 text-xs xs:text-sm">
              {formatSchedule()}
              <div className="pt-2 mt-3 border-t border-gray-700">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-orange-500" />
                  <span className="text-orange-500 text-xs">{holidayNote}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 xs:mt-8 sm:mt-12 pt-4 xs:pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs text-center md:text-left">
              {copyright}
            </p>
            <p className="text-gray-400 text-xs text-center md:text-right">
              {footerData?.createdByUrl ? (
                <a 
                  href={footerData.createdByUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  {createdByText}
                </a>
              ) : (
                createdByText
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;