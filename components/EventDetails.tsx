
import React from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon } from './icons';

const EventDetails: React.FC = () => {
  const directionsUrl = "https://maps.app.goo.gl/9qW1wN2Y3pQeK8kE6";

  return (
    <div className="space-y-6 text-gray-700">
      <div className="flex flex-col items-center">
        <CalendarIcon className="h-8 w-8 text-emerald-600 mb-2" />
        <p className="text-2xl tracking-widest">29 . 01 . 2026</p>
      </div>
      <div className="flex flex-col items-center">
        <ClockIcon className="h-8 w-8 text-emerald-600 mb-2" />
        <p className="text-lg">AT 8:00 PM</p>
      </div>
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block cursor-pointer"
        aria-label="Get directions to the venue"
      >
        <div className="flex flex-col items-center">
          <MapPinIcon className="h-8 w-8 text-emerald-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
          <p className="text-lg font-semibold group-hover:text-emerald-700 transition-colors">PERLA (GRAND BABYLION)</p>
          <p className="text-md text-gray-500 group-hover:text-emerald-600 transition-colors">بطريق المحله طنطا</p>
        </div>
      </a>
    </div>
  );
};

export default EventDetails;
