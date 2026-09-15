import React from 'react';
import { PRICING_PLANS } from '../data/projectsData';
import { Check, Send, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-y border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Понятная стоимость без скрытых платежей
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Фиксируем цену и сроки до начала работы. Никаких доплат в процессе.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {PRICING_PLANS.map(plan => (
            <div
              key={plan.id}
              className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between relative transition-all ${
                plan.popular
                  ? 'border-indigo-600 bg-indigo-50/30 shadow-md ring-1 ring-indigo-600'
                  : 'border-slate-200 bg-white shadow-sm hover:shadow-md'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 right-6">
                  <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {plan.description}
                </p>

                <div className="my-6 pt-4 border-t border-slate-200/60">
                  <div className="text-3xl font-extrabold text-slate-900">{plan.price}</div>
                  <div className="text-xs text-slate-500 mt-1">Срок выполнения: <strong className="text-slate-700">{plan.days}</strong></div>
                </div>

                <div className="space-y-2.5 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Что входит:</div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                <span>Выбрать этот тариф</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Telegram Direct Callout */}
        <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="text-sm font-bold text-slate-900">Нужна доработка или консультация?</div>
            <div className="text-xs text-slate-600 mt-0.5">Напишите напрямую разработчику — ответим на любые вопросы и поможем определиться.</div>
          </div>
          <a
            href="https://t.me/QwasO4ek"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center gap-2 transition-colors shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Написать в Telegram</span>
          </a>
        </div>

      </div>
    </section>
  );
};