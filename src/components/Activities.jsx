import { useState } from 'react'
import './Activities.css'

const activities = [
  { month: 'Apr 2025', desc: 'Donated hearing aids to a person in need.', amount: '₹55,000' },
  { month: 'Apr 2025', desc: 'Donated a cooler to an elderly person during severe summer heat.', amount: '₹5,500' },
  { month: 'Apr 2025', desc: 'Provided groceries and essentials to an old-age home and orphanage.', amount: '₹30,000' },
  { month: 'May 2025', desc: 'Participated in the Tiranga Yatra in Vijayawada, celebrating national pride and unity.', amount: '₹16,000' },
  { month: 'May 2025', desc: 'Visited Akshaya Patra and contributed towards nutritious meals for children.', amount: '₹20,000' },
  { month: 'May 2025', desc: 'Provided groceries and essentials to an old-age home and orphanage.', amount: '₹30,000' },
  { month: 'Jun 2025', desc: 'Supported maintenance and essential needs of orphanages and old-age homes.', amount: '₹30,000' },
  { month: 'Jul 2025', desc: 'Organised a cultural programme at Hare Krishna Gokula Kshetra with prize distribution.', amount: '' },
  { month: 'Jul 2025', desc: 'Assisted a student with hostel fee support.', amount: '₹86,850' },
  { month: 'Jul 2025', desc: 'Conducted a medical camp at an old-age home and distributed apples to residents.', amount: '₹11,000' },
  { month: 'Jul 2025', desc: 'Maarpu Anniversary: served meals and distributed fruits at an old-age home in Vambay Colony.', amount: '₹15,000' },
  { month: 'Jul 2025', desc: 'Distributed protein supplements to pregnant and lactating mothers at PHC Madhuranagar, Vijayawada.', amount: '₹10,000' },
  { month: 'Jul 2025', desc: 'Organised a women\'s empowerment session in Krishnalanka, Vijayawada.', amount: '₹5,000' },
  { month: 'Aug 2025', desc: 'Adopted 52 Bangaru Kutumbalu in Gunadala, Vijayawada, as part of the P4 Initiative.', amount: '₹83,000' },
  { month: 'Aug 2025', desc: 'Signed an MoU with ITDA Paderu for a School Holistic Learning Project and Women Empowerment.', amount: '₹30,000' },
  { month: 'Aug 2025', desc: 'Initiated the School Project in Krishna District as directed by the Education Department.', amount: '₹10,000' },
  { month: 'Aug 2025', desc: 'Celebrated Independence Day with children and elderly residents in Vambay Colony and Venkatayapalem.', amount: '₹30,000' },
  { month: 'Aug 2025', desc: 'Conducted a blood donation camp in collaboration with Brahma Kumaris.', amount: '' },
  { month: 'Aug 2025', desc: 'Supported women entrepreneurs in setting up stalls.', amount: '₹15,000' },
  { month: 'Sep 2025', desc: 'Supported an MBA student by covering hostel fees.', amount: '₹12,300' },
  { month: 'Sep 2025', desc: 'Conducted a Women Empowerment Programme at Chintapalli, ASR District.', amount: '₹45,000' },
  { month: 'Sep 2025', desc: 'Conducted a Women Empowerment Programme at Paderu, ASR District.', amount: '' },
  { month: 'Sep 2025', desc: 'Conducted an environmental awareness programme at Siddhartha College, Vijayawada.', amount: '₹10,000' },
  { month: 'Sep 2025', desc: 'Maarpu volunteers served at Kanakadurgamma Temple, Indrakiladri.', amount: '₹20,000' },
  { month: 'Oct 2025', desc: 'Conducted a plantation programme at ZPH Yenamalakuduru under the Green Environment Initiative.', amount: '₹10,000' },
  { month: 'Oct 2025', desc: 'Participated with high-school children in a state-level Quantum Valley programme.', amount: '₹80,000' },
  { month: 'Oct 2025', desc: 'Conducted a Polio Rally for Polio Day at ZPH School Peddapulipaka, Krishna District.', amount: '' },
  { month: 'Nov 2025', desc: 'Conducted a Student Talent Fest involving 53 schools and 110 children in quiz, drawing, essay writing, and chess.', amount: '₹1,50,000' },
  { month: 'Nov 2025', desc: 'Conducted the Student Talent Fest prize distribution ceremony for winners from 53 schools.', amount: '' },
  { month: 'Nov 2025', desc: 'Presented the society\'s activities and progress to the Hon\'ble Chief Minister of Andhra Pradesh.', amount: '' },
  { month: 'Dec 2025', desc: 'Opposed tree cutting at a dense park in Mogalrajpuram, Vijayawada, and raised a complaint with VMC.', amount: '' },
  { month: 'Dec 2025', desc: 'Conducted eco-friendly, climate-action-themed school wall art across 20 schools in NTR and Krishna districts.', amount: '₹4,95,000' },
  { month: 'Dec 2025', desc: 'Organised a Polio Awareness Rally at the Government Hospital.', amount: '₹10,000' },
  { month: 'Dec 2025', desc: 'Conducted a Women\'s Empowerment Programme at Tummalapalli Kalakshetram.', amount: '₹5,000' },
  { month: 'Jan 2026', desc: 'Organised a 10-day series of competitions for children.', amount: '₹1,10,000' },
  { month: 'Jan 2026', desc: 'Visited Penamaluru High School to promote educational awareness and student engagement.', amount: '' },
  { month: 'Feb 2026', desc: 'Supported 68 students across Vijayawada and ASR District by covering tuition and examination fees.', amount: '₹1,08,000' },
  { month: 'Feb 2026', desc: 'Conducted women empowerment activities in Vantlamamidi village — skill assessment, financial literacy, and SHG coordination.', amount: '' },
  { month: 'Feb 2026', desc: 'Conducted a holistic learning programme at a tribal welfare school in Hukumpeta, Paderu.', amount: '₹75,000' },
  { month: 'Feb 2026', desc: 'Visited Anna Canteen, Vijayawada, and reviewed food services and maintenance.', amount: '₹5,000' },
  { month: 'Mar 2026', desc: 'Conducted Women\'s Empowerment Programmes in Paderu, Vardhanapalle, and with SNG Foundation, Vijayawada.', amount: '' },
  { month: 'Mar 2026', desc: 'Conducted awareness programme for women in Alluri Sitarama Raju District.', amount: '' },
  { month: 'Mar 2026', desc: 'Conducted women\'s empowerment and SHG awareness in tribal villages, Paderu.', amount: '₹75,000' },
  { month: 'Mar 2026', desc: 'Received the Ugadi Puraskaralu for contributions to community service and social welfare.', amount: '' },
  { month: 'Mar 2026', desc: 'Conducted P4 Programme at Gunadala, Vijayawada.', amount: '₹90,000' },
]

const months = [...new Set(activities.map(a => a.month))]

export default function Activities() {
  const [selected, setSelected] = useState('All')

  const filtered = selected === 'All' ? activities : activities.filter(a => a.month === selected)

  return (
    <section id="activities" className="activities">
      <div className="container">
        <h2 className="section-title">Activities</h2>
        <p className="section-subtitle">A detailed record of our welfare activities (Apr 2025 – Mar 2026)</p>

        <div className="filter-bar">
          <button className={`filter-btn ${selected === 'All' ? 'active' : ''}`} onClick={() => setSelected('All')}>All</button>
          {months.map(m => (
            <button key={m} className={`filter-btn ${selected === m ? 'active' : ''}`} onClick={() => setSelected(m)}>{m}</button>
          ))}
        </div>

        <div className="timeline">
          {filtered.map((a, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-month">{a.month}</span>
                <p>{a.desc}</p>
                {a.amount && <span className="timeline-amount">{a.amount}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
