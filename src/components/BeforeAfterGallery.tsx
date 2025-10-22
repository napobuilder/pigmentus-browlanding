
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

const BeforeAfterGallery: React.FC = () => {
  const images = [
    { src: '/IMG_1706.PNG', alt: 'Trabajo de micropigmentación' },
    { src: '/IMG_1707.PNG', alt: 'Trabajo de micropigmentación' },
    { src: '/IMG_1708.PNG', alt: 'Trabajo de micropigmentación' },
    { src: '/IMG_1709.PNG', alt: 'Trabajo de micropigmentación' },
    { src: '/IMG_1710.PNG', alt: 'Trabajo de micropigmentación' },
    { src: '/IMG_1711.PNG', alt: 'Trabajo de micropigmentación' },
    { src: '/IMG_1712.PNG', alt: 'Trabajo de micropigmentación' },
    { src: '/IMG_1713.PNG', alt: 'Trabajo de micropigmentación' },
    { src: '/IMG_1714.PNG', alt: 'Trabajo de micropigmentación' },
  ];

  return (
    <Section className="bg-brand-light py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-dark">Nuestros Trabajos, <span className="text-brand-gold">Tu Inspiración</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#registration-form"
            className="inline-block rounded-full border border-brand-gold bg-brand-gold px-12 py-3 text-lg font-medium text-brand-dark transition hover:bg-transparent hover:text-brand-gold focus:outline-none focus:ring active:text-opacity-75"
          >
            ¡Inspírate e Inscríbete!
          </a>
        </div>
      </div>
    </Section>
  );
};

export default BeforeAfterGallery;
