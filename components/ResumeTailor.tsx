
import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants';

const ResumeTailor: React.FC = () => {
  const [jd, setJd] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!jd.trim()) return;
    setLoading(true);
    
    // Simulate thinking time
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const jdLower = jd.toLowerCase();
    
    // Static Matching Logic
    const matchedSkills = PORTFOLIO_DATA.skills
      .filter(s => jdLower.includes(s.name.toLowerCase()))
      .slice(0, 3)
      .map(s => s.name);
      
    const bestProject = matchedSkills.length > 0 
      ? PORTFOLIO_DATA.projects[0].title // Default to first project for demo
      : "Cloud Attack Simulator";

    const defaultMatches = ["Python", "Machine Learning", "Cybersecurity"];
    const finalSkills = matchedSkills.length > 0 ? matchedSkills : defaultMatches;

    const resultText = `
Top Matching Skills:
1. ${finalSkills[0]}
2. ${finalSkills[1]}
3. ${finalSkills[2]}

Recommended Project:
${bestProject}

(Demo Analysis: Keywords matched locally from portfolio data. Full AI analysis available in development environment.)
    `;

    setFeedback(resultText.trim());
    setLoading(false);
  };

  return (
    <section className="py-24 bg-blue-600/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Smart Skill Matcher</h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm">
            <span className="text-blue-500 font-bold">STATIC DEMO:</span> Paste a job description below. The logic will locally scan your JD for keywords matching Zakie's technical stack.
          </p>
          <textarea 
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="e.g. Seeking a Python developer with ML experience..."
            className="w-full h-48 bg-white/5 border border-white/10 rounded-2xl p-6 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none mb-6 font-sans text-sm"
          />
          <button 
            onClick={analyze}
            disabled={loading || !jd.trim()}
            className="px-8 py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition-all disabled:opacity-50"
          >
            {loading ? 'Analyzing Keywords...' : 'Run Matcher'}
          </button>
        </div>
        
        <div className={`p-8 rounded-3xl border border-white/5 min-h-[300px] flex flex-col justify-center transition-all ${feedback ? 'bg-white/5' : 'bg-transparent border-dashed'}`}>
          {feedback ? (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Keyword Match Report
              </div>
              <p className="text-gray-300 leading-relaxed text-sm whitespace-pre-line font-mono opacity-90">{feedback}</p>
            </div>
          ) : (
            <div className="text-center text-gray-600 italic text-sm">
              Analysis report will appear here...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResumeTailor;
