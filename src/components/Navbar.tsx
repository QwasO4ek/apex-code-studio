import React, { useState, useEffect } from 'react';
import { Code2, Sparkles, Send, PhoneCall, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal: (preferredGoal?: string) => void;
  onScrollToCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal, onScrollToCalculator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-950/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/40 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-500 to-brand-600 flex items-center justify-center text-dark-950 font-black shadow-lg shadow-cyber-500/25 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 text-dark-950 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg tracking-wider text-white font-mono">APEX<span className="text-cyber-400">.CODE</span></span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-300">STUDIO</span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Инженерная веб-разработка & Готовые платформы</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#templates" className="hover:text-cyber-400 transition-colors flex items-center gap-1.5">
              <span>Готовые шаблоны</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-400 animate-ping"></span>
            </a>
            <button 
              onClick={onScrollToCalculator}
              className="hover:text-cyber-400 transition-colors text-left"
            >
              Калькулятор сметы
            </button>
            <a href="#comparison" className="hover:text-cyber-400 transition-colors">Почему не Tilda</a>
            <a href="#tech-stack" className="hover:text-cyber-400 transition-colors">Стек & Качество</a>
            <a href="#process" className="hover:text-cyber-400 transition-colors">Сроки (от 3 дней)</a>
            <a href="#team" className="hover:text-cyber-400 transition-colors">Команда</a>
            <a href="#faq" className="hover:text-cyber-400 transition-colors">FAQ</a>
          </nav>

          {/* Right Action & Status Badge */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Availability Status */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-[12px] text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Свободны для 1 проекта</span>
            </div>

            {/* Telegram Fast Link */}
            <a 
              href="https://t.me/QwasO4ek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 text-slate-300 hover:text-white transition-all hover:scale-105"
              title="Написать в Telegram"
            >
              <Send className="w-4 h-4 text-sky-400" />
            </a>

            {/* CTA Button */}
            <button
              onClick={() => onOpenContactModal('Обсудить проект с разработчиком')}
              className="relative group overflow-hidden px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-dark-950 bg-gradient-to-r from-cyber-400 via-cyber-500 to-brand-400 hover:opacity-95 shadow-md shadow-cyber-500/20 hover:shadow-cyber-500/40 transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Заказать сайт</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenContactModal('Быстрый заказ сайта')}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-cyber-500 text-dark-950"
            >
              Заказать
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-850 border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-2 pb-6 bg-dark-900 border-b border-white/10 shadow-2xl space-y-4">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Принимаем заявки: старт разработки уже завтра</span>
          </div>

          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
            <a 
              href="#templates" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-between"
            >
              <span>4 готовых отраслевых шаблона</span>
              <ArrowRight className="w-4 h-4 text-cyber-400" />
            </a>
            <button 
              onClick={() => { setMobileMenuOpen(false); onScrollToCalculator(); }}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors text-left flex items-center justify-between w-full"
            >
              <span>Калькулятор стоимости и сроков</span>
              <ArrowRight className="w-4 h-4 text-cyber-400" />
            </button>
            <a 
              href="#comparison" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Почему чистый код лучше Tilda
            </a>
            <a 
              href="#tech-stack" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Технологический стек
            </a>
            <a 
              href="#process" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Этапы запуска (3–7 дней)
            </a>
            <a 
              href="#team" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              О команде разработчиков
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Частые вопросы (FAQ)
            </a>
          </nav>

          <div className="pt-2 border-t border-white/10 flex gap-3">
            <a
              href="https://t.me/QwasO4ek"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 text-center font-bold text-xs flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Написать в Telegram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};