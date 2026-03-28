import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiDownload } from 'react-icons/hi'
import { SiGooglecloud, SiPython, SiApacheairflow, SiGooglebigquery } from 'react-icons/si'

// Typing animation hook
function useTypingEffect(words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    let timeout

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), deletingSpeed)
      } else {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return text
}

export default function Hero() {
  const typedText = useTypingEffect([
    'GCP Data Engineer',
    'ETL Pipeline Builder',
    'Cloud Solutions Developer',
    'Data Analytics Enthusiast',
  ])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--gradient-hero)',
      }}
    >
      {/* Background decorative arcs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[500, 700, 900, 1100].map((size, i) => (
          <div
            key={i}
            className="hero-arc"
            style={{
              width: size,
              height: size,
              top: '50%',
              right: '-10%',
              transform: 'translateY(-50%)',
            }}
          />
        ))}
        {/* Glowing orb */}
        <div style={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          top: '20%',
          right: '5%',
        }} />
        <div style={{
          position: 'absolute',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
          bottom: '10%',
          left: '5%',
        }} />
        {/* Grid pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, rgba(59,130,246,0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 60, minHeight: '100vh', paddingTop: 100 }}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 20px',
                background: 'rgba(59, 130, 246, 0.1)',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: 50,
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>👋</span>
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 900,
                color: 'var(--color-hero-text)',
                lineHeight: 1.15,
                marginBottom: 16,
                letterSpacing: '-1px',
              }}
            >
              Kiran Sai Krishna
              <br />
              <span style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Dasari
              </span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 20,
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              <span style={{ color: '#06b6d4' }}>{'>'}</span>
              <span style={{ color: '#94a3b8' }}>{typedText}</span>
              <span className="typing-cursor" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{
                color: '#94a3b8',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                maxWidth: 480,
                marginBottom: 36,
              }}
            >
              Entry-level Data Engineer with hands-on experience building ETL/ELT pipelines on Google Cloud Platform. Passionate about turning raw data into impactful insights.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
            >
              <button
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects <HiArrowRight />
              </button>
              <a href="/Kiran_data_engineer_fresher.pdf" download target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ color: '#93c5fd', borderColor: 'rgba(147, 197, 253, 0.3)' }}>
                <HiDownload /> Resume
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              style={{
                display: 'flex',
                gap: 40,
                marginTop: 48,
                paddingTop: 32,
                borderTop: '1px solid rgba(148, 163, 184, 0.15)',
              }}
            >
              {[
                { num: '2+', label: 'Projects' },
                { num: '3+', label: 'Certifications' },
                { num: '1', label: 'Internship' },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-hero-text)' }}>{stat.num}</div>
                  <div style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            {/* Glow circle behind photo */}
            <div style={{
              position: 'absolute',
              width: 380,
              height: 380,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(6,182,212,0.2))',
              filter: 'blur(40px)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }} />

            {/* Main circle frame */}
            <div style={{
              position: 'relative',
              width: 380,
              height: 380,
              borderRadius: '50%',
              padding: 6,
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                background: '#1e293b',
              }}>
                <img
                  src="/kiran-photo.jpg"
                  alt="Kiran Sai Krishna Dasari"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </div>
            </div>

            {/* Floating card 1 - GCP */}
            <motion.div
              className="float-animation"
              style={{
                position: 'absolute',
                top: 30,
                right: -10,
                background: darkMode => 'rgba(30, 41, 59, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: 16,
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                border: '1px solid rgba(59,130,246,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                background: 'rgba(30, 41, 59, 0.9)',
              }}
            >
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'rgba(59, 130, 246, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#60a5fa',
                fontSize: '1.3rem',
              }}>
                <SiGooglecloud />
              </div>
              <div>
                <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem' }}>GCP</div>
                <div style={{ color: '#64748b', fontSize: '0.75rem' }}>Cloud Platform</div>
              </div>
            </motion.div>

            {/* Floating card 2 - Python */}
            <motion.div
              className="float-animation-delay"
              style={{
                position: 'absolute',
                bottom: 60,
                left: -30,
                backdropFilter: 'blur(10px)',
                borderRadius: 16,
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                border: '1px solid rgba(6,182,212,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                background: 'rgba(30, 41, 59, 0.9)',
              }}
            >
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'rgba(6, 182, 212, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#22d3ee',
                fontSize: '1.3rem',
              }}>
                <SiPython />
              </div>
              <div>
                <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem' }}>Python</div>
                <div style={{ color: '#64748b', fontSize: '0.75rem' }}>Programming</div>
              </div>
            </motion.div>

            {/* Floating card 3 - Airflow */}
            <motion.div
              className="float-animation"
              style={{
                position: 'absolute',
                bottom: -10,
                right: 30,
                backdropFilter: 'blur(10px)',
                borderRadius: 16,
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                border: '1px solid rgba(16,185,129,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                background: 'rgba(30, 41, 59, 0.9)',
              }}
            >
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#34d399',
                fontSize: '1.3rem',
              }}>
                <SiApacheairflow />
              </div>
              <div>
                <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem' }}>Airflow</div>
                <div style={{ color: '#64748b', fontSize: '0.75rem' }}>Orchestration</div>
              </div>
            </motion.div>

            {/* Floating card 4 - BigQuery */}
            <motion.div
              className="float-animation-delay"
              style={{
                position: 'absolute',
                top: -10,
                left: 0,
                backdropFilter: 'blur(10px)',
                borderRadius: 16,
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                border: '1px solid rgba(245,158,11,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                background: 'rgba(30, 41, 59, 0.9)',
              }}
            >
              <div style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: 'rgba(245, 158, 11, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b',
                fontSize: '1.3rem',
              }}>
                <SiGooglebigquery />
              </div>
              <div>
                <div style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '0.95rem' }}>BigQuery</div>
                <div style={{ color: '#64748b', fontSize: '0.75rem' }}>Data Warehouse</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>


      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding-top: 120px !important;
            gap: 40px !important;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
          .hero-grid > div:last-child > div:first-of-type {
            width: 260px !important;
            height: 260px !important;
          }
          .hero-grid > div:last-child > div:nth-of-type(2) {
            width: 260px !important;
            height: 260px !important;
          }
        }
      `}</style>
    </section>
  )
}
