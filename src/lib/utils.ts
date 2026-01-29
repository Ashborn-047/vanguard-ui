import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines tailwind classes with dynamic logic and automatic conflict resolution.
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
