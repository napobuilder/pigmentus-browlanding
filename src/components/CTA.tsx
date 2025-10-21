
import React from 'react';
import Section from './Section';

const CTA: React.FC = () => {
  return (
    <Section className="bg-brand-dark text-brand-light">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Inscríbete ahora y <span class='text-brand-gold'>transforma tu carrera</span></h2>

          <p className="mt-4 text-brand-light/75">
            No dejes pasar la oportunidad de convertirte en una experta en diseño de cejas. ¡Los cupos son limitados!
          </p>

          <a
            href="#"
            className="mt-8 inline-block rounded-full border border-brand-gold bg-brand-gold px-12 py-3 text-sm font-medium text-brand-dark transition hover:opacity-90 focus:outline-none focus:ring"
          >
            ¡Quiero mi cupo!
          </a>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
