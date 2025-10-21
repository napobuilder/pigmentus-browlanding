
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2025-11-11T18:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
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
      <div className="text-center">
        {/* @ts-ignore */}
        <div className="text-4xl font-bold">{timeLeft[interval]}</div>
        <div className="text-sm uppercase">{interval}</div>
      </div>
    );
  });

  return (
    <section className="bg-brand-dark text-brand-light">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-brand-gold sm:text-5xl"
          >
            <img src="/logopigmentus.svg" alt="Pigmentus Logo" className="mx-auto h-32 mb-8" />
            Domina el Arte del Diseño de Cejas.
            <span className="sm:block"> Transforma tu Pasión en una Carrera Exitosa. </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed"
          >
            Aprende las técnicas esenciales de diseño y micropigmentación, y conviértete en una profesional certificada lista para construir tu propio negocio.
          </motion.p>

          {timerComponents.length ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex justify-center gap-4"
            >
              {timerComponents}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 text-2xl font-bold"
            >
              ¡El taller ha comenzado!
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              className="block w-full rounded border border-brand-gold bg-brand-gold px-12 py-3 text-sm font-medium text-brand-dark transition hover:bg-transparent hover:text-brand-gold focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#registration-form"
            >
              Regístrate Ahora
            </a>

            <a
              className="block w-full rounded border border-brand-gold px-12 py-3 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-brand-dark focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              href="#features"
            >
              Ver Contenido
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
