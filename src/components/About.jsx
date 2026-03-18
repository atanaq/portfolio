import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = ({ lang }) => {
  const data = portfolioData[lang];

  return (
    <div className="max-w-4xl mt-4">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 space-y-4">
          <h2 className="text-xl font-bold text-terminal-green mb-2">{lang === 'en' ? '--- ABOUT ME ---' : '--- ОБО МНЕ ---'}</h2>
          {data.about.map((paragraph, index) => (
            <p key={index} className="text-gray-300 leading-relaxed text-lg font-mono">
              {paragraph}
            </p>
          ))}
          <div className="mt-6 flex gap-4">
            <a href={`mailto:${portfolioData.contact.email}`} className="px-4 py-2 bg-terminal-green text-black font-bold rounded hover:bg-green-400 transition-colors font-mono">
              {lang === 'en' ? 'Contact Me' : 'Связаться'}
            </a>
            <a href={`https://${portfolioData.contact.github}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 transition-colors font-mono text-gray-300">
              GitHub
            </a>
          </div>
        </div>
        
        {/* Pixel Art Avatar Representation */}
        <div className="hidden md:block shrink-0">
            <div className="w-48 h-48 bg-gray-900 border-2 border-terminal-green relative grid grid-cols-8 grid-rows-8 gap-0.5 p-1 shadow-[0_0_15px_rgba(74,222,128,0.3)]">
                {/* Simple pixel face pattern */}
                {[
                  0,0,0,1,1,0,0,0,
                  0,0,1,1,1,1,0,0,
                  0,1,1,1,1,1,1,0,
                  0,1,0,1,1,0,1,0,
                  0,1,1,1,1,1,1,0,
                  0,0,1,0,0,1,0,0,
                  0,0,0,1,1,0,0,0,
                  0,0,1,1,1,1,0,0,
                ].map((val, i) => (
                    <div key={i} className={`${val ? 'bg-terminal-green' : 'bg-transparent'} w-full h-full rounded-sm opacity-80`} />
                ))}
            </div>
            <div className="text-center mt-2 text-terminal-green text-xs font-mono">user_avatar.png</div>
        </div>
      </div>
    </div>
  );
};

export default About;
