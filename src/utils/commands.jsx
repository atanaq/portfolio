import React from 'react';
import About from '../components/About';
import SkillList from '../components/SkillList';
import ProjectList from '../components/ProjectList';
import Help from '../components/Help';
import { portfolioData } from '../data/portfolioData';

export const getCommandOutput = (cmd, context) => {
  const trimmedCmd = cmd.trim().toLowerCase();
  const parts = trimmedCmd.split(' ');
  const mainCommand = parts[0];
  const args = parts.slice(1);

  switch (mainCommand) {
    // Приветственное сообщение
    case 'welcome':
      return (
        <div className="mb-4">
          <pre className="text-terminal-green font-bold text-xs md:text-sm leading-tight mb-4 whitespace-pre-wrap font-mono">
            {portfolioData.asciiArt}
          </pre>
          <p>{context.lang === 'en' ? 'Welcome to the interactive portfolio terminal.' : 'Добро пожаловать в интерактивный терминал портфолио.'}</p>
          <p>{context.lang === 'en' ? "Type " : "Введите "}<span className="text-terminal-green font-bold">'help'</span>{context.lang === 'en' ? " to see available commands." : " чтобы увидеть доступные команды."}</p>
          <p>{context.lang === 'en' ? "To switch language type " : "Для смены языка введите "}<span className="text-terminal-green font-bold">{context.lang === 'en' ? "'lang ru'" : "'lang en'"}</span>.</p>
          <p className="mt-2 text-gray-500 italic">{context.lang === 'en' ? "Try 'all' to see everything at once!" : "Попробуйте 'all' чтобы увидеть всё сразу!"}</p>
        </div>
      );

    // Показать список доступных команд
    case 'help':
      return <Help lang={context.lang} />;

    // Показать информацию о себе
    case 'about':
      return (
        <div>
          <h2 className="text-xl font-bold text-terminal-green mb-2">
            {context.lang === 'en' ? '--- ABOUT ME ---' : '--- ОБО МНЕ ---'}
          </h2>
          <About lang={context.lang} />
        </div>
      );

    // Показать навыки
    case 'skills':
      return (
        <div>
          <h2 className="text-xl font-bold text-terminal-green mb-2">
            {portfolioData[context.lang].sectionTitles.skills}
          </h2>
          <SkillList lang={context.lang} />
        </div>
      );

    // Показать проекты
    case 'projects':
      return (
        <div>
          <h2 className="text-xl font-bold text-terminal-green mb-2">
            {portfolioData[context.lang].sectionTitles.projects}
          </h2>
          <ProjectList lang={context.lang} />
        </div>
      );

    // Показать контакты
    case 'contact':
      return (
        <div>
          <h2 className="text-xl font-bold text-terminal-green mb-2">
            {portfolioData[context.lang].sectionTitles.contact}
          </h2>
          <div className="mt-2 space-y-2 font-mono">
            <p>Email: <a href={`mailto:${portfolioData.contact.email}`} className="text-blue-400 hover:underline">{portfolioData.contact.email}</a></p>
            <p>GitHub: <a href={`https://${portfolioData.contact.github}`} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{portfolioData.contact.github}</a></p>
            <p>LinkedIn: <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{portfolioData.contact.linkedin}</a></p>
          </div>
        </div>
      );

    // Очистить терминал
    case 'clear':
      context.clearHistory();
      return null;

    // Показать текущего пользователя
    case 'whoami':
      return <p>{context.lang === 'en' ? `You are ${context.userName}, a curious visitor exploring this portfolio.` : `Вы ${context.userName}, любопытный посетитель этого портфолио.`}</p>;

    // Показать текущую дату
    case 'date':
      return <p>{new Date().toString()}</p>;

    // Сменить язык
    case 'lang':
      if (args[0]) {
        if (args[0] === 'en' || args[0] === 'ru') {
          context.setLang(args[0]);
          return <p className="text-terminal-green">Language switched to {args[0].toUpperCase()}</p>;
        } else {
          return <p className="text-red-400">Usage: lang [en|ru]</p>;
        }
      } else {
        const nextLang = context.lang === 'en' ? 'ru' : 'en';
        context.setLang(nextLang);
        return <p className="text-terminal-green">Language switched to {nextLang.toUpperCase()}</p>;
      }

    // Показать всё сразу
    case 'all':
      return (
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-terminal-green mb-2">
              {context.lang === 'en' ? '--- ABOUT ME ---' : '--- ОБО МНЕ ---'}
            </h2>
            <About lang={context.lang} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-terminal-green mb-2">
              {portfolioData[context.lang].sectionTitles.skills}
            </h2>
            <SkillList lang={context.lang} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-terminal-green mb-2">
              {portfolioData[context.lang].sectionTitles.projects}
            </h2>
            <ProjectList lang={context.lang} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-terminal-green mb-2">
              {portfolioData[context.lang].sectionTitles.contact}
            </h2>
            <div className="mt-2 space-y-2 font-mono">
              <p>Email: <a href={`mailto:${portfolioData.contact.email}`} className="text-blue-400 hover:underline">{portfolioData.contact.email}</a></p>
              <p>GitHub: <a href={`https://${portfolioData.contact.github}`} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">{portfolioData.contact.github}</a></p>
            </div>
          </div>
        </div>
      );

    // Обработка пустой команды
    case '':
      return null;

    // Команда по умолчанию (если ничего не совпало)
    default:
      return <p className="text-red-400">{context.lang === 'en' ? `Command not found: ${trimmedCmd}. Type 'help' for available commands.` : `Команда не найдена: ${trimmedCmd}. Введите 'help' для списка команд.`}</p>;
  }
};