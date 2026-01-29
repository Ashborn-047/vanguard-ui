import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as Lucide from 'lucide-react';
import type { Theme } from '../../styles/themes';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Avatar: React.FC<{ theme: Theme; src?: string; fallback: string; className?: string }> = ({ theme, src, fallback, className }) => {
    return (
        <div className={cn(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            theme.card,
            className
        )}>
            {src ? (
                <img src={src} className="aspect-square h-full w-full object-cover" />
            ) : (
                <div className={cn("flex h-full w-full items-center justify-center rounded-full text-xs font-bold", theme.bg)}>
                    {fallback}
                </div>
            )}
        </div>
    );
};

export const Progress: React.FC<{ theme: Theme; value: number; className?: string }> = ({ theme, value, className }) => {
    return (
        <div className={cn("relative h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/5", className)}>
            <div
                className={cn("h-full w-full flex-1 transition-all", theme.accent.split(' ')[0])}
                style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </div>
    );
};

export const Skeleton: React.FC<{ theme: Theme; className?: string }> = ({ className }) => {
    return (
        <div className={cn("animate-pulse rounded-md bg-black/5 dark:bg-white/5", className)} />
    );
};

export const Table: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ theme, children, className }) => (
    <div className="relative w-full overflow-auto">
        <table className={cn("w-full caption-bottom text-sm", theme.text, className)}>
            {children}
        </table>
    </div>
);

export const TableHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <thead className={cn("[&_tr]:border-b", className)}>{children}</thead>
);

export const TableBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <tbody className={cn("[&_tr:last-child]:border-0", className)}>{children}</tbody>
);

export const TableRow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <tr className={cn("border-b transition-colors hover:bg-black/5 dark:hover:bg-white/5 data-[state=selected]:bg-black/10", className)}>
        {children}
    </tr>
);

export const TableHead: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <th className={cn("h-12 px-4 text-left align-middle font-black opacity-50 [&:has([role=checkbox])]:pr-0", className)}>
        {children}
    </th>
);

export const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <td className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}>
        {children}
    </td>
);

export const Calendar: React.FC<{ theme: Theme; className?: string }> = ({ theme, className }) => {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const dates = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className={cn("p-4 rounded-xl border w-fit", theme.card, className)}>
            <div className="flex items-center justify-between mb-4">
                <button className="p-1 opacity-50 hover:opacity-100 transition-opacity"><Lucide.ChevronLeft size={16} /></button>
                <span className="font-bold text-sm">January 2026</span>
                <button className="p-1 opacity-50 hover:opacity-100 transition-opacity"><Lucide.ChevronRight size={16} /></button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
                {days.map(d => <div key={d} className="text-[10px] font-black opacity-30 h-8 flex items-center justify-center">{d}</div>)}
                {Array.from({ length: 4 }).map((_, i) => <div key={`empty-${i}`} />)}
                {dates.map(d => (
                    <button
                        key={d}
                        className={cn(
                            "h-8 w-8 text-xs font-bold rounded-md flex items-center justify-center transition-all hover:bg-black/5 dark:hover:bg-white/5",
                            d === 15 && theme.button
                        )}
                    >
                        {d}
                    </button>
                ))}
            </div>
        </div>
    );
};
