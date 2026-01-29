import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Theme } from '../../styles/themes';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    theme: Theme;
    variant?: 'default' | 'outline' | 'accent';
}

export const Badge = ({ className, theme, variant = 'default', ...props }: BadgeProps) => {
    const variants = {
        default: theme.badge,
        outline: cn(theme.badge, "bg-transparent border-current opacity-70"),
        accent: theme.accent, // Use accent as a badge background
    };

    return (
        <div
            className={cn(
                "inline-flex items-center font-bold px-2.5 py-0.5 text-[10px] sm:text-xs transition-colors",
                variants[variant],
                className
            )}
            {...props}
        />
    );
};
