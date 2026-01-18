import gardenData from '@/garden_data.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us | JC's Backyard",
  description: "Learn about JC's Backyard, our mission, and how we're building a community around sustainable food growing practices in Kansas City.",
}

export default function About() {
  const { garden, educationalContent } = gardenData

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/20 py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-neutral">
            About {garden.name}
          </h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral">
              Our Story
            </h2>
            <p className="text-lg text-neutral/80 leading-relaxed mb-6">
              Founded in {garden.founded}, {garden.name} began as a vision to bring the community together 
              through the shared joy of growing food. What started as a small backyard garden has grown 
              into a thriving community resource dedicated to education, sustainability, and connection.
            </p>
            <p className="text-lg text-neutral/80 leading-relaxed mb-6">
              We believe that everyone should have access to fresh, healthy food and the knowledge to 
              grow it themselves. Whether you're a seasoned gardener or just starting out, we welcome 
              you to join our community and learn alongside us.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-container bg-neutralLight">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neutral">
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Our Mission
              </h3>
              <p className="text-neutral/70 leading-relaxed">
                {garden.mission}
              </p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-bold mb-4 text-accent1">
                Our Priorities
              </h3>
              <ul className="space-y-2 text-neutral/70">
                {garden.priorities.map((priority, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent2 mr-2">•</span>
                    <span>{priority}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Theme & Atmosphere */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neutral">
            Our Vibe
          </h2>
          <div className="card text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              {garden.theme.name}
            </h3>
            <p className="text-lg text-neutral/70 leading-relaxed mb-6">
              {garden.theme.description}
            </p>
            <p className="text-base text-neutral/60">
              We strive to create a warm, welcoming atmosphere where visitors feel connected 
              to the earth and to each other. Our garden is a place of learning, sharing, and 
              growing—both plants and community.
            </p>
          </div>
        </div>
      </section>

      {/* Inspiration */}
      <section className="section-container bg-neutralLight">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neutral">
            Inspiration
          </h2>
          <div className="card">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              {garden.inspiration.competitor}
            </h3>
            <p className="text-neutral/70 leading-relaxed">
              {garden.inspiration.notes}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

