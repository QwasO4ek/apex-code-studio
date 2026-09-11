import React from 'react';
import { Check, X, Sparkles, Zap, Shield, HelpCircle } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const rows = [
    {
      feature: 'Скорость загрузки (Core Web Vitals)',
      tilda: '2.5 – 4.5 сек (куча скриптов)',
      studios: '1.5 – 3.0 сек (тяжелые CMS)',
      us: '0.3 – 0.5 сек (100/100 PageSpeed)',
      highlight: true
    },
    {
      feature: 'Абонентская плата за платформу',
      tilda: 'от 15 000 до 35 000 ₽ в год',
      studios: 'от 1 200 ₽/мес за VPS хостинг',
      us: '0 ₽ / месяц навсегда (Cloudflare/Render)',
      highlight: true
    },
    {
      feature: 'Сложные интерактивные модули (32 зуба, X-Ray, DIKIDI CRM)',
      tilda: 'Невозможно (только простые формы)',
      studios: 'От 300 000 ₽ и от 2 месяцев',
      us: 'Уже реализованы и оттестированы',
      highlight: true
    },
    {
      feature: 'Владение исходным кодом',
      tilda: 'Заблокирован на платформе',
      studios: 'Частичное (зависимость от CMS)',
      us: '100% передача репозитория GitHub вам',
      highlight: false
    },
    {
      feature: 'Срок запуска под ключ',
      tilda: '7 – 14 дней',
      studios: '1 – 3 месяца',
      us: 'от 3 до 7 рабочих дней',
      highlight: false
    },
    {
      feature: 'Бесплатная гарантия и поддержка',
      tilda: 'Только справка конструктора',
      studios: 'Платная техподдержка по часам',
      us: '30 дней полного сопровождения бесплатно',
      highlight: false
    }
  ];

  return (
    <section id="comparison" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5 text-cyber-400" />
            <span>Честное сравнение</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Почему чистый код на React <br />
            <span className="gradient-cyber">на голову выше конструкторов</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Показываем реальную разницу между шаблонными конструкторами (Tilda/Wix), классическими медленными веб-агентствами и нашим инженерным подходом.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto">
          <div className="min-w-[760px] rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden">
            
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-dark-900 border-b border-slate-800 p-5 text-xs font-extrabold uppercase tracking-wider text-slate-400">
              <div className="col-span-5">Параметр сравнения</div>
              <div className="col-span-2 text-center text-slate-400">Tilda / WordPress</div>
              <div className="col-span-2 text-center text-slate-400">Традиционные студии</div>
              <div className="col-span-3 text-center text-cyber-400 bg-cyber-500/10 py-1.5 rounded-lg border border-cyber-500/20">
                APEX CODE STUDIO
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-slate-850 text-xs sm:text-sm">
              {rows.map((row, idx) => (
                <div 
                  key={idx} 
                  className={`grid grid-cols-12 p-5 items-center transition-colors ${
                    row.highlight ? 'bg-slate-900/30 hover:bg-slate-900/60' : 'hover:bg-slate-900/40'
                  }`}
                >
                  <div className="col-span-5 font-semibold text-white pr-4">
                    {row.feature}
                  </div>

                  <div className="col-span-2 text-center text-rose-300/80 font-medium px-2">
                    {row.tilda}
                  </div>

                  <div className="col-span-2 text-center text-amber-300/80 font-medium px-2">
                    {row.studios}
                  </div>

                  <div className="col-span-3 text-center font-bold text-cyber-300 bg-cyber-500/5 py-2 rounded-xl border border-cyber-500/20 px-3">
                    <div className="flex items-center justify-center gap-1.5">
                      <Check className="w-4 h-4 text-cyber-400 shrink-0" />
                      <span>{row.us}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};