import React from 'react';
import { Cpu, ShieldCheck, Gauge, Smartphone, Code2, Globe, Server, CheckCircle2 } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const technologies = [
    { name: 'React 18+', role: 'Компонентная архитектура, реактивность и виртуальный DOM', tag: 'Frontend Core' },
    { name: 'TypeScript', role: '100% строгая типизация, предотвращение багов на этапе сборки', tag: 'Type Safety' },
    { name: 'Tailwind CSS', role: 'Современный utility-first CSS без раздувания размера файлов', tag: 'Styling' },
    { name: 'Vite Bundler', role: 'Мгновенный HMR и оптимизированный production-бандл', tag: 'Build Tool' },
    { name: 'Cloudflare CDN', role: 'Глобальная сеть доставки контента со временем отклика <50мс', tag: 'Performance' },
    { name: 'Render Cloud', role: 'Надежный облачный хостинг с автоматическим деплоем из Git', tag: 'DevOps & Host' },
    { name: 'Canvas & SVG', role: 'Интерактивные зубные формулы, послойные разрезы и схемы', tag: 'Graphics' },
    { name: 'Git & GitHub', role: 'Прозрачное версионирование и передача полного контроля заказчику', tag: 'Source Code' },
  ];

  const guarantees = [
    { title: '100/100 Google PageSpeed', desc: 'Зеленая зона производительности, мгновенный First Contentful Paint' },
    { title: 'А+ SSL Безопасность', desc: 'Автоматическое шифрование трафика и защита персональных данных' },
    { title: 'Mobile-First Верстка', desc: 'Безупречное отображение на любых смартфонах, планшетах и мониторах' },
    { title: 'SEO-Friendly Архитектура', desc: 'Чистая семантическая разметка для высокого ранжирования в Яндекс и Google' },
  ];

  return (
    <section id="tech-stack" className="py-20 lg:py-32 relative bg-dark-900/40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyber-400" />
            <span>Инженерный стек технологий</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Современные технологии, <br />
            <span className="gradient-cyber">проверенные highload-проектами</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Мы используем только передовой стек инструментов, который обеспечивает максимальную скорость, надежность и легкую масштабируемость вашего бизнеса.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {technologies.map((tech, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyber-500/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-base font-black text-white group-hover:text-cyber-400 transition-colors font-mono">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {tech.tag}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {tech.role}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Guarantees Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-cyber-500/20 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, gIdx) => (
              <div key={gIdx} className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-cyber-500/10 border border-cyber-500/20 text-cyber-400 shrink-0">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{item.title}</div>
                  <div className="text-xs text-slate-400 mt-1 leading-snug">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};