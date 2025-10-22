


import React from 'react';

import Section from './Section';

import { motion } from 'framer-motion';



const SuccessStory: React.FC = () => {

  return (

    <Section className="bg-brand-white py-16 sm:py-24">

      <div className="container mx-auto px-4">

        <div className="text-center max-w-3xl mx-auto mb-12">

          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl mb-4">

            Historias Reales de Transformación y Empoderamiento

          </h2>

          <p className="text-lg text-brand-dark/80">

            Conoce cómo nuestras estudiantes han encontrado su pasión y construido negocios exitosos con el apoyo de Pigmentus y Lizette.

          </p>

        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md::gap-12 items-center">

          {/* Antes */}

          <motion.div

            className="border border-gray-200 rounded-lg p-8 text-center shadow-lg"

            initial={{ opacity: 0, x: -50 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.7, ease: "easeOut" }}

          >

            <h3 className="text-2xl font-bold text-red-500 mb-4">ANTES</h3>

            <img src="/antes.png" alt="Ana antes del curso" className="mx-auto rounded-full mb-4 w-32 h-32 object-cover"/>

            <p className="text-brand-dark/75 mb-2">Buscando una oportunidad para crecer profesionalmente.</p>

            <p className="text-brand-dark/75 mb-2">Con ganas de emprender, pero sin saber por dónde empezar.</p>

            <p className="text-brand-dark/75">Anhelando un trabajo que le permitiera expresar su creatividad.</p>

          </motion.div>



          {/* Después */}

          <motion.div

            className="border-2 border-brand-gold rounded-lg p-8 text-center shadow-2xl"

            initial={{ opacity: 0, x: 50 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.7, ease: "easeOut" }}

          >

            <h3 className="text-2xl font-bold text-green-500 mb-4">DESPUÉS</h3>

            <img src="/ana.png" alt="Ana después del curso, exitosa" className="mx-auto rounded-full mb-4 w-32 h-32 object-cover"/>

            <p className="text-brand-dark/90 mb-2 font-semibold">Fundadora de su propio estudio de belleza.</p>

            <p className="text-brand-dark/90 mb-2 font-semibold">Logró una independencia financiera y flexibilidad en su horario.</p>

            <p className="text-brand-dark/90 font-semibold">Disfruta de la satisfacción de transformar miradas y vidas.</p>

          </motion.div>

        </div>



        <div className="text-center max-w-3xl mx-auto mt-12">

            <h3 className="text-2xl font-bold text-brand-dark mb-4">El Impulso Fue la Metodología de <span className="text-brand-gold">Lizette</span></h3>

            <p className="text-lg text-brand-dark/80">

              "La metodología de Lizette me dio las herramientas y la confianza para dar el salto. No solo aprendí técnicas, sino que encontré una comunidad y el apoyo para construir mi propio camino. Fue un antes y un después en mi carrera." - Ana P.

            </p>

        </div>
        <div className="text-center mt-12">
          <a
            href="#registration-form"
            className="inline-block rounded-full border border-brand-gold bg-brand-gold px-12 py-3 text-lg font-medium text-brand-dark transition hover:bg-transparent hover:text-brand-gold focus:outline-none focus:ring active:text-opacity-75"
          >
            ¡Crea Tu Propia Historia de Éxito!
          </a>
        </div>

      </div>

    </Section>

  );

};



export default SuccessStory;


