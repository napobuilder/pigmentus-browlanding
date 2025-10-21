
import React from 'react';
import Section from './Section';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: '¡Este curso cambió mi vida! Pasé de no saber nada a tener mi propio negocio de cejas en semanas.',
      name: 'Ana Pérez',
      title: 'Estudiante de Brow Rebirth',
    },
    {
      quote: 'La calidad del contenido y el soporte son increíbles. Lo recomiendo al 100%.',
      name: 'María Rodríguez',
      title: 'Estudiante de Brow Rebirth',
    },
    {
      quote: 'Nunca pensé que podría lograr resultados tan profesionales. ¡Gracias!',
      name: 'Carla Gómez',
      title: 'Estudiante de Brow Rebirth',
    },
  ];

  return (
    <Section className="bg-brand-dark py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-light">Lo que dicen <span class='text-brand-gold'>nuestras alumnas</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-dark border border-brand-gold/20 rounded-lg p-8 shadow-lg">
              <p className="text-lg mb-4 text-brand-light">{testimonial.quote}</p>
              <p className="text-right font-bold text-brand-gold">- {testimonial.name}</p>
              <p className="text-right text-sm text-brand-light/75">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
