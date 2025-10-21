
import React, { useState, useEffect } from 'react';
import Section from './Section';

const UrgencySection: React.FC = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const deadline = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 horas desde ahora
    const difference = +deadline - +now;
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
    <Section className="bg-brand-dark text-brand-light py-16" id="urgency-offer">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">
          ¡Oferta Exclusiva por Tiempo Limitado!
        </h2>
        <p className="text-xl mb-6">
          Llévate el nivel <span className="text-brand-gold font-bold">Brow Revert</span>
        </p>
        <p className="text-5xl font-extrabold mb-8">
          <span className="line-through text-gray-500 mr-4">$500</span>
          <span className="text-brand-gold">$39</span>
        </p>

        {timerComponents.length ? (
          <div className="flex justify-center items-center mb-8">
            <p className="text-xl mr-4">Termina en:</p>
            {timerComponents}
          </div>
        ) : (
          <p className="text-2xl font-bold mb-8">¡La oferta ha terminado!</p>
        )}

        <a
          href="#registration-form?tier=Brow Revert"
          className="mt-8 inline-block rounded-full border border-brand-gold bg-brand-gold px-12 py-3 text-sm font-medium text-brand-dark transition hover:opacity-90 focus:outline-none focus:ring"
        >
          ¡Aprovecha Ahora! (Cupos Limitados)
        </a>
      </div>
    </Section>
  );
};

export default UrgencySection;
