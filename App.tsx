
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ReportsSection } from './components/ReportsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { content } from './constants/content';
import type { Language } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.className = language === 'ar' ? 'font-tajawal bg-ncn-dark-blue text-ncn-light-gray' : 'font-poppins bg-ncn-dark-blue text-ncn-light-gray';
  }, [language]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-ncn-dark-blue">
      <Header language={language} setLanguage={setLanguage} content={content.header[language]} />
      <main>
        <HeroSection content={content.hero[language]} />
        <AboutSection content={content.about[language]} />
        <ProjectsSection content={content.projects[language]} projectsData={content.projectsData[language]} />
        <ProgramsSection content={content.programs[language]} programsData={content.programsData[language]} />
        <ReportsSection content={content.reports[language]} reportsData={content.reportsData[language]} />
        <ContactSection content={content.contact[language]} />
      </main>
      <Footer content={content.footer[language]} />
    </div>
  );
};

export default App;
