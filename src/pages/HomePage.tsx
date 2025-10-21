
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Tiers from '../components/Tiers';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import SuccessStory from '../components/SuccessStory';
import Instructor from '../components/Instructor';
import CTA from '../components/CTA';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';
import UrgencyOffer from '../components/UrgencyOffer';

const HomePage: React.FC = () => {
  const [selectedTierForConditionalRender, setSelectedTierForConditionalRender] = useState<string | null>(null);
  const [tierToPreselectInForm, setTierToPreselectInForm] = useState<string | null>(null);

  const handleSelectTier = (tier: string) => {
    setTierToPreselectInForm(tier);
    setSelectedTierForConditionalRender(tier);
  };

  return (
    <div>
      <Hero targetDate="2025-11-11T18:00:00" />
      <Features />
      <Testimonials />
      <SuccessStory />
      <Instructor />
      <Tiers />
      <CTA />
      <RegistrationForm
        onTierChange={setSelectedTierForConditionalRender}
        preselectTierFromParent={tierToPreselectInForm}
      />
      {selectedTierForConditionalRender === 'Brow Atelier' && (
        <UrgencyOffer 
          tier="Brow Revert"
          title="¡Oferta Exclusiva por Tiempo Limitado!"
          originalPrice="$199"
          finalPrice="$39"
          ctaText="¡Aprovecha Ahora! (Cupos Limitados)"
          onSelectTier={handleSelectTier} 
        />
      )}
      <UrgencyOffer 
        tier="Brow Expert VIP"
        title="¡Oferta VIP Exclusiva por Tiempo Limitado!"
        originalPrice="$399"
        finalPrice="$59"
        ctaText="¡Aprovecha la Oferta VIP Ahora! (Cupos Muy Limitados)"
        isVip={true}
        onSelectTier={handleSelectTier}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
