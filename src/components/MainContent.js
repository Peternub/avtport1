import React from 'react';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import PricingSection from './PricingSection';
import ContactSection from './ContactSection';

const MainContent = () => {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <PricingSection />
      <ContactSection />
    </main>
  );
};

export default MainContent;