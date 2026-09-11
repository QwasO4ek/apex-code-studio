import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Monitor, Tablet, Smartphone, RotateCw, Sparkles, Check } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';

interface LivePreviewModalProps {
  projectId: string | null;
  onClose: () => void;
  onSelectForCalculator: (projectId: string) => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({
  projectId,
  onClose,
  onSelectForCalculator,
}) => {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');
  const [key, setKey] = useState(0);

  const project = PROJECTS_DATA.find(p => p.id === projectId);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const reloadIframe = () => setKey(prev => prev + 1);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-dark-950/95 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Top Modal Header */}
      <div className="h-16 border-b border-white/10 bg-dark-900 px-4 sm:px-6 flex items-center justify-between shrink-0">
        
        {/* Left: Project Info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyber-500/20 border border-cyber-500/40 flex items-center justify-center text-cyber-400 font-bold text-xs">
            LIVE
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>{project.shortTitle}</span>
              <span className="text-xs text-slate-400 hidden md:inline">({project.categoryLabel})</span>
            </div>
            <div className="text-[11px] text-cyber-400 font-mono hidden sm:block">
              {project.liveUrl}
            </div>
          </div>
        </div>

        {/* Center: Device Switchers */}
        <div className="hidden sm:flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-white/10">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              deviceMode === 'desktop' 
                ? 'bg-cyber-500 text-dark-950 shadow-md font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
            title="Десктопная версия"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Десктоп</span>
          </button>

          <button
            onClick={() => setDeviceMode('tablet')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              deviceMode === 'tablet' 
                ? 'bg-cyber-500 text-dark-950 shadow-md font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
            title="Планшет (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span>Планшет</span>
          </button>

          <button
            onClick={() => setDeviceMode('mobile')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              deviceMode === 'mobile' 
                ? 'bg-cyber-500 text-dark-950 shadow-md font-bold' 
                : 'text-slate-400 hover:text-white'
            }`}
            title="Смартфон (390px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Смартфон</span>
          </button>

          <button
            onClick={reloadIframe}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
            title="Перезагрузить фрейм"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              onClose();
              onSelectForCalculator(project.id);
            }}
            className="hidden md:flex px-3.5 py-1.5 rounded-lg bg-cyber-500 hover:bg-cyber-400 text-dark-950 font-bold text-xs uppercase tracking-wider items-center gap-1.5 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Выбрать шаблон</span>
          </button>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-white font-semibold text-xs border border-white/10 flex items-center gap-1.5 transition-colors"
          >
            <span>В новой вкладке</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-rose-500/20 hover:text-rose-400 text-slate-300 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Main Preview Container */}
      <div className="flex-1 bg-dark-950 p-2 sm:p-4 flex items-center justify-center overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl border border-slate-750 bg-white flex flex-col ${
            deviceMode === 'desktop' ? 'w-full' : 
            deviceMode === 'tablet' ? 'w-[768px] max-w-full' : 
            'w-[390px] max-w-full'
          }`}
        >
          {/* Simulated Browser Bar */}
          <div className="h-8 bg-slate-900 border-b border-slate-800 px-3 flex items-center justify-between shrink-0 select-none">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            </div>
            <div className="px-4 py-0.5 rounded-md bg-dark-950 text-[11px] font-mono text-slate-400 truncate max-w-xs sm:max-w-md">
              🔒 {project.liveUrl}
            </div>
            <div className="w-8"></div>
          </div>

          {/* Iframe View */}
          <iframe
            key={key}
            src={project.liveUrl}
            title={project.title}
            className="w-full flex-1 border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="h-10 bg-dark-900 border-t border-white/5 px-4 flex items-center justify-between text-[11px] text-slate-400 shrink-0">
        <div>
          <span>Стек: </span>
          <span className="text-slate-300">{project.techStack.join(' • ')}</span>
        </div>
        <div className="hidden sm:block">
          Нажмите <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-white/10 text-white font-mono text-[10px]">Esc</kbd> для закрытия тест-драйва
        </div>
      </div>

    </div>
  );
};