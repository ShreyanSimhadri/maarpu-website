import founder from '../assets/hero.jpg'
import community from '../assets/community.jpg'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">Who we are and what drives us</p>
        <div className="about-grid">
          <div className="about-text">
            <p>
              <strong>MAARPU Welfare Society</strong> (meaning "Change" in Telugu) is a non-governmental organisation based in Vijayawada, Andhra Pradesh, dedicated to creating meaningful, lasting change in underserved communities.
            </p>
            <p>
              We work across multiple domains — education, women empowerment, healthcare, environmental awareness, and community welfare — reaching tribal villages, orphanages, old-age homes, and government schools across Andhra Pradesh.
            </p>
            <p>
              Our initiatives span from the coastal districts of Krishna and NTR to the tribal regions of Alluri Sitarama Raju District and Paderu, touching thousands of lives every month.
            </p>
            <div className="about-values">
              {['Compassion', 'Empowerment', 'Integrity', 'Community'].map(v => (
                <span key={v} className="value-tag">{v}</span>
              ))}
            </div>
          </div>
          <div className="about-images">
            <img src={founder} alt="Founder with CM" className="about-img main" />
            <img src={community} alt="Maarpu with community" className="about-img secondary" />
          </div>
        </div>
      </div>
    </section>
  )
}
