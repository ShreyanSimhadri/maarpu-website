import logo from '../assets/logo.jpg'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="Maarpu Logo" />
          <span>MAARPU Welfare Society</span>
        </div>
        <p className="footer-tagline">Transforming lives across Andhra Pradesh</p>
        <p className="footer-copy">© {new Date().getFullYear()} MAARPU Welfare Society. All rights reserved.</p>
      </div>
    </footer>
  )
}
