import React from 'react';
import { ArrowDown, Send, CheckCircle2, Zap, Shield, Smartphone } from 'lucide-react';

interface HeroSectionProps {
  onScrollToTemplates: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToTemplates }) => {
  return (
    <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Команда веб-разработки • React 18 & TypeScript</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Делаем аккуратные и быстрые сайты под ключ <span className="text-indigo-600">без конструкторов</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Никакой медленной Tilda и ежемесячных абонентских плат. Чистый код, моментальная загрузка, удобные формы и интеграция с вашим Telegram. Выберите готовый шаблон под свой бизнес или закажите сайт с нуля.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onScrollToTemplates}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Смотреть 4 готовых шаблона</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            href="https://t.me/QwasO4ek"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4 text-indigo-600" />
            <span>Написать в Telegram</span>
          </a>
        </div>

        {/* 3 Simple Benefits */}
        <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
            <div className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">Запуск от 3 дней</div>
              <div className="text-xs text-slate-500 mt-0.5">Быстрая адаптация готового решения</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
            <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">0 ₽ абонентской платы</div>
              <div className="text-xs text-slate-500 mt-0.5">Сайт навсегда принадлежит вам</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
            <div className="p-1.5 rounded-lg bg-sky-100 text-sky-700 shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900">100% под смартфоны</div>
              <div className="text-xs text-slate-500 mt-0.5">Идеально открывается на iPhone и Android</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};