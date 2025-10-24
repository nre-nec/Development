
import React, { useState, useEffect } from 'react';
import type { Language } from '../types';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: {
    langToggle: string;
    nav: { about: string; projects: string; programs: string; reports: string; contact: string; };
  };
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  const navLinks = [
    { href: '#about', text: content.nav.about },
    { href: '#projects', text: content.nav.projects },
    { href: '#programs', text: content.nav.programs },
    { href: '#reports', text: content.nav.reports },
    { href: '#contact', text: content.nav.contact },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-ncn-dark-blue/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-ncn-white">NCN</a>
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-ncn-light-gray hover:text-ncn-white transition-colors">{link.text}</a>
          ))}
        </div>
        <div className="flex items-center">
            <button onClick={toggleLanguage} className="border border-ncn-light-gray text-ncn-light-gray hover:bg-ncn-light-gray hover:text-ncn-dark-blue rounded-md px-3 py-1 transition-colors text-sm font-bold">
            {content.langToggle}
            </button>
            <div className="md:hidden ltr:ml-4 rtl:mr-4">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-ncn-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>
        </div>
      </nav>
      {isMenuOpen && (
          <div className="md:hidden bg-ncn-medium-blue/90 backdrop-blur-sm pb-4">
              <div className="flex flex-col items-center space-y-4">
                  {navLinks.map((link) => (
                      <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-ncn-light-gray hover:text-ncn-white transition-colors">{link.text}</a>
                  ))}
              </div>
          </div>
      )}
    </header>
  );
};
