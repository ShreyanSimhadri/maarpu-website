import ugadiAward from '../assets/ugadi-award.jpg'
import felicitation from '../assets/felicitation.jpg'
import award from '../assets/award.jpg'
import './Awards.css'

const awards = [
  {
    img: ugadiAward,
    title: 'Ugadi Puraskaralu',
    date: 'March 2026',
    desc: 'Received the prestigious Ugadi Puraskaralu award for outstanding contributions to community service and social welfare.',
  },
  {
    img: felicitation,
    title: 'Felicitation of Tulasi Padmasree',
    date: '2025',
    desc: 'Founder Tulasi Padmasree was felicitated for her exceptional leadership and dedication to welfare activities across Andhra Pradesh.',
  },
  {
    img: award,
    title: 'Recognition for Maarpu',
    date: '2025',
    desc: 'Maarpu Welfare Society was recognised for its impactful programmes in education, women empowerment, and community welfare.',
  },
]

export default function Awards() {
  return (
    <section id="awards" className="awards">
      <div className="container">
        <h2 className="section-title">Awards & Recognition</h2>
        <p className="section-subtitle">Honoured for our commitment to social change</p>
        <div className="awards-grid">
          {awards.map(a => (
            <div key={a.title} className="award-card">
              <div className="award-img-wrap">
                <img src={a.img} alt={a.title} />
              </div>
              <div className="award-body">
                <span className="award-date">{a.date}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
