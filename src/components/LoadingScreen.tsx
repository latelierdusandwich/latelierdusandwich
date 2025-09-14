import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-pulse w-60">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczMWDFU-TrffAxnAKt0EJ_6YK1Hr6i8D8IXYeIlLrzGpy_OPlc-npXauEIEXBQq9Mm2Iz4hNkjL8z5H5xCnTWPsLgLQJpmhNCVmlEyNZBmRnNmO56fRq5r8hrmnBsSTUaC7ATYW31P4xU4Mfft8Ovl2U=w640-h354-s-no-gm?authuser=1"
            alt="L'Atelier du Sandwich Logo"
            className="w-60 h-auto md:w-52 md:h-auto mx-auto animate-bounce"
          />
        </div>
        <div className="mt-8">
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;