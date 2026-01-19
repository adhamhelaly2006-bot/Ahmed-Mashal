
import React from 'react';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import LocationMap from './components/LocationMap';
import AudioPlayer from './components/AudioPlayer';

const App: React.FC = () => {
  return (
    <div 
      className="bg-stone-50 min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/watercolor.png')" }}
    >
      <AudioPlayer />
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
        <main className="w-full max-w-2xl bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl overflow-hidden my-8 animate-fade-in">
          
          {/* Floral Decoration Top */}
          <div className="relative h-48 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1565870100382-77b38a9b2b28?q=80&w=1200&auto=format&fit=crop')"}}>
             <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent"></div>
          </div>

          <div className="text-center px-6 pb-8 -mt-24 relative z-10">
            <p className="text-gray-600 text-lg tracking-widest">
              YOU ARE INVITED TO THE WEDDING OF
            </p>
            <h1 className="font-dancing-script text-7xl sm:text-8xl text-emerald-800 my-4">
              Ahmed
            </h1>
            <span className="font-dancing-script text-4xl text-gray-500">&</span>
            <h1 className="font-dancing-script text-7xl sm:text-8xl text-emerald-800 my-4">
              Hind
            </h1>
            <div className="w-24 h-px bg-gray-300 mx-auto my-8"></div>
            
            <Countdown />
            
            <div className="w-24 h-px bg-gray-300 mx-auto my-8"></div>
            
            <EventDetails />
          </div>
          
          <LocationMap />

        </main>
      </div>
    </div>
  );
};

export default App;
