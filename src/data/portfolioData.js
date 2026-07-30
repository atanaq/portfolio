// Это основной файл с данными для портфолио.
// Здесь вы можете легко изменить текст, добавить новые проекты или навыки.
// Структура разделена на 'contact' (общая информация), 'asciiArt' (логотип), 
// и языковые разделы 'en' (английский) и 'ru' (русский).

export const portfolioData = {
  // Контактная информация
  contact: {
    email: "poo.khoo@mail.ru",
    github: "github.com/atanaq",
    linkedin: "linkedin.com/in/frontend-dev", // Замените на вашу ссылку
    twitter: "@frontend_dev" // Замените на вашу ссылку или удалите
  },

  // ASCII арт, который отображается при приветствии (команда welcome)
  // Вы можете сгенерировать свой здесь: https://patorjk.com/software/taag/
  asciiArt: `
   ______               _                 _ 
  |  ____|             | |               | |
  | |__ _ __ ___  _ __ | |_ ___ _ __   __| |
  |  __| '__/ _ \\| '_ \\| __/ _ \\ '_ \\ / _\` |
  | |  | | | (_) | | | | ||  __/ | | | (_| |
  |_|  |_|  \\___/|_| |_|\\__\\___|_| |_|\\__,_|
                                            
  `,

  // Данные на Английском языке
  en: {
    // Раздел "О себе"
    about: [
      "My name is Maxim. I’m 21 and I’m a Front-End developer. ",
      "My tech stack includes HTML, CSS, React, JavaScript, and TypeScript.",
      "I’m proficient in Next.js, Tailwind, Redux, Framer Motion, and Git.",
      "I specialize in building modern, responsive, and interactive web applications using the React ecosystem.",
      "I enjoy turning complex tasks into simple, beautiful, and intuitive interfaces.",
    ],
    // Навыки
    skills: {
      languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
      frameworks: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
      tools: ["Git", "Vite", "Webpack", "Figma", "VS Code"],
      soft: ["Problem Solving", "Teamwork", "Adaptability", "Continuous Learning"]
    },
    // Проекты
    // Чтобы добавить новый проект, просто скопируйте объект внутри массива и измените данные.
    projects: [
      {
        name: "NovaCore",
        description: "NovaCore is a premium digital product studio.",
        tech: ["React", "JavaScript", "CSS"],
        link: "https://atanaq.github.io/NovaCore/", // Ссылка на проект
        status: "Completed"
      },
      {
        name: "VanguardCreative",
        description: "VanguardCreative is a creative agency.",
        tech: ["React", "JavaScript", "CSS"],
        link: "https://atanaq.github.io/VanguardCreative/",
        status: "Completed"
      },
      {
        name: "Mir Okon",
        description: "Mir Okon is a website created to automate the operations and calculations of the window business.",
        tech: ["React", "JavaScript", "CSS", "Electron JS"],
        link: "https://atanaq.github.io/VanguardCreative/",
        status: "In progress"
      },
    ],
    // Заголовки разделов (обычно не требуют изменений)
    sectionTitles: {
      skills: "--- SKILLS ---",
      projects: "--- PROJECTS ---",
      contact: "--- CONTACT ---",
      languages: "Languages",
      frameworks: "Frameworks",
      tools: "Tools",
      softSkills: "Soft Skills"
    }
  },

  // Данные на Русском языке
  ru: {
    // Раздел "О себе"
    about: [
      "Меня зовут Максим. Мне 21 и я являюсь Frontend-разработчиком.",
      "Мой стек HTML, CSS, React, JavaScript, TypeScript.",
      "Владею навыками работы с Next.js, Tailwind, Redux, Framer Motion, Git.",
      "Я специализируюсь на создании современных, адаптивных и интерактивных веб-приложений с использованием экосистемы React.",
      "Мне нравится превращать сложные задачи в простые, красивые и интуитивно понятные интерфейсы.",
    ],
    // Навыки
    skills: {
      languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
      frameworks: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
      tools: ["Git", "Vite", "Webpack", "Figma", "VS Code"],
      soft: ["Решение проблем", "Командная работа", "Адаптивность", "Постоянное обучение"]
    },
    // Проекты
    projects: [
      {
        name: "NovaCore",
        description: "NovaCore — студия цифровых продуктов премиум-класса.",
        tech: ["React", "JavaScript", "CSS"],
        link: "https://atanaq.github.io/NovaCore/",
        status: "Завершен"
      },
      {
        name: "VanguardCreative",
        description: "VanguardCreative — креативное агентство.",
        tech: ["React", "JavaScript", "CSS"],
        link: "https://atanaq.github.io/VanguardCreative/",
        status: "Завершен"
      },
      {
        name: "Мир Окон",
        description: "Мир Окон - это сайт, созданный с целью автоматизировать работу и расчеты оконного бизнеса.",
        tech: ["React", "JavaScript", "CSS", "Electron JS"],
        link: "https://atanaq.github.io/VanguardCreative/",
        status: "В процессе"
      },
    ],
    // Заголовки разделов
    sectionTitles: {
      skills: "--- НАВЫКИ ---",
      projects: "--- ПРОЕКТЫ ---",
      contact: "--- КОНТАКТЫ ---",
      languages: "Языки",
      frameworks: "Фреймворки",
      tools: "Инструменты",
      softSkills: "Soft Skills"
    }
  }
};
