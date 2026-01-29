import React from 'react';
import { BookOpen, Lightbulb, Target, CheckCircle2 } from 'lucide-react';
import type { Theme } from '../styles/themes';
import { themes } from '../styles/themes';
import { designContext } from '../data/library';

export const ContextPage: React.FC<{ theme: Theme }> = ({ theme }) => (
    <div className="py-20 px-6 max-w-6xl mx-auto animate-in fade-in duration-700 min-h-screen relative">
        <div className="absolute inset-0 pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_at_center,#000,transparent)]">
            <div className="absolute inset-0 bg-[grid-line_rgba(0,0,0,0.1)] [background-size:40px_40px] dark:bg-[grid-line_rgba(255,255,255,0.05)]" />
        </div>

        <div className="text-center max-w-3xl mx-auto mb-32 relative z-10">
            <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-current opacity-40 ${theme.text}`}>Aesthetic Intelligence</div>
            <h1 className={`text-6xl md:text-8xl font-black mb-8 ${theme.text} tracking-tighter leading-none`}>Design <br /><span className="opacity-40">Context.</span></h1>
            <p className={`text-xl md:text-2xl leading-relaxed opacity-60 font-medium ${theme.text}`}>
                A deep dive into the philosophy, origins, and utility of modern interface aesthetics.
                Understanding the "why" enables you to master the "how".
            </p>
        </div>
        <div className="grid grid-cols-1 gap-32">
            {Object.entries(designContext).map(([key, data]) => {
                const t = themes[key];
                return (
                    <div key={key} className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className={`w-full lg:w-1/2 aspect-[4/3] rounded-3xl ${t.bg} border ${t.name === 'Neo-Brutalism' ? 'border-2 border-black' : 'border-gray-200/50'} relative overflow-hidden flex flex-col items-center justify-center p-8 shadow-sm group`}>
                            <div className={`w-64 p-6 rounded-2xl ${t.card} transform group-hover:-translate-y-2 transition-transform duration-500`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-10 h-10 rounded-full ${t.accent}`} />
                                    <div className="space-y-2 flex-1">
                                        <div className={`h-2 w-3/4 rounded-full opacity-40 bg-current ${t.text}`} />
                                        <div className={`h-2 w-1/2 rounded-full opacity-20 bg-current ${t.text}`} />
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div className={`h-8 w-full rounded-lg ${t.button}`} />
                                </div>
                            </div>
                            {(key === 'glassmorphism' || key === 'liquidGlass') && (
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-[80px] -z-10 opacity-50" />
                            )}
                        </div>
                        <div className="flex-1 space-y-8">
                            <div>
                                <h2 className={`text-4xl font-bold mb-4 ${theme.text}`}>{data.title}</h2>
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${theme.text} border-current opacity-40`}>
                                    <BookOpen size={12} /> {data.origin}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className={`text-lg font-bold flex items-center gap-2 ${theme.text}`}>
                                    <Lightbulb size={20} className="text-yellow-500" /> Core Principles
                                </h3>
                                <ul className="space-y-3">
                                    {data.principles.map((p, i) => (
                                        <li key={i} className={`flex items-start gap-3 opacity-80 ${theme.text}`}>
                                            <CheckCircle2 size={18} className="shrink-0 mt-1 opacity-50" />
                                            <span className="leading-relaxed">{p}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`p-6 rounded-2xl ${theme.name === 'Neo-Brutalism' ? 'border-2 border-black bg-[#A7F3D0]' : 'bg-black/5'}`}>
                                <h3 className={`text-sm font-bold flex items-center gap-2 uppercase tracking-widest mb-2 ${theme.text}`}>
                                    <Target size={16} /> Best Used For
                                </h3>
                                <p className={`opacity-90 leading-relaxed ${theme.text}`}>{data.bestFor}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);
