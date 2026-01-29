import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Theme } from '../../styles/themes';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface TabsProps {
    theme: Theme;
    tabs: { id: string; label: string }[];
    activeTab: string;
    onTabChange: (id: string) => void;
    className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ theme, tabs, activeTab, onTabChange, className }) => {
    return (
        <div className={cn("flex space-x-1 border-b", theme.separator, className)}>
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={cn(
                            "px-4 py-2 text-sm font-medium transition-all -mb-px",
                            isActive ? theme.tabActive : cn(theme.tabInactive, "bg-transparent border-transparent"),
                            "hover:opacity-100"
                        )}
                    >
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
};
