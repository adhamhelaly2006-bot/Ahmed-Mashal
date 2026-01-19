
import React from 'react';

const LocationMap: React.FC = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.80802742111!2d31.02640347614742!3d30.83597407466045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7a40d05555555%3A0x868b20973a90184b!2sPerla%20Hall%20For%20Parties!5e0!3m2!1sen!2sus!4v1719529326442!5m2!1sen!2sus";
  const directionsUrl = "https://maps.app.goo.gl/9qW1wN2Y3pQeK8kE6";

  return (
    <div className="bg-emerald-50/50 p-6 sm:p-8 text-center">
      <h3 className="text-2xl font-dancing-script text-emerald-800 mb-4">The Venue</h3>
      <p className="text-gray-600 mb-4">Perla Hall, Tanta-Mahalla road, Gharbia Governorate, Egypt</p>
      
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border-4 border-white">
         <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
          ></iframe>
      </div>

       <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-emerald-700 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-800 transition-colors duration-300 shadow-md"
      >
        Get Directions
      </a>
    </div>
  );
};

export default LocationMap;
