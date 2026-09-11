import { TeamMember } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Артём М.',
    role: 'Tech Lead & Solution Architect',
    experience: '8+ лет в веб-разработке',
    bio: 'Архитектор высоконагруженных веб-сервисов и платформ на React/TypeScript. Автор архитектуры всех 4 флагманских шаблонов, специалист по оптимизации Core Web Vitals до 100/100.',
    skills: ['React 18', 'TypeScript', 'Vite', 'Architecture', 'DevOps & Render', 'Cloudflare'],
    icon: 'Terminal'
  },
  {
    name: 'Елена В.',
    role: 'Senior UI/UX & Product Designer',
    experience: '6+ лет в продуктовом дизайне',
    bio: 'Создает премиальные интерфейсы в стилистике Quiet Luxury, Bento Grid и Swiss Design. Продумывает пользовательский путь (CJM) с фокусом на максимальную конверсию в целевое действие.',
    skills: ['Figma Pro', 'Design Systems', 'Bento Grids', 'Quiet Luxury', 'CJM & UX Audit'],
    icon: 'Palette'
  },
  {
    name: 'Денис К.',
    role: 'Frontend & Interactive Widgets Engineer',
    experience: '5+ лет во фронтенде',
    bio: 'Мастер интерактивных виджетов: разработал 32-зубную одонтограмму FDI, послойный X-Ray разрез дома, сметные калькуляторы и сенсорные слайдеры сравнения с идеальным FPS.',
    skills: ['SVG/Canvas', 'Interactive Calculators', 'Mobile-First', 'Tailwind CSS', 'Framer Motion'],
    icon: 'Cpu'
  },
  {
    name: 'Михаил С.',
    role: 'DevOps & Quality Assurance',
    experience: '4+ года в QA и инфраструктуре',
    bio: 'Контролирует безупречную работу на всех типах устройств (iPhone, iPad, Android, 4K дисплеи). Настраивает CI/CD, защищенные SSL-сертификаты, защиту от DDoS и быструю доставку контента.',
    skills: ['CI/CD', 'Automated Testing', 'Cross-browser QA', 'Performance Audit', 'Security'],
    icon: 'ShieldCheck'
  }
];

export const TEAM_VALUES = [
  {
    title: 'Чистый код без конструкторов',
    desc: 'Никакой Tilda, Elementor или Wix. Мы пишем модульный код на React & TypeScript, который открывается мгновенно и не ломается при обновлениях.',
    iconName: 'Code'
  },
  {
    title: '100% передача прав и исходников',
    desc: 'Вы получаете полный репозиторий на GitHub. Сайт принадлежит только вам — никаких скрытых подписок, абонентской платы или зависимости от платформы.',
    iconName: 'Key'
  },
  {
    title: 'Фиксированный срок и цена',
    desc: 'Оцениваем проект до старта. Никаких «непредвиденных доплат» в процессе. Задержка срока хотя бы на 1 день — скидка 10%.',
    iconName: 'Clock'
  },
  {
    title: '30 дней бесплатной поддержки',
    desc: 'После запуска мы остаемся на связи: помогаем с наполнением, подключением домена, корпоративной почты и аналитики без дополнительной оплаты.',
    iconName: 'Headphones'
  }
];