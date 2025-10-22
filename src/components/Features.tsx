
import React from 'react';
import Section from './Section';

const Features: React.FC = () => {
  const features = [
    { title: 'La Ciencia Detrás de la Ceja Perfecta', description: 'Domina la anatomía del vello y las fases de crecimiento para garantizar resultados duraderos y clientes felices.' },
    { title: 'Diseño y Visagismo Profesional', description: 'Aprende a leer cada rostro, identificar sus puntos de armonía y crear un diseño de cejas único que realce la belleza natural.' },
    { title: 'Técnicas de Mapeo de Alta Precisión', description: 'Utiliza herramientas como el Compás Áureo y el String Mapping para lograr una simetría impecable que te distinga de la competencia.' },
    { title: 'Depilación y Perfilado Experto', description: 'Domina las técnicas de perfilado con pinza, cera y tijera para acabados limpios, definidos y profesionales.' },
    { title: 'El Arte de la Colorimetría', description: 'Aprende a seleccionar y mezclar pigmentos para lograr el tono perfecto que complemente la piel y el cabello de cada clienta.' },
    { title: 'Servicios Adicionales de Alto Valor', description: 'Expande tu menú con técnicas en tendencia como Brow Lamination, Henna y Shading para aumentar tus ingresos por cliente.' },
    { title: 'Práctica Intensiva en Entorno Real', description: 'Aplica todo lo aprendido en modelos o maniquíes de práctica avanzada, ganando la confianza para atender a tus propias clientas.' },
    { title: 'Impulso VIP: Kit Profesional y Soporte', description: 'Recibe un kit de herramientas profesionales y acceso a un grupo de soporte exclusivo para resolver dudas después del taller (Nivel VIP).' }
  ];

  return (
    <Section id="features" className="bg-brand-light text-brand-dark py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">De Cero a <span className='text-brand-gold'>Artista de Cejas Profesional</span>: Esto es lo que Dominarás</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-brand-white rounded-lg p-6 shadow-md transition-transform hover:scale-105 duration-300">
              <div className="flex items-start mb-3">
                <svg className="w-8 h-8 text-brand-gold mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="text-xl font-bold text-brand-dark mt-1">{feature.title}</h3>
              </div>
              <p className="text-brand-dark/80 pl-12">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#registration-form"
            className="inline-block rounded-full border border-brand-gold bg-brand-gold px-12 py-3 text-lg font-medium text-brand-dark transition hover:bg-transparent hover:text-brand-gold focus:outline-none focus:ring active:text-opacity-75"
          >
            ¡Quiero Inscribirme Ahora!
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Features;
