import gardenData from '@/garden_data.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Visit Us | JC's Backyard",
  description: "Plan your visit to JC's Backyard. Find our location, hours, and learn about tours, workshops, and volunteer opportunities in Kansas City.",
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

      {/* Location & Hours */}
      <section className="section-container bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Location */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral">
                Location
              </h2>
              <div className="card">
                <p className="text-lg mb-4 text-neutral/80">
                  <strong>Address:</strong><br />
                  {garden.location.fullAddress}
                </p>
                <p className="text-lg mb-4 text-neutral/80">
                  <strong>Region:</strong><br />
                  {garden.location.region}
                </p>
                <div className="mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49604.14147366106!2d-94.59836615!3d39.099726949999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f75eafe99997%3A0x558525e66aaa51a2!2sKansas%20City%2C%20MO!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Hours */}
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

