
import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft | {} => {
    const difference = +new Date('2026-01-29T20:00:00') - +new Date();
    let timeLeft: TimeLeft | {} = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | {}>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: React.ReactElement[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 sm:mx-4">
        <span className="text-4xl sm:text-5xl font-light text-emerald-700">
          {String(timeLeft[interval as keyof TimeLeft]).padStart(2, '0')}
        </span>
        <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">{interval}</span>
      </div>
    );
  });

  return (
    <div>
      <h2 className="text-xl tracking-widest text-gray-600 mb-6">WE'RE GETTING MARRIED IN</h2>
      <div className="flex justify-center">
        {timerComponents.length ? timerComponents : <span>The day is here!</span>}
      </div>
    </div>
  );
};

export default Countdown;
