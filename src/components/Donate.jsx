import qr from '../assets/qr.jpg'
import './Donate.css'

const bankDetails = [
  { label: 'Account Name', value: 'MAARPU Welfare Society' },
  { label: 'Account Number', value: '120031078554' },
  { label: 'IFSC Code', value: 'CNRB0001620' },
  { label: 'Bank Name', value: 'Canara Bank' },
  { label: 'Branch', value: 'Madhunagar, Vijayawada' },
]

export default function Donate() {
  return (
    <section id="donate" className="donate">
      <div className="container">
        <h2 className="section-title">Support Our Cause</h2>
        <p className="section-subtitle">Your contribution helps us create lasting change across Andhra Pradesh & Telangana</p>
        <div className="donate-grid">
          <div className="donate-qr-box">
            <h3>Scan & Pay</h3>
            <img src={qr} alt="MAARPU Donation QR Code" className="donate-qr" />
            <p>Scan the QR code using any UPI app</p>
            <div className="upi-apps">
              <span>GPay</span>
              <span>PhonePe</span>
              <span>Paytm</span>
              <span>BHIM</span>
            </div>
          </div>
          <div className="donate-bank-box">
            <h3>Bank Transfer</h3>
            <div className="bank-details">
              {bankDetails.map(d => (
                <div key={d.label} className="bank-row">
                  <span className="bank-label">{d.label}</span>
                  <span className="bank-value">{d.value}</span>
                </div>
              ))}
            </div>
            <p className="donate-note">
              📧 Please email your transaction details to <a href="mailto:maarpuwelfaresociety@gmail.com">maarpuwelfaresociety@gmail.com</a> after donating.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
