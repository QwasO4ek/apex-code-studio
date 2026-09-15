import React from 'react';
import { Code2, Send, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-10 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center text-white">
              <Code2 className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-sm text-slate-900">DEV.STUDIO</span>
            <span className="text-slate-400">• Веб-разработка под ключ</span>
          </div>

          {/* 4 Live Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-600">
            <a href="https://vertex-construction.onrender.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 flex items-center gap-1">
              <span>VERTEX</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a href="https://aura-motors.onrender.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 flex items-center gap-1">
              <span>AURA MOTORS</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a href="https://dentis-lux.onrender.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 flex items-center gap-1">
              <span>DENTIS LUX</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
            <a href="https://lumiere-beauty.onrender.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 flex items-center gap-1">
              <span>LUMIÈRE</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>

          <div>
            <a
              href="https://t.me/QwasO4ek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:text-indigo-700"
            >
              <Send className="w-3.5 h-3.5" />
              <span>@QwasO4ek</span>
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-[11px]">
          <div>
            © 2026 Команда веб-разработки. Все проекты развернуты и функционируют на Render.
          </div>
          <div>
            React 18 • TypeScript • Tailwind CSS
          </div>
        </div>

      </div>
    </footer>
  );
};