
import React, { useState, useEffect } from 'react';

const Hero: React.FC<{ isStealth?: boolean }> = ({ isStealth }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Engineering Intelligence into the Frontiers of Cybersecurity.";
  const chars = "ABCDEF0123456789!<>-_"; // More structured set for a cleaner look

  useEffect(() => {
    let iteration = 0;
    // Lowered interval from 30ms to 20ms for higher FPS feel
    const interval = setInterval(() => {
      setDisplayText(prev => 
        fullText.split('')
          .map((char, index) => {
            // Reveal characters much faster (increased step from 1/3 to 1.5)
            if (index < iteration) return char;
            if (char === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      if (iteration >= fullText.length) {
        clearInterval(interval);
        setDisplayText(fullText); // Ensure final state is clean
      }
      iteration += 1.5; 
    }, 20);
    
    return () => clearInterval(interval);
  }, [isStealth]);

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
      {/* Decorative background blobs with subtle transitions */}
      <div className={`absolute top-1/4 -left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse transition-colors duration-1000 ${isStealth ? 'bg-green-600' : 'bg-blue-600'}`}></div>
      <div className={`absolute bottom-1/4 -right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700 transition-colors duration-1000 ${isStealth ? 'bg-green-900' : 'bg-emerald-600'}`}></div>

      <div className="max-w-4xl text-center z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight min-h-[1.2em] font-mono transition-opacity duration-300">
          {displayText.split(' ').map((word, i) => (
            <span key={i} className={word === 'Intelligence' ? (isStealth ? 'text-green-500' : 'text-blue-500') : ''}>
              {word}{' '}
            </span>
          ))}
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Hi, I'm <span className={`font-semibold transition-colors duration-500 ${isStealth ? 'text-green-400' : 'text-white'}`}>Mohammed Zakie Sayyed</span>. I develop AI-driven solutions to detect threats and automate defense in complex network environments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#projects"
            className={`px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:scale-105 active:scale-95 ${
              isStealth 
                ? 'bg-green-600 text-black shadow-green-600/20' 
                : 'bg-blue-600 text-white shadow-blue-600/20 hover:bg-blue-500'
            }`}
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 glass-panel text-white rounded-xl font-bold hover:bg-white/10 transition-all border border-white/5 active:scale-95"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
