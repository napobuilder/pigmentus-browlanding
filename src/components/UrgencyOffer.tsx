
import React from 'react';
import Section from './Section';
import Countdown from './Countdown';

interface UrgencyOfferProps {
  tier: string;
  title: string;
  originalPrice: string;
  finalPrice: string;
  ctaText: string;
  isVip?: boolean;
  onSelectTier: (tier: string) => void;
}

const UrgencyOffer: React.FC<UrgencyOfferProps> = ({
  tier,
  title,
  originalPrice,
  finalPrice,
  ctaText,
  isVip = false,
  onSelectTier,
}) => {

  const midnight = new Date();
  midnight.setDate(midnight.getDate() + 1);
  midnight.setHours(0, 0, 0, 0);

  const priceStyles = isVip 
    ? "bg-red-500 text-white px-4 py-2 rounded-lg inline-block"
    : "";

  return (
    <Section className="bg-brand-dark text-brand-light py-16" id={`urgency-offer-${tier.toLowerCase().replace(' ', '-')}`}>
      <div className="mx-auto max-w-screen-xl px-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">
          {title}
        </h2>
        <p className="text-xl mb-6">
          Llévate el nivel <span className="text-brand-gold font-bold">{tier}</span>
        </p>
        <p className={`text-5xl font-extrabold mb-8 ${priceStyles}`}>
          <span className={isVip ? "line-through text-gray-300 mr-4" : "line-through text-gray-500 mr-4"}>{originalPrice}</span>
          <span className={isVip ? "" : "text-brand-gold"}>{finalPrice}</span>
        </p>

        <div className="flex justify-center items-center mb-8">
            <p className="text-xl mr-4">Termina en:</p>
            <Countdown 
              targetDate={midnight}
              showDays={false}
              endedMessage={<p className="text-2xl font-bold">¡La oferta ha terminado!</p>}
            />
        </div>

        <a
          href="#registration-form"
          onClick={() => {
            onSelectTier(tier);
            window.location.hash = "registration-form";
          }}
          className="mt-8 inline-block rounded-full border border-brand-gold bg-brand-gold px-12 py-3 text-sm font-medium text-brand-dark transition hover:opacity-90 focus:outline-none focus:ring"
        >
          {ctaText}
        </a>
      </div>
    </Section>
  );
};

export default UrgencyOffer;
