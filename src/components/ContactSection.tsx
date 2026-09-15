import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [comment, setComment] = useState(initialSubject);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendTelegram = () => {
    const text = encodeURIComponent(`Здравствуйте! Заявка с сайта:\nИмя: ${name || 'Не указано'}\nКонтакт: ${contact || 'Не указан'}\nПожелание: ${comment || initialSubject || 'Консультация по сайту'}`);
    window.open(`https://t.me/QwasO4ek?text=${text}`, '_blank');
  };

  return (
    <section id="contacts" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Оставить заявку на сайт
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Напишите нам в мессенджер или оставьте контактные данные — мы свяжемся с вами в течение 10 минут.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left info (5 cols) */}
          <div className="md:col-span-5 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Прямая связь с разработчиками</h3>
              <p className="text-xs text-slate-500">Без посредников и менеджеров по продажам.</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://t.me/QwasO4ek"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 text-slate-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Telegram</div>
                  <div className="text-xs text-slate-500">@QwasO4ek (быстрый ответ)</div>
                </div>
              </a>

              <a
                href="https://wa.me/79990000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 text-slate-800 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">WhatsApp</div>
                  <div className="text-xs text-slate-500">Чат с разработчиком</div>
                </div>
              </a>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-xs text-emerald-700 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Договор и 30 дней бесплатной гарантии</span>
            </div>
          </div>

          {/* Right form (7 cols) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Заявка принята!</h4>
                <p className="text-xs text-slate-600">Мы свяжемся с вами в течение 10–15 минут.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 mt-2"
                >
                  Отправить еще
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Александр"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Телефон или Telegram
                  </label>
                  <input
                    type="text"
                    required
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="+7 (999) 000-00-00 или @username"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Интересующий сайт или ниша
                  </label>
                  <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Например: шаблон DENTIS LUX или автосалон"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-indigo-600"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Отправить заявку
                  </button>

                  <button
                    type="button"
                    onClick={handleSendTelegram}
                    className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-indigo-600" />
                    <span>В Telegram</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};