import React from 'react';
import { MousePointerClick, Settings, Rocket, CheckCircle } from 'lucide-react';

export const WorkStepsSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Выбор шаблона и материалов',
      desc: 'Выбираете готовый сайт из каталога выше, присылаете свой логотип, фото, контакты и прайс-лист.',
      icon: MousePointerClick
    },
    {
      num: '02',
      title: 'Адаптация под ваш бренд',
      desc: 'Мы меняем стилистику, загружаем ваш контент и подключаем моментальные оповещения о заявках в Telegram или WhatsApp.',
      icon: Settings
    },
    {
      num: '03',
      title: 'Запуск на вашем домене',
      desc: 'Размещаем сайт в сети с бесплатным SSL, привязываем ваш домен и передаем полный доступ к исходному коду на GitHub.',
      icon: Rocket
    }
  ];

  return (
    <section id="steps" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Как проходит запуск сайта
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Простой и понятный процесс от первого сообщения до готового работающего сайта.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-indigo-600 font-mono">{s.num}</span>
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};