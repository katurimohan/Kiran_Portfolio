import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiGooglecloud, SiPython, SiApacheairflow, SiApachespark, SiMysql, SiPostgresql,
  SiGit, SiGithub, SiLinux,
} from 'react-icons/si'
import { HiDatabase, HiCloud, HiCode, HiCog, HiServer, HiTerminal } from 'react-icons/hi'

const skillCategories = [
  {
    title: 'Cloud',
    icon: <HiCloud />,
    color: '#3b82f6',
    skills: [
      { name: 'BigQuery', icon: <SiGooglecloud />, level: 85 },
      { name: 'Cloud Storage', icon: <SiGooglecloud />, level: 80 },
      { name: 'Dataflow', icon: <SiGooglecloud />, level: 70 },
      { name: 'Cloud Composer', icon: <SiGooglecloud />, level: 75 },
    ],
  },
  {
    title: 'Programming',
    icon: <HiCode />,
    color: '#06b6d4',
    skills: [
      { name: 'Python', icon: <SiPython />, level: 85 },
      { name: 'SQL', icon: <HiDatabase />, level: 90 },
    ],
  },
  {
    title: 'Data Engineering',
    icon: <HiCog />,
    color: '#10b981',
    skills: [
      { name: 'ETL/ELT', icon: <HiServer />, level: 85 },
      { name: 'Data Modeling', icon: <HiDatabase />, level: 75 },
      { name: 'Data Validation', icon: <HiCog />, level: 80 },
      { name: 'Data Warehousing', icon: <HiDatabase />, level: 78 },
    ],
  },
  {
    title: 'Tools',
    icon: <HiTerminal />,
    color: '#8b5cf6',
    skills: [
      { name: 'Apache Airflow', icon: <SiApacheairflow />, level: 80 },
      { name: 'PySpark', icon: <SiApachespark />, level: 55 },
    ],
  },
  {
    title: 'Databases',
    icon: <HiDatabase />,
    color: '#f59e0b',
    skills: [
      { name: 'BigQuery', icon: <SiGooglecloud />, level: 85 },
      { name: 'MySQL', icon: <SiMysql />, level: 75 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70 },
    ],
  },
  {
    title: 'DevOps & OS',
    icon: <HiTerminal />,
    color: '#ef4444',
    skills: [
      { name: 'Git', icon: <SiGit />, level: 80 },
      { name: 'GitHub', icon: <SiGithub />, level: 85 },
      { name: 'Linux', icon: <SiLinux />, level: 70 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>My <span className="highlight">Skills</span></h2>
          <p>Technologies and tools I work with</p>
          <div className="underline-bar" />
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="skills-grid">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-card"
              style={{ padding: 28 }}
            >
              {/* Category Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: `${cat.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: cat.color,
                  fontSize: '1.3rem',
                }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>{cat.title}</h3>
              </div>

              {/* Skills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {cat.skills.map((skill, i) => (
                  <div key={i}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 8,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: cat.color, fontSize: '1rem' }}>{skill.icon}</span>
                        <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{skill.name}</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{skill.level}%</span>
                    </div>
                    {/* Progress bar */}
                    <div style={{
                      width: '100%',
                      height: 6,
                      borderRadius: 3,
                      background: 'var(--color-bg-alt)',
                      overflow: 'hidden',
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: catIdx * 0.1 + i * 0.1, ease: 'easeOut' }}
                        style={{
                          height: '100%',
                          borderRadius: 3,
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
