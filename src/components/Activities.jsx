import { useState } from 'react'
import './Activities.css'

const activities = [
  { month: 'Apr 2025', desc: 'Donated hearing aids to a person in need.' },
  { month: 'Apr 2025', desc: 'Donated a cooler to an elderly person during severe summer heat.' },
  { month: 'Apr 2025', desc: 'Provided groceries and essentials to an old-age home and orphanage.' },
  { month: 'May 2025', desc: 'Participated in the Tiranga Yatra in Vijayawada, celebrating national pride and unity.' },
  { month: 'May 2025', desc: 'Visited Akshaya Patra and contributed towards nutritious meals for children.' },
  { month: 'May 2025', desc: 'Provided groceries and essentials to an old-age home and orphanage.' },
  { month: 'Jun 2025', desc: 'Supported maintenance and essential needs of orphanages and old-age homes.' },
  { month: 'Jul 2025', desc: 'Organised a cultural programme at Hare Krishna Gokula Kshetra with prize distribution.' },
  { month: 'Jul 2025', desc: 'Assisted a student with hostel fee support.' },
  { month: 'Jul 2025', desc: 'Conducted a medical camp at an old-age home and distributed apples to residents.' },
  { month: 'Jul 2025', desc: 'MAARPU Anniversary: served meals and distributed fruits at an old-age home in Vambay Colony.' },
  { month: 'Jul 2025', desc: 'Distributed protein supplements to pregnant and lactating mothers at PHC Madhuranagar, Vijayawada.' },
  { month: 'Jul 2025', desc: 'Organised a women\'s empowerment session in Krishnalanka, Vijayawada.' },
  { month: 'Aug 2025', desc: 'Adopted 52 Bangaru Kutumbalu in Gunadala, Vijayawada, as part of the P4 Initiative.' },
  { month: 'Aug 2025', desc: 'Signed an MoU with ITDA Paderu for a School Holistic Learning Project and Women Empowerment.' },
  { month: 'Aug 2025', desc: 'Initiated the School Project in Krishna District as directed by the Education Department.' },
  { month: 'Aug 2025', desc: 'Celebrated Independence Day with children and elderly residents in Vambay Colony and Venkatayapalem.' },
  { month: 'Aug 2025', desc: 'Conducted a blood donation camp in collaboration with Brahma Kumaris.' },
  { month: 'Aug 2025', desc: 'Supported women entrepreneurs in setting up stalls.' },
  { month: 'Sep 2025', desc: 'Supported an MBA student by covering hostel fees.' },
  { month: 'Sep 2025', desc: 'Conducted a Women Empowerment Programme at Chintapalli, ASR District.' },
  { month: 'Sep 2025', desc: 'Conducted a Women Empowerment Programme at Paderu, ASR District.' },
  { month: 'Sep 2025', desc: 'Conducted an environmental awareness programme at Siddhartha College, Vijayawada.' },
  { month: 'Sep 2025', desc: 'MAARPU volunteers served at Kanakadurgamma Temple, Indrakiladri.' },
  { month: 'Oct 2025', desc: 'Conducted a plantation programme at ZPH Yenamalakuduru under the Green Environment Initiative.' },
  { month: 'Oct 2025', desc: 'Participated with high-school children in a state-level Quantum Valley programme.' },
  { month: 'Oct 2025', desc: 'Conducted a Polio Rally for Polio Day at ZPH School Peddapulipaka, Krishna District.' },
  { month: 'Nov 2025', desc: 'Conducted a Student Talent Fest involving 53 schools and 110 children in quiz, drawing, essay writing, and chess.' },
  { month: 'Nov 2025', desc: 'Conducted the Student Talent Fest prize distribution ceremony for winners from 53 schools.' },
  { month: 'Nov 2025', desc: 'Presented the society\'s activities and progress to the Hon\'ble Chief Minister of Andhra Pradesh.' },
  { month: 'Dec 2025', desc: 'Opposed tree cutting at a dense park in Mogalrajpuram, Vijayawada, and raised a complaint with VMC.' },
  { month: 'Dec 2025', desc: 'Conducted eco-friendly, climate-action-themed school wall art across 20 schools in NTR and Krishna districts.' },
  { month: 'Dec 2025', desc: 'Organised a Polio Awareness Rally at the Government Hospital.' },
  { month: 'Dec 2025', desc: 'Conducted a Women\'s Empowerment Programme at Tummalapalli Kalakshetram.' },
  { month: 'Jan 2026', desc: 'Organised a 10-day series of competitions for children.' },
  { month: 'Jan 2026', desc: 'Visited Penamaluru High School to promote educational awareness and student engagement.' },
  { month: 'Feb 2026', desc: 'Supported 68 students across Vijayawada and ASR District by covering tuition and examination fees.' },
  { month: 'Feb 2026', desc: 'Conducted women empowerment activities in Vantlamamidi village — skill assessment, financial literacy, and SHG coordination.' },
  { month: 'Feb 2026', desc: 'Conducted a holistic learning programme at a tribal welfare school in Hukumpeta, Paderu.' },
  { month: 'Feb 2026', desc: 'Visited Anna Canteen, Vijayawada, and reviewed food services and maintenance.' },
  { month: 'Mar 2026', desc: 'Conducted Women\'s Empowerment Programmes in Paderu, Vardhanapalle, and with SNG Foundation, Vijayawada.' },
  { month: 'Mar 2026', desc: 'Conducted awareness programme for women in Alluri Sitarama Raju District.' },
  { month: 'Mar 2026', desc: 'Conducted women\'s empowerment and SHG awareness in tribal villages, Paderu.' },
  { month: 'Mar 2026', desc: 'Received the Ugadi Puraskaralu for contributions to community service and social welfare.' },
  { month: 'Mar 2026', desc: 'Conducted P4 Programme at Gunadala, Vijayawada.' },
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
