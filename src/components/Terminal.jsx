import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, Battery, Wifi } from 'lucide-react';
import OutputLine from './OutputLine';
import CommandButtons from './CommandButtons';
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

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  const commandContext = {
    lang,
    setLang,
    theme,
    setTheme,
    clearHistory: () => setHistory([]),
    userName
  };

  const updateHistoryLanguage = (newLang) => {
    setHistory(prevHistory =>
      prevHistory.map(item => {
        const newContext = { ...commandContext, lang: newLang };
        const newOutput = getCommandOutput(item.command, newContext);
        return {
          ...item,
          output: newOutput,
          enableTyping: false
        };
      })
    );
  };

  useEffect(() => {
    const welcomeOutput = getCommandOutput('welcome', {
      ...commandContext,
      lang: 'en'
    });

    setHistory([
      {
        id: 'init',
        command: 'welcome',
        output: welcomeOutput,
        enableTyping: false
      }
    ]);
  }, []);

  const handleCommand = (cmd, enableTyping = false) => {
    const trimmedCmd = cmd.trim();

    if (!trimmedCmd) {
      setHistory(prev => [...prev, {
        id: Date.now().toString() + Math.random().toString(36).substring(7),
        command: cmd,
        output: null,
        enableTyping: false
      }]);
      return;
    }

    if (trimmedCmd.toLowerCase() === 'clear') {
      setHistory([]);
      return;
    }

    const output = getCommandOutput(trimmedCmd, commandContext);

    setHistory(prev => [...prev, {
      id: Date.now().toString() + Math.random().toString(36).substring(7),
      command: cmd,
      output,
      enableTyping
    }]);
  };

  const handleButtonClick = (cmd) => {
    setInput(cmd);
    setTimeout(() => {
      handleCommand(cmd, true);
      setInput('');
    }, 300);
  };

  const handleClear = () => {
    setHistory([]);
  };

  const handleLanguageToggle = () => {
    const newLang = lang === 'en' ? 'ru' : 'en';
    setLang(newLang);
    updateHistoryLanguage(newLang);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input, true);
      setInput('');
      setHistoryIndex(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const validHistory = history.filter(h => h.command !== 'welcome' && h.command.trim() !== '');
      if (validHistory.length === 0) return;

      const newIndex = historyIndex + 1;
      if (newIndex < validHistory.length) {
        setHistoryIndex(newIndex);
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
    if (window.getSelection()?.toString()) {
      return;
    }
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
      {/* Top Bar */}
      <div
        className="flex items-center justify-between px-4 py-2 shrink-0"
        style={{
          backgroundColor: 'var(--terminal-bar-bg)',
          borderBottom: '1px solid var(--terminal-bar-border)',
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
          <span className="text-xs">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      {/* Кнопки — вне скроллящейся зоны, слитно с топбаром */}
      <div
        className="shrink-0 flex justify-center px-4 py-3"
        style={{
          backgroundColor: 'var(--terminal-bar-bg)',
          borderBottom: '1px solid var(--terminal-bar-border)',
        }}
      >
        <CommandButtons
          onCommandClick={handleButtonClick}
          lang={lang}
          onClear={handleClear}
          onLanguageToggle={handleLanguageToggle}
        />
      </div>

      {/* Main Terminal Area */}
      <div
        className="flex-1 overflow-y-auto p-4 md:p-6 scroll-smooth"
        ref={scrollRef}
        onClick={handleContainerClick}
      >
        <div className="max-w-5xl mx-auto min-h-full pb-32">

          {/* История команд */}
          {history.map((item) => (
            <div key={item.id} className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-bold" style={{ color: 'var(--terminal-blue)' }}>➜</span>
                <span className="font-bold" style={{ color: 'var(--terminal-green)' }}>~</span>
                <span className="opacity-75" style={{ color: 'var(--terminal-text)' }}>{item.command}</span>
              </div>
              {item.output && (
                <OutputLine enableTyping={item.enableTyping}>
                  {item.output}
                </OutputLine>
              )}
            </div>
          ))}

          {/* Строка ввода */}
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

        </div>
      </div>
    </div>
  );
};

export default Terminal;