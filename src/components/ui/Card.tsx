import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Theme } from '../../styles/themes';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    theme: Theme;
}

export const Card = ({ className, theme, ...props }: CardProps) => {
    return (
        <div
            className={cn(
                "bg-white border rounded-lg overflow-hidden",
                theme.card,
                className
            )}
            {...props}
        />
    );
};

export const CardHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("p-6 pb-3", className)} {...props} />
);

export const CardTitle = ({ className, theme, ...props }: React.HTMLAttributes<HTMLHeadingElement> & { theme: Theme }) => (
    <h3 className={cn("text-lg font-bold", theme.text, className)} {...props} />
);

export const CardDescription = ({ className, theme, ...props }: React.HTMLAttributes<HTMLParagraphElement> & { theme: Theme }) => (
    <p className={cn("text-sm opacity-60", theme.text, className)} {...props} />
);

export const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("p-6 pt-0", className)} {...props} />
);

export const CardFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={cn("p-6 pt-0 flex items-center", className)} {...props} />
);
