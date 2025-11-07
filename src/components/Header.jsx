import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-gray-900">Vibe Studio</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
            <a href="#testimonials" className="hover:text-gray-900 transition-colors">Stories</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-black rounded-lg shadow-sm">Get Started</button>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-black/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#features" className="block text-gray-700">Features</a>
            <a href="#showcase" className="block text-gray-700">Showcase</a>
            <a href="#testimonials" className="block text-gray-700">Stories</a>
            <div className="pt-2 flex gap-2">
              <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-black/10 rounded-lg">Sign in</button>
              <button className="flex-1 px-3 py-2 text-sm font-semibold text-white bg-gray-900 rounded-lg">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
