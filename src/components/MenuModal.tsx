import React from 'react';
import { X } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden relative">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200 bg-black text-white">
          <h2 className="text-lg sm:text-xl font-bold">
            Notre <span className="text-orange-500">Menu</span>
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-orange-500 transition-colors p-1 touch-manipulation"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-2 sm:p-4 bg-gray-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <iframe
              src="https://drive.google.com/file/d/19RgcBiZNGgTSCbqhh61z6jawvOKdwCsf/preview"
              className="w-full h-[60vh] sm:h-[70vh] md:h-[75vh]"
              title="Menu L'Atelier du Sandwich"
              allow="autoplay"
            />
          </div>
          
          {/* Footer info */}
          <div className="mt-2 sm:mt-4 text-center px-2">
            <p className="text-gray-600 text-xs sm:text-sm">
              Pour toute question sur nos produits, n'hésitez pas à nous contacter au{' '}
              <a 
                href="tel:0666103111" 
                className="text-orange-500 hover:text-orange-600 font-medium touch-manipulation"
              >
                06 66 10 31 11
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;