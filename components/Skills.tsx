
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Skills: React.FC = () => {
  const categoryMap: Record<string, string> = {
    'Frontend': 'Programming Languages',
    'Backend': 'AI & Machine Learning',
    'Tools': 'Cybersecurity & DefOps',
    'Soft Skills': 'Developer Tools & MLOps'
  };

  const categories = ['Frontend', 'Backend', 'Tools', 'Soft Skills'];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Technical Proficiency</h2>
          <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6 mx-auto"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">Organized by core domains relevant to AI-driven security engineering.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((catKey) => (
            <div key={catKey} className="glass-panel p-8 rounded-3xl border border-white/5">
              <h3 className="text-xs font-black text-blue-500 uppercase tracking-[0.2em] mb-8 pb-3 border-b border-white/10">
                {categoryMap[catKey]}
              </h3>
              <div className="space-y-6">
                {PORTFOLIO_DATA.skills
                  .filter(skill => skill.category === catKey)
                  .map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-200">{skill.name}</span>
                        <span className="text-[10px] font-mono text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/5 rounded-full h-1 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-emerald-500 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
