import gardenData from '@/garden_data.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Portfolio & Gallery | JC's Backyard",
  description: "View photos and highlights from JC's Backyard community garden, including harvests, workshops, and community events.",
}

export default function Portfolio() {
  const { gallery } = gardenData

  // Placeholder image URLs from Unsplash
  const imageUrls = [
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80',
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/20 py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-neutral">
            Portfolio & Gallery
          </h1>
          <p className="text-xl text-center text-neutral/70 max-w-2xl mx-auto">
            See our garden in action through photos of harvests, workshops, and community events
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-container bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div key={item.id} className="card p-0 overflow-hidden group">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={imageUrls[index % imageUrls.length]}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-2 py-1 rounded mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-neutral">
                  {item.title}
                </h3>
                <p className="text-neutral/70 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-neutralLight">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral">
            See It In Person
          </h2>
          <p className="text-xl mb-8 text-neutral/70">
            These photos capture just a glimpse of what you'll experience when you visit us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/visit" className="btn-primary inline-block">
              Plan Your Visit
            </a>
            <a href="/about" className="btn-outline inline-block">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

