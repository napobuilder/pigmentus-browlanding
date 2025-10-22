
import React from 'react';
import Section from './Section';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'Tomé el curso de Powder Brow. Excelente servicio y trato profesional que te hace sentir como en familia. Más que un local, es un hogar para salir realizada.',
      name: 'Alayla Ortiz',
      title: 'Alumna de Powder Brow',
    },
    {
      quote: '¡Encantada con el profesionalismo de la profesora Lizette Piñero y su equipo! Feliz de haberlos escogido para mi capacitación.',
      name: 'Lisbeth Báez González',
      title: 'Alumna satisfecha',
    },
    {
      quote: 'La mejor academia, muy profesional en sus servicios y el método de educación. ¡Las cejas impecables!',
      name: 'Promociónate PR',
      title: 'Empresaria',
    },
    {
      quote: '¡Espectacular el trato y ambiente relajador! El trabajo es muy profesional y de calidad. ¡Lo recomiendo al 100%!',
      name: 'Milly Pérez',
      title: 'Clienta satisfecha',
    },
    {
      quote: 'Excelente trabajo de microblading. Las cejas se ven bien naturales.',
      name: 'Nidia Muñoz',
      title: 'Clienta de Microblading',
    },
  ];

  return (
    <Section className="bg-brand-dark py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-light">Lo que dicen <span className='text-brand-gold'>nuestras alumnas</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-brand-dark border border-brand-gold/20 rounded-lg p-8 shadow-lg">
              <p className="text-lg mb-4 text-brand-light">{testimonial.quote}</p>
              <p className="text-right font-bold text-brand-gold">- {testimonial.name}</p>
              <p className="text-right text-sm text-brand-light/75">{testimonial.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#registration-form"
            className="inline-block rounded-full border border-brand-gold bg-brand-gold px-12 py-3 text-lg font-medium text-brand-dark transition hover:bg-transparent hover:text-brand-gold focus:outline-none focus:ring active:text-opacity-75"
          >
            ¡Inscríbete y Transforma tu Futuro!
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
