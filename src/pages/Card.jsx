import { useState, useEffect } from 'react'
import './Card.css'

function Card() {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    document.title = 'James Kim — Kim Consultant'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', 'Websites & Systems for Toronto Small Businesses')
    }
    return () => {
      document.title = 'Kim Consultant | Websites & Systems for Toronto Small Businesses'
      if (meta) {
        meta.setAttribute(
          'content',
          'Kim Consultant - Practical websites and systems for Toronto\'s small businesses. We build tools that reduce chaos and make your business easier to run.'
        )
      }
    }
  }, [])

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:Kim;James;;;
FN:James Kim
ORG:Kim Consultant
TITLE:Founder & Lead Consultant
TEL;TYPE=CELL:+12898947288
EMAIL:jameskim@kimconsultant.net
URL:https://www.kimconsultant.net
ADR;TYPE=WORK:;;Toronto;Ontario;;Canada
NOTE:Websites & Systems for Toronto Small Businesses
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'James_Kim_KimConsultant.vcf'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="card-page">
      <div className="card-container">
        <div className="card">
          <div className="card-header">
            <img src="/logo.png" alt="Kim Consultant" className="card-logo" />
            <h1 className="card-name">James Kim</h1>
            <p className="card-title">Founder & Lead Consultant</p>
          </div>

          <div className="card-actions">
            <div className="card-actions-row">
              <a href="tel:+12898947288" className="card-btn card-btn-call">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call
              </a>
              <a
                href="https://wa.me/12898947288?text=Hi%20James%2C%20I%20got%20your%20card"
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn card-btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
            <a href="mailto:jameskim@kimconsultant.net" className="card-btn card-btn-email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Send Email
            </a>
          </div>

          <div className="card-details">
            <a href="tel:+12898947288" className="card-detail-item">
              <div className="card-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="card-detail-content">
                <div className="card-detail-label">Phone</div>
                <div className="card-detail-value">(289) 894-7288</div>
              </div>
            </a>
            <a href="mailto:jameskim@kimconsultant.net" className="card-detail-item">
              <div className="card-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="card-detail-content">
                <div className="card-detail-label">Email</div>
                <div className="card-detail-value">jameskim@kimconsultant.net</div>
              </div>
            </a>
            <a href="https://www.kimconsultant.net" target="_blank" rel="noopener noreferrer" className="card-detail-item">
              <div className="card-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <div className="card-detail-content">
                <div className="card-detail-label">Website</div>
                <div className="card-detail-value">www.kimconsultant.net</div>
              </div>
            </a>
            <div className="card-detail-item" style={{ cursor: 'default' }}>
              <div className="card-detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="card-detail-content">
                <div className="card-detail-label">Location</div>
                <div className="card-detail-value">Toronto, Ontario, Canada</div>
              </div>
            </div>
          </div>

          <div className="card-save">
            <button className="card-save-btn" onClick={handleSaveContact}>
              {saved ? (
                <>✓ Saved!</>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  Save to Contacts
                </>
              )}
            </button>
          </div>
        </div>

        <div className="card-footer">
          <a href="https://www.kimconsultant.net" target="_blank" rel="noopener noreferrer">
            www.kimconsultant.net
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
