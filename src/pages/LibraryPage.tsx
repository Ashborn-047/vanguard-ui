import React, { useState } from 'react';
import { Search, Menu, X, LayoutGrid, Plus, Search as SearchIcon } from 'lucide-react';
import type { Theme } from '../styles/themes';
import { libraryStructure } from '../data/library';
import { Showcase } from '../components/Showcase';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { TactileKnob } from '../components/ui/TactileKnob';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Switch } from '../components/ui/Switch';
import { Slider } from '../components/ui/Slider';
import { Checkbox, Select, Textarea, RadioGroup, RadioGroupItem, Label, InputOTP, Combobox } from '../components/ui/Forms';
import { ScrollArea, Separator, AspectRatio, Resizable } from '../components/ui/Layout';
import { Breadcrumb, Pagination, Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from '../components/ui/Navigation';
import { Avatar, Progress, Skeleton, Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Calendar } from '../components/ui/Display';
import { Fader, TactileToggle } from '../components/ui/TactileKnob';
import { Tabs } from '../components/ui/Tabs';
import { Alert, AlertTitle, AlertDescription, Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, Toast, Tooltip, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, Popover, PopoverTrigger, PopoverContent, HoverCard, HoverCardTrigger, HoverCardContent, Collapsible, CollapsibleTrigger, CollapsibleContent, AlertDialog, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction, AlertDialogCancel, Drawer, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, Command, CommandInput, CommandList, CommandItem, ContextMenu, ContextMenuTrigger } from '../components/ui/Feedback';
import * as Lucide from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface LibraryPageProps {
    theme: Theme;
    currentThemeKey: string;
}

export const LibraryPage: React.FC<LibraryPageProps> = ({ theme, currentThemeKey }) => {
    const [activeComponent, setActiveComponent] = useState('button');
    const [sidebarSearch, setSidebarSearch] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Component States
    const [switchState, setSwitchState] = useState(true);
    const [checkboxState, setCheckboxState] = useState(true);
    const [sliderVal, setSliderVal] = useState(40);
    const [activeTab, setActiveTab] = useState('account');
    const [selectVal, setSelectVal] = useState('vanguard');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [toastOpen, setToastOpen] = useState(false);
    const [radioVal, setRadioVal] = useState('vanguard');
    const [faderVal, setFaderVal] = useState(70);
    const [toggleActive, setToggleActive] = useState(false);
    const [alertOpen, setAlertOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [otpVal, setOtpVal] = useState('');
    const [commandSearch, setCommandSearch] = useState('');
    const [comboboxVal, setComboboxVal] = useState('');

    const filteredLibrary = libraryStructure.map(cat => ({
        ...cat,
        items: cat.items.filter(item => item.label.toLowerCase().includes(sidebarSearch.toLowerCase()))
    })).filter(cat => cat.items.length > 0);

    const getActiveItemLabel = () => {
        for (const cat of libraryStructure) {
            const item = cat.items.find(i => i.id === activeComponent);
            if (item) return item.label;
        }
        return activeComponent;
    };

    const itemLabel = getActiveItemLabel();

    const renderComponentView = () => {
        switch (activeComponent) {
            case 'button':
                return (
                    <Showcase
                        theme={theme}
                        title="Button"
                        description="Displays a button or a component that looks like a button."
                        code={`import { Button } from './components/ui/Button';\n\n<Button theme={theme}>Default Button</Button>`}
                    >
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            <Button theme={theme}>Default</Button>
                            <Button theme={theme} variant="outline" className="flex items-center gap-2"><Plus size={16} /> Icon Button</Button>
                            <Button theme={theme} size="icon"><Search size={18} /></Button>
                            <Button theme={theme} className="rounded-full">Pill Button</Button>
                            <Button theme={theme} variant="secondary">Secondary</Button>
                        </div>
                    </Showcase>
                );
            case 'badge':
                return (
                    <Showcase
                        theme={theme}
                        title="Badge"
                        description="Displays a badge or a component that looks like a badge."
                        code={`import { Badge } from './components/ui/Badge';\n\n<Badge theme={theme}>New</Badge>`}
                    >
                        <div className="flex flex-wrap gap-4">
                            <Badge theme={theme}>Standard</Badge>
                            <Badge theme={theme} variant="outline">Outline</Badge>
                            <Badge theme={theme} variant="accent">Accent</Badge>
                            <Badge theme={theme} className="bg-blue-500 text-white border-none">Custom</Badge>
                        </div>
                    </Showcase>
                );
            case 'knobs':
                return (
                    <Showcase
                        theme={theme}
                        title="Tactile Knobs"
                        description="Specialized control inputs (Best in Skeuomorphism & Liquid Glass)."
                        code={`<TactileKnob \n  label="Drive" \n  value={88} \n  theme={theme} \n  themeKey="${currentThemeKey}" \n/>`}
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full items-center justify-items-center">
                            <TactileKnob label="Level" value={74} theme={theme} themeKey={currentThemeKey} />
                            <TactileKnob label="Width" value={22} theme={theme} themeKey={currentThemeKey} />
                            <TactileKnob label="Drive" value={88} theme={theme} themeKey={currentThemeKey} />
                            <TactileKnob label="Mix" value={50} theme={theme} themeKey={currentThemeKey} />
                        </div>
                    </Showcase>
                );
            case 'card':
                return (
                    <Showcase
                        theme={theme}
                        title="Card"
                        description="A container that groups related content and actions."
                        code={`<Card theme={theme}>\n  <CardHeader>\n    <CardTitle theme={theme}>Title</CardTitle>\n  </CardHeader>\n</Card>`}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                            <Card theme={theme} className="max-w-[350px]">
                                <div className="aspect-video w-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 flex items-center justify-center opacity-50">
                                    <span className="font-bold">Cover Image</span>
                                </div>
                                <CardHeader>
                                    <CardTitle theme={theme}>Create Project</CardTitle>
                                    <CardDescription theme={theme}>Deploy your new project in one-click.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Input theme={theme} placeholder="Project Name" />
                                </CardContent>
                                <CardFooter className="justify-between">
                                    <Button theme={theme} variant="ghost" size="sm">Cancel</Button>
                                    <Button theme={theme} size="sm">Deploy</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </Showcase>
                );
            case 'input':
                return (
                    <Showcase
                        theme={theme}
                        title="Input"
                        description="Displays a form input field or a component that looks like an input field."
                        code={`<Input theme={theme} placeholder="Email" />`}
                    >
                        <div className="max-w-sm w-full space-y-4">
                            <Input theme={theme} placeholder="Default Input" />
                            <div className="relative">
                                <SearchIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" />
                                <Input theme={theme} placeholder="Search..." className="pl-10" />
                            </div>
                        </div>
                    </Showcase>
                );
            case 'tabs':
                return (
                    <Showcase
                        theme={theme}
                        title="Tabs"
                        description="A set of layered sections of content, known as tab panels, that are displayed one at a time."
                        code={`<Tabs \n  theme={theme} \n  tabs={[{id: 'a', label: 'Tab A'}]} \n  activeTab={active} \n  onTabChange={setActive} \n/>`}
                    >
                        <div className="w-full max-w-md">
                            <Tabs
                                theme={theme}
                                activeTab={activeTab}
                                onTabChange={setActiveTab}
                                tabs={[
                                    { id: 'account', label: 'Account' },
                                    { id: 'password', label: 'Password' },
                                    { id: 'settings', label: 'Settings' }
                                ]}
                            />
                            <div className="py-10 text-center opacity-50">
                                {activeTab === 'account' && <p>Account details content area.</p>}
                                {activeTab === 'password' && <p>Security and password settings.</p>}
                                {activeTab === 'settings' && <p>Preference management.</p>}
                            </div>
                        </div>
                    </Showcase>
                );
            case 'switch':
                return (
                    <Showcase
                        theme={theme}
                        title="Switch"
                        description="A control that allows the user to toggle between checked and unchecked states."
                        code={`<Switch theme={theme} themeKey="${currentThemeKey}" checked={checked} onCheckedChange={setChecked} />`}
                    >
                        <div className="flex items-center space-x-4">
                            <Switch theme={theme} themeKey={currentThemeKey} checked={switchState} onCheckedChange={setSwitchState} />
                            <span className={`text-sm font-medium ${theme.text}`}>Aesthetic Toggle</span>
                        </div>
                    </Showcase>
                );
            case 'slider':
                return (
                    <Showcase
                        theme={theme}
                        title="Slider"
                        description="An input where the user selects a value from a given range."
                        code={`<Slider theme={theme} themeKey="${currentThemeKey}" value={val} onValueChange={setVal} />`}
                    >
                        <div className="w-full max-w-sm">
                            <Slider theme={theme} themeKey={currentThemeKey} value={sliderVal} onValueChange={setSliderVal} />
                            <div className="mt-4 text-center text-xs opacity-50">{sliderVal}%</div>
                        </div>
                    </Showcase>
                );
            case 'alert':
                return (
                    <Showcase
                        theme={theme}
                        title="Alert"
                        description="Displays a callout for user attention."
                        code={`<Alert theme={theme} variant="success">\n  <AlertTitle theme={theme}>Success!</AlertTitle>\n  <AlertDescription theme={theme}>Your theme has been deployed.</AlertDescription>\n</Alert>`}
                    >
                        <div className="w-full max-w-xl space-y-4">
                            <Alert theme={theme} variant="info">
                                <AlertTitle theme={theme}>Information</AlertTitle>
                                <AlertDescription theme={theme}>Vanguard UI is currently in v2.0 beta.</AlertDescription>
                            </Alert>
                            <Alert theme={theme} variant="success">
                                <AlertTitle theme={theme}>Update Complete</AlertTitle>
                                <AlertDescription theme={theme}>All components are now theme-aware and responsive.</AlertDescription>
                            </Alert>
                            <Alert theme={theme} variant="destructive">
                                <AlertTitle theme={theme}>Heads Up!</AlertTitle>
                                <AlertDescription theme={theme}>This aesthetic requires high GPU performance for blurs.</AlertDescription>
                            </Alert>
                        </div>
                    </Showcase>
                );
            case 'checkbox':
                return (
                    <Showcase
                        theme={theme}
                        title="Checkbox"
                        description="A control that allows the user to toggle between checked and unchecked states."
                        code={`<Checkbox theme={theme} checked={checked} onChange={setChecked} label="Accept terms" />`}
                    >
                        <div className="space-y-6">
                            <Checkbox theme={theme} checked={checkboxState} onChange={setCheckboxState} label="Enable aesthetic shifting" />
                            <Checkbox theme={theme} checked={!checkboxState} onChange={() => { }} label="Sync with system preferences" />
                            <Checkbox theme={theme} checked={true} onChange={() => { }} label="Optimized for performance" />
                        </div>
                    </Showcase>
                );
            case 'select':
                return (
                    <Showcase
                        theme={theme}
                        title="Select"
                        description="Displays a list of options for the user to pick from—triggered by a button."
                        code={`<Select \n  theme={theme} \n  value={val} \n  onChange={setVal} \n  options={[{value: 'v', label: 'Vanguard'}]} \n/>`}
                    >
                        <div className="w-full max-w-xs">
                            <Select
                                theme={theme}
                                value={selectVal}
                                onChange={setSelectVal}
                                options={[
                                    { value: 'vanguard', label: 'Vanguard UI' },
                                    { value: 'shadcn', label: 'Shadcn UI' },
                                    { value: 'mui', label: 'Material UI' },
                                    { value: 'dimension', label: 'Dimension UI' }
                                ]}
                            />
                        </div>
                    </Showcase>
                );
            case 'textarea':
                return (
                    <Showcase
                        theme={theme}
                        title="Textarea"
                        description="A multi-line text input field."
                        code={`<Textarea theme={theme} placeholder="Tell us about your project..." />`}
                    >
                        <div className="w-full max-w-md">
                            <Textarea theme={theme} placeholder="Describe the aesthetic vision for your next big product..." />
                        </div>
                    </Showcase>
                );
            case 'separator':
                return (
                    <Showcase
                        theme={theme}
                        title="Separator"
                        description="Visually or semantically separates content."
                        code={`<Separator theme={theme} />`}
                    >
                        <div className="w-full space-y-4">
                            <div className={`text-sm font-bold ${theme.text}`}>Top Section</div>
                            <Separator theme={theme} />
                            <div className={`text-sm font-bold ${theme.text}`}>Bottom Section</div>
                            <div className="h-20 flex gap-10 items-center justify-center">
                                <span className={`text-sm opacity-50 ${theme.text}`}>Item A</span>
                                <Separator theme={theme} orientation="vertical" />
                                <span className={`text-sm opacity-50 ${theme.text}`}>Item B</span>
                            </div>
                        </div>
                    </Showcase>
                );
            case 'icons':
                return (
                    <Showcase
                        theme={theme}
                        title="Icons"
                        description="Curated Lucide icons optimized for our aesthetics."
                        code={`import { Zap } from 'lucide-react';\n\n<Zap size={24} />`}
                    >
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-8">
                            {[
                                'Zap', 'LayoutGrid', 'Palette', 'ArrowRight', 'Terminal', 'Boxes',
                                'BookOpen', 'Search', 'Menu', 'Shield', 'Flame', 'Heart',
                                'Globe', 'Cpu', 'Layers', 'Maximize', 'Star', 'Moon'
                            ].map(iconName => {
                                const Icon = (Lucide as any)[iconName];
                                return (
                                    <div key={iconName} className="flex flex-col items-center gap-2">
                                        <div className={cn("p-4 rounded-xl border border-current opacity-20 hover:opacity-100 transition-opacity", theme.text)}>
                                            <Icon size={24} />
                                        </div>
                                        <span className={`text-[10px] uppercase font-black opacity-40 ${theme.text}`}>{iconName}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </Showcase>
                );
            case 'scroll-area':
                return (
                    <Showcase
                        theme={theme}
                        title="Scroll Area"
                        description="A wrapper to apply the custom scrollbar utility."
                        code={`<ScrollArea theme={theme} className="h-40">Content...</ScrollArea>`}
                    >
                        <ScrollArea theme={theme} className="h-60 w-full max-w-sm border border-current opacity-20 rounded-xl p-6">
                            <div className={`space-y-4 ${theme.text}`}>
                                <h4 className="font-bold">Project Genesis</h4>
                                <p className="text-sm opacity-70">
                                    Vanguard began as an experiment in runtime theme manipulation.
                                    The goal was to create a system where components didn't just change color,
                                    but changed their entire geometric identity.
                                </p>
                                <p className="text-sm opacity-70">
                                    Traditional component libraries are built with a single design language.
                                    If you want to move from Material to Brutalism, you usually have to rethink your entire codebase.
                                </p>
                                <p className="text-sm opacity-70">
                                    With Vanguard, the "Aesthetic Token" is the source of truth.
                                    Whether you are building for a Fintech app or an NFT marketplace,
                                    the same logical components adapt to the emotional requirements of the UI.
                                </p>
                            </div>
                        </ScrollArea>
                    </Showcase>
                );
            case 'avatar':
                return (
                    <Showcase
                        theme={theme}
                        title="Avatar"
                        description="An image element with a fallback for representing the user."
                        code={`<Avatar theme={theme} fallback="JD" />`}
                    >
                        <div className="flex gap-8 items-center">
                            <Avatar theme={theme} fallback="JD" className="h-20 w-20 text-xl" />
                            <Avatar theme={theme} fallback="JD" className="h-16 w-16" />
                            <Avatar theme={theme} fallback="JD" />
                        </div>
                    </Showcase>
                );
            case 'progress':
                return (
                    <Showcase
                        theme={theme}
                        title="Progress"
                        description="Displays an indicator showing the completion progress of a task."
                        code={`<Progress theme={theme} value={66} />`}
                    >
                        <div className="w-full max-w-sm space-y-6">
                            <Progress theme={theme} value={33} />
                            <Progress theme={theme} value={66} />
                            <Progress theme={theme} value={90} />
                        </div>
                    </Showcase>
                );
            case 'skeleton':
                return (
                    <Showcase
                        theme={theme}
                        title="Skeleton"
                        description="Use to show a placeholder while content is loading."
                        code={`<Skeleton theme={theme} className="h-4 w-[250px]" />`}
                    >
                        <div className="flex items-center space-x-4">
                            <Skeleton theme={theme} className="h-12 w-12 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton theme={theme} className="h-4 w-[250px]" />
                                <Skeleton theme={theme} className="h-4 w-[200px]" />
                            </div>
                        </div>
                    </Showcase>
                );
            case 'breadcrumb':
                return (
                    <Showcase
                        theme={theme}
                        title="Breadcrumb"
                        description="Displays the path to the current resource."
                        code={`<Breadcrumb theme={theme} items={['Home', 'Library', 'Nav']} />`}
                    >
                        <Breadcrumb theme={theme} items={['Home', 'Components', 'Breadcrumb']} />
                    </Showcase>
                );
            case 'pagination':
                return (
                    <Showcase
                        theme={theme}
                        title="Pagination"
                        description="Displays navigation controls for paged content."
                        code={`<Pagination theme={theme} current={1} total={10} />`}
                    >
                        <Pagination theme={theme} current={1} total={12} />
                    </Showcase>
                );
            case 'dialog':
                return (
                    <Showcase
                        theme={theme}
                        title="Dialog"
                        description="A window overlaid on either the primary window or another dialog window."
                        code={`<Dialog theme={theme} open={open} onClose={() => setOpen(false)}>\n  <DialogContent>...</DialogContent>\n</Dialog>`}
                    >
                        <div className="text-center">
                            <Button theme={theme} onClick={() => setDialogOpen(true)}>Open Modal Reality</Button>
                            <Dialog theme={theme} open={dialogOpen} onClose={() => setDialogOpen(false)}>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle theme={theme}>Aesthetic Override</DialogTitle>
                                        <p className={`text-sm opacity-60 ${theme.text}`}>This modal inherits the active token ecosystem. Notice the backdrop and framing.</p>
                                    </DialogHeader>
                                    <div className="py-4">
                                        <Input theme={theme} placeholder="Enter override code..." />
                                    </div>
                                    <DialogFooter>
                                        <Button theme={theme} variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
                                        <Button theme={theme} onClick={() => setDialogOpen(false)}>Apply Changes</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </Showcase>
                );
            case 'toast':
                return (
                    <Showcase
                        theme={theme}
                        title="Toast"
                        description="A succinct message that is displayed after an action."
                        code={`<Toast \n  theme={theme} \n  title="Success" \n  description="Action completed" \n  open={open} \n  onClose={() => setOpen(false)} \n/>`}
                    >
                        <div className="text-center">
                            <Button theme={theme} onClick={() => setToastOpen(true)}>Trigger Toast Notification</Button>
                            <Toast
                                theme={theme}
                                title="Reality Shifting Success"
                                description="The new aesthetic tokens have been applied to your workspace."
                                open={toastOpen}
                                onClose={() => setToastOpen(false)}
                            />
                        </div>
                    </Showcase>
                );
            case 'tooltip':
                return (
                    <Showcase
                        theme={theme}
                        title="Tooltip"
                        description="A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
                        code={`<Tooltip theme={theme} content="Helpful info">\n  <Button>Hover Me</Button>\n</Tooltip>`}
                    >
                        <div className="flex gap-8 justify-center">
                            <Tooltip theme={theme} content="This shifts to Liquid Glass">
                                <Button theme={theme}>Hover for Info</Button>
                            </Tooltip>
                            <Tooltip theme={theme} content="Standard Lucide Icon">
                                <div className={cn("p-4 rounded-xl border border-current opacity-20", theme.text)}>
                                    <Lucide.Info size={24} />
                                </div>
                            </Tooltip>
                        </div>
                    </Showcase>
                );
            case 'radio-group':
                return (
                    <Showcase
                        theme={theme}
                        title="Radio Group"
                        description="A set of checkable buttons—known as radio buttons—where no more than one button can be checked at a time."
                        code={`<RadioGroup theme={theme} value={val} onValueChange={setVal}>\n  <div className="flex items-center space-x-2">\n    <RadioGroupItem value="v" id="v" />\n    <Label theme={theme} htmlFor="v">Vanguard</Label>\n  </div>\n</RadioGroup>`}
                    >
                        <RadioGroup theme={theme} value={radioVal} onValueChange={setRadioVal} className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <RadioGroupItem theme={theme} value="vanguard" id="radio-vanguard" />
                                <Label theme={theme} htmlFor="radio-vanguard">Vanguard Aesthetic</Label>
                            </div>
                            <div className="flex items-center space-x-3">
                                <RadioGroupItem theme={theme} value="neo" id="radio-neo" />
                                <Label theme={theme} htmlFor="radio-neo">Neo-Brutalism Path</Label>
                            </div>
                            <div className="flex items-center space-x-3">
                                <RadioGroupItem theme={theme} value="liquid" id="radio-liquid" />
                                <Label theme={theme} htmlFor="radio-liquid">Liquid Glass Reality</Label>
                            </div>
                        </RadioGroup>
                    </Showcase>
                );
            case 'table':
                return (
                    <Showcase
                        theme={theme}
                        title="Table"
                        description="A responsive table component for displaying tabular data."
                        code={`<Table theme={theme}>...</Table>`}
                    >
                        <Table theme={theme}>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Component</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead className="text-right">Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-bold">Button</TableCell>
                                    <TableCell>General</TableCell>
                                    <TableCell className="text-right"><Badge theme={theme} variant="accent">Stable</Badge></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-bold">Tactile Knob</TableCell>
                                    <TableCell>Tactile Lab</TableCell>
                                    <TableCell className="text-right"><Badge theme={theme} variant="outline">Experimental</Badge></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-bold">Radio Group</TableCell>
                                    <TableCell>Forms</TableCell>
                                    <TableCell className="text-right"><Badge theme={theme} variant="accent">New</Badge></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Showcase>
                );
            case 'aspect-ratio':
                return (
                    <Showcase
                        theme={theme}
                        title="Aspect Ratio"
                        description="Displays content within a desired ratio."
                        code={`<AspectRatio ratio={16 / 9}>\n  <img src="..." />\n</AspectRatio>`}
                    >
                        <div className="w-full max-w-md overflow-hidden rounded-xl border border-current opacity-20">
                            <AspectRatio ratio={16 / 9}>
                                <div className="w-full h-full bg-gradient-to-br from-indigo-500/40 to-purple-500/40 flex items-center justify-center font-black">
                                    16:9 Cinema Reality
                                </div>
                            </AspectRatio>
                        </div>
                    </Showcase>
                );
            case 'resizable':
                return (
                    <Showcase
                        theme={theme}
                        title="Resizable"
                        description="A container that allows users to adjust its dimensions."
                        code={`<Resizable theme={theme}>\n  Resizable Content\n</Resizable>`}
                    >
                        <Resizable theme={theme} className="w-60 h-40 flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-xl">
                            <p className="text-xs font-bold opacity-50">Drag the handle</p>
                        </Resizable>
                    </Showcase>
                );
            case 'menubar':
                return (
                    <Showcase
                        theme={theme}
                        title="Menubar"
                        description="A visually persistent menu common in desktop applications."
                        code={`<Menubar theme={theme}>\n  <MenubarMenu>\n    <MenubarTrigger theme={theme}>File</MenubarTrigger>\n  </MenubarMenu>\n</Menubar>`}
                    >
                        <Menubar theme={theme}>
                            <MenubarMenu>
                                <MenubarTrigger theme={theme}>File</MenubarTrigger>
                                <MenubarContent theme={theme}>
                                    <MenubarItem theme={theme}>New Tab</MenubarItem>
                                    <MenubarItem theme={theme}>New Window</MenubarItem>
                                    <Separator theme={theme} className="my-1" />
                                    <MenubarItem theme={theme}>Exit</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger theme={theme}>Edit</MenubarTrigger>
                                <MenubarContent theme={theme}>
                                    <MenubarItem theme={theme}>Undo</MenubarItem>
                                    <MenubarItem theme={theme}>Redo</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger theme={theme}>View</MenubarTrigger>
                            </MenubarMenu>
                        </Menubar>
                    </Showcase>
                );
            case 'dropdown-menu':
                return (
                    <Showcase
                        theme={theme}
                        title="Dropdown Menu"
                        description="Displays a menu of actions or options—triggered by a button."
                        code={`<DropdownMenu>\n  <DropdownMenuTrigger>Open</DropdownMenuTrigger>\n  <DropdownMenuContent theme={theme}>\n    <DropdownMenuItem theme={theme}>Edit</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`}
                    >
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button theme={theme}>Options Menu <Lucide.ChevronDown size={14} className="ml-2" /></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent theme={theme}>
                                <DropdownMenuItem theme={theme}><Lucide.User size={14} className="mr-2" /> Profile</DropdownMenuItem>
                                <DropdownMenuItem theme={theme}><Lucide.Settings size={14} className="mr-2" /> Settings</DropdownMenuItem>
                                <Separator theme={theme} className="my-1" />
                                <DropdownMenuItem theme={theme} className="text-red-500"><Lucide.LogOut size={14} className="mr-2" /> Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </Showcase>
                );
            case 'popover':
                return (
                    <Showcase
                        theme={theme}
                        title="Popover"
                        description="Displays rich content in a portal, triggered by a button."
                        code={`<Popover>\n  <PopoverTrigger>Info</PopoverTrigger>\n  <PopoverContent theme={theme}>...</PopoverContent>\n</Popover>`}
                    >
                        <Popover>
                            <PopoverTrigger>
                                <Button theme={theme} variant="outline">Open Popover</Button>
                            </PopoverTrigger>
                            <PopoverContent theme={theme}>
                                <div className="space-y-2">
                                    <h4 className="font-bold leading-none">Dimensions</h4>
                                    <p className="text-sm opacity-60">Set the dimensions for the layer.</p>
                                    <div className="grid gap-2 pt-2">
                                        <div className="flex items-center gap-4">
                                            <Label theme={theme} className="w-20">Width</Label>
                                            <Input theme={theme} defaultValue="100%" className="h-8" />
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <Label theme={theme} className="w-20">Height</Label>
                                            <Input theme={theme} defaultValue="25px" className="h-8" />
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </Showcase>
                );
            case 'hover-card':
                return (
                    <Showcase
                        theme={theme}
                        title="Hover Card"
                        description="For sighted users to preview content available behind a link."
                        code={`<HoverCard>\n  <HoverCardTrigger>@nextjs</HoverCardTrigger>\n  <HoverCardContent theme={theme}>...</HoverCardContent>\n</HoverCard>`}
                    >
                        <HoverCard>
                            <HoverCardTrigger>
                                <button className={cn("font-bold underline underline-offset-4", theme.text)}>@vanguard_ui</button>
                            </HoverCardTrigger>
                            <HoverCardContent theme={theme}>
                                <div className="flex justify-between space-x-4">
                                    <Avatar theme={theme} fallback="V" />
                                    <div className="space-y-1">
                                        <h4 className="text-sm font-black">Vanguard UI</h4>
                                        <p className="text-xs opacity-60">The six-aesthetic design system for high-reality web applications.</p>
                                        <div className="flex items-center pt-2">
                                            <Lucide.CalendarDays size={12} className="mr-1 opacity-50" />
                                            <span className="text-xs opacity-40">Joined January 2026</span>
                                        </div>
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </Showcase>
                );
            case 'collapsible':
                return (
                    <Showcase
                        theme={theme}
                        title="Collapsible"
                        description="An interactive component which expands/collapses a panel."
                        code={`<Collapsible>\n  <CollapsibleTrigger>Toggle</CollapsibleTrigger>\n  <CollapsibleContent>Content</CollapsibleContent>\n</Collapsible>`}
                    >
                        <div className="w-[300px] space-y-2">
                            <Collapsible>
                                <div className="flex items-center justify-between space-x-4 px-4 py-2 border rounded-xl">
                                    <h4 className="text-sm font-bold">@peduarte starred 3 repositories</h4>
                                    <CollapsibleTrigger>
                                        <Button theme={theme} variant="ghost" size="icon" className="h-8 w-8">
                                            <Lucide.ChevronsUpDown size={14} />
                                        </Button>
                                    </CollapsibleTrigger>
                                </div>
                                <div className="rounded-xl border px-4 py-3 font-mono text-sm mt-2">
                                    @radix-ui/primitives
                                </div>
                                <CollapsibleContent>
                                    <div className="space-y-2 mt-2">
                                        <div className="rounded-xl border px-4 py-3 font-mono text-sm">
                                            @radix-ui/colors
                                        </div>
                                        <div className="rounded-xl border px-4 py-3 font-mono text-sm">
                                            @stitches/react
                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                    </Showcase>
                );
            case 'faders':
                return (
                    <Showcase
                        theme={theme}
                        title="Faders & Toggles"
                        description="Tactile faders and toggle buttons for precise control."
                        code={`<Fader theme={theme} themeKey={currentThemeKey} label="Gain" value={faderVal} onChange={setFaderVal} />\n<TactileToggle theme={theme} themeKey={currentThemeKey} label="Bypass" active={toggleActive} onToggle={() => setToggleActive(!toggleActive)} />`}
                    >
                        <div className="flex items-center justify-center gap-16 py-8">
                            <Fader theme={theme} themeKey={currentThemeKey} label="LEVEL" value={faderVal} onChange={setFaderVal} />
                            <TactileToggle theme={theme} themeKey={currentThemeKey} label="POWER" active={toggleActive} onToggle={() => setToggleActive(!toggleActive)} />
                        </div>
                    </Showcase>
                );
            case 'nav-menu':
                return (
                    <Showcase
                        theme={theme}
                        title="Navigation Menu"
                        description="A collection of links for navigating websites and apps."
                        code={`<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuTrigger theme={theme}>Products</NavigationMenuTrigger>\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>`}
                    >
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger theme={theme}>Components</NavigationMenuTrigger>
                                    <NavigationMenuContent theme={theme}>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <h5 className="font-bold text-sm">General</h5>
                                                <p className="text-xs opacity-50">Core primitives for any interface.</p>
                                            </div>
                                            <div className="space-y-2">
                                                <h5 className="font-bold text-sm">Tactile</h5>
                                                <p className="text-xs opacity-50">Real-world metaphors for digital controls.</p>
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger theme={theme}>Resources</NavigationMenuTrigger>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger theme={theme}>Community</NavigationMenuTrigger>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </Showcase>
                );
            case 'alert-dialog':
                return (
                    <Showcase
                        theme={theme}
                        title="Alert Dialog"
                        description="A modal dialog that interrupts the user with important content and expects a response."
                        code={`<AlertDialog theme={theme} open={open} onClose={() => setOpen(false)}>\n  <AlertDialogHeader>...</AlertDialogHeader>\n</AlertDialog>`}
                    >
                        <div className="flex justify-center">
                            <Button theme={theme} onClick={() => setAlertOpen(true)} className="bg-red-500 hover:bg-red-600 text-white border-none">Delete Project</Button>
                        </div>
                        <AlertDialog theme={theme} open={alertOpen} onClose={() => setAlertOpen(false)}>
                            <AlertDialogHeader>
                                <AlertDialogTitle theme={theme}>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription theme={theme}>
                                    This action cannot be undone. This will permanently delete your project
                                    and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel theme={theme} onClick={() => setAlertOpen(false)}>Cancel</AlertDialogCancel>
                                <AlertDialogAction theme={theme} onClick={() => setAlertOpen(false)}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialog>
                    </Showcase>
                );
            case 'drawer':
                return (
                    <Showcase
                        theme={theme}
                        title="Drawer"
                        description="A panel that slides out from the bottom of the screen."
                        code={`<Drawer theme={theme} open={open} onClose={() => setOpen(false)}>\n  <DrawerHeader>...</DrawerHeader>\n</Drawer>`}
                    >
                        <div className="flex justify-center">
                            <Button theme={theme} onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
                        </div>
                        <Drawer theme={theme} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                            <DrawerHeader>
                                <DrawerTitle theme={theme}>Mobile Experience</DrawerTitle>
                                <DrawerDescription theme={theme}>
                                    This drawer is optimized for touch interaction and mobile-first layouts.
                                </DrawerDescription>
                            </DrawerHeader>
                            <div className="py-8 grid gap-4">
                                <Button theme={theme} variant="outline" className="w-full justify-start"><Lucide.Cloud size={16} className="mr-3" /> Sync to Cloud</Button>
                                <Button theme={theme} variant="outline" className="w-full justify-start"><Lucide.Share size={16} className="mr-3" /> Share Project</Button>
                            </div>
                            <DrawerFooter>
                                <Button theme={theme} onClick={() => setDrawerOpen(false)} className="w-full">Done</Button>
                            </DrawerFooter>
                        </Drawer>
                    </Showcase>
                );
            case 'input-otp':
                return (
                    <Showcase
                        theme={theme}
                        title="Input OTP"
                        description="Accessible inputs for one-time passwords and verification codes."
                        code={`<InputOTP theme={theme} value={otp} onChange={setOtp} />`}
                    >
                        <div className="flex flex-col items-center gap-4">
                            <InputOTP theme={theme} value={otpVal} onChange={setOtpVal} />
                            <p className="text-xs opacity-40 font-mono">Current Val: {otpVal || "______"}</p>
                        </div>
                    </Showcase>
                );
            case 'command':
                return (
                    <Showcase
                        theme={theme}
                        title="Command"
                        description="Fast, composable, unstyled command menu for React."
                        code={`<Command theme={theme}>\n  <CommandInput theme={theme} placeholder="Search..." />\n  <CommandList>\n    <CommandItem theme={theme}>Profile</CommandItem>\n  </CommandList>\n</Command>`}
                    >
                        <div className="w-[400px]">
                            <Command theme={theme}>
                                <CommandInput
                                    theme={theme}
                                    placeholder="Type a command or search..."
                                    value={commandSearch}
                                    onChange={(e) => setCommandSearch(e.target.value)}
                                />
                                <CommandList>
                                    <div className="px-2 py-1.5 text-xs font-bold opacity-40 uppercase tracking-widest">Suggestions</div>
                                    <CommandItem theme={theme}><Lucide.Calendar size={14} className="mr-2" /> Calendar</CommandItem>
                                    <CommandItem theme={theme}><Lucide.Smile size={14} className="mr-2" /> Search Emoji</CommandItem>
                                    <CommandItem theme={theme}><Lucide.Rocket size={14} className="mr-2" /> Launch App</CommandItem>
                                    <Separator theme={theme} className="my-1" />
                                    <div className="px-2 py-1.5 text-xs font-bold opacity-40 uppercase tracking-widest">Settings</div>
                                    <CommandItem theme={theme}><Lucide.User size={14} className="mr-2" /> Profile</CommandItem>
                                    <CommandItem theme={theme}><Lucide.Settings size={14} className="mr-2" /> Settings</CommandItem>
                                </CommandList>
                            </Command>
                        </div>
                    </Showcase>
                );
            case 'context-menu':
                return (
                    <Showcase
                        theme={theme}
                        title="Context Menu"
                        description="Displays a menu located at right click position."
                        code={`<ContextMenu>\n  <ContextMenuTrigger>Right Click Me</ContextMenuTrigger>\n  <ContextMenuContent theme={theme}>...</ContextMenuContent>\n</ContextMenu>`}
                    >
                        <ContextMenu>
                            <ContextMenuTrigger>
                                <div className="w-full h-40 border-2 border-dashed border-current opacity-20 rounded-2xl flex items-center justify-center font-bold">
                                    Right Click Anywhere Here
                                </div>
                            </ContextMenuTrigger>
                            <div className={cn(
                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto",
                                theme.card
                            )}>
                                <DropdownMenuItem theme={theme}><Lucide.Copy size={14} className="mr-2" /> Copy</DropdownMenuItem>
                                <DropdownMenuItem theme={theme}><Lucide.Scissors size={14} className="mr-2" /> Cut</DropdownMenuItem>
                                <DropdownMenuItem theme={theme}><Lucide.Clipboard size={14} className="mr-2" /> Paste</DropdownMenuItem>
                            </div>
                        </ContextMenu>
                    </Showcase>
                );
            case 'calendar':
                return (
                    <Showcase
                        theme={theme}
                        title="Calendar"
                        description="A date picker component that allows users to select a date."
                        code={`<Calendar theme={theme} />`}
                    >
                        <div className="flex justify-center">
                            <Calendar theme={theme} />
                        </div>
                    </Showcase>
                );
            case 'combobox':
                return (
                    <Showcase
                        theme={theme}
                        title="Combobox"
                        description="Autocomplete input and search with a list of options."
                        code={`<Combobox theme={theme} options={options} value={val} onChange={setVal} />`}
                    >
                        <div className="w-[300px]">
                            <Combobox
                                theme={theme}
                                options={[
                                    { value: 'vanguard', label: 'Vanguard' },
                                    { value: 'neo', label: 'Neo-Brutalism' },
                                    { value: 'liquid', label: 'Liquid Glass' },
                                    { value: 'glass', label: 'Glassmorphism' },
                                ]}
                                value={comboboxVal}
                                onChange={setComboboxVal}
                                placeholder="Select an aesthetic..."
                            />
                        </div>
                    </Showcase>
                );
            case 'charts':
                return (
                    <Showcase
                        theme={theme}
                        title="Charts"
                        description="Visual representation of data (Simplified Placeholder)."
                        code={`// Charting engine powered by Vanguard Analytics`}
                    >
                        <div className="w-full h-40 bg-black/5 dark:bg-white/5 rounded-2xl flex items-end gap-2 p-6 overflow-hidden">
                            {[40, 70, 45, 90, 65, 80, 50, 85, 30, 95, 20, 75].map((h, i) => (
                                <div
                                    key={i}
                                    className={cn("flex-1 transition-all duration-1000", theme.button)}
                                    style={{ height: `${h}%`, opacity: (i + 1) / 12 }}
                                />
                            ))}
                        </div>
                    </Showcase>
                );
            default:
                return (
                    <div className="flex flex-col items-center justify-center h-[50vh] opacity-50">
                        <div className="relative mb-6">
                            <LayoutGrid size={64} className={theme.text} />
                            <div className="absolute inset-0 animate-ping opacity-20"><LayoutGrid size={64} className={theme.text} /></div>
                        </div>
                        <h3 className={`text-xl font-bold mb-2 ${theme.text}`}>Under Construction</h3>
                        <p className={`max-w-xs text-center text-sm ${theme.text}`}>We're currently crafting the "{itemLabel}" component for this specific aesthetic reality.</p>
                    </div>
                );
        }
    };

    return (
        <div className="flex-1 flex min-h-0 relative overflow-hidden">
            {/* Mobile Nav Toggle */}
            <button
                className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-black text-white rounded-full shadow-lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Sidebar */}
            <aside className={`
        fixed lg:relative inset-y-0 left-0 z-40 w-72 transform transition-transform duration-300 ease-in-out
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${theme.card} rounded-none border-r border-gray-200/20
        flex flex-col h-full shrink-0
      `}>
                <div className="px-4 py-4">
                    <div className={`relative rounded-md flex items-center px-3 border border-gray-200/20 bg-black/5`}>
                        <Search size={14} className={`opacity-50 ${theme.text}`} />
                        <input
                            value={sidebarSearch}
                            onChange={(e) => setSidebarSearch(e.target.value)}
                            placeholder="Search components..."
                            className={`w-full bg-transparent border-none focus:ring-0 text-sm py-2 px-2 ${theme.text} placeholder:opacity-50`}
                        />
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto px-4 pb-4 space-y-6 custom-scrollbar min-h-0">
                    {filteredLibrary.map((cat, idx) => (
                        <div key={idx}>
                            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 opacity-50 flex items-center gap-2 ${theme.text}`}>
                                <cat.icon size={12} />
                                {cat.category}
                            </h4>
                            <div className="space-y-0.5 border-l border-gray-500/10 ml-1.5 pl-2">
                                {cat.items.map(item => (
                                    <button
                                        key={item.id}
                                        onClick={() => { setActiveComponent(item.id); setMobileMenuOpen(false); }}
                                        className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-all
                      ${activeComponent === item.id
                                                ? `${theme.text} font-bold bg-black/5`
                                                : `${theme.text} opacity-60 hover:opacity-100 hover:bg-black/5`
                                            }
                    `}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Content */}
            <main className="flex-1 overflow-y-auto p-6 lg:p-12 pb-32 custom-scrollbar min-h-0">
                <div className="max-w-5xl mx-auto">
                    {renderComponentView()}
                </div>
            </main>
        </div>
    );
};
