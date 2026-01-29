export interface Theme {
  name: string;
  bg: string;
  text: string;
  mutedText: string;
  accent: string;
  card: string;
  popover: string;
  button: string;
  secondaryButton: string;
  input: string;
  badge: string;
  separator: string;
  tabActive: string;
  tabInactive: string;
  footer: string;
  description: string;
  id?: string;
}

export const themes: Record<string, Theme> = {
  minimalism: {
    name: "Minimalism",
    bg: "bg-[#FAF9F6]",
    text: "text-gray-900",
    mutedText: "text-gray-500",
    accent: "bg-black text-white hover:bg-gray-800",
    card: "bg-[#FFFCF8] border border-gray-200 shadow-sm rounded-lg",
    popover: "bg-[#FFFCF8] border border-gray-200 shadow-lg rounded-lg",
    button: "bg-black text-white rounded-md hover:bg-gray-800 transition-colors shadow-none active:scale-95",
    secondaryButton: "bg-[#FFFCF8] border border-gray-200 text-gray-900 rounded-md hover:bg-[#FAF9F6] transition-colors",
    input: "bg-[#FFFCF8] border border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-black transition-all",
    badge: "bg-gray-100 text-gray-800 rounded-full px-2.5 py-0.5 text-xs font-medium border border-gray-200",
    separator: "bg-gray-200",
    tabActive: "border-b-2 border-black text-black",
    tabInactive: "text-gray-500 hover:text-gray-800",
    footer: "bg-[#FFFCF8] border-t border-gray-200 text-gray-600",
    description: "Focus on essential elements, clean lines, ample whitespace, and flat colors."
  },
  neoBrutalism: {
    name: "Neo-Brutalism",
    bg: "bg-[#FFFDF5]",
    text: "text-black font-mono",
    mutedText: "text-gray-600 font-mono",
    accent: "bg-[#FF6B6B] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]",
    card: "bg-[#4ECDC4] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none",
    popover: "bg-[#FFF8F0] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-none",
    button: "bg-[#FFE66D] text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all rounded-none",
    secondaryButton: "bg-[#FFF8F0] text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] rounded-none",
    input: "bg-[#FFF8F0] border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] focus:outline-none transition-all rounded-none font-bold",
    badge: "bg-[#FF6B6B] text-black border-2 border-black px-2 py-0.5 text-xs font-bold rounded-none",
    separator: "bg-black",
    tabActive: "bg-[#FFE66D] border-2 border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
    tabInactive: "bg-[#FFF8F0] border-2 border-black text-gray-500 hover:bg-[#FFEFD5]",
    footer: "bg-[#A7F3D0] border-t-2 border-black text-black font-mono",
    description: "High contrast, bold borders, vivid colors, raw aesthetic, hard shadows."
  },
  glassmorphism: {
    name: "Glassmorphism",
    bg: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
    text: "text-white",
    mutedText: "text-white/70",
    accent: "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30",
    card: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl",
    popover: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl",
    button: "bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-xl hover:bg-white/30 transition-all shadow-lg hover:shadow-xl",
    secondaryButton: "bg-black/20 backdrop-blur-lg border border-white/10 text-white rounded-xl hover:bg-black/30",
    input: "bg-black/10 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-white/50 focus:bg-black/20 focus:border-white/30 focus:outline-none transition-all",
    badge: "bg-white/10 backdrop-blur-md border border-white/20 text-white px-2 py-0.5 text-xs rounded-lg shadow-sm",
    separator: "bg-white/20",
    tabActive: "bg-white/20 text-white shadow-inner",
    tabInactive: "text-white/70 hover:text-white hover:bg-white/10",
    footer: "bg-black/20 backdrop-blur-lg border-t border-white/10 text-white/80",
    description: "Translucency, blur effects, multi-layered approach, vivid backgrounds."
  },
  skeuomorphism: {
    name: "Skeuomorphism",
    bg: "bg-[#eceef1]",
    text: "text-slate-700",
    mutedText: "text-slate-500",
    accent: "bg-blue-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.2)] bg-gradient-to-b from-blue-400 to-blue-600",
    card: "bg-[#eceef1] border border-white/40 shadow-[8px_8px_16px_#d1d9e6,-8px_-8px_16px_#ffffff] rounded-[2rem]",
    popover: "bg-[#e0e5ec] rounded-xl shadow-[9px_9px_16px_rgb(163,177,198,0.6),-9px_-9px_16px_rgba(255,255,255,0.5)] border border-white/20",
    button: "bg-[#eceef1] border border-white/50 shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] text-slate-600 font-bold transition-all rounded-xl",
    secondaryButton: "bg-gray-200 text-gray-600 rounded-lg shadow-[3px_3px_6px_0_rgba(163,177,198,0.5),-3px_-3px_6px_0_rgba(255,255,255,0.6)]",
    input: "bg-[#eceef1] border border-white/20 shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] rounded-2xl px-4 py-2 outline-none text-slate-700",
    badge: "bg-[#eceef1] shadow-[2px_2px_4px_#d1d9e6,-2px_-2px_4px_#ffffff] text-slate-500 text-[10px] font-black px-2 py-1 rounded-lg",
    separator: "bg-gray-300 shadow-[inset_1px_1px_2px_#b8b9be,inset_-1px_-1px_2px_#ffffff]",
    tabActive: "text-indigo-600 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.1)] rounded-lg bg-[#e2e4e9]",
    tabInactive: "text-gray-500 hover:text-gray-700",
    footer: "bg-[#e0e5ec] border-t border-white/50 text-gray-600 shadow-[inset_0_10px_20px_#b8b9be]",
    description: "Mimics real-world objects, depth, shadows, highlights, tactile feel."
  },
  claymorphism: {
    name: "Claymorphism",
    bg: "bg-[#f0f4f8]",
    text: "text-slate-700 font-nunito",
    mutedText: "text-slate-500 font-nunito",
    accent: "bg-[#6C5DD3] text-white rounded-2xl shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.2),inset_4px_4px_8px_rgba(255,255,255,0.2),8px_8px_16px_rgba(108,93,211,0.3)] hover:scale-105 transition-transform",
    card: "bg-[#FFFCF8] rounded-3xl p-6 shadow-[10px_10px_20px_rgba(174,174,192,0.4),-10px_-10px_20px_#FFFFFF] border-none",
    popover: "bg-[#FFFCF8] rounded-3xl p-6 shadow-[20px_20px_40px_rgba(174,174,192,0.4),-20px_-20px_40px_#FFFFFF] border-none",
    button: "bg-[#FF754C] text-white font-bold rounded-2xl py-3 px-6 shadow-[inset_-4px_-4px_4px_rgba(189,59,29,0.3),inset_4px_4px_4px_rgba(255,255,255,0.3),8px_8px_16px_rgba(255,117,76,0.3)] hover:scale-105 active:scale-95 transition-all",
    secondaryButton: "bg-[#E4E9F2] text-slate-600 font-bold rounded-2xl py-3 px-6 shadow-[inset_-4px_-4px_8px_rgba(0,0,0,0.05),inset_4px_4px_8px_rgba(255,255,255,1),6px_6px_12px_rgba(174,174,192,0.4)]",
    input: "bg-[#E4E9F2] rounded-2xl border-none p-4 shadow-[inset_6px_6px_12px_rgba(174,174,192,0.3),inset_-6px_-6px_12px_#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]/20",
    badge: "bg-[#8bb4f7] text-white rounded-xl px-3 py-1 text-xs font-bold shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.1),inset_2px_2px_4px_rgba(255,255,255,0.3)]",
    separator: "bg-slate-200",
    tabActive: "bg-[#6C5DD3] text-white rounded-xl shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.2),inset_2px_2px_4px_rgba(255,255,255,0.2)]",
    tabInactive: "text-slate-400 hover:bg-white/50 rounded-xl",
    footer: "bg-white/50 border-t border-white shadow-inner text-slate-600",
    description: "Fluffy 3D shapes, inflated look, soft shadows, rounded corners, matte finish."
  },
  liquidGlass: {
    name: "Liquid Glass",
    id: "liquidGlass",
    bg: "bg-slate-950 relative overflow-hidden",
    text: "text-white antialiased font-medium tracking-wide",
    mutedText: "text-white/50",
    accent: "bg-gradient-to-br from-cyan-500/90 to-blue-600/90 backdrop-blur-md border-t border-l border-white/30 border-b border-black/20 shadow-[0_0_20px_rgba(8,145,178,0.4)] text-white hover:brightness-110 active:scale-95 transition-all duration-300",
    card: "bg-white/[0.03] backdrop-blur-[40px] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.02)] rounded-[2.5rem] relative after:absolute after:inset-0 after:rounded-[2.5rem] after:pointer-events-none after:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
    popover: "bg-[#0f172a]/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-3xl",
    button: "bg-gradient-to-tr from-indigo-500/80 via-purple-500/80 to-pink-500/80 text-white font-bold rounded-full shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_15px_40px_rgba(139,92,246,0.5)] transition-all hover:-translate-y-0.5 active:translate-y-0 border border-white/20",
    secondaryButton: "bg-black/20 backdrop-blur-sm border border-white/5 text-white/70 hover:text-white hover:bg-black/30 rounded-2xl",
    input: "bg-white/[0.02] border border-white/[0.05] rounded-full px-5 py-2 text-white placeholder-white/20 focus:bg-white/[0.05] outline-none transition-all shadow-inner",
    badge: "bg-white/[0.05] backdrop-blur-md border border-white/10 text-indigo-200 text-[9px] font-black px-3 py-1 rounded-full tracking-widest uppercase",
    separator: "bg-white/10",
    tabActive: "text-cyan-300 border-b-2 border-cyan-400 bg-white/5",
    tabInactive: "text-white/40 hover:text-white/80 hover:bg-white/5",
    footer: "bg-black/20 backdrop-blur-xl border-t border-white/10 text-white/60",
    description: "Inspired by MacOS Big Sur and Windows 11 Acrylic. Uses high backdrop-blur, semi-transparent white layers, and subtle border gradients.",
  }
};
