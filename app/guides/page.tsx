import gardenData from '@/garden_data.json'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Growing Guides | JC's Backyard",
  description: "Learn how to grow your own food with our comprehensive guides covering vegetables, fruits, herbs, and soil health. Get seasonal tips and avoid common mistakes.",
}

export default function Guides() {
  const { educationalContent } = gardenData

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/20 py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-neutral">
            Growing Guides
          </h1>
          <p className="text-xl text-center text-neutral/70 max-w-2xl mx-auto">
            Learn how to grow your own food with our comprehensive guides and seasonal tips
          </p>
        </div>
      </section>

      {/* Vegetables Section */}
      <section className="section-container bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral">
          Vegetables
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationalContent.vegetables.map((veg, index) => (
            <div key={index} className="card p-0 overflow-hidden group">
              <div className="relative aspect-video overflow-hidden bg-neutralLight">
                <img
                  src={`https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&sig=${index}`}
                  alt={veg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {veg.name}
                </h3>
                <p className="text-accent1 font-semibold mb-4">
                  Season: {veg.season}
                </p>
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-neutral">Growing Tips:</h4>
                  <ul className="space-y-1 text-sm text-neutral/70">
                    {veg.tips.map((tip, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-neutral">Common Mistakes:</h4>
                  <ul className="space-y-1 text-sm text-neutral/70">
                    {veg.commonMistakes.map((mistake, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent2 mr-2">✗</span>
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Herbs Section */}
      <section className="section-container bg-neutralLight">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral">
          Herbs
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationalContent.herbs.map((herb, index) => (
            <div key={index} className="card p-0 overflow-hidden group">
              <div className="relative aspect-video overflow-hidden bg-neutralLight">
                <img
                  src={`https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&q=80&sig=${index + 10}`}
                  alt={herb.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {herb.name}
                </h3>
                <p className="text-accent1 font-semibold mb-4">
                  Season: {herb.season}
                </p>
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-neutral">Growing Tips:</h4>
                  <ul className="space-y-1 text-sm text-neutral/70">
                    {herb.tips.map((tip, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-neutral">Common Mistakes:</h4>
                  <ul className="space-y-1 text-sm text-neutral/70">
                    {herb.commonMistakes.map((mistake, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent2 mr-2">✗</span>
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fruits Section */}
      <section className="section-container bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral">
          Fruits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationalContent.fruits.map((fruit, index) => (
            <div key={index} className="card p-0 overflow-hidden group">
              <div className="relative aspect-video overflow-hidden bg-neutralLight">
                <img
                  src={`https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80&sig=${index + 20}`}
                  alt={fruit.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {fruit.name}
                </h3>
                <p className="text-accent1 font-semibold mb-4">
                  Season: {fruit.season}
                </p>
                <div className="mb-4">
                  <h4 className="font-bold mb-2 text-neutral">Growing Tips:</h4>
                  <ul className="space-y-1 text-sm text-neutral/70">
                    {fruit.tips.map((tip, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-neutral">Common Mistakes:</h4>
                  <ul className="space-y-1 text-sm text-neutral/70">
                    {fruit.commonMistakes.map((mistake, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-accent2 mr-2">✗</span>
                        <span>{mistake}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Soil Health Section */}
      <section className="section-container bg-neutralLight">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-neutral">
          Soil Health
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {educationalContent.soilHealth.topics.map((topic, index) => (
              <div key={index} className="card p-0 overflow-hidden group">
                <div className="relative aspect-video overflow-hidden bg-neutralLight">
                  <img
                    src={`https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&sig=${index + 30}`}
                    alt={topic.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    {topic.name}
                  </h3>
                  <p className="text-neutral/70 leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Tips Section */}
      <section className="section-container bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neutral">
          Seasonal Tips
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(educationalContent.seasonalTips).map(([season, tips]) => (
            <div key={season} className="card">
              <h3 className="text-xl font-bold mb-4 capitalize text-primary">
                {season}
              </h3>
              <ul className="space-y-2 text-sm text-neutral/70">
                {tips.map((tip, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent1 mr-2">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-primary/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-neutral/70">
            Visit us to see these growing techniques in action and learn from our community
          </p>
          <Link href="/visit" className="btn-primary inline-block">
            Plan Your Visit
          </Link>
        </div>
      </section>
    </>
  )
}

