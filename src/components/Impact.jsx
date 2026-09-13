import './Impact.css'

const stats = [
  { number: '6000+', label: 'Schools Reached' },
  { number: '11000+', label: 'Children Impacted' },
  { number: '300+', label: 'Students Supported' },
  { number: '152', label: 'Bangaru Kutumbalu Adopted' },
  { number: 'AP & TS', label: 'States Covered' },
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
