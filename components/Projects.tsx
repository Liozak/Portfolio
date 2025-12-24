
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">Technical Projects</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Academic research and self-driven development projects focused on real-world utility and technical depth.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {PORTFOLIO_DATA.projects.map((project) => (
          <div key={project.id} className="group glass-panel rounded-3xl overflow-hidden flex flex-col transition-all hover:border-blue-500/30">
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale-[70%] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-60"></div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              
              <div className="space-y-4 text-sm leading-relaxed mb-8 flex-grow">
                <div>
                  <p className="text-blue-400 font-semibold mb-1 uppercase text-[10px] tracking-widest">The Problem</p>
                  <p className="text-gray-400">{project.description}</p>
                </div>
                
                <div>
                  <p className="text-emerald-400 font-semibold mb-1 uppercase text-[10px] tracking-widest">Technical Approach</p>
                  <ul className="text-gray-500 list-disc list-inside space-y-1">
                    {project.id === "1" && (
                      <>
                        <li>Analyzed 10k+ URLs for lexical features and domain reputation.</li>
                        <li>Implemented Random Forest and SVM classifiers for 97.3% accuracy.</li>
                      </>
                    )}
                    {project.id === "2" && (
                      <>
                        <li>Used CNN-based architectures to detect facial manipulation artifacts.</li>
                        <li>Built a real-time reporting dashboard with automated alerting triggers.</li>
                      </>
                    )}
                    {project.id === "3" && (
                      <>
                        <li>Orchestrated vector embeddings for multi-modal document retrieval.</li>
                        <li>Integrated Gemini API for context-aware summarization and analysis.</li>
                      </>
                    )}
                    {project.id === "4" && (
                      <>
                        <li>Simulated network attack vectors (Port-scan, Brute-force) via Python scripts.</li>
                        <li>Designed automated response rules to mitigate threats within 5 seconds.</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
              
              <div className="pt-6 border-t border-white/5 mt-auto flex flex-wrap gap-6">
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors"
                >
                  Technical Docs
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                  >
                    View on GitHub
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
