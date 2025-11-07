export default function Showcase() {
  return (
    <section id="showcase" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Crafted components</h2>
            <p className="mt-3 text-gray-700">Clean, responsive, and ready to adapt to your product.</p>
          </div>
          <a href="#" className="text-sm font-medium text-gray-700 underline-offset-4 hover:underline">View more</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="h-10 w-40 bg-gray-100 rounded mb-4" />
            <div className="space-y-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-9 bg-gray-100 rounded" />
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="h-10 w-56 bg-gray-100 rounded mb-4" />
            <div className="grid grid-cols-2 gap-3">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-24 bg-gray-100 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
