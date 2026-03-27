import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap, HiCode, HiLightningBolt, HiGlobe } from 'react-icons/hi'

const highlights = [
  { icon: <HiCode />, title: 'ETL/ELT Expert', desc: 'Building robust data pipelines on GCP' },
  { icon: <HiGlobe />, title: 'Cloud Native', desc: 'Deep experience with Google Cloud Platform' },
  { icon: <HiLightningBolt />, title: 'Query Optimizer', desc: 'Reducing query times by 25-35%' },
  { icon: <HiAcademicCap />, title: 'Fast Learner', desc: 'Quick to adopt new technologies' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section section-alt">
      <div className="container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>About <span className="highlight">Me</span></h2>
          <p>Get to know me a little better</p>
          <div className="underline-bar" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }} className="about-grid">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 24 }}>
              I'm an entry-level <strong style={{ color: 'var(--color-primary)' }}>Data Engineer</strong> with hands-on experience building ETL/ELT pipelines on Google Cloud Platform. I'm skilled in Python, SQL, BigQuery, GCS, and Airflow with a strong understanding of data warehousing, data validation, and query optimization.
            </p>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 32 }}>
              I'm passionate about transforming raw data into meaningful insights and building scalable data infrastructure. Currently looking for opportunities where I can contribute to data-driven solutions and grow as an engineer.
            </p>

            {/* Education */}
            <div style={{ marginTop: 8 }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                <HiAcademicCap style={{ color: 'var(--color-primary)' }} /> Education
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{
                  padding: '16px 20px',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '3px solid var(--color-primary)',
                }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>B.Tech in Computer Science Engineering</div>
                  <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: 4 }}>
                    SIR C R REDDY College of Engineering | 2021 – 2025
                  </div>
                  <div style={{ color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 600, marginTop: 4 }}>
                    CGPA: 7.55
                  </div>
                </div>

                <div style={{
                  padding: '16px 20px',
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--color-border)',
                  borderLeft: '3px solid var(--color-accent)',
                }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Intermediate</div>
                  <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: 4 }}>
                    Aditya Junior College | 2019 – 2021
                  </div>
                  <div style={{ color: 'var(--color-accent)', fontSize: '0.85rem', fontWeight: 600, marginTop: 4 }}>
                    Percentage: 84%
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{
                  padding: 24,
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  transition: 'all 0.3s',
                  cursor: 'default',
                }}
              >
                <div style={{
                  width: 50,
                  height: 50,
                  borderRadius: 14,
                  background: 'rgba(59, 130, 246, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px',
                  color: 'var(--color-primary)',
                  fontSize: '1.4rem',
                }}>
                  {item.icon}
                </div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: 6 }}>{item.title}</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem', lineHeight: 1.5 }}>{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
