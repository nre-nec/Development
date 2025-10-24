import React from 'react';
import { PulsingLogo } from './PulsingLogo';

interface HeroProps {
  content: {
    title: string;
    subtitle: string;
    slogan: string;
    cta: string;
  };
}

export const HeroSection: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-ncn-dark-blue text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ncn-dark-blue via-ncn-medium-blue to-ncn-dark-blue opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-ncn-medium-blue/30 to-transparent"></div>
      
      <div className="z-10 px-4">
        <div className="flex justify-center mb-6">
          <PulsingLogo className="w-20 h-20" color="#FFFFFF" />
        </div>
        <h2 className="text-2xl md:text-3xl text-ncn-light-gray font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {content.title}
        </h2>
        <h3 className="text-lg md:text-xl text-ncn-light-gray/80 mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {content.subtitle}
        </h3>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-ncn-white mb-8 animate-glow animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {content.slogan}
        </h1>
        <a 
          href="#projects"
          className="inline-block bg-ncn-light-gray text-ncn-dark-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-ncn-white hover:scale-105 transform transition-all duration-300 shadow-lg animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          {content.cta}
        </a>
      </div>
    </section>
  );
};