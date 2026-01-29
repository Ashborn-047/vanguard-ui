import React from 'react';
import { Terminal, Boxes, BookOpen } from 'lucide-react';
import type { Theme } from '../styles/themes';

export const DocumentationPage: React.FC<{ theme: Theme }> = ({ theme }) => (
    <div className="py-20 px-6 max-w-4xl mx-auto animate-in fade-in duration-500 min-h-screen">
        <h1 className={`text-4xl md:text-5xl font-black mb-8 ${theme.text}`}>Documentation</h1>
        <div className="space-y-12">
            <section>
                <h2 className={`text-2xl font-bold mb-4 ${theme.text}`}>Getting Started</h2>
                <p className={`mb-4 opacity-70 ${theme.text}`}>
                    Vanguard UI is a collection of theme-aware reusable components.
                    Unlike traditional UI libraries, Vanguard focus on "Aesthetic States" - allowing your UI to shift between
                    Minimalism, Neo-Brutalism, Glassmorphism, and more at the flip of a switch.
                </p>
                <div className={`p-4 rounded-lg font-mono text-sm ${theme.card} bg-black/5 opacity-80`}>
                    npm install lucide-react tailwind-merge clsx
                </div>
            </section>

            <section>
                <h2 className={`text-2xl font-bold mb-4 ${theme.text}`}>Architecture</h2>
                <p className={`mb-4 opacity-70 ${theme.text}`}>
                    Each component is built with <code className="bg-black/10 px-1 rounded">tailwind-merge</code> and <code className="bg-black/10 px-1 rounded">clsx</code> to handle dynamic styling.
                    By passing a <code className="bg-black/10 px-1 rounded">theme</code> object, you control the entire look and feel of the component.
                </p>
            </section>

            <section>
                <h2 className={`text-2xl font-bold mb-4 ${theme.text}`}>Aesthetics over Logic</h2>
                <p className={`mb-4 opacity-70 ${theme.text}`}>
                    We prioritize visual impact. While the components are fully functional, they are designed to be "Copy-Paste" ready,
                    letting you tweak the internal Tailwind classes to fit your specific vision.
                </p>
            </section>
        </div>
    </div>
);

export const IntegrationPage: React.FC<{ theme: Theme }> = ({ theme }) => {
    const [pkgManager, setPkgManager] = React.useState('npm');

    const commands: Record<string, string> = {
        npm: 'npm install lucide-react clsx tailwind-merge framer-motion',
        pnpm: 'pnpm add lucide-react clsx tailwind-merge framer-motion',
        bun: 'bun add lucide-react clsx tailwind-merge framer-motion',
        yarn: 'yarn add lucide-react clsx tailwind-merge framer-motion'
    };

    return (
        <div className="py-20 px-6 max-w-4xl mx-auto animate-in fade-in duration-700 min-h-screen">
            <div className="mb-16">
                <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>Integration</h1>
                <p className={`text-xl opacity-60 font-medium ${theme.text}`}>Standardize your workflow across any environment.</p>
            </div>

            <div className="space-y-12">
                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-current opacity-20 ${theme.text}`}>
                            <Terminal size={20} />
                        </div>
                        <h3 className={`text-2xl font-bold ${theme.text}`}>1. Install Core Dependencies</h3>
                    </div>

                    <div className={`rounded-2xl border border-gray-200/10 overflow-hidden ${theme.card}`}>
                        <div className="flex border-b border-gray-200/10 bg-black/5">
                            {['npm', 'pnpm', 'bun', 'yarn'].map((m) => (
                                <button
                                    key={m}
                                    onClick={() => setPkgManager(m)}
                                    className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all ${pkgManager === m
                                            ? `bg-indigo-500 text-white`
                                            : `opacity-40 hover:opacity-100 ${theme.text}`
                                        }`}
                                >
                                    {m}
                                </button>
                            ))}
                        </div>
                        <div className="p-6 bg-black/90 relative group">
                            <code className="text-indigo-300 font-mono text-sm">{commands[pkgManager]}</code>
                            <button
                                onClick={() => navigator.clipboard.writeText(commands[pkgManager])}
                                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg text-white"
                            >
                                <Boxes size={16} />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-current opacity-20 ${theme.text}`}>
                            <Boxes size={20} />
                        </div>
                        <h3 className={`text-2xl font-bold ${theme.text}`}>2. Utility Configuration</h3>
                    </div>
                    <p className={`opacity-60 font-medium ${theme.text}`}>Create a helper to merge tailwind classes effectively.</p>
                    <div className="bg-black/90 p-6 rounded-2xl border border-gray-200/10">
                        <pre className="text-indigo-100 text-sm font-mono overflow-x-auto">
                            {`// lib/utils.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`}
                        </pre>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-current opacity-20 ${theme.text}`}>
                            <BookOpen size={20} />
                        </div>
                        <h3 className={`text-2xl font-bold ${theme.text}`}>3. Implementation</h3>
                    </div>
                    <p className={`opacity-60 font-medium ${theme.text}`}>Import your chosen aesthetic and start building.</p>
                    <div className="bg-black/90 p-6 rounded-2xl border border-gray-200/10">
                        <pre className="text-indigo-100 text-sm font-mono overflow-x-auto">
                            {`import { themes } from './styles/themes';
import { Button } from './components/ui/Button';

export default function App() {
  return <Button theme={themes.neoBrutalism}>Vanguard UI</Button>;
}`}
                        </pre>
                    </div>
                </section>
            </div>
        </div>
    );
};
