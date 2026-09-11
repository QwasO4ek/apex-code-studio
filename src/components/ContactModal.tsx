import React, { useState } from 'react';
import { X, Send, MessageCircle, Phone, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledText?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefilledText = '',
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState(prefilledText);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    setSubmitted(true);
  };

  const handleSendTelegram = () => {
    const text = encodeURIComponent(`Заявка с сайта APEX CODE STUDIO:\nИмя: ${name || 'Клиент'}\nКонтакт: ${contact || 'Не указан'}\nЗадача:\n${message || prefilledText || 'Хочу заказать проект'}`);
    window.open(`https://t.me/QwasO4ek?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 shadow-2xl text-left">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-cyber-500/20 text-cyber-400 border border-cyber-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Заявка принята!</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs mx-auto">
              Ведущий архитектор решений свяжется с вами в течение 15 минут для уточнения деталей.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider"
              >
                Закрыть окно
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/20 text-cyber-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyber-400" />
              <span>Бесплатная консультация</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Обсудить проект с разработчиком
            </h3>

            <p className="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">
              Ответим на технические вопросы, поможем выбрать идеальный шаблон или рассчитаем индивидуальную смету.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Ваше имя:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Иван"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Телефон или Telegram:
                </label>
                <input
                  type="text"
                  required
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="+7 (999) 000-00-00 или @username"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyber-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Пожелания или выбранный проект:
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Хочу шаблон стоматологии / салона красоты..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyber-400 resize-none font-mono"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-4 rounded-xl bg-cyber-500 hover:bg-cyber-400 text-dark-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyber-500/25"
                >
                  Отправить заявку
                </button>

                <button
                  type="button"
                  onClick={handleSendTelegram}
                  className="py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                  title="Отправить напрямую в чат"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>В Telegram</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};