
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Tiers from '../components/Tiers';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Instructor from '../components/Instructor';
import CTA from '../components/CTA';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';
import UrgencySection from '../components/UrgencySection';
import UrgencySectionVIP from '../components/UrgencySectionVIP';

const HomePage: React.FC = () => {
  const [selectedTierForConditionalRender, setSelectedTierForConditionalRender] = useState<string | null>(null);
  const [tierToPreselectInForm, setTierToPreselectInForm] = useState<string | null>(null);

  const handleSelectTier = (tier: string) => {
    setTierToPreselectInForm(tier);
    setSelectedTierForConditionalRender(tier);
  };

  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Instructor />
      <Tiers />
      <CTA />
      <RegistrationForm
        onTierChange={setSelectedTierForConditionalRender}
        preselectTierFromParent={tierToPreselectInForm}
      />
      {selectedTierForConditionalRender === 'Brow Atelier' && (
        <UrgencySection onSelectTier={handleSelectTier} />
      )}
      <UrgencySectionVIP onSelectTier={handleSelectTier} />
      <Footer />
    </div>
  );
};

export default HomePage;
