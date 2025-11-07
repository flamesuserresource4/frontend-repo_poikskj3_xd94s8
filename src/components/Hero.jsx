import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-rose-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Build beautiful apps with AI speed
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-lg text-gray-700"
            >
              Design, iterate, and launch faster. Modern components, clean styles, and a delightful developer experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#features" className="px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-black">Explore Features</a>
              <a href="#showcase" className="px-5 py-3 rounded-lg border border-black/10 bg-white font-medium text-gray-800 hover:border-black/20">See Examples</a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[16/10] rounded-xl bg-white shadow-xl border border-black/5 overflow-hidden">
              <div className="h-full w-full grid grid-cols-3">
                <div className="p-6 border-r border-black/5">
                  <div className="h-3 w-24 bg-gray-200 rounded mb-4" />
                  <div className="space-y-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="h-8 bg-gray-100 rounded" />
                    ))}
                  </div>
                </div>
                <div className="col-span-2 p-6">
                  <div className="h-8 w-40 bg-gray-200 rounded mb-6" />
                  <div className="space-y-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="h-10 bg-gray-100 rounded" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
