
import React from 'react';

const TechInsights: React.FC = () => {
  const insights = [
    {
      date: 'MAR 15',
      title: 'The Rise of AI-Powered Phishing',
      desc: 'LLMs are making phishing emails indistinguishable from corporate comms. Detection must shift to behavioral analysis.'
    },
    {
      date: 'FEB 28',
      title: 'Zero-Knowledge Proofs in 2025',
      desc: 'ZKP is the future of digital identity. It allows authentication without exposing sensitive credentials.'
    }
  ];

  return (
    <div className="glass-panel p-8 rounded-3xl border border-white/5">
      <h3 className="font-bold mb-8">Quick Takes</h3>
      <div className="space-y-6">
        {insights.map((insight, i) => (
          <div key={i} className="flex gap-6 group">
            <div className="text-[10px] font-black text-gray-600 mt-1">{insight.date}</div>
            <div>
              <h4 className="font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors">{insight.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{insight.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechInsights;
