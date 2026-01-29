import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AlertCircle, Info, CheckCircle2, AlertTriangle, X, Search } from 'lucide-react';
import type { Theme } from '../../styles/themes';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    theme: Theme;
    variant?: 'default' | 'info' | 'success' | 'warning' | 'destructive';
}

export const Alert: React.FC<AlertProps> = ({ theme, variant = 'default', className, children, ...props }) => {
    const iconMap = {
        default: Info,
        info: Info,
        success: CheckCircle2,
        warning: AlertTriangle,
        destructive: AlertCircle
    };

    const Icon = iconMap[variant];

    return (
        <div
            role="alert"
            className={cn(
                "relative w-full rounded-2xl p-4 flex gap-3 border",
                theme.card,
                variant === 'destructive' && "border-red-500/50 bg-red-500/10 text-red-600",
                className
            )}
            {...props}
        >
            <Icon className="h-5 w-5 shrink-0 transition-transform hover:scale-110" />
            <div className="flex-1 space-y-1">
                {children}
            </div>
        </div>
    );
};

export const AlertTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement> & { theme: Theme }> = ({ theme, className, ...props }) => (
    <h5 className={cn("font-black leading-none tracking-tight", theme.text, className)} {...props} />
);

export const AlertDescription: React.FC<React.HTMLAttributes<HTMLDivElement> & { theme: Theme }> = ({ theme, className, ...props }) => (
    <div className={cn("text-sm opacity-60 font-medium", theme.text, className)} {...props} />
);

export const Dialog: React.FC<{ theme: Theme; open: boolean; onClose: () => void; children: React.ReactNode }> = ({ theme, open, onClose, children }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
            <div className={cn(
                "relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300",
                theme.card,
                theme.name === 'Neo-Brutalism' && "border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none"
            )}>
                {children}
            </div>
        </div>
    );
};

export const DialogContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={cn("p-8", className)}>{children}</div>
);

export const DialogHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={cn("mb-6 space-y-2", className)}>{children}</div>
);

export const DialogTitle: React.FC<{ theme: Theme; children: React.ReactNode }> = ({ theme, children }) => (
    <h2 className={cn("text-2xl font-black tracking-tight", theme.text)}>{children}</h2>
);

export const DialogFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={cn("mt-8 flex justify-end gap-3", className)}>{children}</div>
);

export const Toast: React.FC<{ theme: Theme; title: string; description?: string; open: boolean; onClose: () => void }> = ({ theme, title, description, open, onClose }) => {
    if (!open) return null;

    return (
        <div className={cn(
            "fixed bottom-6 right-6 z-[100] w-full max-w-sm p-5 rounded-2xl shadow-2xl flex items-start gap-4 animate-in slide-in-from-right-10 duration-500",
            theme.card
        )}>
            <div className="flex-1">
                <h5 className={cn("font-black text-sm", theme.text)}>{title}</h5>
                {description && <p className={cn("text-xs opacity-60 mt-1", theme.text)}>{description}</p>}
            </div>
            <button onClick={onClose} className={cn("opacity-20 hover:opacity-100 transition-opacity", theme.text)}>
                <X size={14} />
            </button>
        </div>
    );
};

export const Tooltip: React.FC<{ theme: Theme; content: string; children: React.ReactNode }> = ({ theme, content, children }) => {
    return (
        <div className="group relative inline-block">
            {children}
            <div className={cn(
                "absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[100] shadow-xl",
                theme.card
            )}>
                {content}
                <div className={cn("absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-current opacity-10", theme.text)} />
            </div>
        </div>
    );
};

export const DropdownMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="relative group inline-block">{children}</div>
);

export const DropdownMenuTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="cursor-pointer">{children}</div>
);

export const DropdownMenuContent: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ theme, children, className }) => (
    <div className={cn(
        "absolute top-full left-0 mt-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md animate-in slide-in-from-top-1 opacity-0 group-hover:opacity-100 transition-all pointer-events-none group-hover:pointer-events-auto",
        theme.card,
        className
    )}>
        {children}
    </div>
);

export const DropdownMenuItem: React.FC<{ theme: Theme; children: React.ReactNode; onClick?: () => void; className?: string }> = ({ theme, children, onClick, className }) => (
    <div
        onClick={onClick}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none hover:bg-black/5 dark:hover:bg-white/5",
            theme.text,
            className
        )}
    >
        {children}
    </div>
);

export const Popover: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="relative group inline-block">{children}</div>
);

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="cursor-pointer">{children}</div>
);

