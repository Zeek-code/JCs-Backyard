import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { albums, getAlbumBySlug, getImagePath } from '../albums'

export function generateStaticParams() {
  return albums.map((album) => ({
    albumName: album.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ albumName: string }> }): Promise<Metadata> {
  const { albumName } = await params
  const album = getAlbumBySlug(albumName)
  
  if (!album) {
    return {
      title: 'Album Not Found | JC\'s Backyard',
    }
  }

  return {
    title: `${album.name} | Portfolio | JC's Backyard`,
    description: `View ${album.images.length} photos from our ${album.name.toLowerCase()} collection`,
  }
}

export default async function AlbumPage({ params }: { params: Promise<{ albumName: string }> }) {
  const { albumName } = await params
  const album = getAlbumBySlug(albumName)

  if (!album) {
    notFound()
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/20 py-16">
        <div className="section-container">
          <Link 
            href="/portfolio"
            className="text-primary hover:underline mb-4 inline-block"
          >
            ← Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-2">
            {album.name}
          </h1>
          <p className="text-lg text-neutral/70">
            {album.images.length} {album.images.length === 1 ? 'photo' : 'photos'}
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-container bg-white py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {album.images.map((imageName, index) => {
            const imagePath = getImagePath(album.name, imageName)
            return (
              <div 
                key={imageName}
                className="card p-0 overflow-hidden group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={imagePath}
                    alt={`${album.name} - Photo ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
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
            <Link href="/portfolio" className="btn-outline inline-block">
              View All Albums
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

