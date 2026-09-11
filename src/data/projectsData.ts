import { ProjectTemplate } from '../types';

export const PROJECTS_DATA: ProjectTemplate[] = [
  {
    id: 'dentis-lux',
    title: 'DENTIS LUX — Цифровая платформа стоматологии',
    shortTitle: 'DENTIS LUX',
    badge: 'MedTech / Флагман',
    category: 'medtech',
    categoryLabel: 'Медицина & Стоматология',
    tagline: 'Интерактивная зубная формула 32 зуба, AI-триаж острой боли и электронная медкарта пациента',
    description: 'Инновационный веб-сервис премиальной стоматологической клиники с интерактивной 32-зубной картой FDI, умным самозаписью и сравнением реставраций.',
    fullDescription: 'Полнофункциональный веб-сервис экспертной стоматологии. Включает векторную одонтограмму зубов с анатомическим блеском и цветовой маркировкой патологий, автоматизированный AI-триаж симптомов с градацией срочности (Emergency / Плановый), сенсорный сплит-слайдер «До/После» (сравнение виниров E.max и отбеливания Zoom 4), калькулятор честной рассрочки 0-0-24, личный кабинет пациента с CBCT 3D-снимками и AI-чат-бот DentoBot.',
    liveUrl: 'https://dentis-lux.onrender.com',
    githubUrl: 'https://github.com/QwasO4ek/dentis-lux',
    previewImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Интерактивная зубная карта FDI (32 зуба) с режимами дуги и квадрантов для смартфонов',
      'AI-триаж симптомов с экспресс-диагностикой острой боли за 30 секунд',
      'Визио-слайдер «До / После» со сравнением оттенков VITA и виниров Bleach 2',
      'Электронная медкарта (EMR) с визуализацией КТ и историей приемов',
      'Экспорт записи в календарь .ics (Apple/Google) и мессенджеры WhatsApp/Telegram'
    ],
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons', 'Canvas Confetti', 'LocalStorage EMR'],
    metrics: [
      { label: 'Рост конверсии в запись', value: '+46%' },
      { label: 'Скорость отклика', value: '0.38s' },
      { label: 'Мобильная адаптивность', value: '100%' },
      { label: 'Готовность шаблона', value: '3 дня' }
    ],
    killerFeatures: [
      {
        title: '32-зубная формула FDI',
        desc: 'Анатомическая векторная одонтограмма с переключением верхняя/нижняя челюсть и мобильным режимом квадрантов.',
        iconName: 'Activity'
      },
      {
        title: 'AI Symptom Checker',
        desc: 'Триаж симптомов и жалоб пациента с памяткой первой помощи до визита к доктору.',
        iconName: 'ShieldAlert'
      },
      {
        title: 'Сплит-слайдер До/После',
        desc: 'Плавный сенсорный бегунок сравнения клинических реставраций и виниров.',
        iconName: 'Sliders'
      },
      {
        title: 'Личный кабинет EMR',
        desc: 'Просмотр 3D КТ-снимков, этапов лечения и назначений врача без серверной задержки.',
        iconName: 'FileText'
      }
    ],
    implementationDays: 'от 3 дней',
    basePrice: 'от 49 000 ₽',
    themeColor: '#0ea5e9',
    accentBg: 'from-sky-500/20 to-cyan-500/10'
  },
  {
    id: 'vertex-construction',
    title: 'VERTEX — Архитектура и загородное строительство',
    shortTitle: 'VERTEX CONSTRUCTION',
    badge: 'Real Estate / Инженерия',
    category: 'construction',
    categoryLabel: 'Загородное строительство & Архитектура',
    tagline: 'Интерактивный House X-Ray разрез, кадастровый аудит участков и сметный калькулятор за 60 секунд',
    description: 'Премиальный цифровой портал архитектурного бюро и строительной компании с послойным рентгеном вилл, live-трекером стройплощадок и ипотечным расчетом.',
    fullDescription: 'Инженерная платформа для загородного девелопмента и архитектурных бюро. Разработана для закрытия чеков от 25 млн рублей. Содержит послойный разрез дома «House X-Ray» (фундамент, силовой каркас, звукоизоляция, фасадные узлы), кадастровый чекер участков с мгновенным гео-анализом почвы, интерактивный каталог коттеджей с переключением День/Ночь и планировками, Live-трекер стройки 24/7 с технадзором, сметный калькулятор и онлайн-запись на тест-драйв домов.',
    liveUrl: 'https://vertex-construction.onrender.com',
    githubUrl: 'https://github.com/QwasO4ek/vertex-construction',
    previewImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'House X-Ray: интерактивный послойный разрез инженерной анатомии виллы',
      'Кадастровый чекер земельных участков (DomClick style) с анализом грунта',
      'Интерактивный каталог проектов домов с переключением день/ночь и экспликацией',
      'Сметный калькулятор за 60 сек с детализацией по этапам и подарками',
      'Live Construction Tracker с онлайн-камерами и журналами технадзора'
    ],
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide Icons', 'Canvas Confetti', 'Cadastral Engine'],
    metrics: [
      { label: 'Средний чек клиентов', value: '28+ млн ₽' },
      { label: 'Глубина просмотра', value: '4.8 мин' },
      { label: 'Рост лидогенерации', value: 'в 2.4 раза' },
      { label: 'Запуск под ключ', value: '4 дня' }
    ],
    killerFeatures: [
      {
        title: 'House X-Ray (Рентген дома)',
        desc: 'Послойная визуализация стен, фундамента, пароизоляции и коммуникаций в стиле Huf Haus.',
        iconName: 'Layers'
      },
      {
        title: 'Кадастровый аудит земли',
        desc: 'Мгновенная проверка номера участка с оценкой геологии, перепадов высот и рисков.',
        iconName: 'MapPin'
      },
      {
        title: '60-секундный сметный калькулятор',
        desc: 'Пошаговый подбор материалов, фундамента, отделки с детализацией стоимости и подарками.',
        iconName: 'Calculator'
      },
      {
        title: 'Live-трекер стройки 24/7',
        desc: 'Видеотрансляция, чек-листы этапов и ежедневный отчет инженера технадзора.',
        iconName: 'Video'
      }
    ],
    implementationDays: 'от 4 дней',
    basePrice: 'от 55 000 ₽',
    themeColor: '#d97706',
    accentBg: 'from-amber-500/20 to-orange-500/10'
  },
  {
    id: 'lumiere-beauty',
    title: 'LUMIÈRE BEAUTY — CRM-экосистема для салонов красоты',
    shortTitle: 'LUMIÈRE BEAUTY',
    badge: 'Beauty & SPA / CRM',
    category: 'beauty',
    categoryLabel: 'Салоны красоты & SPA',
    tagline: 'Интеллектуальная онлайн-запись в стиле DIKIDI без абонентской платы и комиссий',
    description: 'Элитный сайт-визитка с полноценным CRM-приложением записи: умный подбор окон, сложение длительности услуг, личный кабинет и экспорт в календарь.',
    fullDescription: 'Высококонверсионный сайт для бьюти-сферы и эстетической косметологии в люксовом Bento-стиле. Главное преимущество для бизнеса — собственная веб-система онлайн-записи (полный аналог DIKIDI/YCLIENTS), не требующая ежемесячной подписки и комиссий. Включает корзину мульти-услуг с авторасчетом суммарного времени, умный подбор мастеров, функцию «Ближайшее окно» в 1 клик, личный кабинет клиента с отменой и переносом записей, а также 1-клик синхронизацию с WhatsApp консьержа и iCal.',
    liveUrl: 'https://lumiere-beauty.onrender.com',
    githubUrl: 'https://github.com/QwasO4ek/lumiere-beauty',
    previewImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Полноценный DIKIDI-формат онлайн-записи без ежемесячных платежей',
      'Динамическая корзина услуг с автосуммированием времени и стоимости',
      'Умный генератор слотов с учетом занятости мастеров с 09:00 до 21:00',
      'Личный кабинет «Мои записи» с возможностью отмены и освобождения слотов',
      '1-клик экспорт в Apple/Google Calendar (.ics) и консьерж-WhatsApp'
    ],
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'Vite', 'Bento Architecture'],
    metrics: [
      { label: 'Экономия на CRM', value: '45 000 ₽/год' },
      { label: 'Скорость букинга', value: '18 сек' },
      { label: 'Автоматизация записей', value: '88%' },
      { label: 'Запуск под ключ', value: '3 дня' }
    ],
    killerFeatures: [
      {
        title: 'DIKIDI-подобный букинг',
        desc: 'Пошаговый подбор филиала, услуг, мастера и удобного слота с индикацией доступности.',
        iconName: 'Calendar'
      },
      {
        title: 'Умный генератор окон',
        desc: 'Исключение накладок, автоматический расчет перерывов мастеров и кнопка «Ближайшее окно».',
        iconName: 'Clock'
      },
      {
        title: 'Личный кабинет клиента',
        desc: 'Клиент видит активные бронирования, может перенести визит или отменить в один клик.',
        iconName: 'UserCheck'
      },
      {
        title: 'Календарь & WhatsApp',
        desc: 'Мгновенное добавление визита в смартфон и отправка предзаполненной брони в чат салона.',
        iconName: 'Send'
      }
    ],
    implementationDays: 'от 3 дней',
    basePrice: 'от 45 000 ₽',
    themeColor: '#ec4899',
    accentBg: 'from-rose-500/20 to-pink-500/10'
  },
  {
    id: 'aura-motors',
    title: 'AURA MOTORS — Премиальный цифровой автосалон',
    shortTitle: 'AURA MOTORS',
    badge: 'Automotive / Quiet Luxury',
    category: 'auto',
    categoryLabel: 'Автосалоны & Премиум-ритейл',
    tagline: 'Цифровой шоурум суперкаров с живыми фильтрами, аннуитетным Trade-In калькулятором и вишлистом',
    description: 'Минималистичный веб-сайт премиального автодилера в концепции «Quiet Luxury» (стандарты Porsche, Lucid, Genesis) со скоростью отклика 16 мс.',
    fullDescription: 'Цифровой шоурум спорткаров и электрокаров люкс-класса. Спроектирован по мировым канонам премиального брендинга. Обладает ультрабыстрыми реактивными фильтрами каталога (по кузовам, маркам, мощности, типу привода), детальным модальным окном Quick View с техническими характеристиками и галереей, интерактивным калькулятором автокредита и Trade-In с выгодой до 500 000 ₽, а также персональным вишлистом «Избранное» с расчетом общей стоимости автопарка.',
    liveUrl: 'https://aura-motors.onrender.com',
    githubUrl: 'https://github.com/QwasO4ek/aura-motors',
    previewImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Премиальный визуал в эстетике Quiet Luxury (Porsche, Polestar, Genesis)',
      'Мгновенная клиентская фильтрация каталога без единой перезагрузки',
      'Интерактивный Quick View с ТТХ: разгон 0-100, л.с., крутящий момент',
      'Кредитный калькулятор с аннуитетным графиком и выгодой Trade-In',
      'Система «Избранное» в LocalStorage с генерацией пакетного запроса КП'
    ],
    techStack: ['Modern Vanilla ES6+', 'CSS3 Custom Properties', 'LocalStorage Engine', 'SVG Icons', 'Render Static'],
    metrics: [
      { label: 'Google PageSpeed', value: '99/100' },
      { label: 'Время отклика фильтров', value: '<16ms' },
      { label: 'Рост тест-драйвов', value: '+54%' },
      { label: 'Запуск под ключ', value: '3 дня' }
    ],
    killerFeatures: [
      {
        title: 'Реактивный каталог',
        desc: 'Моментальная сортировка по маркам, кузовам, типам ДВС/EV без задержки и перезагрузки.',
        iconName: 'Search'
      },
      {
        title: 'Quick View модалка',
        desc: 'Глубокий просмотр ракурсов, комплектации и динамических характеристик спорткаров.',
        iconName: 'Eye'
      },
      {
        title: 'Trade-In & Автокредит',
        desc: 'Интерактивный бегунок первоначального взноса, срока и расчет ежемесячного взноса.',
        iconName: 'DollarSign'
      },
      {
        title: 'Корзина «Избранное»',
        desc: 'Сохранение понравившихся авто в память устройства и 1-клик заявка на персональный оффер.',
        iconName: 'Heart'
      }
    ],
    implementationDays: 'от 3 дней',
    basePrice: 'от 45 000 ₽',
    themeColor: '#6366f1',
    accentBg: 'from-indigo-500/20 to-violet-500/10'
  }
];