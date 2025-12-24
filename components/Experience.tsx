
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">Projects & Academic Experience</h2>
        <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
      </div>

      <div className="space-y-16">
        {PORTFOLIO_DATA.experience.map((exp, idx) => (
          <div key={idx} className="relative pl-10 border-l border-white/10 group">
            <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/10 group-hover:scale-125 transition-all"></div>
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-blue-400 tracking-widest uppercase bg-blue-500/5 px-2 py-1 rounded border border-blue-500/10 inline-block">
                {exp.period}
              </span>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {exp.role}
              </h3>
              <p className="text-lg font-medium text-gray-300">
                {exp.company}
              </p>
              <p className="text-gray-400 leading-relaxed text-sm max-w-3xl">
                {exp.description}
              </p>
            </div>
          </div>
        ))}

        <div className="glass-panel p-8 rounded-3xl border border-white/5 mt-10">
          <div className="flex items-start gap-4">
            <div className="mt-1">
              <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-bold mb-2">Google Cybersecurity Certificate</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Comprehensive training in threat detection, network security protocols, and incident management using hands-on labs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
