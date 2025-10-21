import React, { useState, useEffect } from 'react';
import Section from './Section';

const UrgencySectionVIP: React.FC = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setDate(now.getDate() + 1);
    nextMidnight.setHours(0, 0, 0, 0);

    const difference = +nextMidnight - +now;
    let timeLeft = {};

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
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    // @ts-ignore
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval} className="text-center mx-1">
        {/* @ts-ignore */}
        <span className="text-3xl font-bold">{String(timeLeft[interval]).padStart(2, '0')}</span>
        <span className="text-sm uppercase block">{interval}</span>
      </span>
    );
  });

  return (
    <Section className="bg-brand-dark text-brand-light py-16" id="urgency-offer-vip">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">
          ¡Oferta VIP Exclusiva por Tiempo Limitado!
        </h2>
        <p className="text-xl mb-6">
          Accede al nivel <span className="text-brand-gold font-bold">Brow Expert VIP</span>
        </p>
        <p className="text-5xl font-extrabold mb-8">
          <span className="line-through text-gray-500 mr-4">$399</span>
          <span className="text-brand-gold">$59</span>
        </p>

        {timerComponents.length ? (
          <div className="flex justify-center items-center mb-8">
            <p className="text-xl mr-4">Termina en:</p>
            {timerComponents}
          </div>
        ) : (
          <p className="text-2xl font-bold mb-8">¡La oferta VIP ha terminado!</p>
        )}

        <a
          href="#registration-form?tier=Brow Expert VIP"
          className="mt-8 inline-block rounded-full border border-brand-gold bg-brand-gold px-12 py-3 text-sm font-medium text-brand-dark transition hover:opacity-90 focus:outline-none focus:ring"
        >
          ¡Aprovecha la Oferta VIP Ahora! (Cupos Muy Limitados)
        </a>
      </div>
    </Section>
  );
};

export default UrgencySectionVIP;