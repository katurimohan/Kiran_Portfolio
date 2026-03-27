import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiCloud, HiDatabase, HiCog, HiChartBar, HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { SiGooglecloud, SiApacheairflow } from 'react-icons/si'

const projects = [
  {
    title: 'Batch ETL Data Pipeline on GCP',
    subtitle: 'End-to-end data pipeline solution',
    icon: <SiGooglecloud />,
    color: '#3b82f6',
    tags: ['GCP', 'BigQuery', 'Airflow', 'Python', 'Cloud Storage'],
    highlights: [
      'Built ETL pipeline processing 1–2M records',
      'Used Airflow for workflow orchestration',
      'Improved data consistency by 30%',
      'Reduced query time by 25–35%',
      'Implemented incremental loading (40% faster)',
    ],
  },
  {
    title: 'Automated Data Cleaning Pipeline',
    subtitle: 'Intelligent data quality automation',
    icon: <HiCog />,
    color: '#06b6d4',
    tags: ['Python', 'Airflow', 'Pandas', 'Data Validation'],
    highlights: [
      'Built automated data cleaning workflows',
      'Applied schema validation & deduplication',
      'Created analytics-ready datasets',
      'Automated pipeline using Apache Airflow',
    ],
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section section-alt">
      <div className="container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>My <span className="highlight">Projects</span></h2>
          <p>Real-world data engineering solutions I've built</p>
          <div className="underline-bar" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }} className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="glass-card"
              style={{
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Card Header - gradient strip */}
              <div style={{
                padding: '28px 28px 20px',
                background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)`,
                borderBottom: `1px solid var(--color-border)`,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: `${project.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: project.color,
                    fontSize: '1.5rem',
                    flexShrink: 0,
                  }}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: 4, lineHeight: 1.3 }}>{project.title}</h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>{project.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: 28 }}>
                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                  {project.tags.map((tag, j) => (
                    <span key={j} style={{
                      padding: '4px 12px',
                      borderRadius: 50,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: `${project.color}10`,
                      color: project.color,
                      border: `1px solid ${project.color}25`,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {project.highlights.map((h, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                      <HiCheckCircle style={{ color: project.color, fontSize: '1rem', flexShrink: 0, marginTop: 3 }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
