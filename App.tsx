
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIChatbot from './components/AIChatbot';
import Terminal from './components/Terminal';
import DeepfakeDemo from './components/DeepfakeDemo';
import ResumeTailor from './components/ResumeTailor';
import TechInsights from './components/TechInsights';
import GithubActivity from './components/GithubActivity';

const App: React.FC = () => {
  const [isStealth, setIsStealth] = useState(false);

  useEffect(() => {
    if (isStealth) {
      document.body.classList.add('stealth-mode');
    } else {
      document.body.classList.remove('stealth-mode');
    }
  }, [isStealth]);

  return (
    <div className={`relative min-h-screen ${isStealth ? 'matrix-bg' : ''}`}>
      <Navbar isStealth={isStealth} setIsStealth={setIsStealth} />
      
      <main className="space-y-0">
        <Hero isStealth={isStealth} />
        
        <div className="max-w-7xl mx-auto px-6">
          <Terminal isStealth={isStealth} setIsStealth={setIsStealth} />
        </div>

        <Projects />
        
        <div className="bg-gray-950/20 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <DeepfakeDemo />
          </div>
        </div>

        <Skills />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
          <GithubActivity />
          <TechInsights />
        </div>

        <ResumeTailor />
        <Experience />
        <Contact />
      </main>

      <AIChatbot />
    </div>
  );
};

export default App;