export const PopoverContent: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ theme, children, className }) => (
    <div className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-72 rounded-md border p-4 shadow-md animate-in zoom-in-95 opacity-0 group-hover:opacity-100 transition-all pointer-events-none group-hover:pointer-events-auto",
        theme.card,
        className
    )}>
        {children}
    </div>
);

export const HoverCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="relative group inline-block">{children}</div>
);

export const HoverCardTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="cursor-default">{children}</div>
);

export const HoverCardContent: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ theme, children, className }) => (
    <div className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 w-80 rounded-md border p-4 shadow-md animate-in zoom-in-95 opacity-0 group-hover:opacity-100 transition-all pointer-events-none group-hover:pointer-events-auto",
        theme.card,
        className
    )}>
        {children}
    </div>
);

export const Collapsible: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="relative group">{children}</div>
);

export const CollapsibleTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="cursor-pointer">{children}</div>
);

export const CollapsibleContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="overflow-hidden transition-all group-hover:block hidden pt-2">{children}</div>
);

export const AlertDialog: React.FC<{ theme: Theme; open: boolean; onClose: () => void; children: React.ReactNode }> = ({ theme, open, onClose, children }) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />
            <div className={cn(
                "relative w-full max-w-md rounded-2xl p-6 shadow-2xl animate-in zoom-in-95 duration-300",
                theme.card
            )}>
                {children}
            </div>
        </div>
    );
};

export const AlertDialogHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="space-y-2 text-left">{children}</div>
);

export const AlertDialogTitle: React.FC<{ theme: Theme; children: React.ReactNode }> = ({ theme, children }) => (
    <h3 className={cn("text-lg font-black", theme.text)}>{children}</h3>
);

export const AlertDialogDescription: React.FC<{ theme: Theme; children: React.ReactNode }> = ({ theme, children }) => (
    <p className={cn("text-sm opacity-60", theme.text)}>{children}</p>
);

export const AlertDialogFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="mt-6 flex justify-end gap-3">{children}</div>
);

export const AlertDialogAction: React.FC<{ theme: Theme; onClick: () => void; children: React.ReactNode }> = ({ theme, onClick, children }) => (
    <button
        onClick={onClick}
        className={cn(
            "px-4 py-2 rounded-xl font-bold text-sm transition-all",
            theme.button
        )}
    >
        {children}
    </button>
);

export const AlertDialogCancel: React.FC<{ theme: Theme; onClick: () => void; children: React.ReactNode }> = ({ theme, onClick, children }) => (
    <button
        onClick={onClick}
        className={cn(
            "px-4 py-2 rounded-xl font-bold text-sm transition-all border border-current opacity-40 hover:opacity-100",
            theme.text
        )}
    >
        {children}
    </button>
);

export const Drawer: React.FC<{ theme: Theme; open: boolean; onClose: () => void; children: React.ReactNode }> = ({ theme, open, onClose, children }) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-end justify-center">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose} />
            <div className={cn(
                "relative w-full max-w-lg rounded-t-3xl p-8 shadow-2xl animate-in slide-in-from-bottom-full duration-500",
                theme.card
            )}>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-current opacity-20" />
                {children}
            </div>
        </div>
    );
};

export const DrawerHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="space-y-2 text-center py-4">{children}</div>
);

export const DrawerTitle: React.FC<{ theme: Theme; children: React.ReactNode }> = ({ theme, children }) => (
    <h3 className={cn("text-xl font-black", theme.text)}>{children}</h3>
);

export const DrawerDescription: React.FC<{ theme: Theme; children: React.ReactNode }> = ({ theme, children }) => (
    <p className={cn("text-sm opacity-60", theme.text)}>{children}</p>
);

export const DrawerFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="mt-8 space-y-3">{children}</div>
);

export const Command: React.FC<{ theme: Theme; children: React.ReactNode; className?: string }> = ({ theme, children, className }) => (
    <div className={cn("flex h-full w-full flex-col overflow-hidden rounded-md border shadow-md", theme.card, className)}>
        {children}
    </div>
);

export const CommandInput: React.FC<{ theme: Theme; placeholder?: string; value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ theme, placeholder, value, onChange }) => (
    <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <input
            className={cn("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50", theme.text)}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    </div>
);

export const CommandList: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="max-h-[300px] overflow-y-auto overflow-x-hidden p-1 custom-scrollbar">{children}</div>
);

export const CommandItem: React.FC<{ theme: Theme; children: React.ReactNode; onSelect?: () => void }> = ({ theme, children, onSelect }) => (
    <div
        onClick={onSelect}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-black/5 dark:hover:bg-white/5 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            theme.text
        )}
    >
        {children}
    </div>
);

export const ContextMenu: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="group relative">{children}</div>
);

export const ContextMenuTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="cursor-context-menu">{children}</div>
);
