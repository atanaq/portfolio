import React from 'react';
import { portfolioData } from '../data/portfolioData';

const SkillList = ({ lang }) => {
  const data = portfolioData[lang];
  const { skills, sectionTitles } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      <div className="border border-gray-700 bg-gray-900/50 p-4 rounded hover:border-terminal-blue transition-colors group">
        <h3 className="text-lg font-bold text-terminal-blue mb-2 group-hover:text-blue-400">{sectionTitles.languages}</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-1 font-mono">
          {skills.languages.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
      <div className="border border-gray-700 bg-gray-900/50 p-4 rounded hover:border-terminal-blue transition-colors group">
        <h3 className="text-lg font-bold text-terminal-blue mb-2 group-hover:text-blue-400">{sectionTitles.frameworks}</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-1 font-mono">
          {skills.frameworks.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
      <div className="border border-gray-700 bg-gray-900/50 p-4 rounded hover:border-terminal-blue transition-colors group">
        <h3 className="text-lg font-bold text-terminal-blue mb-2 group-hover:text-blue-400">{sectionTitles.tools}</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-1 font-mono">
          {skills.tools.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
      <div className="border border-gray-700 bg-gray-900/50 p-4 rounded hover:border-terminal-blue transition-colors group">
        <h3 className="text-lg font-bold text-terminal-blue mb-2 group-hover:text-blue-400">{sectionTitles.softSkills}</h3>
        <ul className="list-disc list-inside text-gray-400 space-y-1 font-mono">
          {skills.soft.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default SkillList;
