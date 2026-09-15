import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Monitor, Smartphone, RotateCw } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';

interface LivePreviewModalProps {
  projectId: string | null;
  onClose: () => void;
  onSelectForOrder: (title: string) => void;
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({
  projectId,
  onClose,
  onSelectForOrder,
}) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
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

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-slate-900/75 backdrop-blur-sm animate-in fade-in duration-150">
      
      {/* Top bar */}
      <div className="h-14 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between shrink-0 shadow-sm">
        
        {/* Left: Info */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
            {project.badge}
          </span>
          <span className="text-sm font-bold text-slate-900 hidden sm:inline">
            {project.shortTitle}
          </span>
        </div>

        {/* Center: Device Switch */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-100 border border-slate-200">
          <button
            onClick={() => setDeviceMode('desktop')}
            className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
              deviceMode === 'desktop' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Десктоп</span>
          </button>

          <button
            onClick={() => setDeviceMode('mobile')}
            className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
              deviceMode === 'mobile' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Смартфон</span>
          </button>

          <button
            onClick={() => setKey(prev => prev + 1)}
            className="p-1 rounded text-slate-400 hover:text-slate-700 ml-1"
            title="Перезагрузить"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              onClose();
              onSelectForOrder(project.title);
            }}
            className="hidden sm:flex px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors"
          >
            Выбрать этот шаблон
          </button>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors"
          >
            <span>В новой вкладке</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors ml-1"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Main Preview */}
      <div className="flex-1 bg-slate-200/70 p-2 sm:p-4 flex items-center justify-center overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 rounded-xl overflow-hidden shadow-xl bg-white border border-slate-300 flex flex-col ${
            deviceMode === 'desktop' ? 'w-full' : 'w-[390px] max-w-full'
          }`}
        >
          <iframe
            key={key}
            src={project.liveUrl}
            title={project.title}
            className="w-full flex-1 border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>
      </div>

    </div>
  );
};