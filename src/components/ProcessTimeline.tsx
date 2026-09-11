import React from 'react';
import { CalendarDays, CheckCircle, Rocket, ArrowRight, ShieldCheck, FileCheck } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      step: '01',
      days: 'День 1',
      title: 'Бриф и выбор шаблона',
      desc: 'Обсуждаем задачи вашего бизнеса, выбираем оптимальный шаблон из 4 флагманов, согласовываем список услуг, цен и контактов.',
      tag: 'Старт проекта'
    },
    {
      step: '02',
      days: 'День 2',
      title: 'Адаптация айдентики',
      desc: 'Интегрируем вашу цветовую палитру, шрифт, логотип и реальные фотографии. Перерабатываем структуру блоков под ваши преимущества.',
      tag: 'Дизайн & Бренд'
    },
    {
      step: '03',
      days: 'День 3',
      title: 'Настройка интерактива',
      desc: 'Подключаем онлайн-запись, калькуляторы сметы, формы заявок с мгновенным оповещением в ваш Telegram или WhatsApp.',
      tag: 'Логика & CRM'
    },
    {
      step: '04',
      days: 'День 4–5',
      title: 'Деплой и сдача под ключ',
      desc: 'Тестируем сайт на всех смартфонах, развертываем на скоростном хостинге, подключаем ваш домен, SSL и передаем полный репозиторий.',
      tag: 'Релиз в сети'
    }
  ];

  return (
    <section id="process" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Rocket className="w-3.5 h-3.5 text-cyber-400" />
            <span>Прозрачный пайплайн разработки</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            От заявки до первых клиентов <br />
            <span className="gradient-cyber">всего за 3–5 рабочих дней</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Никаких месяцев ожидания. Благодаря готовой проверенной архитектуре мы запускаем продукт премиум-уровня в кратчайшие сроки с фиксированной ценой по договору.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-slate-700 group-hover:text-cyber-400 transition-colors font-mono">
                    {item.step}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyber-500/10 text-cyber-300 border border-cyber-500/20">
                    {item.days}
                  </span>
                </div>

                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                  {item.tag}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Гарантия дедлайна</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};