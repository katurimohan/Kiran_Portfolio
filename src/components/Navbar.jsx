import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiDownload, HiMoon, HiSun } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navLinks.map((l) => l.to)
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          backgroundColor: scrolled
            ? darkMode
              ? 'rgba(15, 23, 42, 0.85)'
              : 'rgba(255, 255, 255, 0.85)'
            : 'transparent',
          borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
          transition: 'background-color 0.3s, border-bottom 0.3s, backdrop-filter 0.3s',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
            onClick={() => scrollTo('hero')}
          >
            <span style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.5px',
            }}>
              Kiran
            </span>
            <span style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              color: 'var(--color-text)',
              letterSpacing: '-0.5px',
            }}>

            </span>
          </motion.div>

          {/* Desktop Nav Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 32,
          }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.to}
                onClick={() => scrollTo(link.to)}
                whileHover={{ y: -2 }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: activeSection === link.to ? 600 : 500,
                  color: activeSection === link.to ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                  transition: 'color 0.3s',
                  position: 'relative',
                  padding: '4px 0',
                  fontFamily: 'inherit',
                }}
              >
                {link.name}
                {activeSection === link.to && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'var(--gradient-primary)',
                      borderRadius: 1,
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* Dark mode toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              style={{
                background: 'var(--color-bg-alt)',
                border: '1px solid var(--color-border)',
                borderRadius: '50%',
                width: 42,
                height: 42,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--color-text)',
                fontSize: '1.2rem',
                transition: 'all 0.3s',
              }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <HiSun /> : <HiMoon />}
            </motion.button>

            {/* Resume button (desktop) */}
            <motion.a
              href="/Kiran_data_engineer_fresher.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary desktop-nav"
              style={{
                padding: '10px 24px',
                fontSize: '0.9rem',
              }}
            >
              <HiDownload /> Resume
            </motion.a>

            {/* Mobile hamburger */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-nav-btn"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text)',
                fontSize: '1.5rem',
                display: 'none',
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX /> : <HiMenu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: darkMode ? 'rgba(2, 6, 23, 0.95)' : 'rgba(255, 255, 255, 0.97)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 24,
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Close button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(false)}
              style={{
                position: 'absolute',
                top: 20,
                right: 24,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-text)',
                fontSize: '1.8rem',
              }}
            >
              <HiX />
            </motion.button>

            {navLinks.map((link, i) => (
              <motion.button
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => scrollTo(link.to)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.4rem',
                  fontWeight: 600,
                  color: activeSection === link.to ? 'var(--color-primary)' : 'var(--color-text)',
                  fontFamily: 'inherit',
                  padding: '8px 0',
                }}
              >
                {link.name}
              </motion.button>
            ))}

            <motion.a
              href="/Kiran_data_engineer_fresher.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="btn-primary"
              style={{ marginTop: 16 }}
            >
              <HiDownload /> Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
