import React, { useState } from 'react';
import { Copy, Check, Code as CodeIcon } from 'lucide-react';
import type { Theme } from '../styles/themes';

interface ShowcaseProps {
    title: string;
    description: string;
    children: React.ReactNode;
    theme: Theme;
    code?: string;
}

export const Showcase: React.FC<ShowcaseProps> = ({ title, description, children, theme, code }) => {
    const [showCode, setShowCode] = useState(false);
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        if (code) {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500 mb-20">
            <div className="flex justify-between items-end">
                <div className="space-y-2">
                    <h2 className={`text-3xl font-bold ${theme.text}`}>{title}</h2>
                    <p className={`text-lg opacity-70 max-w-2xl ${theme.text}`}>{description}</p>
                </div>
                {code && (
                    <div className="flex gap-2">
                        <button
                            onClick={() => setShowCode(!showCode)}
                            className={`p-2 rounded-lg border transition-all ${theme.secondaryButton} ${showCode ? theme.accent : ''}`}
                            title="Toggle Code View"
                        >
                            <CodeIcon size={18} />
                        </button>
                        <button
                            onClick={copyToClipboard}
                            className={`p-2 rounded-lg border transition-all ${theme.secondaryButton}`}
                            title="Copy Component Code"
                        >
                            {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                        </button>
                    </div>
                )}
            </div>

            <div className={`p-8 md:p-12 border rounded-xl flex items-center justify-center min-h-[300px] overflow-hidden relative ${theme.card}`}>
                {children}
            </div>

            {showCode && code && (
                <div className={`p-6 rounded-xl border font-mono text-sm overflow-x-auto relative ${theme.card} bg-black/5`}>
                    <pre className={theme.text}>
                        <code>{code}</code>
                    </pre>
                </div>
            )}
        </div>
    );
};
