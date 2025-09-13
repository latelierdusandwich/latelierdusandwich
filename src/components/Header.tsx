import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import MenuModal from './MenuModal';
import { getSiteSettings, getContactData, getHoursData } from '../lib/sanity';

interface SiteSettings {
  title?: string;
}

interface ContactData {
  address?: {
    street?: string;
    city?: string;
    postalCode?: string;
  };
  phone?: string;
  googleMapsUrl?: string;
}

interface HoursData {
  specialNotice?: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [hoursData, setHoursData] = useState<HoursData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [settings, contact, hours] = await Promise.all([
          getSiteSettings(),
          getContactData(),
          getHoursData()
        ]);
        setSiteSettings(settings);
        setContactData(contact);
        setHoursData(hours);
      } catch (error) {
        console.error('Error fetching header data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 120; // approximate header + top bar height
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

  // Content with fallbacks
  const siteName = siteSettings?.title || "L'Atelier du Sandwich";

  // Address formatting with safe checks
  const addrStreet = contactData?.address?.street ?? '';
  const addrPostal = contactData?.address?.postalCode ?? '';
  const addrCity = contactData?.address?.city ?? '';

  const address = {
    full:
      `${addrStreet}${addrStreet && (addrPostal || addrCity) ? ', ' : ''}${addrPostal} ${addrCity}`.trim() ||
      "3 Pl. Félix Baret, 13006 Marseille",
    short: `${addrCity} ${addrPostal ? addrPostal.substring(0, 2) + 'ème' : ''}`.trim() || "Marseille 6ème",
    veryShort: addrCity || "Marseille"
  };

  const phone = contactData?.phone || "06 66 10 31 11";
  const telHref = `tel:${phone.replace(/\s/g, '')}`;
  const mapsUrl = contactData?.googleMapsUrl || "https://maps.app.goo.gl/jNNiNZsNaeHQFTeR8";
  const specialNotice = hoursData?.specialNotice || "Fermé les jours fériés";

  return (
    <>
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        {/* Top bar with contact info */}
        <div className="bg-gray-900 py-3 px-4 text-sm sm:text-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-start">
            {/* LEFT: stacked rows (address then phone). Icons in same column so alignment is consistent */}
            <div className="min-w-0">
              <div className="flex flex-col space-y-1 min-w-0">
                {/* Address row */}
                <div className="flex items-start space-x-2 min-w-0">
                  <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                  {/* full address always shown; it can wrap */}
                  <span className="whitespace-normal leading-snug text-sm block" title={address.full}>
                    {address.full}
                  </span>
                </div>

                {/* Phone row */}
                <div className="flex items-center space-x-2 min-w-0">
                  <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <a
                    href={telHref}
                    aria-label={`Call ${phone}`}
                    className="hover:text-orange-500 transition-colors whitespace-nowrap text-sm"
                    title={phone}
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT: special notice (hidden on small screens) */}
            <div className="hidden lg:block text-orange-500 font-medium self-center">
              {specialNotice}
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
              {siteName.split(' ').map((word, index) => {
                if (word.toLowerCase().includes('sandwich')) {
                  return (
                    <span key={index} className="text-orange-500">
                      {word}{' '}
                    </span>
                  );
                }
                return word + ' ';
              })}
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
                href={mapsUrl}
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
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 px-4 py-3 rounded-lg transition-colors duration-200 mt-4 font-semibold"
              >
                Itinéraire
              </a>
              <div className="text-center text-orange-500 text-xs mt-4 pt-4 border-t border-gray-700">
                {specialNotice}
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
