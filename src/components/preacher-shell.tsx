import { type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { Headphones, LayoutDashboard, Radio, UserRound, ShieldCheck, LogIn, Menu, X } from 'lucide-react';
import { useState } from 'react';

type ShellProps = { children: ReactNode; title?: string; eyebrow?: string; hideNav?: boolean };

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return <div className="flex items-center gap-2.5" data-testid="brand-mark">
    <div className="grid size-9 place-items-center rounded-xl bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] font-bold tracking-tight">
      <span className="serif text-xl leading-none">T</span>
    </div>
    {!compact && <span className="serif text-xl font-semibold tracking-tight">The Preacher</span>}
  </div>;
}

export function Avatar({ initials, tone = 'teal', size = 'md' }: { initials: string; tone?: string; size?: 'sm' | 'md' | 'lg' }) {
  const tones: Record<string, string> = { teal: 'bg-[#b8d9ce] text-[#174a45]', amber: 'bg-[#f1c68e] text-[#70471f]', plum: 'bg-[#dfb9ca] text-[#643649]', clay: 'bg-[#e8b6a6] text-[#703d32]' };
  return <div data-testid={`avatar-${initials}`} className={`${size === 'lg' ? 'size-14 text-lg' : size === 'sm' ? 'size-7 text-[10px]' : 'size-9 text-xs'} ${tones[tone] || tones.teal} grid shrink-0 place-items-center rounded-full font-bold`}>{initials}</div>;
}

export function Shell({ children, title, eyebrow, hideNav = false }: ShellProps) {
  const [location, setLocation] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [
    { href: '/', label: 'Discover', icon: Headphones },
    { href: '/broadcaster/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/broadcaster/studio', label: 'Studio', icon: Radio },
    { href: '/broadcaster/profile', label: 'Profile', icon: UserRound },
    { href: '/admin', label: 'Admin', icon: ShieldCheck },
  ];
  return <div className="noise min-h-[100dvh] bg-background">
    {!hideNav && <header className="sticky top-0 z-40 border-b border-[hsl(var(--border)/.75)] bg-[hsl(var(--background)/.9)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10">
        <Link href="/" data-testid="link-brand"><BrandMark /></Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.slice(0, 3).map(({ href, label, icon: Icon }) => <Link key={href} href={href} data-testid={`link-nav-${label.toLowerCase()}`} className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${location === href ? 'bg-[hsl(var(--primary)/.1)] text-primary' : 'text-muted-foreground hover:bg-[hsl(var(--muted))] hover:text-foreground'}`}><Icon size={15} />{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/auth" data-testid="link-sign-in" className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground sm:flex"><LogIn size={15} /> Sign in</Link>
          <Link href="/broadcaster/studio" data-testid="button-go-live" className="rounded-full bg-primary px-4 py-2.5 text-xs font-bold text-primary-foreground shadow-sm hover-lift">Go live</Link>
          <button onClick={() => setMenuOpen(!menuOpen)} data-testid="button-mobile-menu" className="grid size-10 place-items-center rounded-full bg-muted md:hidden">{menuOpen ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      {menuOpen && <div className="border-t border-border bg-card p-4 md:hidden">
        {nav.map(({ href, label, icon: Icon }) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} data-testid={`link-mobile-${label.toLowerCase()}`} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold hover:bg-muted"><Icon size={17} />{label}</Link>)}
      </div>}
    </header>}
    {title && <div className="mx-auto max-w-[1440px] px-5 pt-8 md:px-10 md:pt-12"><p className="mono text-[10px] font-medium uppercase tracking-[.2em] text-primary">{eyebrow || 'The Preacher'}</p><h1 className="serif mt-2 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1></div>}
    {children}
    <footer className="mx-auto mt-20 flex max-w-[1440px] flex-col justify-between gap-5 border-t border-border px-5 py-8 text-xs text-muted-foreground md:flex-row md:px-10"><BrandMark compact /><span>Meaningful voices, wherever you are.</span><span className="mono">TP / 2024</span></footer>
  </div>;
}

export function PageFrame({ children, className = '' }: { children: ReactNode; className?: string }) { return <main className={`mx-auto max-w-[1440px] px-5 py-8 md:px-10 md:py-12 ${className}`}>{children}</main>; }
export function SectionLabel({ children }: { children: ReactNode }) { return <div className="mb-5 flex items-center justify-between"><h2 className="serif text-2xl font-semibold tracking-tight">{children}</h2><span className="mono text-[10px] uppercase tracking-[.18em] text-muted-foreground">The room is open</span></div>; }
export function Pill({ children, tone = 'default' }: { children: ReactNode; tone?: 'live' | 'default' | 'warm' }) { return <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.12em] ${tone === 'live' ? 'bg-[#d96e50] text-white' : tone === 'warm' ? 'bg-[hsl(var(--accent)/.17)] text-[#9c4d35]' : 'bg-[hsl(var(--muted))] text-muted-foreground'}`}>{tone === 'live' && <i className="pulse-live size-1.5 rounded-full bg-white" />}{children}</span>; }
export function LogoArt({ tone = 'amber', label = 'TP', large = false }: { tone?: string; label?: string; large?: boolean }) { return <div data-testid={`logo-art-${label}`} className={`${large ? 'h-64 md:h-80' : 'h-44'} relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br ${tone === 'amber' ? 'from-[#f7d493] via-[#e99967] to-[#6e4446]' : tone === 'plum' ? 'from-[#d7b3cf] via-[#9b6580] to-[#453c61]' : tone === 'teal' ? 'from-[#a9d8cd] via-[#4c9f93] to-[#194b54]' : 'from-[#e7b29d] via-[#c27666] to-[#59434b]'}`}><div className="absolute -right-8 -top-10 size-44 rounded-full border-[18px] border-white/20" /><div className="absolute -bottom-16 -left-8 size-48 rounded-full border-[24px] border-black/10" /><span className={`${large ? 'text-7xl' : 'text-5xl'} serif absolute bottom-4 left-5 font-semibold text-white/90`}>{label}</span></div>; }