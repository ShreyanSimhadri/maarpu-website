import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--white)' }}>Get In Touch</h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Join us in making a difference — volunteer, donate, or collaborate
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h4>Address</h4>
                <p>Vijayawada, Andhra Pradesh, India</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+918985217744">+91 898 521 7744</a></p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:maarpuwelfaresociety@gmail.com">maarpuwelfaresociety@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-ways">
              <h4>Ways to Help</h4>
              <div className="ways-list">
                <span>🤝 Volunteer</span>
                <span>💰 Donate</span>
                <span>🏢 Corporate CSR</span>
                <span>📢 Spread Awareness</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={e => { e.preventDefault(); alert('Thank you! We will get back to you soon.') }}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows={5} required />
            <button type="submit" className="btn btn-primary" style={{ width: '100%', border: 'none' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
