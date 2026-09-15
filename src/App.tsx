import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { PricingSection } from './components/PricingSection';
import { WorkStepsSection } from './components/WorkStepsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LivePreviewModal } from './components/LivePreviewModal';

export const App: React.FC = () => {
  const [previewProjectId, setPreviewProjectId] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string>('');

  const handleScrollToTemplates = () => {
    const el = document.getElementById('templates');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContacts = (subject?: string) => {
    if (subject) setSelectedSubject(subject);
    const el = document.getElementById('contacts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans antialiased">
      {/* 1. Navbar */}
      <Navbar onOpenContact={(goal) => handleScrollToContacts(goal)} />

      <main className="flex-1">
        {/* 2. Hero */}
        <HeroSection onScrollToTemplates={handleScrollToTemplates} />

        {/* 3. Showcase of 4 Templates */}
        <ProjectsShowcase
          onOpenPreview={(id) => setPreviewProjectId(id)}
          onSelectTemplate={(title) => handleScrollToContacts(`Выбран шаблон: ${title}`)}
        />

        {/* 4. Pricing & Plans */}
        <PricingSection
          onSelectPlan={(plan) => handleScrollToContacts(`Тариф: ${plan}`)}
        />

        {/* 5. How we work */}
        <WorkStepsSection />

        {/* 6. Contacts & Order form */}
        <ContactSection initialSubject={selectedSubject} />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Test-Drive Modal */}
      {previewProjectId && (
        <LivePreviewModal
          projectId={previewProjectId}
          onClose={() => setPreviewProjectId(null)}
          onSelectForOrder={(title) => handleScrollToContacts(`Выбран шаблон: ${title}`)}
        />
      )}
    </div>
  );
};

export default App;