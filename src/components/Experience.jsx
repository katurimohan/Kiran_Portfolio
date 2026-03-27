import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiBriefcase, HiCheckCircle, HiCalendar, HiLocationMarker } from 'react-icons/hi'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const tasks = [
    'Worked with real-world datasets for analysis',
    'Used Python (Pandas, NumPy, Matplotlib) for data processing',
    'Performed Exploratory Data Analysis & visualization',
    'Built basic predictive models using machine learning',
  ]

  return (
    <section id="experience" className="section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Work <span className="highlight">Experience</span></h2>
          <p>Professional internship experience</p>
          <div className="underline-bar" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ maxWidth: 700, margin: '0 auto' }}
        >
          {/* Timeline card */}
          <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
            {/* Header */}
            <div style={{
              padding: '28px 32px',
              background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(6,182,212,0.05))',
              borderBottom: '1px solid var(--color-border)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1.4rem',
                }}>
                  <HiBriefcase />
                </div>
                <div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: 2 }}>Data Analytics Intern</h3>
                  <div style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.95rem' }}>
                    Datavalley India Pvt. Ltd.
                  </div>
                </div>
              </div>
              <div style={{
                display: 'flex',
                gap: 24,
                marginTop: 16,
                color: 'var(--color-text-secondary)',
                fontSize: '0.85rem',
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <HiCalendar style={{ color: 'var(--color-primary)' }} /> March 2025
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <HiLocationMarker style={{ color: 'var(--color-primary)' }} /> India
                </span>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '28px 32px' }}>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {tasks.map((task, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      fontSize: '0.95rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                    }}
                  >
                    <HiCheckCircle style={{ color: '#10b981', fontSize: '1.1rem', flexShrink: 0, marginTop: 3 }} />
                    {task}
                  </motion.li>
                ))}
              </ul>

              {/* Skills used */}
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Technologies Used</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analysis', 'Machine Learning'].map((tech, i) => (
                    <span key={i} style={{
                      padding: '5px 14px',
                      borderRadius: 50,
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      background: 'rgba(59, 130, 246, 0.08)',
                      color: 'var(--color-primary)',
                      border: '1px solid rgba(59, 130, 246, 0.15)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
