import {
    LayoutGrid, Type, Menu, PanelLeft, BarChart3, MessageSquare, Zap
} from 'lucide-react';

export const libraryStructure = [
    {
        category: "General",
        icon: LayoutGrid,
        items: [{ id: 'button', label: 'Button' }, { id: 'badge', label: 'Badge' }, { id: 'icons', label: 'Icons' }]
    },
    {
        category: "Tactile Lab",
        icon: Zap,
        items: [{ id: 'knobs', label: 'Tactile Knobs' }, { id: 'faders', label: 'Faders & Toggles' }]
    },
    {
        category: "Layout",
        icon: PanelLeft,
        items: [{ id: 'aspect-ratio', label: 'Aspect Ratio' }, { id: 'card', label: 'Card' }, { id: 'separator', label: 'Separator' }, { id: 'resizable', label: 'Resizable' }, { id: 'scroll-area', label: 'Scroll Area' }]
    },
    {
        category: "Navigation",
        icon: Menu,
        items: [{ id: 'breadcrumb', label: 'Breadcrumb' }, { id: 'menubar', label: 'Menubar' }, { id: 'nav-menu', label: 'Navigation Menu' }, { id: 'pagination', label: 'Pagination' }, { id: 'tabs', label: 'Tabs' }]
    },
    {
        category: "Form Elements",
        icon: Type,
        items: [{ id: 'checkbox', label: 'Checkbox' }, { id: 'input', label: 'Input' }, { id: 'input-otp', label: 'Input OTP' }, { id: 'radio-group', label: 'Radio Group' }, { id: 'select', label: 'Select' }, { id: 'slider', label: 'Slider' }, { id: 'switch', label: 'Switch' }, { id: 'textarea', label: 'Textarea' }, { id: 'combobox', label: 'Combobox' }, { id: 'date-picker', label: 'Date Picker' }]
    },
    {
        category: "Data Display",
        icon: BarChart3,
        items: [{ id: 'avatar', label: 'Avatar' }, { id: 'progress', label: 'Progress' }, { id: 'skeleton', label: 'Skeleton' }, { id: 'table', label: 'Table' }, { id: 'chart', label: 'Chart' }, { id: 'calendar', label: 'Calendar' }]
    },
    {
        category: "Feedback",
        icon: MessageSquare,
        items: [{ id: 'alert', label: 'Alert' }, { id: 'alert-dialog', label: 'Alert Dialog' }, { id: 'dialog', label: 'Dialog' }, { id: 'drawer', label: 'Drawer' }, { id: 'dropdown-menu', label: 'Dropdown Menu' }, { id: 'hover-card', label: 'Hover Card' }, { id: 'popover', label: 'Popover' }, { id: 'sonner', label: 'Sonner' }, { id: 'toast', label: 'Toast' }, { id: 'tooltip', label: 'Tooltip' }, { id: 'collapsible', label: 'Collapsible' }, { id: 'command', label: 'Command' }, { id: 'context-menu', label: 'Context Menu' }]
    }
];

export const designContext = {
    minimalism: {
        title: "Minimalism",
        origin: "Rooted in Swiss Style and Bauhaus.",
        principles: ["Content-first: Removal of all non-essential elements.", "Negative space: Heavy use of whitespace to create hierarchy.", "Strict grids: Layouts are governed by rigid mathematical alignment.", "Scalable typography: Type size is the primary method of emphasis."],
        bestFor: "Complex SaaS dashboards, documentation sites, and data-heavy applications where clarity is paramount."
    },
    neoBrutalism: {
        title: "Neo-Brutalism",
        origin: "Evolution of brutalist architecture applied to web design.",
        principles: ["Raw aesthetic: Intentionally unrefined and anti-mainstream.", "High contrast: Pure black borders and saturated clashing colors.", "Default typography: Usage of system fonts or Courier/Times New Roman.", "Hard shadows: No blurring; shadows are distinct geometrical shapes."],
        bestFor: "Personal brands, creative agencies, music portfolios, and Gen Z targeted marketing campaigns."
    },
    glassmorphism: {
        title: "Glassmorphism",
        origin: "Popularized by Apple's iOS 7 and later macOS Big Sur.",
        principles: ["Translucency: Elements look like frosted glass panes.", "Vivid backgrounds: Colorful blobs or gradients to show through the blur.", "Light borders: 1px semi-transparent white borders to mimic glass edges.", "Hierarchy through depth: Floating layers create a sense of Z-index."],
        bestFor: "Operating system interfaces, floating modals, media player overlays, and mobile app landing pages."
    },
    skeuomorphism: {
        title: "Skeuomorphism (Modern)",
        origin: "A resurgence of early iOS design, now refined with modern CSS.",
        principles: ["Tactile realism: Buttons and toggles look physically pushable.", "Subtle gradients: Mimicking how light curves around surfaces.", "Soft shadows: Multiple shadow layers to create convincing depth.", "Metaphor: Using real-world counterparts (knobs, switches) for controls."],
        bestFor: "Audio production software, smart home controls, calculator apps, and tactile utility tools."
    },
    claymorphism: {
        title: "Claymorphism",
        origin: "A trend emerging from the NFT and Web3 space.",
        principles: ["Inflated shapes: Elements look like 3D clay or soft plastic.", "Inner shadows: Used to create volume rather than drop shadows.", "Roundness: High border-radius values for a friendly appearance.", "Matte finish: Surfaces are non-glossy and pastel-colored."],
        bestFor: "EdTech platforms, health and mindfulness apps, and friendly onboarding flows."
    },
    liquidGlass: {
        title: "Liquid Glass",
        origin: "An ultra-modern evolution of glassmorphism and holographic design.",
        principles: ["High refraction: Strong blurs that distort background shapes significantly.", "Organic forms: Fluid blobs and mesh gradients instead of rigid geometry.", "Dark mode dominance: Works best on deep, rich backgrounds.", "Specular highlights: Imitating how light catches the edge of machined glass."],
        bestFor: "Web3/Crypto dashboards, AI tools, futuristic tech landing pages, and premium dark-mode apps."
    }
};
