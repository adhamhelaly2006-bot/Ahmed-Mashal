
import React from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon } from './icons';

const EventDetails: React.FC = () => {
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
      <div className="flex flex-col items-center">
        <MapPinIcon className="h-8 w-8 text-emerald-600 mb-2" />
        <p className="text-lg font-semibold">Layalina Hall</p>
        <p className="text-md text-gray-500">قاعة ليالينا للاحتفالات</p>
      </div>
    </div>
  );
};

export default EventDetails;
