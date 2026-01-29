import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Theme } from '../../styles/themes';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    theme: Theme;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, theme, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={cn(
                    "w-full px-4 py-2 text-sm outline-none transition-all placeholder:opacity-50",
                    theme.input,
                    className
                )}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";
