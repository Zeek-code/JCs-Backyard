import gardenData from '@/garden_data.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Visit Us | JC's Backyard",
  description: "Plan your visit to JC's Backyard. Find our hours and learn about tours, workshops, and volunteer opportunities in Kansas City.",
}

export default function Visit() {
  const { garden } = gardenData

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary/20 py-16">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-neutral">
            Visit Us
          </h1>
          <p className="text-xl text-center text-neutral/70 max-w-2xl mx-auto">
            Come see our garden and join our community
          </p>
        </div>
      </section>

      {/* Hours */}
      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral">
              Hours
            </h2>
            <div className="card space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  Public Visiting Hours
                </h3>
                <p className="text-neutral/70">
                  {garden.hours.public}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-accent1">
                  Volunteer Days
                </h3>
                <p className="text-neutral/70">
                  {garden.hours.volunteer}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-accent2">
                  Guided Tours
                </h3>
                <p className="text-neutral/70">
                  {garden.hours.tours}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-container bg-neutralLight">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-neutral">
          Programs & Activities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {garden.programs.map((program, index) => (
            <div key={index} className="card">
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
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-container bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-neutral">
            Get In Touch
          </h2>
          <div className="card text-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  Email
                </h3>
                <a 
                  href={`mailto:${garden.contact.email}`}
                  className="text-accent2 hover:underline text-lg"
                >
                  {garden.contact.email}
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  Phone
                </h3>
                <a 
                  href={`tel:${garden.contact.phone.replace(/\D/g, '')}`}
                  className="text-accent2 hover:underline text-lg"
                >
                  {garden.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-accent2 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community, volunteer, or simply come visit and learn. Everyone is welcome!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`mailto:${garden.contact.email}?subject=Volunteer Inquiry`}
              className="btn-primary bg-white text-accent2 hover:bg-neutralLight inline-block"
            >
              Volunteer
            </a>
            <a 
              href={`mailto:${garden.contact.email}?subject=Tour Request`}
              className="btn-outline border-white text-white hover:bg-white hover:text-accent2 inline-block"
            >
              Request a Tour
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

