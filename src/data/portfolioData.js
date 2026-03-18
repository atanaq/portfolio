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
      "Hello! I am a passionate Frontend Developer.",
      "I specialize in building modern, responsive, and interactive web applications using the React ecosystem.",
      "I love turning complex problems into simple, beautiful, and intuitive interface designs.",
      "Current Status: Open to work and freelance projects."
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
        name: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and customers.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        link: "#", // Ссылка на проект
        status: "Completed"
      },
      {
        name: "Task Manager App",
        description: "A drag-and-drop task management tool similar to Trello.",
        tech: ["React", "Redux Toolkit", "DND Kit"],
        link: "#",
        status: "In Progress"
      },
      {
        name: "Weather Visualizer",
        description: "Real-time weather data visualization using OpenWeatherMap API.",
        tech: ["JavaScript", "D3.js", "CSS Grid"],
        link: "#",
        status: "Completed"
      }
    ],
    // Заголовки разделов (обычно не требуют изменений)
    sectionTitles: {
      about: "--- ABOUT ---",
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
      "Привет! Я увлеченный Фронтенд Разработчик.",
      "Я специализируюсь на создании современных, отзывчивых и интерактивных веб-приложений, используя экосистему React.",
      "Мне нравится превращать сложные задачи в простые, красивые и интуитивно понятные интерфейсы.",
      "Текущий статус: Открыт к предложениям и фриланс-проектам."
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
        name: "E-Commerce Dashboard",
        description: "Комплексная панель управления для управления товарами, заказами и клиентами.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        link: "#",
        status: "Завершен"
      },
      {
        name: "Task Manager App",
        description: "Инструмент управления задачами с функцией drag-and-drop, похожий на Trello.",
        tech: ["React", "Redux Toolkit", "DND Kit"],
        link: "#",
        status: "В процессе"
      },
      {
        name: "Weather Visualizer",
        description: "Визуализация погодных данных в реальном времени с использованием OpenWeatherMap API.",
        tech: ["JavaScript", "D3.js", "CSS Grid"],
        link: "#",
        status: "Завершен"
      }
    ],
    // Заголовки разделов
    sectionTitles: {
      about: "--- О СЕБЕ ---",
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
