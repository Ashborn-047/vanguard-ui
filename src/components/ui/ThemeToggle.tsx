import React, { useId } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ThemeToggleProps {
    isDark: boolean;
    onToggle: () => void;
    className?: string;
}

/**
 * Yin-Yang style toggle with rotating animation
 */
export const ThemeToggle1: React.FC<ThemeToggleProps> = ({ isDark, onToggle, className = '' }) => {
    return (
        <button
            type="button"
            className={cn(
                'rounded-full transition-all duration-300 active:scale-95',
                isDark ? 'bg-slate-950 text-white' : 'bg-[#FAF9F6] text-slate-950 border border-gray-200',
                className
            )}
            onClick={onToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
            >
                <motion.g
                    animate={{ rotate: isDark ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    style={{ originX: 0.5, originY: 0.5 }}
                >
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />

                    {/* Inner Circle: Right Half Filled (Black in Light Mode) */}
                    <path d="M12 7 A 5 5 0 0 1 12 17 Z" fill="currentColor" />

                    {/* Exterior Ring: Left Half Filled (Black in Light Mode) */}
                    <path
                        d="M12 3 A 9 9 0 0 0 12 21 L 12 17 A 5 5 0 0 1 12 7 L 12 3 Z"
                        fill="currentColor"
                    />
                </motion.g>
            </svg>
        </button>
    );
};

/**
 * Classic sun/moon toggle with rays
 */
export const ThemeToggle2: React.FC<ThemeToggleProps> = ({ isDark, onToggle, className = '' }) => {
    const id = useId();
    return (
        <button
            type="button"
            className={cn(
                'rounded-full transition-all duration-300 active:scale-95 border shadow-sm',
                isDark ? 'bg-slate-950 text-white border-slate-700' : 'bg-[#FFFCF8] text-slate-950 border-slate-200',
                className
            )}
            onClick={onToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                strokeLinecap="round"
                viewBox="0 0 32 32"
                className="w-full h-full"
            >
                <clipPath id={`theme-toggle-2-${id}`}>
                    <motion.path
                        animate={{ y: isDark ? 10 : 0, x: isDark ? -12 : 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.35 }}
                        d="M0-5h30a1 1 0 0 0 9 13v24H0Z"
                    />
                </clipPath>
                <g clipPath={`url(#theme-toggle-2-${id})`}>
                    <motion.circle
                        animate={{ r: isDark ? 10 : 8 }}
                        transition={{ ease: 'easeInOut', duration: 0.35 }}
                        cx="16"
                        cy="16"
                    />
                    <motion.g
                        animate={{
                            rotate: isDark ? -100 : 0,
                            scale: isDark ? 0.5 : 1,
                            opacity: isDark ? 0 : 1,
                        }}
                        transition={{ ease: 'easeInOut', duration: 0.35 }}
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M16 5.5v-4" />
                        <path d="M16 30.5v-4" />
                        <path d="M1.5 16h4" />
                        <path d="M26.5 16h4" />
                        <path d="m23.4 8.6 2.8-2.8" />
                        <path d="m5.7 26.3 2.9-2.9" />
                        <path d="m5.8 5.8 2.8 2.8" />
                        <path d="m23.4 23.4 2.9 2.9" />
                    </motion.g>
                </g>
            </svg>
        </button>
    );
};

/**
 * Sun with circle rays toggle
 */
export const ThemeToggle3: React.FC<ThemeToggleProps> = ({ isDark, onToggle, className = '' }) => {
    const id = useId();
    return (
        <button
            type="button"
            className={cn(
                'rounded-full transition-all duration-300 active:scale-95 border shadow-sm',
                isDark ? 'bg-slate-950 text-white border-slate-700' : 'bg-[#FFFCF8] text-slate-950 border-slate-200',
                className
            )}
            onClick={onToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                strokeLinecap="round"
                viewBox="0 0 32 32"
                className="w-full h-full"
            >
                <clipPath id={`theme-toggle-3-${id}`}>
                    <motion.path
                        animate={{ y: isDark ? 14 : 0, x: isDark ? -11 : 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.35 }}
                        d="M0-11h25a1 1 0 0017 13v30H0Z"
                    />
                </clipPath>
                <g clipPath={`url(#theme-toggle-3-${id})`}>
                    <motion.circle
                        animate={{ r: isDark ? 10 : 8 }}
                        transition={{ ease: 'easeInOut', duration: 0.35 }}
                        cx="16"
                        cy="16"
                    />
                    <motion.g
                        animate={{
                            scale: isDark ? 0.5 : 1,
                            opacity: isDark ? 0 : 1,
                        }}
                        transition={{ ease: 'easeInOut', duration: 0.35 }}
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M18.3 3.2c0 1.3-1 2.3-2.3 2.3s-2.3-1-2.3-2.3S14.7.9 16 .9s2.3 1 2.3 2.3zm-4.6 25.6c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3-1 2.3-2.3 2.3-2.3-1-2.3-2.3zm15.1-10.5c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zM3.2 13.7c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3S.9 17.3.9 16s1-2.3 2.3-2.3zm5.8-7C9 7.9 7.9 9 6.7 9S4.4 8 4.4 6.7s1-2.3 2.3-2.3S9 5.4 9 6.7zm16.3 21c-1.3 0-2.3-1-2.3-2.3s1-2.3 2.3-2.3 2.3 1 2.3 2.3-1 2.3-2.3 2.3zm2.4-21c0 1.3-1 2.3-2.3 2.3S23 7.9 23 6.7s1-2.3 2.3-2.3 2.4 1 2.4 2.3zM6.7 23C8 23 9 24 9 25.3s-1 2.3-2.3 2.3-2.3-1-2.3-2.3 1-2.3 2.3-2.3z" />
                    </motion.g>
                </g>
            </svg>
        </button>
    );
};

/**
 * Lightbulb toggle with filament animation
 */
export const ThemeToggle4: React.FC<ThemeToggleProps> = ({ isDark, onToggle, className = '' }) => {
    return (
        <button
            type="button"
            className={cn(
                'rounded-full transition-all duration-300 active:scale-95 border shadow-sm',
                isDark ? 'bg-slate-950 text-white border-slate-700' : 'bg-[#FFFCF8] text-slate-950 border-slate-200',
                className
            )}
            onClick={onToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                strokeWidth="0.7"
                stroke="currentColor"
                fill="currentColor"
                strokeLinecap="round"
                viewBox="0 0 32 32"
                className="w-full h-full"
            >
                <path
                    strokeWidth="0"
                    d="M9.4 9.9c1.8-1.8 4.1-2.7 6.6-2.7 5.1 0 9.3 4.2 9.3 9.3 0 2.3-.8 4.4-2.3 6.1-.7.8-2 2.8-2.5 4.4 0 .2-.2.4-.5.4-.2 0-.4-.2-.4-.5v-.1c.5-1.8 2-3.9 2.7-4.8 1.4-1.5 2.1-3.5 2.1-5.6 0-4.7-3.7-8.5-8.4-8.5-2.3 0-4.4.9-5.9 2.5-1.6 1.6-2.5 3.7-2.5 6 0 2.1.7 4 2.1 5.6.8.9 2.2 2.9 2.7 4.9 0 .2-.1.5-.4.5h-.1c-.2 0-.4-.1-.4-.4-.5-1.7-1.8-3.7-2.5-4.5-1.5-1.7-2.3-3.9-2.3-6.1 0-2.3 1-4.7 2.7-6.5z"
                />
                <path d="M19.8 28.3h-7.6" />
                <path d="M19.8 29.5h-7.6" />
                <path d="M19.8 30.7h-7.6" />
                <motion.path
                    animate={{
                        pathLength: isDark ? 0 : 1,
                        opacity: isDark ? 0 : 1,
                    }}
                    transition={{ ease: 'easeInOut', duration: 0.35 }}
                    pathLength="1"
                    fill="none"
                    d="M14.6 27.1c0-3.4 0-6.8-.1-10.2-.2-1-1.1-1.7-2-1.7-1.2-.1-2.3 1-2.2 2.3.1 1 .9 1.9 2.1 2h7.2c1.1-.1 2-1 2.1-2 .1-1.2-1-2.3-2.2-2.3-.9 0-1.7.7-2 1.7 0 3.4 0 6.8-.1 10.2"
                />
                <motion.g
                    animate={{
                        scale: isDark ? 0.5 : 1,
                        opacity: isDark ? 0 : 1,
                    }}
                    transition={{ ease: 'easeInOut', duration: 0.35 }}
                >
                    <path pathLength="1" d="M16 6.4V1.3" />
                    <path pathLength="1" d="M26.3 15.8h5.1" />
                    <path pathLength="1" d="m22.6 9 3.7-3.6" />
                    <path pathLength="1" d="M9.4 9 5.7 5.4" />
                    <path pathLength="1" d="M5.7 15.8H.6" />
                </motion.g>
            </svg>
        </button>
    );
};

/**
 * Simple eclipse/moon toggle
 */
export const ThemeToggle5: React.FC<ThemeToggleProps> = ({ isDark, onToggle, className = '' }) => {
    const id = useId();
    return (
        <button
            type="button"
            className={cn(
                'rounded-full transition-all duration-300 active:scale-95 border shadow-sm',
                isDark ? 'bg-slate-950 text-white border-slate-700' : 'bg-[#FFFCF8] text-slate-950 border-slate-200',
                className
            )}
            onClick={onToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 32 32"
                className="w-full h-full"
            >
                <clipPath id={`theme-toggle-5-${id}`}>
                    <motion.path
                        animate={{ y: isDark ? 5 : 0, x: isDark ? -20 : 0 }}
                        transition={{ ease: 'easeInOut', duration: 0.35 }}
                        d="M0-5h55v37h-55zm32 12a1 1 0 0025 0 1 1 0 00-25 0"
                    />
                </clipPath>
                <g clipPath={`url(#theme-toggle-5-${id})`}>
                    <circle cx="16" cy="16" r="15" />
                </g>
            </svg>
        </button>
    );
};

export const ThemeToggle6: React.FC<ThemeToggleProps> = ({ isDark, onToggle, className = '' }) => {
    return (
        <button
            type="button"
            className={cn(
                "rounded-full bg-slate-950 text-white transition-all duration-300 active:scale-95",
                isDark && "bg-white text-slate-950",
                className
            )}
            onClick={onToggle}
            aria-label="Toggle theme"
        >
            <svg
                viewBox="0 0 240 240"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Rotating inner circles */}
                <motion.g
                    animate={{ rotate: isDark ? -180 : 0 }}
                    transition={{ ease: "easeInOut", duration: 0.35 }}
                >
                    <path
                        d="M120 67.5C149.25 67.5 172.5 90.75 172.5 120C172.5 149.25 149.25 172.5 120 172.5"
                        fill="currentColor"
                        className={isDark ? "text-slate-950" : "text-white"}
                    />
                    <path
                        d="M120 67.5C90.75 67.5 67.5 90.75 67.5 120C67.5 149.25 90.75 172.5 120 172.5"
                        fill="currentColor"
                        className={isDark ? "text-white" : "text-slate-950"}
                    />
                </motion.g>

                {/* Outer ring path */}
                <motion.path
                    animate={{ rotate: isDark ? 180 : 0 }}
                    transition={{ ease: "easeInOut", duration: 0.35 }}
                    d="M120 3.75C55.5 3.75 3.75 55.5 3.75 120C3.75 184.5 55.5 236.25 120 236.25C184.5 236.25 236.25 184.5 236.25 120C236.25 55.5 184.5 3.75 120 3.75ZM120 214.5V172.5C90.75 172.5 67.5 149.25 67.5 120C67.5 90.75 90.75 67.5 120 67.5V25.5C172.5 25.5 214.5 67.5 214.5 120C214.5 172.5 172.5 214.5 120 214.5Z"
                    fill="currentColor"
                    className={isDark ? "text-slate-950" : "text-white"}
                />
            </svg>
        </button>
    );
};

// Export all toggles as a collection
export const ThemeToggles = {
    YinYang: ThemeToggle1,
    SunMoon: ThemeToggle2,
    SunCircles: ThemeToggle3,
    Lightbulb: ThemeToggle4,
    Eclipse: ThemeToggle5,
    YinYang2: ThemeToggle6,
};

// Default export
export default ThemeToggle2;
