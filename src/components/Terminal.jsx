import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Battery, Wifi } from 'lucide-react';
import OutputLine from './OutputLine';
import { getCommandOutput } from '../utils/commands';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const [userName] = useState('guest');
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('en');

  // Синхронизируем класс темы на <html>
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  // Создаем контекст команд, который будет передан в getCommandOutput
  const commandContext = {
    lang,
    setLang,
    theme,
    setTheme,
    clearHistory: () => setHistory([]),
    userName
  };

  // Initial welcome message
  useEffect(() => {
    // Получаем приветственное сообщение через нашу функцию команд
    const welcomeOutput = getCommandOutput('welcome', {
        ...commandContext,
        lang: 'en' // Принудительно ставим английский при инициализации или берем из localStorage если реализуем
    });
    
    setHistory([
      {
        id: 'init',
        command: 'welcome',
        output: welcomeOutput
      }
    ]);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim();
    
    // Если команда пустая, ничего не делаем, но добавляем в историю (как пустую строку)
    if (!trimmedCmd) {
         setHistory(prev => [...prev, {
            id: Date.now().toString() + Math.random().toString(36).substring(7),
            command: cmd,
            output: null
        }]);
        return;
    }

    // Если команда clear, она обрабатывается особо, так как должна очистить историю
    if (trimmedCmd.toLowerCase() === 'clear') {
        setHistory([]);
        return;
    }

    // Получаем результат выполнения команды
    const output = getCommandOutput(trimmedCmd, commandContext);

    // Добавляем команду и результат в историю
    setHistory(prev => [...prev, {
        id: Date.now().toString() + Math.random().toString(36).substring(7),
        command: cmd,
        output
    }]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const validHistory = history.filter(h => h.command !== 'welcome' && h.command.trim() !== '');
      if (validHistory.length === 0) return;

      const newIndex = historyIndex + 1;
      if (newIndex < validHistory.length) {
          setHistoryIndex(newIndex);
          // Берем с конца: длина - 1 - индекс
          setInput(validHistory[validHistory.length - 1 - newIndex].command);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const validHistory = history.filter(h => h.command !== 'welcome' && h.command.trim() !== '');
      
      const newIndex = historyIndex - 1;
      if (newIndex >= 0) {
          setHistoryIndex(newIndex);
          setInput(validHistory[validHistory.length - 1 - newIndex].command);
      } else {
          setHistoryIndex(-1);
          setInput('');
      }
    }
  };


    const handleContainerClick = (e) => {
        // 1. Проверка: если пользователь выделяет текст (например, копирует команду),
        // мы не должны перехватывать фокус, иначе выделение слетит.
        if (window.getSelection()?.toString()) {
            return;
        }

        // 2. Фокусируемся на инпуте, но ЗАПРЕЩАЕМ браузеру скроллить к нему
        inputRef.current?.focus({ preventScroll: true });
    };

  return (
    <div
      className="flex flex-col h-screen w-full font-mono overflow-hidden relative"
      style={{
        backgroundColor: 'var(--terminal-bg)',
        color: 'var(--terminal-text)',
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
    >
      {/* Top Bar (Mac-like) */}
      <div
        className="flex items-center justify-between px-4 py-2 shrink-0"
        style={{
          backgroundColor: 'var(--terminal-bar-bg)',
          borderBottom: '1px solid var(--terminal-bar-border)',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        <div className="flex gap-2 group">
          <div className="w-3 h-3 rounded-full bg-red-500 group-hover:bg-red-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 group-hover:bg-yellow-600 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-green-500 group-hover:bg-green-600 transition-colors" />
        </div>
        <div className="flex items-center gap-2 text-sm select-none" style={{ color: 'var(--terminal-text-muted)' }}>
          <TerminalIcon size={14} />
          <span>{userName}@portfolio:~</span>
        </div>
        <div className="flex items-center gap-3" style={{ color: 'var(--terminal-text-muted)' }}>
           <Wifi size={14} />
           <Battery size={14} />
           <span className="text-xs">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
      </div>

      {/* Main Terminal Area */}
      <div 
        className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth" 
        ref={scrollRef}
        onClick={handleContainerClick}
      >
        <div className="max-w-5xl mx-auto min-h-full pb-32">
            {history.map((item) => (
            <div key={item.id} className="mb-4">
                <div className="flex items-center gap-2 mb-1">
                <span className="font-bold" style={{ color: 'var(--terminal-blue)' }}>➜</span>
                <span className="font-bold" style={{ color: 'var(--terminal-green)' }}>~</span>
                <span className="opacity-75" style={{ color: 'var(--terminal-text)' }}>{item.command}</span>
                </div>
                {item.output && (
                    <OutputLine>
                        {item.output}
                    </OutputLine>
                )}
            </div>
            ))}
            
            {/* Input Line */}
            <div className="flex items-center gap-2 text-lg">
                <span className="font-bold" style={{ color: 'var(--terminal-blue)' }}>➜</span>
                <span className="font-bold" style={{ color: 'var(--terminal-green)' }}>~</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent outline-none border-none placeholder-gray-600"
                    style={{ color: 'var(--terminal-input)' }}
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                />
            </div>
            <div ref={scrollRef} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
