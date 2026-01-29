import { ArrowRight, Palette } from 'lucide-react';
import type { Theme } from '../styles/themes';
import { themes } from '../styles/themes';

interface LandingPageProps {
    currentThemeData: Theme;
    onSelectTheme: (themeKey: string) => void;
    setView: (view: string) => void;
}

const ThemePreviewCard = ({ theme, onClick }: { theme: Theme; onClick: () => void }) => (
    <div onClick={onClick} className={`relative group cursor-pointer overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${theme.name === 'Neo-Brutalism' ? 'border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'border border-gray-200/50 shadow-lg'}`}>
        <div className={`h-80 p-6 flex flex-col gap-4 ${theme.bg}`}>
            <div className="flex justify-between items-start mb-2">
                <h3 className={`text-2xl font-black ${theme.text}`}>{theme.name}</h3>
                <div className={`p-2 rounded-full ${theme.secondaryButton}`}><ArrowRight size={16} /></div>
            </div>
            <div className="space-y-4 pointer-events-none select-none opacity-90 group-hover:opacity-100 transition-opacity">
                <div className={`p-4 ${theme.card} flex items-center gap-3`}>
                    <div className={`w-8 h-8 rounded-full ${theme.accent}`} />
                    <div className="space-y-2 flex-1">
                        <div className={`h-2 w-2/3 rounded-full opacity-30 bg-current ${theme.text}`} />
                        <div className={`h-2 w-1/3 rounded-full opacity-20 bg-current ${theme.text}`} />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className={`px-4 py-2 text-xs flex items-center justify-center ${theme.button}`}>Action</div>
                    <div className={`px-4 py-2 text-xs flex items-center justify-center ${theme.secondaryButton}`}>Cancel</div>
                </div>
                <div className={`w-full h-10 ${theme.input} flex items-center px-3 opacity-80`}>
                    <div className={`h-1.5 w-1/2 rounded-full opacity-30 bg-current ${theme.text}`} />
                </div>
            </div>
            <div className="mt-auto"><p className={`text-sm opacity-60 ${theme.text} line-clamp-2`}>{theme.description}</p></div>
        </div>
    </div>
);

export const LandingPage: React.FC<LandingPageProps> = ({ currentThemeData, onSelectTheme, setView }) => (
    <div className="animate-in slide-in-from-bottom-4 duration-700 min-h-screen flex flex-col pt-0 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <section className="relative py-10 md:py-16 px-6 text-center max-w-5xl mx-auto z-10">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-8 border backdrop-blur-md transition-transform hover:scale-105 cursor-default ${currentThemeData.badge}`}>
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                </span>
                Vanguard v2.0
            </div>

            <h1 className={`text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] drop-shadow-lg ${currentThemeData.text}`}>
                Design that <br />
                <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
                    style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}
                >
                    Adapts to Reality.
                </span>
            </h1>

            <p className={`text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed opacity-60 ${currentThemeData.text}`}>
                Explore six distinct design philosophies. From raw brutalism to futuristic liquid glass,
                Vanguard UI redefines how components respond to aesthetic shifting.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                    onClick={() => {
                        const el = document.getElementById('themes');
                        el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-8 py-4 rounded-xl font-bold transition-all hover:shadow-2xl hover:-translate-y-1 ${currentThemeData.button}`}
                >
                    Explore Components
                </button>
                <button
                    onClick={() => setView('context')}
                    className={`px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 ${currentThemeData.secondaryButton}`}
                >
                    Design Philosophy
                </button>
            </div>
        </section>

        <section id="themes" className="relative py-24 px-6 max-w-7xl mx-auto w-full flex-1 z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="space-y-2">
                    <h2 className={`text-4xl font-black tracking-tight ${currentThemeData.text}`}>Select an Aesthetic</h2>
                    <p className={`text-lg opacity-50 font-medium ${currentThemeData.text}`}>Each theme is a complete multi-token ecosystem.</p>
                </div>
                <div className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-current opacity-20 ${currentThemeData.text}`}>
                    <Palette size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">Multi-Aesthetic Engine</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {Object.entries(themes).map(([key, themeData]) => (
                    <ThemePreviewCard key={key} theme={themeData} onClick={() => onSelectTheme(key)} />
                ))}
            </div>
        </section>
    </div>
);
