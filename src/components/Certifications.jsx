import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiAcademicCap, HiBadgeCheck, HiExternalLink } from 'react-icons/hi'

const certifications = [
  {
    title: 'Data Analytics Certification',
    issuer: 'Datavalley.ai',
    color: '#3b82f6',
    icon: '📊',
  },
  {
    title: 'Deloitte Data Analytics Simulation',
    issuer: 'Deloitte | August 2025',
    color: '#06b6d4',
    icon: '🏢',
  },
  {
    title: 'SQL Certification (Level 1 & 2)',
    issuer: 'SQL Proficiency',
    color: '#10b981',
    icon: '🗄️',
  },
]

const additionalSkills = [
  { name: 'Agile/Scrum', icon: '🔄' },
  { name: 'Problem-solving', icon: '🧩' },
  { name: 'Communication', icon: '💬' },
  { name: 'Fast Learner', icon: '🚀' },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certifications" className="section section-alt">
      <div className="container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Certifications & <span className="highlight">More</span></h2>
          <p>Professional certifications and soft skills</p>
          <div className="underline-bar" />
        </motion.div>

        {/* Certifications Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 60 }} className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card"
              style={{
                padding: 32,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Decorative glow */}
              <div style={{
                position: 'absolute',
                top: -30,
                right: -30,
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: `${cert.color}08`,
                filter: 'blur(20px)',
              }} />

              <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>{cert.icon}</div>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '4px 14px',
                borderRadius: 50,
                background: `${cert.color}10`,
                color: cert.color,
                fontSize: '0.75rem',
                fontWeight: 600,
                marginBottom: 16,
              }}>
                <HiBadgeCheck /> Certified
              </div>

              <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 8, lineHeight: 1.4 }}>{cert.title}</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>{cert.issuer}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 style={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '1.2rem',
            marginBottom: 28,
            color: 'var(--color-text)',
          }}>
            💡 Additional Skills
          </h3>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}>
            {additionalSkills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 24px',
                  borderRadius: 50,
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'default',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{skill.icon}</span>
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cert-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
