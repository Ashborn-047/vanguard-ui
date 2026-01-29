import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

import type { Theme } from '../../styles/themes';

interface TactileKnobProps {
    label: string;
    value?: number;
    theme: Theme;
    themeKey: string;
}

export const TactileKnob: React.FC<TactileKnobProps> = ({ label, value = 50, theme, themeKey }) => {
    const rotation = (value / 100) * 270 - 135;

    if (themeKey === 'liquidGlass') return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16 rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.05] shadow-2xl flex items-center justify-center group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent" />
                <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 shadow-lg flex items-center justify-center transition-transform duration-500 ease-in-out" style={{ transform: `rotate(${rotation}deg)` }}>
                    <div className="absolute top-1 w-1 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                </div>
            </div>
            <div className="text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/90 mb-0.5">{label}</p>
                <p className="text-[9px] font-bold text-white/40 tabular-nums">{value}%</p>
            </div>
        </div>
    );

    if (themeKey === 'skeuomorphism') return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative w-16 h-16 rounded-full bg-[#eceef1] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] flex items-center justify-center group cursor-pointer">
                <div className="absolute inset-1 rounded-full border border-white/20 shadow-[inset_1px_1px_2px_white,inset_-1px_-1px_2px_rgba(0,0,0,0.1)]" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fdfdfd] to-[#e2e4e9] shadow-[2px_2px_5px_rgba(0,0,0,0.15),-1px_-1px_2px_white] flex items-center justify-center transition-transform duration-300 ease-out" style={{ transform: `rotate(${rotation}deg)` }}>
                    <div className="absolute top-1 w-1.5 h-1.5 rounded-full bg-slate-400 shadow-[inset_1px_1px_1px_rgba(0,0,0,0.2)]" />
                    <div className="w-6 h-6 rounded-full border border-black/[0.03] bg-gradient-to-tl from-transparent to-white/30" />
                </div>
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none opacity-20" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 4" />
                </svg>
            </div>
            <div className="text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-0.5">{label}</p>
                <p className="text-[9px] font-bold text-slate-400 tabular-nums">{value}</p>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-center gap-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs ${theme.accent}`}>{value}%</div>
            <span className={`text-[10px] uppercase font-bold opacity-50 ${theme.text}`}>{label}</span>
        </div>
    );
};

export const Fader: React.FC<{ theme: Theme; themeKey: string; label: string; value: number; onChange: (v: number) => void }> = ({ theme, themeKey, label, value, onChange }) => {
    return (
        <div className="flex flex-col items-center gap-4 w-12">
            <div
                onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const y = e.clientY - rect.top;
                    const newVal = Math.max(0, Math.min(100, 100 - (y / rect.height) * 100));
                    onChange(Math.round(newVal));
                }}
                className={cn(
                    "relative h-40 w-8 rounded-xl bg-black/5 dark:bg-white/5 border border-current opacity-20 flex items-center justify-center p-1",
                    themeKey === 'skeuomorphism' && "bg-[#eceef1] shadow-[inset_2px_2px_5px_#d1d9e6,inset_-2px_-2px_5px_#ffffff] border-none",
                    themeKey === 'liquidGlass' && "bg-white/[0.03] backdrop-blur-md border-white/[0.05]"
                )}
            >
                <div
                    className={cn(
                        "absolute w-full h-8 rounded-lg cursor-ns-resize shadow-lg transition-all",
                        themeKey === 'skeuomorphism' ? "bg-gradient-to-br from-[#fdfdfd] to-[#e2e4e9] shadow-[1px_1px_3px_rgba(0,0,0,0.2)]" : "bg-indigo-500",
                        themeKey === 'neoBrutalism' && "bg-black border-2 border-black rounded-none"
                    )}
                    style={{ bottom: `${value}%`, transform: 'translateY(50%)' }}
                />
            </div>
            <div className="text-center">
                <p className={cn("text-[10px] font-black uppercase tracking-widest opacity-60", theme.text)}>{label}</p>
                <p className={cn("text-[9px] font-bold opacity-40 tabular-nums", theme.text)}>{value}</p>
            </div>
        </div>
    );
};

export const TactileToggle: React.FC<{ theme: Theme; themeKey: string; label: string; active: boolean; onToggle: () => void }> = ({ theme, themeKey, label, active, onToggle }) => {
    return (
        <div className="flex flex-col items-center gap-3">
            <button
                onClick={onToggle}
                className={cn(
                    "w-12 h-12 rounded-full transition-all flex items-center justify-center",
                    themeKey === 'skeuomorphism'
                        ? (active ? "bg-[#eceef1] shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff]" : "bg-[#eceef1] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]")
                        : (active ? "bg-indigo-500 text-white" : "bg-black/5 dark:bg-white/5 border border-current opacity-30"),
                    themeKey === 'neoBrutalism' && (active ? "bg-black text-white rounded-none border-2 border-black" : "bg-white border-2 border-black rounded-none")
                )}
            >
                <div className={cn("w-2 h-2 rounded-full", active ? "bg-current shadow-[0_0_8px_currentColor]" : "bg-current opacity-20")} />
            </button>
            <span className={cn("text-[10px] font-black uppercase tracking-widest opacity-60 text-center", theme.text)}>{label}</span>
        </div>
    );
};
