
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isStealth: boolean;
  setIsStealth: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isStealth, setIsStealth }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-panel py-4 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold transition-colors ${isStealth ? 'text-green-500' : 'bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent'}`}>
          ZS{isStealth ? '_' : '.'}
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${isStealth ? 'text-green-800 hover:text-green-400' : 'text-gray-400 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={() => setIsStealth(!isStealth)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold tracking-tighter uppercase transition-all ${
              isStealth 
                ? 'bg-green-500/10 border-green-500 text-green-500' 
                : 'bg-white/5 border-white/10 text-gray-400 hover:border-blue-500 hover:text-blue-500'
            }`}
          >
            {isStealth ? '🔐 Stealth On' : '🔓 Safe Mode'}
          </button>
        </div>

        <button className="md:hidden text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
