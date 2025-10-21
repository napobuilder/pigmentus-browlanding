
import React from 'react';
import Section from './Section';

const UrgencySection: React.FC = () => {
  return (
    <Section className="bg-brand-dark text-brand-light py-16" id="urgency-offer">
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">
          ¡Inscríbete en el nivel <span className="text-brand-gold">Brow Revert</span>!
        </h2>
        <p className="text-xl mb-6">
          Aprovecha esta oportunidad para transformar tu carrera con nuestro programa más popular.
        </p>
        <p className="text-5xl font-extrabold mb-8">
          <span className="line-through text-gray-500 mr-4">$199</span>
          <span className="text-brand-gold">$39</span>
        </p>

        <a
          href="#registration-form?tier=Brow Revert"
          className="mt-8 inline-block rounded-full border border-brand-gold bg-brand-gold px-12 py-3 text-sm font-medium text-brand-dark transition hover:opacity-90 focus:outline-none focus:ring"
        >
          ¡Regístrate en Brow Revert!
        </a>
      </div>
    </Section>
  );
};

export default UrgencySection;
