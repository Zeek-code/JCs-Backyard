import Link from 'next/link'
import type { Metadata } from 'next'
import { albums, getImagePath } from './albums'

export const metadata: Metadata = {
  title: "Portfolio & Gallery | JC's Backyard",
  description: "View photos and highlights from JC's Backyard community garden, including harvests, workshops, and community events.",
}

export default function Portfolio() {
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

      {/* Album Grid */}
      <section className="section-container bg-white py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => {
            const coverImagePath = getImagePath(album.name, album.coverImage || album.images[0])
            return (
              <Link 
                key={album.slug}
                href={`/portfolio/${album.slug}`}
                className="card p-0 overflow-hidden group block"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={coverImagePath}
                    alt={album.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">
                      {album.images.length} {album.images.length === 1 ? 'photo' : 'photos'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-neutral">
                    {album.name}
                  </h3>
                  <p className="text-neutral/70 text-sm">
                    View album →
                  </p>
                </div>
              </Link>
            )
          })}
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
            <Link href="/visit" className="btn-primary inline-block">
              Plan Your Visit
            </Link>
            <Link href="/about" className="btn-outline inline-block">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

