
import React, { useState, useEffect } from 'react';
import Section from './Section';

interface UrgencySectionProps {
  onSelectTier: (tier: string) => void;
}

const UrgencySection: React.FC<UrgencySectionProps> = ({ onSelectTier }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setDate(now.getDate() + 1);
    nextMidnight.setHours(0, 0, 0, 0);

    const difference = +nextMidnight - +now;
    let timeLeft: { horas?: number; minutos?: number; segundos?: number } = {};

    if (difference > 0) {
      timeLeft = {
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]); // Added dependency array

  const timerComponents = [];

  // Always render all three components, display 00 if value is undefined
  timerComponents.push(
    <span key="horas" className="text-center mx-1">
      <span className="text-3xl font-bold">{String(timeLeft.horas || 0).padStart(2, '0')}</span>
      <span className="text-sm uppercase block">horas</span>
    </span>
  );
  timerComponents.push(
    <span key="minutos" className="text-center mx-1">
      <span className="text-3xl font-bold">{String(timeLeft.minutos || 0).padStart(2, '0')}</span>
      <span className="text-sm uppercase block">minutos</span>
    </span>
  );
  timerComponents.push(
    <span key="segundos" className="text-center mx-1">
      <span className="text-3xl font-bold">{String(timeLeft.segundos || 0).padStart(2, '0')}</span>
      <span className="text-sm uppercase block">segundos</span>
    </span>
  );

  const offerEnded = !timeLeft.horas && !timeLeft.minutos && !timeLeft.segundos && Object.keys(timeLeft).length > 0;

  return (
    <Section className="bg-brand-dark text-brand-light py-16" id="urgency-offer">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">
          ¡Oferta Exclusiva por Tiempo Limitado!
        </h2>
        <p className="text-xl mb-6">
          Llévate el nivel <span className="text-brand-gold font-bold">Brow Revert</span>
        </p>
        <p className="text-5xl font-extrabold mb-8">
          <span className="line-through text-gray-500 mr-4">$199</span>
          <span className="text-brand-gold">$39</span>
        </p>

        {!offerEnded ? (
          <div className="flex justify-center items-center mb-8">
            <p className="text-xl mr-4">Termina en:</p>
            {timerComponents}
          </div>
        ) : (
          <p className="text-2xl font-bold mb-8">¡La oferta ha terminado!</p>
        )}

        <a
          href="#registration-form"
          onClick={() => {
            onSelectTier('Brow Revert');
            window.location.hash = "registration-form";
          }}
          className="mt-8 inline-block rounded-full border border-brand-gold bg-brand-gold px-12 py-3 text-sm font-medium text-brand-dark transition hover:opacity-90 focus:outline-none focus:ring"
        >
          ¡Aprovecha Ahora! (Cupos Limitados)
        </a>
      </div>
    </Section>
  );
};

export default UrgencySection;
