
import React, { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../constants';

interface TerminalProps {
  isStealth: boolean;
  setIsStealth: (v: boolean) => void;
}

const Terminal: React.FC<TerminalProps> = ({ isStealth, setIsStealth }) => {
  const [history, setHistory] = useState<string[]>(['Welcome to ZS-OS v1.0.4', 'Type "help" to see available commands.']);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, `> ${input}`];

    switch (cmd) {
      case 'help':
        newHistory.push('Available commands: about, projects, skills, clear, matrix, exit');
        break;
      case 'about':
        newHistory.push(PORTFOLIO_DATA.bio);
        break;
      case 'projects':
        newHistory.push('Fetching projects... ' + PORTFOLIO_DATA.projects.map(p => p.title).join(', '));
        break;
      case 'skills':
        newHistory.push('Core Stack: Python, PyTorch, TensorFlow, Scikit-learn, Network Security.');
        break;
      case 'matrix':
        setIsStealth(!isStealth);
        newHistory.push(isStealth ? 'Exiting stealth mode...' : 'Entering stealth mode. Wake up, Neo.');
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        newHistory.push(`Command not found: ${cmd}. Type "help" for options.`);
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-24 glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/5 font-mono text-sm">
      <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>
        <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">zaki_terminal — 80×24</div>
      </div>
      <div ref={scrollRef} className="p-6 h-64 overflow-y-auto space-y-2 bg-black/40 text-gray-300">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'text-blue-400' : (isStealth ? 'text-green-500' : 'text-gray-400')}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-2">
          <span className="text-emerald-500">➜</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-transparent outline-none border-none p-0 focus:ring-0 text-white"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;
