import React from 'react';
import { portfolioData } from '../data/portfolioData';
import userimage from '../content/userimage.jpg'

const About = ({ lang }) => {
  const data = portfolioData[lang];

  return (
    <div className="max-w-4xl mt-4">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 space-y-4">
          {/* Убираем заголовок, так как он уже есть в commands.js */}
          {data.about.map((paragraph, index) => (
            <p key={index} className="text-gray-300 leading-relaxed text-lg font-mono">
              {paragraph}
            </p>
          ))}
          <div className="mt-6 flex gap-4">
            <a href={`https://${portfolioData.contact.github}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 transition-colors font-mono text-gray-300">
              GitHub
            </a>
          </div>
        </div>

        {/* Pixel Art Avatar Representation */}
        <div className="hidden md:block shrink-0">
          <div className="w-60 h-60 bg-gray-900 border-2 border-terminal-green relative p-1 shadow-[0_0_15px_rgba(74,222,128,0.3)] flex items-center justify-center overflow-hidden">
            <img
              src={userimage}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-2 text-terminal-green text-xs font-mono">user_avatar.png</div>
        </div>
      </div>
    </div>
  );
};

export default About;