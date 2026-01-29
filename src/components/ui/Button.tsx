import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Theme } from '../../styles/themes';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    theme: Theme;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'icon';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, theme, variant = 'primary', size = 'md', ...props }, ref) => {
        const baseStyles = variant === 'secondary' ? theme.secondaryButton : theme.button;

        // Additional variants if needed (can be extended further)
        const variants = {
            primary: baseStyles,
            secondary: theme.secondaryButton,
            outline: cn(theme.secondaryButton, "bg-transparent border-current opacity-70 hover:opacity-100"),
            ghost: cn("bg-transparent hover:bg-black/5 dark:hover:bg-white/5", theme.text, "opacity-60 hover:opacity-100 border-none shadow-none"),
        };

        const sizes = {
            sm: "px-3 py-1.5 text-xs",
            md: "px-5 py-2 sm:py-3 text-sm",
            lg: "px-8 py-3 sm:py-4 text-base",
            icon: "w-10 h-10 flex items-center justify-center p-0",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center font-medium transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
