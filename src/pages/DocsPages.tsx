import React from 'react';
import { Terminal, Boxes, Settings2, Palette, Copy, Check, ChevronRight } from 'lucide-react';
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

// Helper component for code blocks with copy functionality
const CodeBlock: React.FC<{ code: string; label?: string; theme: Theme }> = ({ code, label, theme }) => {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <div className={`rounded-2xl border border-gray-200/10 overflow-hidden ${theme.card}`}>
            <div className="p-5 bg-black/90 relative group">
                <div className="flex flex-col gap-1.5">
                    {label && <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{label}</span>}
                    <pre className="text-indigo-100 font-mono text-sm overflow-x-auto whitespace-pre-wrap">{code}</pre>
                </div>
                <button
                    onClick={handleCopy}
                    className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-lg text-white"
                >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
            </div>
        </div>
    );
};

// Sidebar navigation items
const sidebarItems = [
    {
        title: 'Getting Started',
        items: [
            { id: 'introduction', label: 'Introduction' },
            { id: 'installation', label: 'Installation', active: true },
        ]
    },
    {
        title: 'Core Concepts',
        items: [
            { id: 'themes', label: 'Themes & Aesthetics' },
            { id: 'utilities', label: 'Utility Functions' },
        ]
    },
    {
        title: 'Components',
        items: [
            { id: 'button', label: 'Button' },
            { id: 'card', label: 'Card' },
            { id: 'input', label: 'Input' },
            { id: 'badge', label: 'Badge' },
            { id: 'more', label: '+ 30 more...' },
        ]
    }
];

