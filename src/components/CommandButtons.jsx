import React from 'react';
import { Terminal, User, Code, Briefcase, Mail, Globe, Trash2, Languages } from 'lucide-react';

const CommandButtons = ({ onCommandClick, lang, onClear, onLanguageToggle }) => {
  const commands = [
    { cmd: 'help', icon: Terminal, label: lang === 'en' ? 'Help' : 'Помощь' },
    { cmd: 'about', icon: User, label: lang === 'en' ? 'About' : 'О себе' },
    { cmd: 'skills', icon: Code, label: lang === 'en' ? 'Skills' : 'Навыки' },
    { cmd: 'projects', icon: Briefcase, label: lang === 'en' ? 'Projects' : 'Проекты' },
    { cmd: 'contact', icon: Mail, label: lang === 'en' ? 'Contact' : 'Контакты' },
    { cmd: 'all', icon: Globe, label: lang === 'en' ? 'All' : 'Всё' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {commands.map(({ cmd, icon: Icon, label }) => (
        <button
          key={cmd}
          onClick={() => onCommandClick(cmd)}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono rounded transition-all hover:scale-105 active:scale-95"
          style={{
            backgroundColor: 'var(--terminal-bg)',
            color: 'var(--terminal-green)',
            border: '1px solid var(--terminal-bar-border)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--terminal-green)';
            e.currentTarget.style.boxShadow = '0 0 10px rgba(74, 222, 128, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--terminal-bar-border)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <Icon size={14} />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
      
      {/* Language Toggle Button */}
      <button
        onClick={onLanguageToggle}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono rounded transition-all hover:scale-105 active:scale-95"
        style={{
          backgroundColor: 'var(--terminal-bg)',
          color: 'var(--terminal-blue)',
          border: '1px solid var(--terminal-bar-border)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--terminal-blue)';
          e.currentTarget.style.boxShadow = '0 0 10px rgba(88, 166, 255, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--terminal-bar-border)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <Languages size={14} />
        <span>{lang === 'en' ? 'RU' : 'EN'}</span>
      </button>

      {/* Clear Button */}
      <button
        onClick={onClear}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono rounded transition-all hover:scale-105 active:scale-95"
        style={{
          backgroundColor: 'var(--terminal-bg)',
          color: '#ef4444',
          border: '1px solid var(--terminal-bar-border)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = '#ef4444';
          e.currentTarget.style.boxShadow = '0 0 10px rgba(239, 68, 68, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--terminal-bar-border)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <Trash2 size={14} />
        <span className="hidden sm:inline">{lang === 'en' ? 'Clear' : 'Очистить'}</span>
      </button>
    </div>
  );
};

export default CommandButtons;