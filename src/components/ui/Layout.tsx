import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Theme } from '../../styles/themes';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const AspectRatio: React.FC<{ ratio: number; children: React.ReactNode; className?: string }> = ({ ratio, children, className }) => {
    return (
        <div className={cn("relative w-full", className)} style={{ paddingBottom: `${(1 / ratio) * 100}%` }}>
            <div className="absolute inset-0">
                {children}
            </div>
        </div>
    );
};

export const Resizable: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ theme, children, className }) => {
    return (
        <div className={cn("relative group border border-dashed border-current opacity-40 hover:opacity-100 transition-opacity p-4", theme.text, className)}>
            {children}
            <div className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize opacity-50 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                    <line x1="22" y1="22" x2="12" y2="12" />
                    <line x1="22" y1="16" x2="16" y2="22" />
                </svg>
            </div>
        </div>
    );
};

export const Separator: React.FC<{ theme: Theme; orientation?: 'horizontal' | 'vertical'; className?: string }> = ({ theme, orientation = 'horizontal', className }) => {
    return (
        <div
            className={cn(
                "shrink-0 bg-current opacity-10",
                orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
                theme.name === 'Neo-Brutalism' && (orientation === 'horizontal' ? 'h-[2px]' : 'w-[2px] opacity-100'),
                className
            )}
        />
    );
};

export const ScrollArea: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ children, className }) => {
    return (
        <div className={cn("overflow-auto custom-scrollbar", className)}>
            {children}
        </div>
    );
};
