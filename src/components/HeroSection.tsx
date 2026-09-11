import React from 'react';
import { Terminal, ArrowDown, Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, Play } from 'lucide-react';

interface HeroSectionProps {
  onScrollToTemplates: () => void;
  onScrollToCalculator: () => void;
  onOpenPreview: (projectId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToTemplates,
  onScrollToCalculator,
  onOpenPreview,
}) => {
  return (
    <section className="relative pt-8 pb-20 lg:pt-14 lg:pb-32 overflow-hidden">
      {/* Background ambient light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] sm:w-[900px] sm:h-[450px] bg-cyber-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header Tag */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyber-500/30 text-xs sm:text-sm text-slate-200 shadow-xl shadow-cyber-500/5 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyber-400 animate-pulse"></span>
            <span className="font-semibold text-cyber-300">Инженерный подход:</span>
            <span className="text-slate-300">React 18 + TypeScript вместо конструкторов</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Сайты и веб-платформы, которые <br className="hidden sm:inline" />
            <span className="gradient-cyber">закрывают клиентов на миллионы</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            Создаем быстрые кастомные цифровые сервисы для бизнеса: интерактивные 3D-разрезы, онлайн-запись в стиле DIKIDI без абонентской платы, зубные формулы и сметные калькуляторы.
          </p>

          {/* Subtext highlighting templates */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-400">
            <span className="text-slate-200">Выберите готовый отраслевой шаблон за 3 дня</span>
            <span className="text-cyber-400">•</span>
            <span>или закажите уникальный продукт с нуля</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onScrollToTemplates}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base uppercase tracking-wider text-dark-950 bg-gradient-to-r from-cyber-400 via-cyber-500 to-emerald-400 hover:brightness-110 shadow-xl shadow-cyber-500/25 transition-all flex items-center justify-center gap-3 group active:scale-98"
            >
              <span>Смотреть 4 готовых шаблона</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>

            <button
              onClick={onScrollToCalculator}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm sm:text-base tracking-wide text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyber-500/40 shadow-lg transition-all flex items-center justify-center gap-2.5"
            >
              <Zap className="w-4 h-4 text-cyber-400" />
              <span>Рассчитать смету и срок</span>
            </button>
          </div>

          {/* Interactive Trust Stats Row */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyber-400 mb-1">
                <Layers className="w-4 h-4" />
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">4</span>
              </div>
              <div className="text-xs text-slate-300 font-semibold">Флагманских шаблона</div>
              <div className="text-[11px] text-slate-500 mt-0.5">В продакшене с live-демо</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyber-400 mb-1">
                <Zap className="w-4 h-4" />
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">&lt;0.4s</span>
              </div>
              <div className="text-xs text-slate-300 font-semibold">Скорость загрузки</div>
              <div className="text-[11px] text-slate-500 mt-0.5">100/100 Google PageSpeed</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyber-400 mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">0 ₽</span>
              </div>
              <div className="text-xs text-slate-300 font-semibold">Абонентских плат</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Без привязки к конструкторам</div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-cyber-400 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">от 3 дн</span>
              </div>
              <div className="text-xs text-slate-300 font-semibold">Запуск под ключ</div>
              <div className="text-[11px] text-slate-500 mt-0.5">С доменом и SSL-защитой</div>
            </div>
          </div>

          {/* Quick Terminal Preview Card */}
          <div className="mt-12 max-w-3xl mx-auto rounded-2xl bg-dark-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-left text-xs sm:text-sm">
            <div className="flex items-center justify-between px-4 py-3 bg-dark-850 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 text-slate-400 text-xs">production-build-matrix.ts</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-cyber-400 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-400 animate-pulse"></span>
                <span>STATUS: 4 LIVE SERVICES ACTIVE</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 space-y-2 text-slate-300 bg-dark-950/70">
              <div className="flex items-center justify-between border-b border-white/5 pb-2 text-[11px] sm:text-xs">
                <span className="text-slate-400">// Готовые решения, развернутые в глобальной сети:</span>
                <span className="text-slate-500">Render Cloud Infrastructure</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => onOpenPreview('dentis-lux')}
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-850 border border-white/5 hover:border-sky-500/40 text-left transition-all group flex items-center justify-between"
                >
                  <div>
                    <div className="text-white font-bold group-hover:text-sky-400 transition-colors flex items-center gap-1.5">
                      <span>🦷 DENTIS LUX</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Стоматология & 32 зуба FDI</div>
                  </div>
                  <Play className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenPreview('vertex-construction')}
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-850 border border-white/5 hover:border-amber-500/40 text-left transition-all group flex items-center justify-between"
                >
                  <div>
                    <div className="text-white font-bold group-hover:text-amber-400 transition-colors flex items-center gap-1.5">
                      <span>🏡 VERTEX CONST.</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Загородные виллы & X-Ray</div>
                  </div>
                  <Play className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenPreview('lumiere-beauty')}
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-850 border border-white/5 hover:border-rose-500/40 text-left transition-all group flex items-center justify-between"
                >
                  <div>
                    <div className="text-white font-bold group-hover:text-rose-400 transition-colors flex items-center gap-1.5">
                      <span>✨ LUMIÈRE BEAUTY</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Салон красоты & DIKIDI CRM</div>
                  </div>
                  <Play className="w-3.5 h-3.5 text-rose-400 group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenPreview('aura-motors')}
                  className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-850 border border-white/5 hover:border-indigo-500/40 text-left transition-all group flex items-center justify-between"
                >
                  <div>
                    <div className="text-white font-bold group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                      <span>🏎 AURA MOTORS</span>
                    </div>
                    <div className="text-[11px] text-slate-400">Автосалон Quiet Luxury & Трейд-ин</div>
                  </div>
                  <Play className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};