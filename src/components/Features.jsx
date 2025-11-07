import { Rocket, Sparkles, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Launch Faster',
    desc: 'Kickstart projects with ready-to-ship UI blocks and a clean foundation.'
  },
  {
    icon: Sparkles,
    title: 'Polished by default',
    desc: 'Thoughtful spacing, typography, and interactions out of the box.'
  },
  {
    icon: Shield,
    title: 'Secure & Stable',
    desc: 'Best practices and safe defaults so you can move with confidence.'
  },
  {
    icon: Zap,
    title: 'Blazing Performance',
    desc: 'Built with modern tooling for snappy loads and smooth UX.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Everything you need to move fast</h2>
          <p className="mt-4 text-gray-700">A curated set of essentials to build beautiful, functional interfaces.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="p-6 rounded-xl border border-black/10 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
