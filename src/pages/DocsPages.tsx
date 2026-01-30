import React from 'react';
import { Terminal, Boxes, Settings2, Palette, Copy, Check, ChevronRight } from 'lucide-react';
import type { Theme } from '../styles/themes';
import { ThemeToggle1, ThemeToggle2, ThemeToggle3, ThemeToggle4, ThemeToggle5, ThemeToggle6 } from '../components/ui/ThemeToggle';

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
            { id: 'dark-light-mode', label: 'Dark & Light Mode' },
            { id: 'color-customization', label: 'Color Customization' },
            { id: 'utilities', label: 'Utility Functions' },
        ]
    },
    {
        title: 'Components',
        items: [
            { id: 'theme-switcher', label: 'Theme Switcher' },
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
    // Independent states for the 5 toggle buttons
    const [toggleStates, setToggleStates] = React.useState([false, false, false, false, false, false]);

    const handleToggle = (index: number) => {
        const newStates = [...toggleStates];
        newStates[index] = !newStates[index];
        setToggleStates(newStates);
    };

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

    const themeCommands: Record<string, string> = {
        npm: 'npx vanguard-ui theme --set glassmorphism',
        pnpm: 'pnpm dlx vanguard-ui theme --set glassmorphism',
        bun: 'bunx vanguard-ui theme --set glassmorphism',
        yarn: 'yarn dlx vanguard-ui theme --set glassmorphism'
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
                {/* Introduction Section */}
                {activeSection === 'introduction' && (
                    <>
                        <div className="mb-12">
                            <p className={`text-xs uppercase tracking-widest opacity-40 mb-3 ${theme.text}`}>Getting Started</p>
                            <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>Introduction</h1>
                            <p className={`text-xl opacity-60 font-medium ${theme.text}`}>Design systems that shift between realities. Welcome to Vanguard UI.</p>
                        </div>
                        <div className="space-y-12">
                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>What is Vanguard UI?</h2>
                                <p className={`opacity-70 leading-relaxed ${theme.text}`}>
                                    Vanguard UI is a theme-aware component library that lets you switch between 6 distinct design aesthetics at runtime.
                                    Unlike traditional UI libraries, we focus on <strong>"Aesthetic States"</strong> - allowing your entire interface to transform
                                    between Minimalism, Neo-Brutalism, Glassmorphism, Skeuomorphism, Claymorphism, and Liquid Glass.
                                </p>
                            </section>
                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>Philosophy</h2>
                                <p className={`opacity-70 leading-relaxed ${theme.text}`}>
                                    Every component is built with a <code className="bg-black/10 px-1 rounded">theme</code> prop.
                                    Pass any theme object, and the component instantly adapts its colors, shadows, borders, and animations.
                                </p>
                            </section>
                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>Key Features</h2>
                                <ul className={`space-y-3 opacity-70 ${theme.text}`}>
                                    <li className="flex items-start gap-3"><span className="text-indigo-500">✦</span> <span><strong>6 Design Aesthetics</strong> - Switch between Minimalism, Neo-Brutalism, Glassmorphism, Skeuomorphism, Claymorphism, and Liquid Glass</span></li>
                                    <li className="flex items-start gap-3"><span className="text-indigo-500">✦</span> <span><strong>44+ Components</strong> - Buttons, Cards, Inputs, Dialogs, Charts, and more</span></li>
                                    <li className="flex items-start gap-3"><span className="text-indigo-500">✦</span> <span><strong>Copy-Paste Ready</strong> - Drop components directly into your project</span></li>
                                    <li className="flex items-start gap-3"><span className="text-indigo-500">✦</span> <span><strong>Tailwind CSS</strong> - Built with Tailwind for maximum customization</span></li>
                                </ul>
                            </section>
                        </div>
                    </>
                )}

                {/* Themes Section */}
                {activeSection === 'themes' && (
                    <>
                        <div className="mb-12">
                            <p className={`text-xs uppercase tracking-widest opacity-40 mb-3 ${theme.text}`}>Core Concepts</p>
                            <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>Themes & Aesthetics</h1>
                            <p className={`text-xl opacity-60 font-medium ${theme.text}`}>Understand the 6 design philosophies that power Vanguard UI.</p>
                        </div>
                        <div className="space-y-12">
                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>Available Themes</h2>
                                <div className="grid gap-4">
                                    {[
                                        { name: 'minimalism', title: 'Minimalism', desc: 'Clean, content-first design with strict grids and heavy whitespace.' },
                                        { name: 'neoBrutalism', title: 'Neo-Brutalism', desc: 'Raw, high-contrast aesthetic with hard shadows and bold colors.' },
                                        { name: 'glassmorphism', title: 'Glassmorphism', desc: 'Frosted glass effect with blur, transparency, and vibrant backgrounds.' },
                                        { name: 'skeuomorphism', title: 'Skeuomorphism', desc: 'Tactile, realistic design mimicking real-world materials.' },
                                        { name: 'claymorphism', title: 'Claymorphism', desc: 'Soft, inflated 3D appearance with rounded shapes and inner shadows.' },
                                        { name: 'liquidGlass', title: 'Liquid Glass', desc: 'Ultra-modern with high refraction, mesh gradients, and specular highlights.' },
                                    ].map(t => (
                                        <div key={t.name} className={`p-4 rounded-xl ${theme.card}`}>
                                            <h3 className={`font-bold ${theme.text}`}>{t.title}</h3>
                                            <p className={`text-sm opacity-60 ${theme.text}`}>{t.desc}</p>
                                            <code className="text-xs bg-black/10 px-2 py-1 rounded mt-2 inline-block">{t.name}</code>
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>Using Themes</h2>
                                <CodeBlock theme={theme} label="Usage: themes.ts" code={`import { themes } from '@/styles/themes';

// Use a specific theme
const myTheme = themes.glassmorphism;

// Pass to components
<Button theme={myTheme}>Click Me</Button>
<Card theme={myTheme}>Content</Card>`} />
                            </section>
                        </div>
                    </>
                )}

                {/* Dark & Light Mode Section */}
                {activeSection === 'dark-light-mode' && (
                    <>
                        <div className="mb-12">
                            <p className={`text-xs uppercase tracking-widest opacity-40 mb-3 ${theme.text}`}>Core Concepts</p>
                            <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>Dark & Light Mode</h1>
                            <p className={`text-xl opacity-60 font-medium ${theme.text}`}>Every aesthetic supports both dark and light modes.</p>
                        </div>
                        <div className="space-y-12">
                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>Auto-Detect System Preference</h2>
                                <p className={`opacity-70 leading-relaxed ${theme.text}`}>
                                    Vanguard UI automatically detects your user's system preference and applies the appropriate mode.
                                    Users can still toggle manually, and their preference is saved to localStorage.
                                </p>
                                <CodeBlock theme={theme} label="System Preference Detection" code={`// Auto-detect system preference
const [isDarkMode, setIsDarkMode] = useState(() => {
  // Check localStorage first
  const saved = localStorage.getItem('vanguard-dark-mode');
  if (saved !== null) return saved === 'true';
  
  // Fall back to system preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
});`} />
                            </section>

                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>Using getTheme()</h2>
                                <p className={`opacity-70 leading-relaxed ${theme.text}`}>
                                    The <code className="bg-black/10 px-1 rounded">getTheme()</code> function returns the appropriate theme variant based on mode.
                                </p>
                                <CodeBlock theme={theme} label="getTheme API" code={`import { getTheme } from '@/styles/themes';

// Get theme with mode applied
const theme = getTheme('minimalism', 'dark');  // Returns dark minimalism
const theme = getTheme('minimalism', 'light'); // Returns light minimalism

// Special case: Liquid Glass (originally dark)
getTheme('liquidGlass', 'dark');  // Returns original dark
getTheme('liquidGlass', 'light'); // Returns frosted light variant`} />
                            </section>

                            <section className="space-y-4">
                                <h2 className={`text-xl font-bold ${theme.text}`}>Live Preview</h2>
                                <div className={`p-8 rounded-2xl ${theme.card} flex flex-col items-center gap-6`}>
                                    <p className={`text-sm opacity-60 mb-2 ${theme.text}`}>Click to toggle state:</p>
                                    <div className="flex flex-wrap gap-8 items-center justify-center p-4">
                                        <div className="flex flex-col items-center gap-3">
                                            <ThemeToggle1 isDark={toggleStates[0]} onToggle={() => handleToggle(0)} className="w-12 h-12 p-1" />
                                            <span className={`text-[10px] uppercase font-bold opacity-40 ${theme.text}`}>Yin-Yang</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-3">
                                            <ThemeToggle2 isDark={toggleStates[1]} onToggle={() => handleToggle(1)} className="w-12 h-12 p-3" />
                                            <span className={`text-[10px] uppercase font-bold opacity-40 ${theme.text}`}>Classic</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-3">
                                            <ThemeToggle3 isDark={toggleStates[2]} onToggle={() => handleToggle(2)} className="w-12 h-12 p-3" />
                                            <span className={`text-[10px] uppercase font-bold opacity-40 ${theme.text}`}>Eclipse</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-3">
                                            <ThemeToggle4 isDark={toggleStates[3]} onToggle={() => handleToggle(3)} className="w-12 h-12 p-3" />
                                            <span className={`text-[10px] uppercase font-bold opacity-40 ${theme.text}`}>Bulb</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-3">
                                            <ThemeToggle5 isDark={toggleStates[4]} onToggle={() => handleToggle(4)} className="w-12 h-12 p-3" />
                                            <span className={`text-[10px] uppercase font-bold opacity-40 ${theme.text}`}>Simple</span>
                                        </div>
                                        <div className="flex flex-col items-center gap-3">
                                            <ThemeToggle6 isDark={toggleStates[5]} onToggle={() => handleToggle(5)} className="w-12 h-12 p-3" />
                                            <span className={`text-[10px] uppercase font-bold opacity-40 ${theme.text}`}>Yin Yang 2</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>Toggle Button Components</h2>
                                <p className={`opacity-70 leading-relaxed ${theme.text}`}>
                                    We provide 6 animated toggle button variants. Choose the one that fits your aesthetic.
                                </p>
                                <CodeBlock theme={theme} label="Installation" code={`npm install framer-motion  # Required for animations
npx vanguard-ui add theme-toggle`} />
                                <CodeBlock theme={theme} label="Available Toggles" code={`import { 
  ThemeToggle1,  // Yin-Yang rotating toggle
  ThemeToggle2,  // Classic sun/moon with rays 
  ThemeToggle3,  // Sun with circle rays
  ThemeToggle4,  // Lightbulb with filament
   ThemeToggle5,  // Simple eclipse/moon
  ThemeToggle6,  // Yin Yang 2 rotating toggle
} from '@/components/ui/ThemeToggle';

// Usage
<ThemeToggle2 
  isDark={isDarkMode} 
  onToggle={() => setIsDarkMode(!isDarkMode)}
  className="w-10 h-10 p-2"
/>`} />
                            </section>

                            <section className={`p-6 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5`}>
                                <p className={`text-sm ${theme.text}`}>
                                    <strong>💡 Tip:</strong> The toggle buttons use Framer Motion for smooth animations. Make sure to install it as a peer dependency.
                                </p>
                            </section>
                        </div>
                    </>
                )}

                {/* Color Customization Section */}
                {activeSection === 'color-customization' && (
                    <>
                        <div className="mb-12">
                            <p className={`text-xs uppercase tracking-widest opacity-40 mb-3 ${theme.text}`}>Core Concepts</p>
                            <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>Color Customization</h1>
                            <p className={`text-xl opacity-60 font-medium ${theme.text}`}>Define your own colors to match your brand identity.</p>
                        </div>
                        <div className="space-y-12">
                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>Custom Color Palette</h2>
                                <p className={`opacity-70 leading-relaxed ${theme.text}`}>
                                    Override the default theme colors with your own palette. Pass custom colors directly or use CSS variables.
                                </p>
                                <CodeBlock theme={theme} label="Custom Theme Colors" code={`// Create a custom theme with your brand colors
import { themes } from '@/styles/themes';

const myCustomTheme = {
  ...themes.minimalism,  // Start with a base theme
  
  // Override with your brand colors
  primaryButton: 'bg-[#FF6B35] hover:bg-[#E85A2A] text-white',
  secondaryButton: 'bg-[#2E4057] hover:bg-[#1E3047] text-white',
  accentButton: 'bg-[#4ECDC4] hover:bg-[#3DBDB5] text-white',
  
  // Customize card and input styles
  card: 'bg-white/90 border border-[#2E4057]/10 rounded-xl',
  input: 'bg-white border-2 border-[#2E4057]/20 focus:border-[#FF6B35]',
};

// Use your custom theme
<Button theme={myCustomTheme}>Custom Styled</Button>`} />
                            </section>

                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>CLI Color Configuration</h2>
                                <p className={`opacity-70 leading-relaxed ${theme.text}`}>
                                    Use the CLI to set up a custom color palette for your project.
                                </p>
                                <CodeBlock theme={theme} label="CLI: Configure Colors" code={`# Set primary brand color
npx vanguard-ui colors --primary "#FF6B35"

# Set accent color  
npx vanguard-ui colors --accent "#4ECDC4"

# Set multiple colors at once
npx vanguard-ui colors --primary "#FF6B35" --secondary "#2E4057" --accent "#4ECDC4"

# Generate a complete palette from a single color
npx vanguard-ui colors --generate "#FF6B35"`} />
                            </section>

                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>CSS Variables Approach</h2>
                                <p className={`opacity-70 leading-relaxed ${theme.text}`}>
                                    For maximum flexibility, use CSS custom properties to control colors globally.
                                </p>
                                <CodeBlock theme={theme} label="CSS Variables" code={`:root {
  /* Your brand colors */
  --color-primary: #FF6B35;
  --color-secondary: #2E4057;
  --color-accent: #4ECDC4;
  
  /* Derived colors (auto-generated or manual) */
  --color-primary-hover: #E85A2A;
  --color-primary-light: #FFE4D9;
}

/* Usage in components */
.custom-button {
  background-color: var(--color-primary);
}
.custom-button:hover {
  background-color: var(--color-primary-hover);
}`} />
                            </section>

                            <section className={`p-6 rounded-2xl border-l-4 border-indigo-500 bg-indigo-500/5`}>
                                <p className={`text-sm ${theme.text}`}>
                                    <strong>💡 Tip:</strong> When customizing colors, ensure sufficient contrast ratios for accessibility (WCAG 2.1 recommends 4.5:1 for normal text).
                                </p>
                            </section>
                        </div>
                    </>
                )}

                {/* Utilities Section */}
                {activeSection === 'utilities' && (
                    <>
                        <div className="mb-12">
                            <p className={`text-xs uppercase tracking-widest opacity-40 mb-3 ${theme.text}`}>Core Concepts</p>
                            <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>Utility Functions</h1>
                            <p className={`text-xl opacity-60 font-medium ${theme.text}`}>Helper functions that power Vanguard's dynamic styling.</p>
                        </div>
                        <div className="space-y-12">
                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>The cn() Function</h2>
                                <p className={`opacity-70 leading-relaxed ${theme.text}`}>
                                    The <code className="bg-black/10 px-1 rounded">cn()</code> utility merges Tailwind classes intelligently,
                                    handling conflicts and conditionals. It combines <code className="bg-black/10 px-1 rounded">clsx</code> and <code className="bg-black/10 px-1 rounded">tailwind-merge</code>.
                                </p>
                                <CodeBlock theme={theme} label="lib/utils.ts" code={`import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`} />
                            </section>
                            <section className="space-y-4">
                                <h2 className={`text-2xl font-bold ${theme.text}`}>Example Usage</h2>
                                <CodeBlock theme={theme} label="Example" code={`// Merge classes conditionally
cn('px-4 py-2', isActive && 'bg-blue-500', 'hover:opacity-80')

// Override conflicting classes
cn('bg-red-500', 'bg-blue-500') // Results in 'bg-blue-500'`} />
                            </section>
                        </div>
                    </>
                )}

                {/* Theme Switcher Component */}
                {activeSection === 'theme-switcher' && (
                    <>
                        <div className="mb-12">
                            <p className={`text-xs uppercase tracking-widest opacity-40 mb-3 ${theme.text}`}>Components</p>
                            <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>Theme Switcher</h1>
                            <p className={`text-xl opacity-60 font-medium ${theme.text}`}>Switch between 6 design aesthetics at runtime.</p>
                        </div>
                        <div className="space-y-8">
                            {/* Live Preview */}
                            <section className="space-y-4">
                                <h2 className={`text-xl font-bold ${theme.text}`}>Live Preview</h2>
                                <div className={`p-6 rounded-2xl ${theme.card}`}>
                                    <p className={`text-sm opacity-60 mb-4 ${theme.text}`}>Click any theme to see it applied:</p>
                                    <div className="flex flex-wrap gap-3">
                                        {[
                                            { key: 'minimalism', label: 'Minimalism', color: 'bg-gray-100 text-gray-900 border-gray-300' },
                                            { key: 'neoBrutalism', label: 'Neo-Brutalism', color: 'bg-[#FFE4A0] text-black border-2 border-black' },
                                            { key: 'glassmorphism', label: 'Glassmorphism', color: 'bg-white/20 backdrop-blur text-white border-white/30' },
                                            { key: 'skeuomorphism', label: 'Skeuomorphism', color: 'bg-[#e0e5ec] text-gray-700 shadow-md' },
                                            { key: 'claymorphism', label: 'Claymorphism', color: 'bg-white text-slate-700 shadow-lg' },
                                            { key: 'liquidGlass', label: 'Liquid Glass', color: 'bg-white/10 backdrop-blur-xl text-white border-white/20' },
                                        ].map(t => (
                                            <button
                                                key={t.key}
                                                className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all hover:scale-105 ${t.color}`}
                                            >
                                                {t.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <CodeBlock theme={theme} label="Installation" code={`npx vanguard-ui add theme-switcher`} />

                            <CodeBlock theme={theme} label="Usage" code={`import { useState } from 'react';
import { themes, type Theme } from '@/styles/themes';

const themeKeys = ['minimalism', 'neoBrutalism', 'glassmorphism', 
                   'skeuomorphism', 'claymorphism', 'liquidGlass'];

export function ThemeSwitcher({ onThemeChange }: { onThemeChange: (theme: Theme) => void }) {
  const [activeTheme, setActiveTheme] = useState('minimalism');
  
  const handleSwitch = (key: string) => {
    setActiveTheme(key);
    onThemeChange(themes[key as keyof typeof themes]);
  };

  return (
    <div className="flex flex-wrap gap-2">
      {themeKeys.map(key => (
        <button
          key={key}
          onClick={() => handleSwitch(key)}
          className={\`px-3 py-1.5 rounded-lg text-sm font-medium transition-all
            \${activeTheme === key ? 'bg-indigo-500 text-white' : 'bg-black/5 hover:bg-black/10'}\`}
        >
          {key}
        </button>
      ))}
    </div>
  );
}`} />

                            <CodeBlock theme={theme} label="CLI: Set Default Theme" code={`# Set your project's default aesthetic
npx vanguard-ui theme --set glassmorphism

# Available options:
# minimalism, neoBrutalism, glassmorphism, 
# skeuomorphism, claymorphism, liquidGlass`} />
                        </div>
                    </>
                )}

                {/* Component Sections */}
                {activeSection === 'button' && (
                    <>
                        <div className="mb-12">
                            <p className={`text-xs uppercase tracking-widest opacity-40 mb-3 ${theme.text}`}>Components</p>
                            <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>Button</h1>
                            <p className={`text-xl opacity-60 font-medium ${theme.text}`}>A theme-aware button component with multiple variants.</p>
                        </div>
                        <div className="space-y-8">
                            <CodeBlock theme={theme} label="Installation" code={`npx vanguard-ui add button`} />
                            <CodeBlock theme={theme} label="Usage" code={`import { Button } from '@/components/ui/Button';

<Button theme={theme}>Primary</Button>
<Button theme={theme} variant="secondary">Secondary</Button>
<Button theme={theme} variant="accent">Accent</Button>`} />
                        </div>
                    </>
                )}

                {activeSection === 'card' && (
                    <>
                        <div className="mb-12">
                            <p className={`text-xs uppercase tracking-widest opacity-40 mb-3 ${theme.text}`}>Components</p>
                            <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>Card</h1>
                            <p className={`text-xl opacity-60 font-medium ${theme.text}`}>A versatile container component with header, content, and footer.</p>
                        </div>
                        <div className="space-y-8">
                            <CodeBlock theme={theme} label="Installation" code={`npx vanguard-ui add card`} />
                            <CodeBlock theme={theme} label="Usage" code={`import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

<Card theme={theme}>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
</Card>`} />
                        </div>
                    </>
                )}

                {activeSection === 'input' && (
                    <>
                        <div className="mb-12">
                            <p className={`text-xs uppercase tracking-widest opacity-40 mb-3 ${theme.text}`}>Components</p>
                            <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>Input</h1>
                            <p className={`text-xl opacity-60 font-medium ${theme.text}`}>Theme-aware text input for forms and user interaction.</p>
                        </div>
                        <div className="space-y-8">
                            <CodeBlock theme={theme} label="Installation" code={`npx vanguard-ui add input`} />
                            <CodeBlock theme={theme} label="Usage" code={`import { Input } from '@/components/ui/Form';

<Input theme={theme} placeholder="Enter text..." />
<Input theme={theme} type="email" placeholder="Email" />`} />
                        </div>
                    </>
                )}

                {activeSection === 'badge' && (
                    <>
                        <div className="mb-12">
                            <p className={`text-xs uppercase tracking-widest opacity-40 mb-3 ${theme.text}`}>Components</p>
                            <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>Badge</h1>
                            <p className={`text-xl opacity-60 font-medium ${theme.text}`}>Small labels for status indicators and tags.</p>
                        </div>
                        <div className="space-y-8">
                            <CodeBlock theme={theme} label="Installation" code={`npx vanguard-ui add badge`} />
                            <CodeBlock theme={theme} label="Usage" code={`import { Badge } from '@/components/ui/Badge';

<Badge theme={theme}>Default</Badge>
<Badge theme={theme} variant="secondary">Secondary</Badge>
<Badge theme={theme} variant="accent">New</Badge>`} />
                        </div>
                    </>
                )}

                {activeSection === 'more' && (
                    <>
                        <div className="mb-12">
                            <p className={`text-xs uppercase tracking-widest opacity-40 mb-3 ${theme.text}`}>Components</p>
                            <h1 className={`text-5xl md:text-6xl font-black mb-6 ${theme.text} tracking-tight`}>More Components</h1>
                            <p className={`text-xl opacity-60 font-medium ${theme.text}`}>Explore our full library of 44+ components.</p>
                        </div>
                        <div className="space-y-8">
                            <p className={`opacity-70 ${theme.text}`}>Visit the <strong>Library</strong> page to explore all available components with live previews.</p>
                            <CodeBlock theme={theme} label="Add Any Component" code={`npx vanguard-ui add [component-name]

# Examples:
npx vanguard-ui add dialog
npx vanguard-ui add tabs
npx vanguard-ui add tooltip
npx vanguard-ui add calendar`} />
                        </div>
                    </>
                )}

                {/* Installation Section (default) */}
                {activeSection === 'installation' && (
                    <>
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
                                    <CodeBlock theme={theme} label="Command: Install CLI" code={cliCommands[pkgManager]} />
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
                                    <CodeBlock theme={theme} label="Command: Init" code={initCommands[pkgManager]} />
                                </div>
                            </section>

                            {/* Set Theme/Aesthetic */}
                            <section className="space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-current opacity-20 ${theme.text}`}>
                                        <Palette size={20} />
                                    </div>
                                    <h3 className={`text-2xl font-bold ${theme.text}`}>3. Choose Your Aesthetic</h3>
                                </div>
                                <p className={`opacity-60 font-medium ${theme.text}`}>Select a design aesthetic for your project. Available options: <code className="bg-black/10 px-1 rounded">minimalism</code>, <code className="bg-black/10 px-1 rounded">neoBrutalism</code>, <code className="bg-black/10 px-1 rounded">glassmorphism</code>, <code className="bg-black/10 px-1 rounded">skeuomorphism</code>, <code className="bg-black/10 px-1 rounded">claymorphism</code>, <code className="bg-black/10 px-1 rounded">liquidGlass</code></p>
                                <div className={`rounded-2xl border border-gray-200/10 overflow-hidden ${theme.card}`}>
                                    <PkgManagerTabs />
                                    <CodeBlock theme={theme} label="Command: Set Aesthetic" code={themeCommands[pkgManager]} />
                                </div>
                            </section>

                            {/* Add Components */}
                            <section className="space-y-8">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border border-current opacity-20 ${theme.text}`}>
                                        <Boxes size={20} />
                                    </div>
                                    <h3 className={`text-2xl font-bold ${theme.text}`}>4. Add Components</h3>
                                </div>
                                <p className={`opacity-60 font-medium ${theme.text}`}>Start by adding themed, reality-aware components directly into your codebase.</p>
                                <div className={`rounded-2xl border border-gray-200/10 overflow-hidden ${theme.card}`}>
                                    <PkgManagerTabs />
                                    <CodeBlock theme={theme} label="Command: Add Component" code={addCommands[pkgManager]} />
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
                    </>
                )}
            </main>
        </div>
    );
};
