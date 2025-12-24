
import React from 'react';

const GithubActivity: React.FC = () => {
  const days = Array.from({ length: 154 }, (_, i) => Math.floor(Math.random() * 5));
  
  return (
    <div className="glass-panel p-8 rounded-3xl border border-white/5">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold">Code Contributions</h3>
        <span className="text-xs text-gray-500">github.com/Liozak</span>
      </div>
      
      <div className="grid grid-flow-col grid-rows-7 gap-1 overflow-x-auto pb-4">
        {days.map((level, i) => (
          <div 
            key={i} 
            className={`w-3 h-3 rounded-sm ${
              level === 0 ? 'bg-white/5' : 
              level === 1 ? 'bg-blue-900' :
              level === 2 ? 'bg-blue-700' :
              level === 3 ? 'bg-blue-500' : 'bg-emerald-500'
            }`}
          />
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-4 text-[10px] text-gray-500 font-medium">
        <span>Sept 2024</span>
        <div className="flex gap-1 items-center">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-white/5"></div>
            <div className="w-2 h-2 bg-blue-900"></div>
            <div className="w-2 h-2 bg-blue-500"></div>
            <div className="w-2 h-2 bg-emerald-500"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default GithubActivity;
