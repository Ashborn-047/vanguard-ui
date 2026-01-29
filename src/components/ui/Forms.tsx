import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Check, ChevronDown } from 'lucide-react';
import type { Theme } from '../../styles/themes';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement> & { theme: Theme }> = ({ theme, className, ...props }) => (
    <label className={cn("text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", theme.text, className)} {...props} />
);

export const RadioGroup: React.FC<{ theme: Theme; value: string; onValueChange: (val: string) => void; children: React.ReactNode; className?: string }> = ({ theme, value, onValueChange, children, className }) => {
    return (
        <div className={cn("grid gap-2", className)} role="radiogroup">
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { theme, value, onValueChange });
                }
                return child;
            })}
        </div>
    );
};

export const RadioGroupItem: React.FC<{ theme: Theme; value: string; selectedValue?: string; onValueChange?: (val: string) => void; id: string }> = ({ theme, value, selectedValue, onValueChange, id }) => {
    const isChecked = value === selectedValue;
    return (
        <div
            id={id}
            onClick={() => onValueChange?.(value)}
            className={cn(
                "aspect-square h-5 w-5 rounded-full border flex items-center justify-center cursor-pointer transition-all",
                theme.input,
                isChecked ? "border-indigo-500" : "border-current opacity-40 hover:opacity-100"
            )}
        >
            {isChecked && (
                <div className={cn("h-2.5 w-2.5 rounded-full bg-indigo-500 animate-in zoom-in-50 duration-200")} />
            )}
        </div>
    );
};

export const Checkbox: React.FC<{ theme: Theme; checked?: boolean; onChange?: (val: boolean) => void; label?: string }> = ({ theme, checked, onChange, label }) => {
    return (
        <label className="flex items-center gap-3 cursor-pointer group">
            <div
                onClick={() => onChange?.(!checked)}
                className={cn(
                    "h-5 w-5 rounded-md border flex items-center justify-center transition-all",
                    theme.input,
                    checked ? theme.button : "bg-transparent",
                    "group-hover:scale-105 active:scale-95"
                )}
            >
                {checked && <Check size={14} className="text-current" strokeWidth={3} />}
            </div>
            {label && <span className={cn("text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity", theme.text)}>{label}</span>}
        </label>
    );
};

export const Select: React.FC<{ theme: Theme; options: { value: string; label: string }[]; value: string; onChange: (val: string) => void; placeholder?: string }> = ({ theme, options, value, onChange, placeholder }) => {
    return (
        <div className="relative w-full">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={cn(
                    "w-full appearance-none px-4 py-2.5 rounded-xl border outline-none font-bold text-sm transition-all",
                    theme.input,
                    theme.text,
                    "focus:ring-2 focus:ring-indigo-500/20"
                )}
            >
                {placeholder && <option value="" disabled>{placeholder}</option>}
                {options.map(opt => (
                    <option key={opt.value} value={opt.value} className="bg-white dark:bg-black text-black dark:text-white">
                        {opt.label}
                    </option>
                ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                <ChevronDown size={16} />
            </div>
        </div>
    );
};

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { theme: Theme }> = ({ theme, className, ...props }) => {
    return (
        <textarea
            className={cn(
                "w-full px-4 py-3 rounded-xl border outline-none font-medium text-sm transition-all min-h-[100px]",
                theme.input,
                theme.text,
                "focus:ring-2 focus:ring-indigo-500/20",
                className
            )}
            {...props}
        />
    );
};

export const InputOTP: React.FC<{ theme: Theme; value: string; onChange: (val: string) => void; maxLength?: number; className?: string }> = ({ theme, value, onChange, maxLength = 6, className }) => {
    return (
        <div className={cn("relative flex items-center justify-center gap-2", className)}>
            {Array.from({ length: maxLength }).map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        "w-10 h-12 rounded-lg border flex items-center justify-center text-lg font-black transition-all",
                        value[i] ? "border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.2)]" : "border-current opacity-20",
                        theme.text
                    )}
                >
                    {value[i] || ""}
                    {!value[i] && i === value.length && (
                        <div className="w-0.5 h-6 bg-indigo-500 animate-pulse" />
                    )}
                </div>
            ))}
            <input
                type="text"
                autoFocus
                value={value}
                onChange={(e) => {
                    const val = e.target.value.slice(0, maxLength);
                    if (/^\d*$/.test(val)) onChange(val);
                }}
                className="absolute inset-0 opacity-0 cursor-text"
            />
        </div>
    );
};

export const Combobox: React.FC<{ theme: Theme; options: { value: string; label: string }[]; value: string; onChange: (val: string) => void; placeholder?: string }> = ({ theme, options, value, onChange, placeholder }) => {
    const selected = options.find(o => o.value === value);
    return (
        <div className="relative group w-full">
            <div className={cn("w-full px-4 py-2.5 rounded-xl border flex items-center justify-between cursor-pointer font-bold text-sm transition-all", theme.input, theme.text)}>
                <span className={cn(!selected && "opacity-40")}>{selected ? selected.label : placeholder}</span>
                <ChevronDown size={14} className="opacity-40" />
            </div>
            <div className={cn(
                "absolute top-full left-0 mt-2 z-50 w-full overflow-hidden rounded-md border p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto",
                theme.card
            )}>
                {options.map(opt => (
                    <div
                        key={opt.value}
                        onClick={() => onChange(opt.value)}
                        className={cn(
                            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none hover:bg-black/5 dark:hover:bg-white/5",
                            theme.text
                        )}
                    >
                        {opt.label}
                        {value === opt.value && <Check size={14} className="ml-auto" />}
                    </div>
                ))}
            </div>
        </div>
    );
};
