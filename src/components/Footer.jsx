import React from 'react'
import { HiHeart } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--color-bg-alt)',
      borderTop: '1px solid var(--color-border)',
      padding: '40px 0',
    }}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
        }}>
          {/* Left - Logo + Copyright */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <span style={{
                fontSize: '1.3rem',
                fontWeight: 800,
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Kiran
              </span>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-text)' }}>.</span>
            </div>
            <p style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}>
              © {currentYear} — Made with <HiHeart style={{ color: '#ef4444', fontSize: '0.9rem' }} /> by Kiran Sai Krishna Dasari
            </p>
          </div>

          {/* Center - Quick Links */}
          <div style={{ display: 'flex', gap: 24 }} className="footer-links">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right - Social Icons */}
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/kskd2004' },
              { icon: <SiGithub />, link: 'https://github.com' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-primary)'
                  e.currentTarget.style.color = 'var(--color-primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.color = 'var(--color-text-secondary)'
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-links { display: none !important; }
        }
      `}</style>
    </footer>
  )
}
