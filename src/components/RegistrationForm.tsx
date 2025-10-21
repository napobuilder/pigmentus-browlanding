
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Section from './Section';

const schema = z.object({
  name: z.string().min(3, { message: 'El nombre debe tener al menos 3 caracteres' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido' }),
  tier: z.enum(['Brow Atelier', 'Brow Revert', 'Brow Expert VIP']),
});

type FormData = z.infer<typeof schema>;

const RegistrationForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Aquí se manejaría el envío del formulario (e.g., a una API)
    alert(`¡Gracias por registrarte, ${data.name}! Has elegido el nivel ${data.tier}.`);
  };

  return (
    <Section className="bg-brand-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-brand-dark">Inscríbete <span class='text-brand-gold'>Ahora</span></h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-brand-white p-8 rounded-lg shadow-lg">
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
          <div className="mb-6">
            <label htmlFor="tier" className="block text-brand-dark font-bold mb-2">Elige tu Nivel</label>
            <select id="tier" {...register('tier')} className="w-full px-3 py-2 leading-tight text-brand-dark border rounded-md bg-brand-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold">
              <option>Brow Atelier</option>
              <option>Brow Revert</option>
              <option>Brow Expert VIP</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="w-full bg-brand-gold text-brand-dark font-bold py-3 px-4 rounded-md transition hover:opacity-90 focus:outline-none focus:shadow-outline">
              Registrarme
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default RegistrationForm;
