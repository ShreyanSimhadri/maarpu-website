import hero from '../assets/founder.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />
      <img src={hero} alt="Maarpu with CM" className="hero-bg" />
      <div className="hero-content">
        <p className="hero-tag">Transforming Lives Since 2024</p>
        <h1>MAARPU Welfare Society</h1>
        <p className="hero-sub">
          Empowering communities through education, women empowerment, healthcare, and social welfare across Andhra Pradesh.
        </p>
        <div className="hero-btns">
          <a href="#programs" className="btn btn-primary">Our Programs</a>
          <a href="#contact" className="btn btn-outline">Get Involved</a>
        </div>
      </div>
    </section>
  )
}
