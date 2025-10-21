
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const Instructor: React.FC = () => {
  return (
    <Section className="bg-brand-light py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Columna de la Imagen */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img 
              src="/lizette.svg" 
              alt="Foto de la instructora Lizette Piñero" 
              className="rounded-full border-8 border-brand-gold object-cover object-position-left w-2/3 aspect-square mx-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          </motion.div>

          {/* Columna del Texto */}
          <motion.div 
            className="md:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl mb-4">
              Conoce a tu Master Instructora, <span className="text-brand-gold">Lizette Piñero</span>
            </h2>
            <p className="text-brand-dark/80 text-lg mb-6">
              Como pionera de la micropigmentación manual en Puerto Rico y con más de 35 años de experiencia, Lizette no solo ha definido el estándar de la industria, sino que ha dedicado su vida a elevarlo.
            </p>
            <p className="text-brand-dark/80 text-lg mb-6">
              Su misión va más allá de la técnica: busca forjar verdaderos artistas de la belleza, entregando el conocimiento y la visión de negocio necesarios para construir una carrera de éxito y prestigio.
            </p>
            <ul className="space-y-3 text-brand-dark/90">
              <li className="flex items-center">
                <svg className="w-6 h-6 text-brand-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Más de 35 años de experiencia en la industria.</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-brand-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Pionera de la técnica de micropigmentación manual en Puerto Rico.</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-brand-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Fundadora de Pigmentus Academy & Studio.</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 text-brand-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Cientos de profesionales exitosos formados.</span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>
    </Section>
  );
};

export default Instructor;
