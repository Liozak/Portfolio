
import React, { useState } from 'react';

const DeepfakeDemo: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const runAnalysis = async () => {
    if (!image) return;
    setLoading(true);
    
    // Simulated processing time for "neural network scanning"
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const reports = [
      "No significant facial artifacts detected. However, localized pixel noise suggests minor compression. Recommendation: Pass through spectral filter.",
      "Detected anomalies in the ocular region. Blink-rate patterns (simulated) show 15% inconsistency with natural human behavior. Potential manipulation detected.",
      "Analysis complete. The image shows high consistency across the frequency domain. Surface-level artifacts are consistent with standard JPEG compression."
    ];

    setAnalysis(reports[Math.floor(Math.random() * reports.length)] + " (Demo Simulation Mode)");
    setLoading(false);
  };

  return (
    <div className="glass-panel p-8 rounded-3xl border border-white/5">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">Deepfake Detection Lab</h2>
          <p className="text-gray-400 mb-8 text-sm">
            <span className="text-emerald-500 font-bold">FREE VERSION:</span> Upload an image to see how the analysis report would look. This demo uses pre-defined technical logic to simulate the Project Aegis interface.
          </p>
          
          <div className="space-y-6">
            <label className="block w-full cursor-pointer group">
              <div className="aspect-video rounded-2xl bg-white/5 border-2 border-dashed border-white/10 group-hover:border-blue-500/50 transition-all flex items-center justify-center overflow-hidden">
                {image ? (
                  <img src={image} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-6">
                    <svg className="w-12 h-12 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-500 font-medium">Click to upload sample image</span>
                  </div>
                )}
              </div>
              <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
            </label>
            
            <button 
              onClick={runAnalysis}
              disabled={!image || loading}
              className="w-full py-4 bg-emerald-600 rounded-xl font-bold text-white disabled:opacity-50 transition-all active:scale-95 shadow-lg shadow-emerald-900/20"
            >
              {loading ? 'Scanning Pixels...' : 'Run Simulation'}
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col">
          <div className="flex-grow glass-panel bg-black/20 rounded-2xl p-6 relative overflow-hidden">
            <div className="scan-line"></div>
            <h3 className="text-xs font-black text-emerald-400 uppercase tracking-widest mb-4">Diagnostic Report <span className="opacity-40">(SIMULATED)</span></h3>
            {analysis ? (
              <p className="text-emerald-500/80 text-sm leading-relaxed whitespace-pre-line font-mono">
                {analysis}
              </p>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-600 italic text-sm">
                Awaiting input signal...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeepfakeDemo;
