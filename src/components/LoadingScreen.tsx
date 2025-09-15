import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="animate-pulse">
          <img
            src="https://lh3.googleusercontent.com/pw/AP1GczN2h7cn-gS2xtdfVXmdVJwpOxVDThShmHNUkuTbjfIJB4vV-PQECiHc1YNmwGML9BQlkionhx2kw8tLR4BinaRMFYwLWUwpZSPdz-47gFVV1ZvAoEK6rntFFPeptj6PRysI5m5Ij5yNyWwN7RMQLQil=w335-h354-s-no-gm?authuser=1"
            alt="L'Atelier du Sandwich Logo"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto animate-bounce object-contain"
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