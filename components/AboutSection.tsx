
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface AboutProps {
  content: {
    title: string;
    text: string;
    cta: string;
  };
}

export const AboutSection: React.FC<AboutProps> = ({ content }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="about" ref={ref} className={`py-20 bg-ncn-medium-blue transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`container mx-auto px-6 text-center animated-section ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-ncn-white mb-6">
          {content.title}
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-ncn-light-gray/90 leading-relaxed mb-8">
          {content.text}
        </p>
        <a
          href="#reports"
          className="inline-block bg-transparent border-2 border-ncn-light-gray text-ncn-light-gray font-semibold py-2 px-6 rounded-full hover:bg-ncn-light-gray hover:text-ncn-medium-blue transition-all duration-300"
        >
          {content.cta}
        </a>
      </div>
    </section>
  );
};