export const IntegrationPage: React.FC<{ theme: Theme }> = ({ theme }) => {
    const [pkgManager, setPkgManager] = React.useState('npm');
    const [activeSection, setActiveSection] = React.useState('installation');

    const cliCommands: Record<string, string> = {
        npm: 'npx vanguard-ui',
        pnpm: 'pnpm dlx vanguard-ui',
        bun: 'bunx vanguard-ui',
        yarn: 'yarn dlx vanguard-ui'
    };

    const initCommands: Record<string, string> = {
        npm: 'npx vanguard-ui init',
        pnpm: 'pnpm dlx vanguard-ui init',
        bun: 'bunx vanguard-ui init',
        yarn: 'yarn dlx vanguard-ui init'
    };

    const addCommands: Record<string, string> = {
        npm: 'npx vanguard-ui add [component-name]',
        pnpm: 'pnpm dlx vanguard-ui add [component-name]',
        bun: 'bunx vanguard-ui add [component-name]',
        yarn: 'yarn dlx vanguard-ui add [component-name]'
    };

    const depsCommands: Record<string, string> = {
        npm: 'npm install lucide-react clsx tailwind-merge framer-motion',
        pnpm: 'pnpm add lucide-react clsx tailwind-merge framer-motion',
        bun: 'bun add lucide-react clsx tailwind-merge framer-motion',
        yarn: 'yarn add lucide-react clsx tailwind-merge framer-motion'
    };

    const PkgManagerTabs = () => (
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
    );

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className={`w-64 shrink-0 border-r border-gray-200/10 p-6 hidden lg:block sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto`}>
                <nav className="space-y-8">
                    {sidebarItems.map((section) => (
                        <div key={section.title}>
                            <h4 className={`text-xs font-black uppercase tracking-widest mb-3 opacity-40 ${theme.text}`}>{section.title}</h4>
                            <ul className="space-y-1">
                                {section.items.map((item) => (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => setActiveSection(item.id)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${activeSection === item.id || item.active
                                                ? `bg-indigo-500/10 text-indigo-500 font-bold`
                                                : `opacity-60 hover:opacity-100 hover:bg-black/5 ${theme.text}`
                                                }`}
                                        >
                                            <ChevronRight size={14} className={activeSection === item.id || item.active ? 'opacity-100' : 'opacity-0'} />
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 py-16 px-6 lg:px-12 max-w-4xl animate-in fade-in duration-700">
                <div className="mb-12">
                    <p className={`text-xs uppercase tracking-widest opacity-40 mb-3 ${theme.text}`}>Guides</p>
                    <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>Installation</h1>
                    <p className={`text-xl opacity-60 font-medium ${theme.text}`}>The fastest way to get started is using our CLI to set up your design system.</p>
                </div>

                <div className="space-y-16">
                    {/* CLI Installation */}
                    <section className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-current opacity-20 ${theme.text}`}>
                                <Terminal size={20} />
                            </div>
                            <h3 className={`text-2xl font-bold ${theme.text}`}>1. Install CLI</h3>
                        </div>
                        <p className={`opacity-60 font-medium ${theme.text}`}>Install the Vanguard CLI using your preferred package manager.</p>
                        <div className={`rounded-2xl border border-gray-200/10 overflow-hidden ${theme.card}`}>
                            <PkgManagerTabs />
                            <div className="p-5 bg-black/90 relative group">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Command: Install CLI</span>
                                    <code className="text-indigo-300 font-mono text-sm">{cliCommands[pkgManager]}</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Initialize Project */}
                    <section className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-current opacity-20 ${theme.text}`}>
                                <Settings2 size={20} />
                            </div>
                            <h3 className={`text-2xl font-bold ${theme.text}`}>2. Initialize Project</h3>
                        </div>
                        <p className={`opacity-60 font-medium ${theme.text}`}>Setup your project's config, global CSS, and theme-system variables.</p>
                        <div className={`rounded-2xl border border-gray-200/10 overflow-hidden ${theme.card}`}>
                            <PkgManagerTabs />
                            <div className="p-5 bg-black/90 relative group">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Command: Init</span>
                                    <code className="text-indigo-300 font-mono text-sm">{initCommands[pkgManager]}</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Add Components */}
                    <section className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-current opacity-20 ${theme.text}`}>
                                <Boxes size={20} />
                            </div>
                            <h3 className={`text-2xl font-bold ${theme.text}`}>3. Add Components</h3>
                        </div>
                        <p className={`opacity-60 font-medium ${theme.text}`}>Start by adding themed, reality-aware components directly into your codebase.</p>
                        <div className={`rounded-2xl border border-gray-200/10 overflow-hidden ${theme.card}`}>
                            <PkgManagerTabs />
                            <div className="p-5 bg-black/90 relative group">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Command: Add Component</span>
                                    <code className="text-indigo-300 font-mono text-sm">{addCommands[pkgManager]}</code>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Manual Installation */}
                    <div className={`h-px w-full bg-gray-200/10 my-12`} />
                    <h2 className={`text-3xl font-black ${theme.text}`}>Manual Installation</h2>
                    <p className={`opacity-60 font-medium ${theme.text} -mt-4`}>If you prefer full control, follow these steps to integrate Vanguard into your existing project.</p>

                    {/* 1. Install Dependencies */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 font-bold text-sm ${theme.text}`}>1</div>
                            <h4 className={`text-lg font-bold ${theme.text}`}>Install Dependencies</h4>
                        </div>
                        <CodeBlock theme={theme} label="Command: Install Packages" code={depsCommands[pkgManager]} />
                    </section>

                    {/* 2. Setup Path Aliases */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 font-bold text-sm ${theme.text}`}>2</div>
                            <h4 className={`text-lg font-bold ${theme.text}`}>Setup Path Aliases</h4>
                        </div>
                        <p className={`opacity-60 font-medium ${theme.text}`}>Point your project's imports to <code className="bg-black/10 px-1 rounded">@/</code> for cleaner code.</p>
                        <CodeBlock theme={theme} label="Config: vite.config.ts" code={`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`} />
                    </section>

                    {/* 3. Tailwind CSS / PostCSS Configuration */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 font-bold text-sm ${theme.text}`}>3</div>
                            <h4 className={`text-lg font-bold ${theme.text}`}>Tailwind CSS / PostCSS Configuration</h4>
                        </div>
                        <p className={`opacity-60 font-medium ${theme.text}`}>Ensure your <code className="bg-black/10 px-1 rounded">postcss.config.js</code> and CSS entry point are correct.</p>
                        <CodeBlock theme={theme} label="Config: postcss.config.js" code={`export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}`} />
                        <CodeBlock theme={theme} label="Config: src/index.css" code={`@import "tailwindcss";

@layer base {
  body {
    /* your base theme styles */
  }
}`} />
                    </section>

                    {/* 4. Create Utility Function */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 font-bold text-sm ${theme.text}`}>4</div>
                            <h4 className={`text-lg font-bold ${theme.text}`}>Create Utility Function</h4>
                        </div>
                        <p className={`opacity-60 font-medium ${theme.text}`}>Create a helper to merge Tailwind classes effectively.</p>
                        <CodeBlock theme={theme} label="Config: src/lib/utils.ts" code={`import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`} />
                    </section>

                    {/* 5. Usage */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 font-bold text-sm ${theme.text}`}>5</div>
                            <h4 className={`text-lg font-bold ${theme.text}`}>Usage</h4>
                        </div>
                        <p className={`opacity-60 font-medium ${theme.text}`}>Import components, pass a theme, and build something amazing.</p>
                        <CodeBlock theme={theme} label="Usage: App.tsx" code={`import { themes } from '@/styles/themes';
import { Button } from '@/components/ui/Button';

export default function App() {
  return <Button theme={themes.neoBrutalism}>Vanguard UI</Button>;
}`} />
                    </section>

                    {/* How to use CLI Assets */}
                    <section className={`p-8 rounded-3xl ${theme.card} space-y-4`}>
                        <div className="flex items-center gap-2">
                            <Palette size={20} className="opacity-50" />
                            <h4 className={`font-bold ${theme.text}`}>How to use CLI Assets</h4>
                        </div>
                        <p className={`text-sm opacity-60 ${theme.text}`}>
                            Our components often use pre-built styles defined in CSS like the <code className="bg-black/10 px-1 rounded">Slider</code> or <code className="bg-black/10 px-1 rounded">TactileKnob</code>.
                        </p>
                        <ul className={`list-disc list-inside text-sm opacity-60 space-y-1 ${theme.text}`}>
                            <li><strong>Copy the Code:</strong> Go to the component preview and copy the entire component file.</li>
                            <li><strong>Install Deps:</strong> Run the "Install" button to see which additional packages you might need.</li>
                            <li><strong>Add to Project:</strong> Paste into your <code className="bg-black/10 px-1 rounded">components/ui</code> directory.</li>
                        </ul>
                    </section>

                    {/* Tip callout */}
                    <section className={`p-6 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5`}>
                        <p className={`text-sm ${theme.text}`}>
                            <strong>💡 Pro Tip:</strong> The components automatically adapt to your <code className="bg-black/10 px-1 rounded">theme</code> object. Switch between 6 design realities instantly by changing the theme prop!
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
};
