import React from 'react';
import { ChevronRight, ChevronLeft, MoreHorizontal } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Theme } from '../../styles/themes';
import { Button } from './Button';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Breadcrumb: React.FC<{ theme: Theme; items: string[] }> = ({ theme, items }) => {
    return (
        <nav className="flex items-center space-x-2 text-sm font-bold">
            {items.map((item, idx) => (
                <React.Fragment key={idx}>
                    <span className={cn(
                        "transition-opacity cursor-pointer",
                        theme.text,
                        idx === items.length - 1 ? "opacity-100" : "opacity-40 hover:opacity-100"
                    )}>
                        {item}
                    </span>
                    {idx < items.length - 1 && (
                        <ChevronRight size={14} className={cn("opacity-20", theme.text)} />
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export const Pagination: React.FC<{ theme: Theme; current: number; total: number; onPageChange?: (page: number) => void }> = ({ theme, current, total }) => {
    return (
        <div className="flex items-center gap-2">
            <Button theme={theme} variant="outline" size="icon" className="h-8 w-8">
                <ChevronLeft size={14} />
            </Button>
            <div className="flex items-center gap-1">
                {[1, 2, 3].map(p => (
                    <Button
                        key={p}
                        theme={theme}
                        variant={p === current ? 'primary' : 'ghost'}
                        size="sm"
                        className="h-8 w-8 p-0"
                    >
                        {p}
                    </Button>
                ))}
                <span className={cn("px-2 opacity-50", theme.text)}>
                    <MoreHorizontal size={14} />
                </span>
                <Button theme={theme} variant="ghost" size="sm" className="h-8 w-8 p-0">
                    {total}
                </Button>
            </div>
            <Button theme={theme} variant="outline" size="icon" className="h-8 w-8">
                <ChevronRight size={14} />
            </Button>
        </div>
    );
};

export const Menubar: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ theme, children, className }) => (
    <div className={cn("flex h-10 items-center space-x-1 rounded-md border bg-black/5 dark:bg-white/5 p-1", theme.name === 'Neo-Brutalism' ? "border-black" : "border-gray-200/20", className)}>
        {children}
    </div>
);

export const MenubarMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="relative group">{children}</div>
);

export const MenubarTrigger: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ theme, children, className }) => (
    <div className={cn("flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-bold outline-none hover:bg-black/5 dark:hover:bg-white/5", theme.text, className)}>
        {children}
    </div>
);

export const MenubarContent: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ theme, children, className }) => (
    <div className={cn(
        "absolute top-full left-0 z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-md animate-in slide-in-from-top-1 opacity-0 group-hover:opacity-100 transition-all pointer-events-none group-hover:pointer-events-auto",
        theme.card,
        className
    )}>
        {children}
    </div>
);

export const MenubarItem: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ theme, children, className }) => (
    <div className={cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none hover:bg-black/5 dark:hover:bg-white/5",
        theme.text,
        className
    )}>
        {children}
    </div>
);

export const NavigationMenu: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <nav className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}>{children}</nav>
);

export const NavigationMenuList: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <ul className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}>{children}</ul>
);

export const NavigationMenuItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="relative group">{children}</li>
);

export const NavigationMenuTrigger: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ theme, children, className }) => (
    <button className={cn("group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-bold transition-colors hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none disabled:pointer-events-none disabled:opacity-50", theme.text, className)}>
        {children}
    </button>
);

export const NavigationMenuContent: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ theme, children, className }) => (
    <div className={cn(
        "absolute top-full left-0 mt-2 w-[400px] rounded-md border p-4 shadow-lg animate-in slide-in-from-top-2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none group-hover:pointer-events-auto",
        theme.card,
        className
    )}>
        {children}
    </div>
);
