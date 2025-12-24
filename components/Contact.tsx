
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <span className="text-blue-500">amazing</span> together.</h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email me at</p>
                <a href={`mailto:${PORTFOLIO_DATA.email}`} className="text-lg font-bold hover:text-blue-400 transition-colors">{PORTFOLIO_DATA.email}</a>
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <a href={PORTFOLIO_DATA.socials.github} target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            <a href={PORTFOLIO_DATA.socials.linkedin} target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Your Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Message</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"></textarea>
            </div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with Gemini & React.</p>
      </footer>
    </section>
  );
};

export default Contact;
