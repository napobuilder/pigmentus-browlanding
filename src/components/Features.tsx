
import React from 'react';
import Section from './Section';

const Features: React.FC = () => {
  const features = [
    'Anatomía y crecimiento del vello',
    'Tipos de rostro y puntos de armonía',
    'Técnicas de medición y simetría (Golden Ratio, String Mapping, etc.)',
    'Preparación de piel, limpieza y diseño con pinza, cera y tijera',
    'Colorimetría básica',
    'Técnicas complementarias: Brow Lamination, Henna, Brow Tint, Shading básico',
    'Práctica de simetría en modelos o maniquíes',
    'Kit profesional y soporte post-taller (Nivel VIP)',
  ];

  return (
    <Section className="bg-brand-light text-brand-dark py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">¿Qué aprenderás en <span class='text-brand-gold'>Brow Rebirth?</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-brand-white rounded-lg p-6 flex items-center shadow-md">
              <svg className="w-6 h-6 text-brand-gold mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <p className="text-lg">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Features;
