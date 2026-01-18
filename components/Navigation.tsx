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

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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

  // Check if link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

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
              {navLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors duration-200 font-medium relative py-2 ${
                      active
                        ? 'text-white font-semibold'
                        : 'text-neutral hover:text-white'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Mobile menu button - larger touch target */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-neutral hover:text-white transition-colors duration-200 p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
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

        {/* Mobile Navigation - slide in animation */}
        <div
          className={`md:hidden border-t overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-[600px] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
          style={{ backgroundColor: '#4CAF50' }}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 text-base rounded-md transition-all duration-200 min-h-[44px] flex items-center ${
                    active
                      ? 'bg-white/20 text-white font-semibold'
                      : 'text-neutral hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </>
  )
}

