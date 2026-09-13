import './Activities.css'

const highlights = [
  { icon: '🎗️', title: 'Blood Donation Camp', desc: 'Conducted in collaboration with Brahma Kumaris across Vijayawada.' },
  { icon: '🌳', title: 'Green Environment Initiative', desc: 'Plantation drives at schools in Krishna & NTR districts.' },
  { icon: '🎨', title: 'School Wall Art', desc: 'Eco-friendly climate-action wall art across 20 schools.' },
  { icon: '🏆', title: 'Student Talent Fest', desc: '53 schools, 110+ children in quiz, drawing, essay & chess.' },
  { icon: '👩', title: 'Women Empowerment', desc: 'Programmes in Chintapalli, Paderu, Krishnalanka & tribal villages.' },
  { icon: '📚', title: 'Holistic Learning', desc: 'MoU with ITDA Paderu for tribal school learning programmes.' },
  { icon: '🤝', title: 'P4 Initiative', desc: 'Adopted 152 Bangaru Kutumbalu families in Gunadala, Vijayawada.' },
  { icon: '🏥', title: 'Medical Camps', desc: 'Health camps at old-age homes with free checkups & nutrition support.' },
  { icon: '🎓', title: 'Student Support', desc: 'Covered tuition & hostel fees for 300+ students across AP.' },
  { icon: '🍱', title: 'Community Meals', desc: 'Monthly groceries & meals to orphanages and old-age homes.' },
  { icon: '🏛️', title: 'CM Presentation', desc: 'Presented MAARPU\'s initiatives to the Hon\'ble CM of Andhra Pradesh.' },
  { icon: '🌺', title: 'Ugadi Puraskaralu', desc: 'Received state award for outstanding community service & welfare.' },
]

export default function Activities() {
  return (
    <section id="activities" className="activities">
      <div className="container">
        <h2 className="section-title">Our Activities</h2>
        <p className="section-subtitle">A glimpse of what MAARPU has been doing across Andhra Pradesh & Telangana</p>
        <div className="activities-grid">
          {highlights.map(h => (
            <div key={h.title} className="activity-card">
              <div className="activity-icon">{h.icon}</div>
              <div className="activity-body">
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
