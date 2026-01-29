import { useState, useEffect } from 'react';
import { LayoutGrid, Palette, ArrowRight } from 'lucide-react';
import type { Theme } from './styles/themes';
import { themes } from './styles/themes';
import { LandingPage } from './pages/LandingPage';
import { ContextPage } from './pages/ContextPage';
import { LibraryPage } from './pages/LibraryPage';
import { DocumentationPage, IntegrationPage } from './pages/DocsPages';

const Footer = ({ theme, setView }: { theme: Theme; setView: (v: string) => void }) => (
  <footer className={`py-20 px-6 border-t border-gray-200/10 ${theme.footer}`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="col-span-1 md:col-span-5 space-y-6">
        <h3 className={`text-2xl font-black flex items-center gap-3 ${theme.text}`}>
          <LayoutGrid size={28} className="text-indigo-500" /> Vanguard
        </h3>
        <p className={`text-lg opacity-60 max-w-sm leading-relaxed ${theme.text}`}>
          The ultimate library for theme-driven interfaces. Switch design realities at runtime and build products that feel alive.
        </p>
        <div className="flex gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`w-10 h-10 rounded-full border border-current opacity-20 flex items-center justify-center hover:opacity-60 cursor-pointer transition-opacity ${theme.text}`}>
              <span className="text-[10px] font-black underline">S{i}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 space-y-6">
        <h4 className={`text-sm font-black uppercase tracking-widest ${theme.text}`}>Ecosystem</h4>
        <ul className={`space-y-3 text-sm opacity-60 font-medium ${theme.text}`}>
          <li><button onClick={() => setView('library')} className="hover:opacity-100 transition-opacity">Component Lab</button></li>
          <li><button onClick={() => setView('context')} className="hover:opacity-100 transition-opacity">Philosophy</button></li>
          <li><button onClick={() => setView('landing')} className="hover:opacity-100 transition-opacity">Aesthetics</button></li>
        </ul>
      </div>

      <div className="col-span-1 md:col-span-2 space-y-6">
        <h4 className={`text-sm font-black uppercase tracking-widest ${theme.text}`}>Resources</h4>
        <ul className={`space-y-3 text-sm opacity-60 font-medium ${theme.text}`}>
          <li><button onClick={() => setView('documentation')} className="hover:opacity-100 transition-opacity">Documentation</button></li>
          <li><button onClick={() => setView('integration')} className="hover:opacity-100 transition-opacity">Integration</button></li>
          <li><span className="cursor-not-allowed">Changelog</span></li>
        </ul>
      </div>

      <div className="col-span-1 md:col-span-3 space-y-6">
        <h4 className={`text-sm font-black uppercase tracking-widest ${theme.text}`}>Newsletter</h4>
        <p className={`text-sm opacity-60 ${theme.text}`}>Get the latest design insights.</p>
        <div className="flex gap-2">
          <input type="text" placeholder="your@email.com" className={`flex-1 px-4 py-2 rounded-lg text-sm bg-black/5 border border-current opacity-20 focus:opacity-40 outline-none transition-all ${theme.text}`} />
          <button className={`p-2 rounded-lg bg-indigo-500 text-white hover:brightness-110 active:scale-95 transition-all`}><ArrowRight size={18} /></button>
        </div>
      </div>
    </div>
    <div className={`max-w-7xl mx-auto mt-20 pt-8 border-t border-current opacity-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest ${theme.text}`}>
      <div className="flex items-center gap-6">
        <span>© 2026 Vanguard UI Inc.</span>
        <span className="opacity-40">Privacy</span>
        <span className="opacity-40">Terms</span>
      </div>
      <span className="opacity-60 flex items-center gap-2">
        Built for the future <span className="text-red-500 leading-none text-base">✦</span>
      </span>
    </div>
  </footer>
);

export default function App() {
  const [currentThemeKey, setCurrentThemeKey] = useState('minimalism');
  const [currentView, setCurrentView] = useState('landing');

  const t = themes[currentThemeKey];

  const handleThemeSelect = (themeKey: string) => {
    setCurrentThemeKey(themeKey);
    setCurrentView('library');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className={`
      ${currentView === 'library' ? 'h-screen overflow-hidden' : 'min-h-screen'} 
      ${currentThemeKey}
      transition-colors duration-500 ${t.bg} font-sans selection:bg-indigo-300 selection:text-indigo-900 flex flex-col overflow-x-hidden
    `}>

      {/* Global Header */}
      <header className={`h-16 border-b border-gray-200/20 flex items-center px-6 justify-between shrink-0 backdrop-blur-sm z-50 sticky top-0`}>
        <div className="flex items-center gap-6">
          <h1 className={`text-xl font-black tracking-tight flex items-center gap-2 cursor-pointer ${t.text}`} onClick={() => setCurrentView('landing')}>
            <LayoutGrid className="w-6 h-6" />
            Vanguard
          </h1>
          <nav className="hidden md:flex gap-4">
            <button onClick={() => setCurrentView('landing')} className={`text-sm font-medium transition-opacity hover:opacity-100 ${currentView === 'landing' ? `opacity-100 font-bold ${t.text}` : `opacity-60 ${t.text}`}`}>Home</button>
            <button onClick={() => setCurrentView('context')} className={`text-sm font-medium transition-opacity hover:opacity-100 ${currentView === 'context' ? `opacity-100 font-bold ${t.text}` : `opacity-60 ${t.text}`}`}>Philosophy</button>
            <button onClick={() => setCurrentView('library')} className={`text-sm font-medium transition-opacity hover:opacity-100 ${currentView === 'library' ? `opacity-100 font-bold ${t.text}` : `opacity-60 ${t.text}`}`}>Library</button>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {currentView === 'library' && (
            <button
              onClick={() => setCurrentView('landing')}
              className={`text-xs font-bold px-4 py-2 rounded-full border border-current flex items-center gap-2 hover:opacity-80 transition-opacity ${t.text}`}
            >
              <Palette size={14} />
              Change Aesthetic
            </button>
          )}
        </div>
      </header>

      {/* Main Content Router */}
      <div className="flex-1 flex flex-col relative min-h-0">
        {currentView === 'landing' && <LandingPage currentThemeData={t} onSelectTheme={handleThemeSelect} setView={setCurrentView} />}
        {currentView === 'context' && <ContextPage theme={t} />}
        {currentView === 'library' && <LibraryPage theme={t} currentThemeKey={currentThemeKey} />}
        {currentView === 'documentation' && <DocumentationPage theme={t} />}
        {currentView === 'integration' && <IntegrationPage theme={t} />}

        {currentView !== 'library' && <Footer theme={t} setView={setCurrentView} />}
      </div>

      {currentThemeKey === 'liquidGlass' && (
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
        </div>
      )}
    </div>
  );
}
