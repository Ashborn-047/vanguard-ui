import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Theme } from '../../styles/themes';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
    theme: Theme;
    themeKey: string;
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({ theme, themeKey, checked, onCheckedChange, className, ...props }) => {
    const toggle = (e: React.MouseEvent) => {
        e.preventDefault();
        onCheckedChange(!checked);
    };

    const trackStyles = cn(
        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        checked ? "bg-indigo-600" : "bg-gray-200",
        themeKey === 'neoBrutalism' && "border-2 border-black rounded-none h-7 w-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        themeKey === 'liquidGlass' && "bg-white/5 border border-white/10 backdrop-blur-md",
        themeKey === 'claymorphism' && "shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] border-none",
        className
    );

    const thumbStyles = cn(
        "pointer-events-none block h-5 w-5 rounded-full transition-transform",
        checked ? "translate-x-5" : "translate-x-0.5",
        themeKey === 'neoBrutalism' ? "border-2 border-black rounded-none bg-white h-5 w-5" : "bg-white shadow-sm",
        themeKey === 'liquidGlass' && (checked ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" : "bg-white/20"),
        themeKey === 'claymorphism' && "shadow-[2px_2px_4px_rgba(0,0,0,0.2)]"
    );

    return (
        <div
            onClick={toggle}
            className={trackStyles}
            {...props as any}
        >
            <span className={thumbStyles} />
        </div>
    );
};
