
import React, { useState, useEffect } from 'react';
import { formatTime } from '../utils/formatTime';

interface CountdownProps {
  targetDate: Date;
  showDays: boolean;
  onEnd?: () => void;
  endedMessage?: React.ReactNode;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate, showDays, onEnd, endedMessage }) => {
  const [timeLeft, setTimeLeft] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      let newTimeLeft: {[key: string]: number} = {};

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        if (showDays) {
          newTimeLeft = { días: days, horas: hours, minutos: minutes, segundos: seconds };
        } else {
          newTimeLeft = { horas: hours + days * 24, minutos: minutes, segundos: seconds };
        }
      }
      
      setTimeLeft(newTimeLeft);

      if (difference <= 0 && onEnd) {
        onEnd();
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate, showDays, onEnd]);

  const timerComponents = Object.entries(timeLeft);

  if (timerComponents.length === 0) {
    return <>{endedMessage}</> || null;
  }

  return (
    <div className="flex justify-center gap-4">
      {timerComponents.map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="text-4xl font-bold">{formatTime(value as number)}</div>
          <div className="text-sm uppercase">{unit}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
