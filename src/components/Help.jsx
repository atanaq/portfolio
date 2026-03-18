import React from 'react';

const Help = ({ lang }) => {
  const commands = [
    { 
      cmd: 'help', 
      desc: lang === 'en' ? 'Show this help message' : 'Показать справку' 
    },
    { 
      cmd: 'about', 
      desc: lang === 'en' ? 'Display information about me' : 'Информация обо мне' 
    },
    { 
      cmd: 'skills', 
      desc: lang === 'en' ? 'List technical skills' : 'Список технических навыков' 
    },
    { 
      cmd: 'projects', 
      desc: lang === 'en' ? 'Show portfolio projects' : 'Показать проекты' 
    },
    { 
      cmd: 'contact', 
      desc: lang === 'en' ? 'Show contact details' : 'Контактные данные' 
    },
    { 
      cmd: 'lang', 
      desc: lang === 'en' ? 'Switch language (e.g., lang ru)' : 'Сменить язык (например, lang en)' 
    },
    { 
      cmd: 'clear', 
      desc: lang === 'en' ? 'Clear the terminal' : 'Очистить терминал' 
    },
    { 
      cmd: 'theme', 
      desc: lang === 'en' ? 'Toggle dark/light mode' : 'Сменить тему' 
    },
    { 
      cmd: 'all', 
      desc: lang === 'en' ? 'Run all main commands' : 'Выполнить все команды' 
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-y-2 mt-2 max-w-2xl">
      {commands.map(({ cmd, desc }) => (
        <div key={cmd} className="flex flex-col sm:flex-row justify-between border-b border-gray-800 pb-1 gap-1 sm:gap-4">
          <span className="text-terminal-green font-bold font-mono">{cmd}</span>
          <span className="text-gray-400 font-mono text-sm sm:text-base">{desc}</span>
        </div>
      ))}
    </div>
  );
};

export default Help;
