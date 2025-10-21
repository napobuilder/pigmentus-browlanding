
import React from 'react';
import Section from './Section';

const Tiers: React.FC = () => {
  return (
    <Section className="bg-brand-light text-brand-dark">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Elige tu nivel de <span className='text-brand-gold'>especialización</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="border bg-brand-white rounded-lg p-8 flex flex-col shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Brow Atelier</h3>
            <p className="text-4xl font-bold mb-4">$0</p>
            <ul className="text-lg mb-8 flex-grow">
              <li className="mb-2">Teoría + práctica básica</li>
              <li className="mb-2">Demostración en vivo</li>
              <li className="mb-2">Simetría en maniquíes</li>
            </ul>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Cupos restantes: 5</span>
                <span className="text-sm font-medium text-gray-700">de 50</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-brand-gold h-2.5 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
            <button className="border border-brand-dark text-brand-dark font-bold py-2 px-4 rounded transition hover:bg-brand-dark hover:text-brand-light" onClick={() => window.location.href = '#registration-form'}>Regístrate Gratis</button>
          </div>
          {/* Tier 2 */}
          <div className="border-2 border-brand-gold bg-brand-white rounded-lg p-8 flex flex-col relative shadow-2xl">
            <span className="bg-brand-gold text-brand-dark px-3 py-1 text-sm font-bold absolute top-0 -mt-3 rounded-full">MÁS POPULAR</span>
            <h3 className="text-2xl font-bold mb-4">Brow Revert</h3>
            <p className="text-4xl font-bold mb-4"><span className="line-through text-gray-500 text-2xl mr-2">$199</span> $39</p>
            <ul className="text-lg mb-8 flex-grow">
              <li className="mb-2">Todo lo de Brow Atelier</li>
              <li className="mb-2">Certificado digital</li>
              <li className="mb-2">Guía PDF exclusiva</li>
              <li className="mb-2">Mini kit de medición</li>
              <li className="mb-2">Acceso a la grabación</li>
            </ul>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Cupos restantes: 23</span>
                <span className="text-sm font-medium text-gray-700">de 50</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-brand-gold h-2.5 rounded-full" style={{ width: '46%' }}></div>
              </div>
            </div>
            <button className="bg-brand-gold text-brand-dark font-bold py-2 px-4 rounded transition hover:opacity-90" onClick={() => window.location.href = '#registration-form'}>Comprar Ahora</button>
          </div>
          {/* Tier 3 */}
          <div className="border bg-brand-white rounded-lg p-8 flex flex-col shadow-lg relative">
            <span className="bg-red-500 text-white px-3 py-1 text-sm font-bold absolute top-0 right-0 -mt-3 mr-3 rounded-full">¡Oferta Limitada!</span>
            <h3 className="text-2xl font-bold mb-4">Brow Expert VIP</h3>
            <p className="text-4xl font-bold mb-4"><span className="line-through text-gray-500 text-2xl mr-2">$399</span> $59</p>
            <ul className="text-lg mb-8 flex-grow">
              <li className="mb-2">Todo lo de Brow Revert</li>
              <li className="mb-2">Kit completo profesional</li>
              <li className="mb-2">Soporte exclusivo</li>
              <li className="mb-2">Revisión personalizada</li>
            </ul>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Cupos restantes: 3</span>
                <span className="text-sm font-medium text-gray-700">de 10</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-brand-gold h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
            <button className="bg-brand-dark text-brand-gold font-bold py-2 px-4 rounded transition hover:bg-opacity-90" onClick={() => window.location.href = '#registration-form'}>Inscripción VIP</button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Tiers;
