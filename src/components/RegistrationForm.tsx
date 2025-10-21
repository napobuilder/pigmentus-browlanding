

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Section from './Section';

const schema = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido' }),
  phone: z.string().min(10, { message: 'Por favor, introduce un número de teléfono válido (mínimo 10 dígitos)' }),
  tier: z.enum(['Brow Atelier', 'Brow Revert', 'Brow Expert VIP']),
});

type FormData = z.infer<typeof schema>;

interface RegistrationFormProps {
  onTierChange: (tier: string) => void;
  preselectTierFromParent: string | null;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onTierChange, preselectTierFromParent }) => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      tier: preselectTierFromParent && schema.shape.tier.options.includes(preselectTierFromParent)
        ? preselectTierFromParent as 'Brow Atelier' | 'Brow Revert' | 'Brow Expert VIP'
        : 'Brow Atelier',
    },
  });

  const watchedTier = watch('tier');

  useEffect(() => {
    onTierChange(watchedTier);
  }, [watchedTier, onTierChange]);

  useEffect(() => {
    if (preselectTierFromParent && watchedTier !== preselectTierFromParent) {
      setValue('tier', preselectTierFromParent as 'Brow Atelier' | 'Brow Revert' | 'Brow Expert VIP', {
        shouldValidate: true,
        shouldDirty: true,
      });
      const element = document.getElementById('registration-form');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [preselectTierFromParent, setValue, watchedTier]);

  const onSubmit = (data: FormData) => {
    console.log('Submitting data:', data);

    const whatsappMessage = encodeURIComponent(
      `¡Hola! Me quiero registrar para el curso de cejas.\n` +
      `Mi nombre es: ${data.name}\n` +
      `Mi email es: ${data.email}\n` +
      `Mi teléfono es: ${data.phone}\n` +
      `He elegido el nivel: ${data.tier}`
    );

    window.location.href = `https://wa.me/584128998666?text=${whatsappMessage}`;
  };

  return (
    <Section id="registration-form" className="bg-brand-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-dark">Inscríbete <span class='text-brand-gold'>Ahora</span></h2>
        <form onSubmit={handleSubmit(onSubmit)} name="registration" data-netlify="true" className="max-w-lg mx-auto bg-brand-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-brand-dark font-bold mb-2">Nombre Completo</label>
            <input type="text" id="name" {...register('name')} className="w-full px-3 py-2 leading-tight text-brand-dark border rounded-md bg-brand-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold" />
            {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-brand-dark font-bold mb-2">Email</label>
            <input type="email" id="email" {...register('email')} className="w-full px-3 py-2 leading-tight text-brand-dark border rounded-md bg-brand-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold" />
            {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-brand-dark font-bold mb-2">Número de Teléfono</label>
            <input type="tel" id="phone" {...register('phone')} className="w-full px-3 py-2 leading-tight text-brand-dark border rounded-md bg-brand-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold" />
            {errors.phone && <p className="text-red-500 text-xs italic mt-1">{errors.phone.message}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-brand-dark font-bold mb-2">Elige tu Nivel</label>
            <div className="grid grid-cols-1 gap-4">
              {[ 'Brow Atelier', 'Brow Revert', 'Brow Expert VIP' ].map((tierOption) => (
                <label
                  key={tierOption}
                  className={`flex items-center justify-between p-4 border rounded-md cursor-pointer transition-all duration-200
                    ${watchedTier === tierOption ? 'border-brand-gold bg-brand-gold/10 shadow-md' : 'border-gray-300 bg-brand-white hover:border-brand-gold/50'}`}
                >
                  <span className="font-medium text-brand-dark">{tierOption}</span>
                  <input
                    type="radio"
                    value={tierOption}
                    {...register('tier')}
                    className="form-radio h-5 w-5 text-brand-gold"
                  />
                </label>
              ))}
            </div>
            {errors.tier && <p className="text-red-500 text-xs italic mt-1">{errors.tier.message}</p>}
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-4 rounded-md transition hover:opacity-90 focus:outline-none focus:shadow-outline">
              {watchedTier === 'Brow Atelier' && 'Registrarme y Enviar WhatsApp'}
              {watchedTier === 'Brow Revert' && '¡Sí, quiero mi acceso a Brow Revert!'}
              {watchedTier === 'Brow Expert VIP' && '¡Acceder a la Experiencia VIP!'}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default RegistrationForm;
