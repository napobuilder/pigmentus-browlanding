
import React from 'react';
import Hero from '../components/Hero';
import Tiers from '../components/Tiers';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Instructor from '../components/Instructor';
import CTA from '../components/CTA';
import RegistrationForm from '../components/RegistrationForm';
import Footer from '../components/Footer';
import UrgencySectionVIP from '../components/UrgencySectionVIP';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
      <Instructor />
      <Tiers />
      <UrgencySectionVIP />
      <CTA />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default HomePage;
