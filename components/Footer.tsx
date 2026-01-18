import Link from 'next/link'
import gardenData from '@/garden_data.json'

export default function Footer() {
  const { garden } = gardenData

  return (
    <footer className="bg-neutral text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              {garden.name}
            </h3>
            <p className="text-neutralLight/80 mb-4 leading-relaxed">
              {garden.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutralLight/80 hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutralLight/80 hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-neutralLight/80 hover:text-primary transition-colors duration-200">
                  Growing Guides
                </Link>
              </li>
              <li>
                <Link href="/visit" className="text-neutralLight/80 hover:text-primary transition-colors duration-200">
                  Visit Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutralLight/80 hover:text-primary transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-neutralLight/80 hover:text-primary transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">
              Contact
            </h3>
            <ul className="space-y-2 text-neutralLight/80">
              <li>
                <a 
                  href={`mailto:${garden.contact.email}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {garden.contact.email}
                </a>
              </li>
              <li>
                <a 
                  href={`tel:${garden.contact.phone.replace(/\D/g, '')}`}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {garden.contact.phone}
                </a>
              </li>
              <li className="mt-4">
                <p className="text-sm">{garden.location.address}</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutralLight/20 mt-8 pt-8 text-center text-neutralLight/60 text-sm">
          <p>
            © {new Date().getFullYear()} {garden.name}. All rights reserved. | 
            <span className="ml-1">Inspiring others to grow their own food and engage in their community.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

