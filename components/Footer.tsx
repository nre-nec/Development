
import React from 'react';

interface FooterProps {
  content: {
    final: string;
    finalEn: string;
    line2: string;
  };
}

export const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-ncn-dark-blue border-t border-ncn-medium-blue text-center py-8 px-6">
      <div className="container mx-auto text-sm text-ncn-light-gray/70">
        <p className="max-w-3xl mx-auto mb-2">{content.final}</p>
        <p className="max-w-3xl mx-auto mb-4 font-poppins">{content.finalEn}</p>
        <p>{content.line2}</p>
      </div>
    </footer>
  );
};
