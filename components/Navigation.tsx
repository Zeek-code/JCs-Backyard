'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gardenData from '@/garden_data.json'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [heroHeight, setHeroHeight] = useState(0)
  const [isPastHero, setIsPastHero] = useState(false)
  const pathname = usePathname()
  const { garden } = gardenData
  const isHomePage = pathname === '/'

  useEffect(() => {
    const updateHeroHeight = () => {
      if (isHomePage) {
        const heroSection = document.getElementById('hero-section')
        if (heroSection) {
          setHeroHeight(heroSection.offsetHeight)
        }
      }
    }

    // Initial measurement
    updateHeroHeight()
    
    // Update on resize
    window.addEventListener('resize', updateHeroHeight)
    
    // Also check after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(updateHeroHeight, 100)

    return () => {
      window.removeEventListener('resize', updateHeroHeight)
      clearTimeout(timeoutId)
    }
  }, [isHomePage])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      if (isHomePage && heroHeight > 0) {
        // Check if we've scrolled past the hero section
        setIsPastHero(currentScrollY >= heroHeight)
      } else if (!isHomePage) {
        setIsPastHero(false)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage, heroHeight])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/guides', label: 'Growing Guides' },
    { href: '/visit', label: 'Visit' },
    { href: '/blog', label: 'Blog' },
    { href: '/portfolio', label: 'Portfolio' },
  ]

  // Calculate nav bar position and opacity for home page
  const getNavStyle = () => {
    if (!isHomePage) {
      return {
        position: 'sticky' as const,
        top: '0',
        opacity: '1',
      }
    }

    if (isPastHero || heroHeight === 0) {
      // After hero: fixed to top, fully opaque
      return {
        position: 'fixed' as const,
        top: '0',
        left: '0',
        right: '0',
        opacity: '1',
        width: '100%',
      }
    }

    // During hero: calculate position and opacity
    const fivePercentOfHero = heroHeight * 0.05
    
    // Position: Start with 5% of hero visible above nav bar (when scrollY = 0)
    // As user scrolls, nav moves up until it reaches top (0px)
    // Nav should reach top when we've scrolled by fivePercentOfHero
    const scrollProgress = Math.min(scrollY, fivePercentOfHero)
    const topPosition = fivePercentOfHero - scrollProgress
    
    // Opacity: 80% opaque while in hero
    return {
      position: 'fixed' as const,
      top: `${topPosition}px`,
      left: '0',
      right: '0',
      opacity: '0.8',
      width: '100%',
    }
  }

  const navStyle = getNavStyle()

  return (
    <nav 
      className="shadow-md z-50 transition-opacity duration-300"
      style={{
        ...navStyle,
        backgroundColor: '#4CAF50', // Primary green (same as btn-primary)
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-neutral">
              <span style={{ fontFamily: 'var(--font-dancing-script)' }}>JC's</span> Backyard
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral hover:text-primary transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t" style={{ backgroundColor: '#4CAF50' }}>
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-neutral hover:bg-primary/10 hover:text-primary rounded-md transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

