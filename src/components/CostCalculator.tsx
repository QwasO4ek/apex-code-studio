import React, { useState, useEffect } from 'react';
import { BASE_PACKAGES, ADDON_MODULES } from '../data/calculatorData';
import { PROJECTS_DATA } from '../data/projectsData';
import { Calculator, Check, Sparkles, Send, MessageCircle, Clock, Zap, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface CostCalculatorProps {
  selectedTemplateId: string | null;
  onOpenContactModal: (tzText: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({
  selectedTemplateId,
  onOpenContactModal,
}) => {
  // 1. Base package state
  const [selectedPackageId, setSelectedPackageId] = useState<string>('template');

  // 2. Base project template state
  const [chosenTemplateId, setChosenTemplateId] = useState<string>(selectedTemplateId || 'dentis-lux');

  // Update template if prop changes
  useEffect(() => {
    if (selectedTemplateId) {
      setChosenTemplateId(selectedTemplateId);
      setSelectedPackageId('template');
    }
  }, [selectedTemplateId]);

  // 3. Selected add-on modules
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'tg-whatsapp-sync',
    'seo-pagespeed'
  ]);

  const toggleModule = (id: string) => {
    setSelectedModules(prev => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  // Calculations
  const currentPackage = BASE_PACKAGES.find(p => p.id === selectedPackageId) || BASE_PACKAGES[0];
  const currentTemplate = PROJECTS_DATA.find(t => t.id === chosenTemplateId);

  const modulesTotal = selectedModules.reduce((acc, mId) => {
    const mod = ADDON_MODULES.find(m => m.id === mId);
    return acc + (mod ? mod.price : 0);
  }, 0);

  const daysTotal = currentPackage.days + selectedModules.reduce((acc, mId) => {
    const mod = ADDON_MODULES.find(m => m.id === mId);
    return acc + (mod ? mod.days : 0);
  }, 0);

  const totalPrice = currentPackage.price + modulesTotal;

  // Format currency
  const formatMoney = (val: number) => {
    return new Intl.NumberFormat('ru-RU').format(val) + ' ₽';
  };

  // Generate clean TZ text for Telegram / WhatsApp
  const generateTZ = () => {
    const moduleNames = selectedModules
      .map(mId => ADDON_MODULES.find(m => m.id === mId)?.name)
      .filter(Boolean)
      .join('\n• ');

    return `Здравствуйте! Сформировал расчет на сайте APEX CODE STUDIO:
📦 Формат: ${currentPackage.name}
🎯 Ниша / Шаблон: ${currentTemplate ? currentTemplate.shortTitle : 'Индивидуальная ниша'}
🧩 Выбранные модули:
• ${moduleNames || 'Базовая комплектация'}
💰 Ориентировочная смета: ${formatMoney(totalPrice)}
⏱ Срок разработки: ${daysTotal} рабочих дней.
Готов обсудить детали запуска!`;
  };

  const handleFireConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  const handleSendTelegram = () => {
    handleFireConfetti();
    const text = encodeURIComponent(generateTZ());
    window.open(`https://t.me/QwasO4ek?text=${text}`, '_blank');
  };

  const handleSendWhatsApp = () => {
    handleFireConfetti();
    const text = encodeURIComponent(generateTZ());
    window.open(`https://wa.me/79990000000?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 lg:py-32 relative bg-dark-900/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-cyber-400" />
            <span>Прозрачная смета за 60 секунд</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Интерактивный конфигуратор <br />
            <span className="gradient-cyber">стоимости и сроков проекта</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Выберите формат решения и необходимые интерактивные модули. Калькулятор моментально сформирует техническое задание, расчет бюджета и срок запуска под ключ.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3 Steps (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Step 1: Base Package */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-sm font-extrabold uppercase tracking-wider text-slate-300">
                <span className="w-6 h-6 rounded-full bg-cyber-500 text-dark-950 flex items-center justify-center text-xs font-black">1</span>
                <span>Формат решения</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {BASE_PACKAGES.map(pkg => {
                  const active = selectedPackageId === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`p-5 rounded-2xl text-left border transition-all relative flex flex-col justify-between ${
                        active
                          ? 'bg-slate-800/90 border-cyber-400 shadow-xl shadow-cyber-500/15 ring-1 ring-cyber-400'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {pkg.popular && (
                        <span className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyber-400 text-dark-950 shadow-md">
                          Хит
                        </span>
                      )}
                      <div>
                        <div className="text-[11px] font-mono text-cyber-400 font-semibold mb-1">{pkg.tag}</div>
                        <div className="text-base font-bold text-white leading-tight">{pkg.name}</div>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">{pkg.description}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10 flex items-baseline justify-between">
                        <span className="text-lg font-black text-white font-mono">{formatMoney(pkg.price)}</span>
                        <span className="text-xs text-slate-400">{pkg.days} дн.</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Industry Template Selection */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-sm font-extrabold uppercase tracking-wider text-slate-300">
                <span className="w-6 h-6 rounded-full bg-cyber-500 text-dark-950 flex items-center justify-center text-xs font-black">2</span>
                <span>Отраслевая ниша / Проект-основа</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {PROJECTS_DATA.map(tpl => {
                  const active = chosenTemplateId === tpl.id;
                  return (
                    <button
                      key={tpl.id}
                      onClick={() => setChosenTemplateId(tpl.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        active
                          ? 'bg-slate-800 border-cyber-400 ring-1 ring-cyber-400'
                          : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-extrabold text-white truncate">{tpl.shortTitle}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 truncate">{tpl.categoryLabel}</div>
                      <div className="mt-2 text-[11px] text-cyber-400 font-semibold flex items-center gap-1">
                        {active ? <Check className="w-3 h-3 text-cyber-400" /> : null}
                        <span>{tpl.basePrice}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Interactive Modules */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-cyber-500 text-dark-950 flex items-center justify-center text-xs font-black">3</span>
                  <span>Интерактивные модули и расширения</span>
                </div>
                <span className="text-xs text-slate-400">Выбрано: {selectedModules.length}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDON_MODULES.map(mod => {
                  const checked = selectedModules.includes(mod.id);
                  return (
                    <div
                      key={mod.id}
                      onClick={() => toggleModule(mod.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                        checked
                          ? 'bg-slate-800/90 border-cyber-400/80 shadow-md'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center shrink-0 border transition-all ${
                          checked ? 'bg-cyber-500 border-cyber-500 text-dark-950' : 'border-slate-700 bg-slate-800'
                        }`}>
                          {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>

                        <div>
                          <div className="text-xs font-bold text-white">{mod.name}</div>
                          <div className="text-[11px] text-slate-400 mt-1 leading-snug">{mod.desc}</div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-xs font-black text-cyber-400 font-mono">+{formatMoney(mod.price)}</div>
                        {mod.days > 0 && <div className="text-[10px] text-slate-500 mt-0.5">+{mod.days} дн.</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Summary & 1-Click Order (4 cols) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="rounded-3xl bg-slate-950 border border-slate-800 p-6 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Итоговая смета:</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                  Фиксированная цена
                </span>
              </div>

              {/* Price Display */}
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                  {formatMoney(totalPrice)}
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-cyber-400" />
                  <span>Срок реализации: <strong className="text-white font-mono">{daysTotal} рабочих дней</strong></span>
                </div>
              </div>

              {/* Summary Items breakdown */}
              <div className="space-y-2 text-xs text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-white/5 font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400 truncate max-w-[180px]">{currentPackage.name}:</span>
                  <span className="font-bold text-white">{formatMoney(currentPackage.price)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Ниша:</span>
                  <span className="text-cyber-400">{currentTemplate ? currentTemplate.shortTitle : 'Индивидуально'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Доп. модулей ({selectedModules.length}):</span>
                  <span className="font-bold text-white">+{formatMoney(modulesTotal)}</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex justify-between text-slate-400">
                  <span>Хостинг & SSL:</span>
                  <span className="text-emerald-400 font-bold">0 ₽ навсегда</span>
                </div>
              </div>

              {/* Instant Messenger Dispatch Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleSendTelegram}
                  className="w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Отправить ТЗ в Telegram</span>
                </button>

                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Отправить в WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenContactModal(generateTZ())}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs border border-white/10 text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyber-400" />
                  <span>Оставить заявку на сайте</span>
                </button>
              </div>

              {/* Guarantees note */}
              <div className="text-[11px] text-slate-400 leading-relaxed text-center">
                🔒 Заключаем официальный договор. Оплата 50/50 по факту утверждения. Исходный код передается вам навсегда.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};