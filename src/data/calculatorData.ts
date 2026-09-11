import { CalculatorPackage, CalculatorModule } from '../types';

export const BASE_PACKAGES: CalculatorPackage[] = [
  {
    id: 'template',
    name: 'Адаптация готового шаблона',
    tag: 'Самый быстрый старт • Хит',
    price: 45000,
    days: 3,
    description: 'Берем один из 4 наших оттестированных флагманских шаблонов, кастомизируем под ваш бренд (цвета, шрифты, фото, каталог, логотип), настраиваем контакты и запускаем на скоростном хостинге.',
    popular: true
  },
  {
    id: 'custom',
    name: 'Индивидуальная разработка с нуля',
    tag: 'Уникальный проект',
    price: 95000,
    days: 8,
    description: 'Проектирование уникальной веб-платформы или сложного сервиса с нуля: прототипирование, кастомный UI/UX дизайн, разработка архитектуры на React 18+ и интеграции любой сложности.',
    popular: false
  },
  {
    id: 'migration',
    name: 'Перенос с Tilda / WordPress на React',
    tag: 'Ускорение x5 • 0 ₽ подписок',
    price: 65000,
    days: 5,
    description: 'Полная переверстка вашего текущего сайта на чистый React + TypeScript. Избавляем от медлительности конструкторов, убираем ежемесячные подписки и выводим сайт в топ Google PageSpeed (100/100).',
    popular: false
  }
];

export const ADDON_MODULES: CalculatorModule[] = [
  {
    id: 'booking',
    name: 'Система онлайн-записи и генерации слотов (DIKIDI-style)',
    desc: 'Пошаговый выбор услуг, мастеров, умный график 09:00–21:00, исключение накладок и генерация .ics',
    price: 18000,
    days: 1,
    recommendedFor: ['dentis-lux', 'lumiere-beauty']
  },
  {
    id: 'calc',
    name: 'Интерактивный сметный / кредитный калькулятор',
    desc: 'Динамический расчет стоимости услуг, кредита или пошаговой сметы с детализацией в реальном времени',
    price: 14000,
    days: 1,
    recommendedFor: ['vertex-construction', 'aura-motors']
  },
  {
    id: 'interactive-core',
    name: 'Интерактивный виджет (X-Ray разрез / Зубная формула 32 зуба)',
    desc: 'Сложные SVG/Canvas компоненты с послойным раскрытием, клиническими маркерами или переключением день/ночь',
    price: 24000,
    days: 2,
    recommendedFor: ['dentis-lux', 'vertex-construction']
  },
  {
    id: 'client-cabinet',
    name: 'Личный кабинет клиента / Портал истории записей',
    desc: 'Просмотр истории заказов/приемов, отмена или перенос в 1 клик, сохранение данных без бэкенд-задержек',
    price: 16000,
    days: 1,
    recommendedFor: ['dentis-lux', 'lumiere-beauty', 'aura-motors']
  },
  {
    id: 'tg-whatsapp-sync',
    name: 'Связка с Telegram и WhatsApp консьержа',
    desc: 'Автоматическая генерация готового ТЗ и сообщений в мессенджеры без необходимости сторонних подписок',
    price: 8000,
    days: 0,
    recommendedFor: ['dentis-lux', 'vertex-construction', 'lumiere-beauty', 'aura-motors']
  },
  {
    id: 'ai-assistant',
    name: 'Умный AI-консультант и экспресс-триаж',
    desc: 'Чат-бот с контекстом вашего бизнеса, помогающий клиенту выбрать услугу, товар или определить срочность',
    price: 18000,
    days: 1,
    recommendedFor: ['dentis-lux', 'vertex-construction']
  },
  {
    id: 'payment-gateway',
    name: 'Подключение онлайн-оплаты и чеков (ЮKassa / Т-Банк)',
    desc: 'Безопасная оплата картами, СБП, Mir Pay, автоматическая фискализация чеков по 54-ФЗ',
    price: 14000,
    days: 1
  },
  {
    id: 'seo-pagespeed',
    name: 'Core Web Vitals 100/100 & Расширенное SEO',
    desc: 'Микроразметка Schema.org, OpenGraph превью, теги Open Graph, идеальная оптимизация картинок и скриптов',
    price: 9000,
    days: 0
  }
];