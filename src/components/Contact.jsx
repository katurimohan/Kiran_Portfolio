import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'

const contactInfo = [
  {
    icon: <HiMail />,
    title: 'Email',
    value: 'kiransaikrishnadasari@gmail.com',
    link: 'mailto:kiransaikrishnadasari@gmail.com',
    color: '#3b82f6',
  },
  {
    icon: <HiPhone />,
    title: 'Phone',
    value: '+91 7993554306',
    link: 'tel:+917993554306',
    color: '#10b981',
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/kskd2004',
    link: 'https://www.linkedin.com/in/kskd2004',
    color: '#0077b5',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Build mailto link
    const mailtoLink = `mailto:kiransaikrishnadasari@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`
    window.open(mailtoLink)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 'var(--radius)',
    border: '1px solid var(--color-border)',
    background: 'var(--color-bg)',
    color: 'var(--color-text)',
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  }

  return (
    <section id="contact" className="section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In <span className="highlight">Touch</span></h2>
          <p>I'd love to hear from you. Let's connect!</p>
          <div className="underline-bar" />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 48, alignItems: 'start' }} className="contact-grid">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 8 }}>Let's Talk</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 32, lineHeight: 1.7 }}>
              Whether you have a project in mind or just want to chat about data engineering, feel free to reach out. I'm always open to new opportunities!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.link}
                  target={info.title === 'LinkedIn' ? '_blank' : undefined}
                  rel={info.title === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 6 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '16px 20px',
                    borderRadius: 'var(--radius)',
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.3s',
                  }}
                >
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${info.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: info.color,
                    fontSize: '1.2rem',
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: 2 }}>{info.title}</div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              {[
                { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/kskd2004', color: '#0077b5' },
                { icon: <SiGithub />, link: 'https://github.com', color: 'var(--color-text)' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: 'var(--color-bg-alt)',
                    border: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: social.color,
                    fontSize: '1.2rem',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card" style={{ padding: 32 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-grid">
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6, color: 'var(--color-text-secondary)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6, color: 'var(--color-text-secondary)' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6, color: 'var(--color-text-secondary)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can I help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
                />
              </div>

              <div style={{ marginTop: 16 }}>
                <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: 6, color: 'var(--color-text-secondary)' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                  onFocus={(e) => { e.target.style.borderColor = 'var(--color-primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)' }}
                  onBlur={(e) => { e.target.style.borderColor = 'var(--color-border)'; e.target.style.boxShadow = 'none' }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                style={{
                  marginTop: 24,
                  width: '100%',
                  justifyContent: 'center',
                  padding: '16px 32px',
                  fontSize: '1rem',
                }}
              >
                {submitted ? '✓ Message Sent!' : <>Send Message <HiPaperAirplane style={{ transform: 'rotate(90deg)' }} /></>}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
