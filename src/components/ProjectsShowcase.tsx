import React, { useState } from 'react';
import { ProjectCategory, ProjectTemplate } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';
import { 
  ExternalLink, 
  Smartphone, 
  Monitor, 
  Check, 
  Sparkles, 
  ChevronRight, 
  Flame, 
  ArrowUpRight,
  Activity,
  ShieldAlert,
  Sliders,
  FileText,
  Layers,
  MapPin,
  Calculator,
  Video,
  Calendar,
  Clock,
  UserCheck,
  Send,
  Search,
  Eye,
  DollarSign,
  Heart
} from 'lucide-react';

interface ProjectsShowcaseProps {
  onOpenPreview: (projectId: string) => void;
  onSelectForCalculator: (projectId: string) => void;
}

// Map string icon names to Lucide components
const renderFeatureIcon = (name: string) => {
  const props = { className: "w-4 h-4 text-cyber-400 shrink-0" };
  switch (name) {
    case 'Activity': return <Activity {...props} />;
    case 'ShieldAlert': return <ShieldAlert {...props} />;
    case 'Sliders': return <Sliders {...props} />;
    case 'FileText': return <FileText {...props} />;
    case 'Layers': return <Layers {...props} />;
    case 'MapPin': return <MapPin {...props} />;
    case 'Calculator': return <Calculator {...props} />;
    case 'Video': return <Video {...props} />;
    case 'Calendar': return <Calendar {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'UserCheck': return <UserCheck {...props} />;
    case 'Send': return <Send {...props} />;
    case 'Search': return <Search {...props} />;
    case 'Eye': return <Eye {...props} />;
    case 'DollarSign': return <DollarSign {...props} />;
    case 'Heart': return <Heart {...props} />;
    default: return <Sparkles {...props} />;
  }
};

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  onOpenPreview,
  onSelectForCalculator,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="templates" className="py-20 lg:py-32 relative">
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5 text-cyber-400" />
            <span>Готовые отраслевые решения</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Флагманские шаблоны <br />
            <span className="gradient-cyber">с живым интерактивным демо</span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Это не статичные макеты из Figma, а полностью работающие, собранные и развернутые в глобальной сети платформы. Нажмите «Тест-драйв», чтобы протестировать любой сервис прямо сейчас, или откройте оригинальный сайт.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'Все 4 шаблона' },
              { id: 'medtech', label: '🦷 Медицина & Стоматология' },
              { id: 'construction', label: '🏡 Загородное строительство' },
              { id: 'beauty', label: '✨ Салоны красоты & CRM' },
              { id: 'auto', label: '🏎 Автосалоны & Трейд-ин' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as ProjectCategory)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-cyber-500 text-dark-950 shadow-lg shadow-cyber-500/25 font-bold scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-850 text-slate-300 border border-white/5 hover:border-white/15'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden shadow-2xl backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
                
                {/* Left Column: Visual Mockup & Interactive Triggers (7 cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Top Bar with Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-800 border border-slate-700 text-slate-200">
                          {project.badge}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyber-500/10 border border-cyber-500/20 text-cyber-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span>LIVE В СЕТИ</span>
                        </span>
                      </div>

                      <span className="text-xs font-mono text-slate-400">
                        Срок адаптации: <span className="text-white font-bold">{project.implementationDays}</span>
                      </span>
                    </div>

                    {/* Project Title & Tagline */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Visual Preview / Device Mockup */}
                  <div className="mt-6 relative rounded-2xl overflow-hidden border border-slate-750 bg-slate-950 group">
                    <img 
                      src={project.previewImage} 
                      alt={project.title}
                      className="w-full h-64 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent"></div>

                    {/* Quick Live Preview Action on hover / bottom */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => onOpenPreview(project.id)}
                        className="px-4 py-2.5 rounded-xl bg-cyber-500 text-dark-950 font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyber-500/30 hover:brightness-110 active:scale-95 transition-all"
                      >
                        <Monitor className="w-4 h-4" />
                        <span>Интерактивный тест-драйв</span>
                      </button>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-white/10 flex items-center gap-2 transition-colors"
                      >
                        <span>Открыть сайт ↗</span>
                      </a>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-850/80 border border-slate-750 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Features, Metrics & Order Action (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8">
                  
                  <div>
                    {/* Performance Metrics Bar */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.metrics.map((metric, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-xl bg-slate-850/60 border border-white/5">
                          <div className="text-lg font-black text-white font-mono">{metric.value}</div>
                          <div className="text-[11px] text-slate-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Killer Features Section */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Ключевой функционал шаблона:
                      </div>

                      <div className="space-y-2.5">
                        {project.killerFeatures.map((feat, fIdx) => (
                          <div 
                            key={fIdx} 
                            className="p-3 rounded-xl bg-slate-950/40 border border-white/5 hover:border-slate-700 transition-colors flex items-start gap-3"
                          >
                            <div className="p-1.5 rounded-lg bg-slate-800/80 mt-0.5">
                              {renderFeatureIcon(feat.iconName)}
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white">{feat.title}</div>
                              <div className="text-[11px] text-slate-400 leading-snug mt-0.5">{feat.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Choice Footer */}
                  <div className="mt-8 pt-6 border-t border-slate-800">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <span className="text-xs text-slate-400 block">Стоимость адаптации под ваш бренд:</span>
                        <span className="text-2xl font-black text-white font-mono">{project.basePrice}</span>
                      </div>
                      <span className="text-xs text-cyber-400 font-semibold bg-cyber-500/10 px-2.5 py-1 rounded-md border border-cyber-500/20">
                        {project.implementationDays}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={() => onSelectForCalculator(project.id)}
                        className="w-full py-3 px-4 rounded-xl bg-cyber-500 hover:bg-cyber-400 text-dark-950 font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md shadow-cyber-500/20 flex items-center justify-center gap-1.5"
                      >
                        <span>Выбрать шаблон</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onOpenPreview(project.id)}
                        className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-white font-semibold text-xs tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                      >
                        <Monitor className="w-3.5 h-3.5 text-cyber-400" />
                        <span>Тест-драйв</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};