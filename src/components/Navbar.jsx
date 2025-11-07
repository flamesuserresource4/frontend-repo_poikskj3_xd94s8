import { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500 text-white shadow">
              <Rocket size={18} />
            </span>
            <span className="font-semibold tracking-tight">VibeStarter</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-slate-900 transition">Pricing</a>
            <a href="#faq" className="text-slate-600 hover:text-slate-900 transition">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 text-sm rounded-md text-slate-700 hover:text-slate-900">Log in</a>
            <a href="#" className="px-4 py-2 text-sm rounded-md bg-slate-900 text-white hover:bg-slate-800 transition">Get Started</a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-black/5 py-4">
            <nav className="flex flex-col gap-2">
              <a href="#features" className="px-2 py-2 rounded hover:bg-slate-50">Features</a>
              <a href="#pricing" className="px-2 py-2 rounded hover:bg-slate-50">Pricing</a>
              <a href="#faq" className="px-2 py-2 rounded hover:bg-slate-50">FAQ</a>
              <div className="mt-2 flex gap-2">
                <a href="#" className="flex-1 px-4 py-2 text-center rounded-md border">Log in</a>
                <a href="#" className="flex-1 px-4 py-2 text-center rounded-md bg-slate-900 text-white">Get Started</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
