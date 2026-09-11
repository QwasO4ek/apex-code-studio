import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { LivePreviewModal } from './components/LivePreviewModal';
import { CostCalculator } from './components/CostCalculator';
import { ComparisonTable } from './components/ComparisonTable';
import { TechStackSection } from './components/TechStackSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { TeamSection } from './components/TeamSection';
import { FaqSection } from './components/FaqSection';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Modal states
  const [previewProjectId, setPreviewProjectId] = useState<string | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [contactPrefilledText, setContactPrefilledText] = useState<string>('');
  const [calcSelectedTemplate, setCalcSelectedTemplate] = useState<string | null>(null);

  // Scroll to calculator
  const handleScrollToCalculator = () => {
    const el = document.getElementById('calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to templates
  const handleScrollToTemplates = () => {
    const el = document.getElementById('templates');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Select project template for calculator
  const handleSelectForCalculator = (projectId: string) => {
    setCalcSelectedTemplate(projectId);
    handleScrollToCalculator();
  };

  // Open contact modal
  const handleOpenContactModal = (prefilled?: string) => {
    setContactPrefilledText(prefilled || '');
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-cyber-500 selection:text-dark-950">
      
      {/* Top Navigation */}
      <Navbar
        onOpenContactModal={handleOpenContactModal}
        onScrollToCalculator={handleScrollToCalculator}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onScrollToTemplates={handleScrollToTemplates}
          onScrollToCalculator={handleScrollToCalculator}
          onOpenPreview={(id) => setPreviewProjectId(id)}
        />

        {/* 2. Projects Showcase Matrix (4 Ready Templates) */}
        <ProjectsShowcase
          onOpenPreview={(id) => setPreviewProjectId(id)}
          onSelectForCalculator={handleSelectForCalculator}
        />

        {/* 3. Interactive Project Cost & Timeline Calculator */}
        <CostCalculator
          selectedTemplateId={calcSelectedTemplate}
          onOpenContactModal={handleOpenContactModal}
        />

        {/* 4. Comparison Table: Why React beats Tilda & WordPress */}
        <ComparisonTable />

        {/* 5. Modern Tech Stack & Quality Standards */}
        <TechStackSection />

        {/* 6. Production Timeline (from Day 1 to Day 5) */}
        <ProcessTimeline />

        {/* 7. The Development Team & Principles */}
        <TeamSection />

        {/* 8. Frequently Asked Questions (FAQ) */}
        <FaqSection />
      </main>

      {/* 9. Comprehensive Footer */}
      <Footer />

      {/* Interactive Device Test-Drive Modal */}
      {previewProjectId && (
        <LivePreviewModal
          projectId={previewProjectId}
          onClose={() => setPreviewProjectId(null)}
          onSelectForCalculator={handleSelectForCalculator}
        />
      )}

      {/* Contact & Inquiry Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        prefilledText={contactPrefilledText}
      />

    </div>
  );
};

export default App;