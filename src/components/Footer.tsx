import React from 'react';
import { Code2, Send, ExternalLink, Github, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-slate-800 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/5">
          
          {/* Col 1-2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyber-500 flex items-center justify-center text-dark-950 font-black">
                <Code2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="font-extrabold text-lg tracking-wider text-white font-mono">
                APEX<span className="text-cyber-400">.CODE</span> STUDIO
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              Инженерная студия заказной и отраслевой веб-разработки. Создаем быстрые сайты-визитки, интерактивные платформы и CRM-системы на React 18 & TypeScript без конструкторов и ежемесячных абонентских плат.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/QwasO4ek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-white/10 text-sky-400 hover:text-white transition-colors"
                title="Telegram канал и чат"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/QwasO4ek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-white/10 text-slate-300 hover:text-white transition-colors"
                title="GitHub профиль"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Live Flagship Projects */}
          <div>
            <div className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              Готовые проекты (Live)
            </div>
            <ul className="space-y-2.5">
              <li>
                <a 
                  href="https://dentis-lux.onrender.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>DENTIS LUX (Стоматология)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://vertex-construction.onrender.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>VERTEX (Строительство вилл)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://lumiere-beauty.onrender.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>LUMIÈRE (Салон красоты & CRM)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a 
                  href="https://aura-motors.onrender.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyber-400 transition-colors flex items-center gap-1.5"
                >
                  <span>AURA MOTORS (Автосалон)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Navigation */}
          <div>
            <div className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              Навигация
            </div>
            <ul className="space-y-2.5">
              <li><a href="#templates" className="hover:text-cyber-400 transition-colors">Шаблоны сайтов</a></li>
              <li><a href="#calculator" className="hover:text-cyber-400 transition-colors">Калькулятор сметы</a></li>
              <li><a href="#comparison" className="hover:text-cyber-400 transition-colors">Сравнение с Tilda</a></li>
              <li><a href="#tech-stack" className="hover:text-cyber-400 transition-colors">Стек технологий</a></li>
              <li><a href="#process" className="hover:text-cyber-400 transition-colors">Этапы работы</a></li>
              <li><a href="#team" className="hover:text-cyber-400 transition-colors">О команде</a></li>
              <li><a href="#faq" className="hover:text-cyber-400 transition-colors">Вопросы и ответы</a></li>
            </ul>
          </div>

          {/* Col 5: Contacts & Security */}
          <div>
            <div className="font-bold text-white uppercase tracking-wider text-xs mb-4">
              Связь с командой
            </div>
            <ul className="space-y-2.5">
              <li className="text-slate-300 font-medium">
                Telegram: <a href="https://t.me/QwasO4ek" target="_blank" rel="noopener noreferrer" className="text-cyber-400 hover:underline">@QwasO4ek</a>
              </li>
              <li>Режим работы: 09:00 – 21:00 (МСК)</li>
              <li>Локация: Москва / Удаленно по РФ и миру</li>
              <li className="pt-2 flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Договор и гарантия 30 дней</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © 2026 APEX CODE STUDIO. Разработано на React 18 & TypeScript. Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <span>Скорость загрузки: 0.38с</span>
            <span>•</span>
            <span>Хостинг: Cloudflare & Render</span>
          </div>
        </div>

      </div>
    </footer>
  );
};