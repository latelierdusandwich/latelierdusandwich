import React from 'react';
import { Clock, Calendar, AlertTriangle } from 'lucide-react';

const Hours: React.FC = () => {
  const schedule = [
    { day: 'Lundi', hours: '07:00 - 16:00', isOpen: true },
    { day: 'Mardi', hours: '07:00 - 16:00', isOpen: true },
    { day: 'Mercredi', hours: '07:00 - 16:00', isOpen: true },
    { day: 'Jeudi', hours: '07:00 - 16:00', isOpen: true },
    { day: 'Vendredi', hours: '07:00 - 16:00', isOpen: true },
    { day: 'Samedi', hours: '07:00 - 16:00', isOpen: true },
    { day: 'Dimanche', hours: 'Fermé', isOpen: false }
  ];

  const getCurrentStatus = () => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentTime = now.getHours() * 100 + now.getMinutes(); // Convert to HHMM format
    
    // Check if it's Sunday (closed)
    if (currentDay === 0) {
      return { isOpen: false, message: 'Fermé aujourd\'hui' };
    }
    
    // Check if it's within operating hours (7:00 - 16:00)
    if (currentTime >= 700 && currentTime < 1600) {
      return { isOpen: true, message: 'Ouvert maintenant' };
    } else {
      return { isOpen: false, message: 'Fermé actuellement' };
    }
  };

  const status = getCurrentStatus();

  return (
    <section id="horaires" className="py-12 sm:py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Nos <span className="text-orange-500">Horaires</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            Venez nous rendre visite du lundi au samedi pour découvrir nos spécialités.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Status Card */}
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border-2 ${status.isOpen ? 'bg-green-900/30 border-green-500' : 'bg-red-900/30 border-red-500'}`}>
              <div className="flex items-center space-x-4 mb-4">
                <div className={`w-4 h-4 rounded-full ${status.isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`}></div>
                <span className="text-xl sm:text-2xl font-bold">{status.message}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm sm:text-base">
                <Clock className="w-5 h-5" />
                <span>Mis à jour en temps réel</span>
              </div>
            </div>

            {/* Holiday Notice */}
            <div className="bg-orange-500/20 border-2 border-orange-500/50 rounded-2xl p-4 sm:p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-orange-500 mb-2">Information importante</h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Nous sommes fermés les jours fériés. N'hésitez pas à nous appeler pour confirmer 
                    nos horaires lors des périodes de fêtes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center space-x-3 mb-8">
              <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
              <h3 className="text-xl sm:text-2xl font-bold">Planning de la semaine</h3>
            </div>
            
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-3 sm:p-4 rounded-lg transition-colors ${
                    item.isOpen 
                      ? 'bg-white/5 hover:bg-white/10' 
                      : 'bg-red-900/20 hover:bg-red-900/30'
                  }`}
                >
                  <span className="text-base sm:text-lg font-medium text-gray-300">{item.day}</span>
                  <span className={`text-base sm:text-lg font-bold ${
                    item.isOpen ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <p className="text-gray-400 mb-2 text-sm sm:text-base">Service continu</p>
                <p className="text-orange-500 font-semibold text-base sm:text-lg">7h00 - 16h00</p>
                <p className="text-gray-400 text-sm mt-2">
                  Dernière commande 15 minutes avant la fermeture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hours;