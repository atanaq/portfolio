import React from 'react';
import { portfolioData } from '../data/portfolioData';

const ProjectList = ({ lang }) => {
  const { projects } = portfolioData[lang];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {projects.map((project, index) => (
        <div key={index} className="border border-gray-700 bg-gray-900/50 p-4 rounded hover:border-terminal-green transition-colors group flex flex-col h-full">
          <h3 className="text-xl font-bold text-terminal-green mb-2 group-hover:text-green-400">{project.name}</h3>
          <p className="text-gray-400 text-sm mb-3 flex-grow font-mono">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech.map((t, i) => (
              <span key={i} className="px-2 py-0.5 text-xs bg-gray-800 rounded text-blue-300 font-mono">
                {t}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center text-xs text-gray-500 font-mono mt-auto pt-2 border-t border-gray-800">
            <span>{project.status}</span>
            <a href={project.link} className="text-blue-400 hover:underline cursor-pointer flex items-center gap-1">
              {lang === 'en' ? 'View' : 'Смотреть'} &rarr;
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
