
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const SuccessStory: React.FC = () => {
  return (
    <Section className="bg-brand-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl mb-4">
            De un Trabajo Sin Futuro a Dueña de su Propio Negocio
          </h2>
          <p className="text-lg text-brand-dark/80">
            Esta no es solo una historia, es el camino que tú también puedes tomar. Conoce a Ana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
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
            <p className="text-brand-dark/75 mb-2">Atrapada en un trabajo de 9 a 5 que no la apasionaba.</p>
            <p className="text-brand-dark/75 mb-2">Ingresos limitados y sin control de su tiempo.</p>
            <p className="text-brand-dark/75">Sentía que su potencial creativo estaba desperdiciado.</p>
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
            <p className="text-brand-dark/90 mb-2 font-semibold">Dueña de su propio estudio de belleza, "Cejas con Arte".</p>
            <p className="text-brand-dark/90 mb-2 font-semibold">Duplicó sus ingresos mensuales y es dueña de su agenda.</p>
            <p className="text-brand-dark/90 font-semibold">Reconocida como una de las mejores nuevas artistas de cejas en su ciudad.</p>
          </motion.div>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-12">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">El Puente Fue <span className="text-brand-gold">Brow Rebirth</span></h3>
            <p className="text-lg text-brand-dark/80">
              "El curso de Lizette no solo me dio las habilidades técnicas, me dio la confianza y el plan de negocio para lanzar mi propia marca. Fue la mejor inversión de mi vida." - Ana P.
            </p>
        </div>

      </div>
    </Section>
  );
};

export default SuccessStory;
