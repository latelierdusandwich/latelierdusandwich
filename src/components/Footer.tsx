// components/Footer.tsx
import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Clock, Sparkles } from 'lucide-react';
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
    street?: string;
    city?: string;
    postalCode?: string;
  };
  phone?: string;
}

interface HoursEntry {
  day?: string;
  openTime?: string;
  closeTime?: string;
  isOpen?: boolean;
  isClosed?: boolean;
  hours?: string;
  [k: string]: any;
}

interface HoursData {
  schedule?: HoursEntry[];
  specialNotice?: string;
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
          getFooterData?.(),
          getContactData?.(),
          getHoursData?.()
        ]);
        setFooterData(footer ?? null);
        setContactData(contact ?? null);
        setHoursData(hours ?? null);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fallback values
  const brandDescription =
    footerData?.brandDescription ||
    "Nous vous proposons des produits frais et de qualité dans une ambiance conviviale au cœur de Marseille.";
  const tagline = footerData?.tagline || "Fait avec passion à Marseille";
  const copyright = footerData?.copyright || "© 2025 L'Atelier du Sandwich. Tous droits réservés.";
  const createdByText = footerData?.createdByText || "Développé avec passion pour L'Atelier du Sandwich";

  // Address formatting
  const address = contactData?.address
    ? {
        street: contactData.address.street || '',
        cityCode: `${contactData.address.postalCode || ''} ${contactData.address.city || ''}`.trim()
      }
    : {
        street: "3 Pl. Félix Baret",
        cityCode: "13006 Marseille"
      };

  const phone = contactData?.phone || "06 66 10 31 11";

  // Format hours - tolerant to different shapes
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

    return hoursData.schedule.map((daySchedule: HoursEntry, index: number) => {
      const day = daySchedule.day ?? `Jour ${index + 1}`;
      const isOpen = (typeof daySchedule.isOpen === 'boolean' ? daySchedule.isOpen : !(daySchedule.isClosed ?? false));
      const hours =
        daySchedule.hours ??
        (daySchedule.openTime && daySchedule.closeTime ? `${daySchedule.openTime} - ${daySchedule.closeTime}` : null);

      return (
        <div key={index} className="flex justify-between">
          <span className="text-gray-300">{day}</span>
          {!isOpen || !hours ? <span className="text-red-400">Fermé</span> : <span className="text-white">{hours}</span>}
        </div>
      );
    });
  };

  const holidayNote = hoursData?.specialNotice ?? hoursData?.holidayNote ?? "Fermé les jours fériés";

  if (loading) {
    return (
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
          <div className="text-gray-500">Chargement...</div>
        </div>
      </footer>
    );
  }

  // Updated "Created with ♥ by Vasseo" component to match the exact styling from the image
  const CreatedByExact: React.FC = () => {
    const content = (
      <span className="inline-flex items-center space-x-1.5 text-gray-400 text-xs hover:text-orange-500 transition-colors duration-200">
        <span>Created with</span>
        <svg
          width="14"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-orange-500"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>by Vasseo</span>
      </span>
    );

    if (footerData?.createdByUrl) {
      return (
        <a
          href={footerData.createdByUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline"
        >
          {content}
        </a>
      );
    }

    return content;
  };

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
            <p className="text-gray-400 text-xs text-center md:text-left">{copyright}</p>
            <div className="text-center md:text-right">
              <CreatedByExact />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;