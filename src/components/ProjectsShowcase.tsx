import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ExternalLink, Monitor, Check, ArrowRight } from 'lucide-react';

interface ProjectsShowcaseProps {
  onOpenPreview: (projectId: string) => void;
  onSelectTemplate: (projectTitle: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({
  onOpenPreview,
  onSelectTemplate,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  return (
    <section id="templates" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Готовые сайты для вашего бизнеса
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Каждый сайт полностью готов, оттестирован и развернут в сети. Откройте любой сайт, чтобы оценить его работу вживую, или закажите адаптацию под свой бренд.
          </p>

          {/* Filter tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'Все 4 проекта' },
              { id: 'construction', label: '🏡 Строительство' },
              { id: 'auto', label: '🏎 Автосалон' },
              { id: 'dental', label: '🦷 Стоматология' },
              { id: 'beauty', label: '✨ Салон красоты' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Image Preview Container */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100 group">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-md text-xs font-bold bg-white/95 text-slate-800 shadow-sm">
                      {project.badge}
                    </span>
                  </div>

                  {/* Overlay buttons on hover */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                    <button
                      onClick={() => onOpenPreview(project.id)}
                      className="px-4 py-2 rounded-lg bg-white text-slate-900 font-bold text-xs shadow-lg flex items-center gap-1.5 hover:bg-slate-50 transition-colors"
                    >
                      <Monitor className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Тест-драйв</span>
                    </button>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-bold text-xs shadow-lg flex items-center gap-1.5 hover:bg-indigo-700 transition-colors"
                    >
                      <span>Открыть сайт</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                      {project.shortTitle}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                      Работает онлайн
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.tagline}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-6">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom action footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] text-slate-500">Стоимость адаптации:</div>
                  <div className="text-base font-extrabold text-slate-900">{project.price}</div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold text-xs flex items-center gap-1 transition-colors"
                    title="Открыть работающий сайт"
                  >
                    <span>Сайт ↗</span>
                  </a>

                  <button
                    onClick={() => onSelectTemplate(project.title)}
                    className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition-colors flex items-center gap-1"
                  >
                    <span>Выбрать шаблон</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};