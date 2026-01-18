import Link from 'next/link'
import gardenData from '@/garden_data.json'

export default function Home() {
  const { garden } = gardenData

  return (
    <>
      {/* Hero Section */}
      <section id="hero-section" className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80)',
          }}
        >
          <div className="gradient-overlay" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
            <span style={{ fontFamily: 'var(--font-dancing-script)' }}>JC's</span> Backyard
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
            {garden.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guides" className="btn-primary inline-block">
              Explore Growing Guides
            </Link>
            <Link href="/visit" className="btn-outline border-white text-white hover:bg-white hover:text-neutral inline-block">
              Plan a Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-neutral/80 leading-relaxed mb-8">
            {garden.mission}
          </p>
          <p className="text-base md:text-lg text-neutral/70 leading-relaxed">
            {garden.description}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container bg-neutralLight">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neutral">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {garden.programs.map((program, index) => (
            <div key={index} className="card p-0 overflow-hidden group">
              <div className="relative aspect-video overflow-hidden bg-neutralLight">
                <img
                  src={`https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&sig=${index + 40}`}
                  alt={program.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {program.name}
                </h3>
                <p className="text-neutral/70 mb-4">
                  {program.description}
                </p>
                <p className="text-sm text-accent1 font-semibold">
                  {program.frequency}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-accent2 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Growing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community and learn how to grow your own food. Everyone is welcome!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/visit" className="btn-primary bg-white text-accent2 hover:bg-neutralLight inline-block">
              Visit Us
            </Link>
            <Link href="/guides" className="btn-outline border-white text-white hover:bg-white hover:text-accent2 inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

