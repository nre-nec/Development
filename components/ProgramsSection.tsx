
import React from 'react';
import type { Program } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';

interface ProgramsProps {
  content: { title: string; cta: string; };
  programsData: Program[];
}

const ProgramCard: React.FC<{ program: Program; index: number }> = ({ program, index }) => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });
    return (
        <div ref={ref} className={`relative overflow-hidden rounded-lg shadow-lg group animated-section ${isVisible ? 'is-visible' : ''}`} style={{ animationDelay: `${index * 150}ms` }}>
            <img src={program.image} alt={program.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                <h3 className="text-ncn-white text-lg font-semibold">{program.title}</h3>
            </div>
        </div>
    );
};

export const ProgramsSection: React.FC<ProgramsProps> = ({ content, programsData }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });
  return (
    <section id="programs" ref={ref} className="py-20 bg-ncn-medium-blue">
      <div className="container mx-auto px-6">
        <div className={`text-center animated-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-ncn-white mb-12">
              {content.title}
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {programsData.map((program, index) => (
            <ProgramCard key={index} program={program} index={index}/>
          ))}
        </div>
        <div className={`text-center animated-section ${isVisible ? 'is-visible' : ''}`} style={{ animationDelay: '450ms' }}>
          <a
            href="#"
            className="inline-block bg-ncn-light-gray text-ncn-dark-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-ncn-white hover:scale-105 transform transition-all duration-300"
          >
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  );
};
