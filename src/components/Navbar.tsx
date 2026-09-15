import React, { useState } from 'react';
import { Code2, Send, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (goal?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm">
              <Code2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-slate-900">DEV<span className="text-indigo-600">.STUDIO</span></span>
              <span className="hidden sm:inline-block ml-2 text-xs font-medium text-slate-500">• разработка сайтов</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#templates" className="hover:text-indigo-600 transition-colors">Готовые шаблоны</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Стоимость</a>
            <a href="#steps" className="hover:text-indigo-600 transition-colors">Как работаем</a>
            <a href="#contacts" className="hover:text-indigo-600 transition-colors">Контакты</a>
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://t.me/QwasO4ek"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </a>

            <button
              onClick={() => onOpenContact('Обсудить проект')}
              className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-sm transition-all"
            >
              Заказать сайт
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenContact('Быстрый заказ')}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-indigo-600 text-white"
            >
              Заказать
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a href="#templates" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 rounded hover:bg-slate-50">Готовые шаблоны</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 rounded hover:bg-slate-50">Стоимость</a>
            <a href="#steps" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 rounded hover:bg-slate-50">Как работаем</a>
            <a href="#contacts" onClick={() => setMobileMenuOpen(false)} className="px-2 py-1.5 rounded hover:bg-slate-50">Контакты</a>
          </nav>
          <div className="pt-2 border-t border-slate-100 flex gap-2">
            <a
              href="https://t.me/QwasO4ek"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-center font-semibold text-xs flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Написать в Telegram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};