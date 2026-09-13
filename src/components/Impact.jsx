import './Impact.css'

const stats = [
  { number: '53+', label: 'Schools Reached' },
  { number: '110+', label: 'Children in Talent Fest' },
  { number: '68+', label: 'Students Supported' },
  { number: '52', label: 'Bangaru Kutumbalu Adopted' },
  { number: '₹17L+', label: 'Spent on Welfare' },
  { number: '12+', label: 'Districts Covered' },
]

export default function Impact() {
  return (
    <section id="impact" className="impact">
      <div className="container">
        <h2 className="section-title" style={{ color: 'var(--white)' }}>Our Impact</h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Numbers that reflect our commitment to change
        </p>
        <div className="stats-grid">
          {stats.map(s => (
            <div key={s.label} className="stat-card">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
