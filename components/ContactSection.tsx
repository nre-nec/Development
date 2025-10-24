
import React from 'react';
import { useOnScreen } from '../hooks/useOnScreen';
import { EmailIcon, WebIcon, WhatsAppIcon, SuggestionsIcon } from './icons/IconComponents';

interface ContactProps {
  content: {
    title: string;
    form: { name: string; email: string; message: string; send: string; };
    suggestions: string;
  };
}

export const ContactSection: React.FC<ContactProps> = ({ content }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });
  
  const socialLinks = [
    { Icon: EmailIcon, href: 'mailto:quality@ncn.edu.sa', ariaLabel: 'Email' },
    { Icon: WebIcon, href: 'https://ncn.edu.sa', ariaLabel: 'Website' },
    { Icon: WhatsAppIcon, href: 'https://wa.me/966000000000', ariaLabel: 'WhatsApp' },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-ncn-medium-blue">
      <div className="container mx-auto px-6">
        <div className={`animated-section ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-ncn-white text-center mb-12">
            {content.title}
          </h2>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <form className={`space-y-6 animated-section ${isVisible ? 'is-visible' : ''}`} style={{ animationDelay: '150ms' }} onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="hidden">{content.form.name}</label>
              <input type="text" id="name" placeholder={content.form.name} className="w-full bg-ncn-dark-blue/50 border border-ncn-light-gray/20 text-ncn-white p-3 rounded-md focus:ring-2 focus:ring-ncn-light-gray focus:outline-none transition-shadow" />
            </div>
            <div>
              <label htmlFor="email" className="hidden">{content.form.email}</label>
              <input type="email" id="email" placeholder={content.form.email} className="w-full bg-ncn-dark-blue/50 border border-ncn-light-gray/20 text-ncn-white p-3 rounded-md focus:ring-2 focus:ring-ncn-light-gray focus:outline-none transition-shadow" />
            </div>
            <div>
              <label htmlFor="message" className="hidden">{content.form.message}</label>
              <textarea id="message" placeholder={content.form.message} rows={5} className="w-full bg-ncn-dark-blue/50 border border-ncn-light-gray/20 text-ncn-white p-3 rounded-md focus:ring-2 focus:ring-ncn-light-gray focus:outline-none transition-shadow"></textarea>
            </div>
            <button type="submit" className="w-full bg-ncn-light-gray text-ncn-dark-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-ncn-white hover:scale-105 transform transition-all duration-300">
              {content.form.send}
            </button>
          </form>
          <div className={`space-y-6 animated-section ${isVisible ? 'is-visible' : ''}`} style={{ animationDelay: '300ms' }}>
            <div className="flex justify-center lg:justify-start space-x-6 rtl:space-x-reverse">
              {socialLinks.map(({ Icon, href, ariaLabel }) => (
                <a key={href} href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer" className="text-ncn-light-gray/70 hover:text-ncn-white transition-colors">
                  <Icon className="w-8 h-8" />
                </a>
              ))}
            </div>
            <a href="#" className="flex items-center justify-center lg:justify-start w-full bg-ncn-dark-blue/50 border border-ncn-light-gray/20 text-ncn-light-gray p-4 rounded-md hover:bg-ncn-dark-blue transition-colors">
              <SuggestionsIcon className="w-6 h-6 ltr:mr-3 rtl:ml-3" />
              <span>{content.suggestions}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
