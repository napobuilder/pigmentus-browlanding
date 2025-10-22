
import React from 'react';
import { motion } from 'framer-motion';
import Countdown from './Countdown';

interface HeroProps {
  targetDate: string;
}

const Hero: React.FC<HeroProps> = ({ targetDate }) => {
  const targetDateObj = new Date(targetDate);

  return (
    <section className="relative bg-brand-dark text-brand-light overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(/IMG_1709.PNG)' }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center relative z-10">
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
            Libera tu potencial artístico y domina las técnicas de diseño de cejas que te convertirán en una profesional altamente cotizada. La perfección está en los detalles, y aquí los aprenderás todos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Countdown 
              targetDate={targetDateObj} 
              showDays={true}
              endedMessage={
                <div className="text-2xl font-bold">
                  ¡El taller ha comenzado!
                </div>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#registration-form"
              className="block w-full rounded border border-brand-gold bg-brand-gold px-12 py-3 text-sm font-medium text-brand-dark transition hover:bg-transparent hover:text-brand-gold focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            >
              ¡Inscríbete y Domina el Arte!
            </a>

            <a
              href="#features"
              className="block w-full rounded border border-brand-gold px-12 py-3 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-brand-dark focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            >
              Explorar el Programa
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
