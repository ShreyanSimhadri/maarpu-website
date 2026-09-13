import bloodDonation from '../assets/blood-donation.jpg'
import plantation from '../assets/plantation.jpg'
import polioRally from '../assets/polio-rally.jpg'
import community from '../assets/community.jpg'
import './Programs.css'

const programs = [
  {
    img: bloodDonation,
    title: 'Healthcare Initiatives',
    desc: 'Organising blood donation camps, medical camps at old-age homes, distributing protein supplements to pregnant mothers, and conducting polio awareness rallies.',
  },
  {
    img: plantation,
    title: 'Education & Holistic Learning',
    desc: 'Supporting 68+ students with tuition fees, conducting talent fests across 53 schools, holistic learning programmes in tribal schools, and school wall art projects.',
  },
  {
    img: polioRally,
    title: 'Women Empowerment',
    desc: 'Running empowerment programmes in Chintapalli, Paderu, Krishnalanka, and tribal villages — covering financial literacy, SHG coordination, and skill development.',
  },
  {
    img: community,
    title: 'Community Welfare',
    desc: 'Monthly support to orphanages and old-age homes, adopting 52 Bangaru Kutumbalu families, and providing groceries and essential amenities to those in need.',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="programs">
      <div className="container">
        <h2 className="section-title">Our Programs</h2>
        <p className="section-subtitle">Key areas where Maarpu creates lasting impact</p>
        <div className="programs-grid">
          {programs.map(p => (
            <div key={p.title} className="program-card">
              <div className="program-img-wrap">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="program-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
