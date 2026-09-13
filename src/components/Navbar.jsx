import { useState } from 'react'
import logo from '../assets/logo.jpg'
import './Navbar.css'

const links = ['About', 'Programs', 'Activities', 'Impact', 'Awards', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#home" className="nav-brand">
          <img src={logo} alt="Maarpu Logo" className="nav-logo" />
          <span>MAARPU Welfare Society</span>
        </a>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
