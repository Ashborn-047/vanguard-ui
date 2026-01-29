import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Theme } from '../../styles/themes';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
    theme: Theme;
    themeKey: string;
    value: number;
    onValueChange: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({ theme, themeKey, value, onValueChange, className, ...props }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onValueChange(parseInt(e.target.value));
    };

    const trackStyles = cn(
        "relative h-1.5 w-full grow overflow-hidden rounded-full bg-gray-200",
        themeKey === 'neoBrutalism' && "border-2 border-black rounded-none h-3 bg-white",
        themeKey === 'liquidGlass' && "bg-white/5 border border-white/10 backdrop-blur-md",
        themeKey === 'claymorphism' && "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)]",
    );

    const rangeStyles = cn(
        "absolute h-full",
        theme.accent.split(' ')[0], // Get background color from accent
        themeKey === 'neoBrutalism' && "bg-yellow-400",
        themeKey === 'liquidGlass' && "bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]",
    );

    return (
        <div className={cn("relative flex w-full touch-none select-none items-center", className)}>
            <div className={trackStyles}>
                <div className={rangeStyles} style={{ width: `${value}%` }} />
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleChange}
                className="absolute w-full opacity-0 cursor-pointer h-1.5"
                {...props}
            />
            {/* Thumb representation */}
            <div
                className={cn(
                    "pointer-events-none absolute h-5 w-5 rounded-full border border-gray-200 bg-white shadow-sm transition-colors",
                    themeKey === 'neoBrutalism' && "border-2 border-black rounded-none bg-[#FF6B6B] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] h-6 w-6",
                    themeKey === 'liquidGlass' && "bg-white/90 shadow-[0_0_10px_white] border-none",
                    themeKey === 'claymorphism' && "shadow-[2px_2px_4px_rgba(0,0,0,0.2)] border-none"
                )}
                style={{ left: `calc(${value}% - 10px)` }}
            />
        </div>
    );
};
