import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import { sendContactMessage } from '../services/api.js';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMsg, setStatusMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await sendContactMessage(formData);
    setStatusMsg(res.message || 'Thank you for contacting Lunel Concierge. Our team will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setLoading(false);
  };

  return (
    <div className="contacts-page" style={{ paddingBottom: '100px' }}>
      {/* Header */}
      <div style={{
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-ivory)',
        padding: '60px 0 50px',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-champagne-light)' }}>
            Lunel Atelier Concierge
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 56px)',
            color: 'var(--color-ivory)',
            marginBottom: '14px'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '15px',
            color: 'rgba(253, 251, 247, 0.7)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Whether you require assistance with sizing, bespoke bridal consultations, or order inquiries, our boutique concierge is at your service.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '60px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr',
          gap: '60px',
          alignItems: 'start'
        }} className="contact-grid">

          {/* Contact Information Card */}
          <div>
            <span className="eyebrow">Personalized Service</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px',
              marginBottom: '24px'
            }}>
              Boutique Salons & Support
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  backgroundColor: 'var(--color-white)', border: '1px solid var(--color-champagne)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <MapPin size={20} color="var(--color-champagne-dark)" />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '4px' }}>
                    Flagship Atelier & Salon
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>
                    720 Chausee d'Antin, 75009 Paris, France
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>
                    100 Chuy Avenue, Bishkek, Kyrgyzstan
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  backgroundColor: 'var(--color-white)', border: '1px solid var(--color-champagne)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Mail size={20} color="var(--color-champagne-dark)" />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '4px' }}>
                    Email Inquiries
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>
                    concierge@lunel-lingerie.com
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>
                    press@lunel-lingerie.com
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  backgroundColor: 'var(--color-white)', border: '1px solid var(--color-champagne)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Phone size={20} color="var(--color-champagne-dark)" />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '4px' }}>
                    Telephone Support
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>
                    +33 1 42 68 55 00 (International)
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>
                    +996 312 900 111 (Central Asia)
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  backgroundColor: 'var(--color-white)', border: '1px solid var(--color-champagne)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <Clock size={20} color="var(--color-champagne-dark)" />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '4px' }}>
                    Atelier Hours
                  </h4>
                  <p style={{ fontSize: '14px', color: 'var(--color-muted)', margin: 0 }}>
                    Monday – Saturday: 10:00 AM – 7:00 PM CET
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            padding: '40px'
          }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '26px',
              marginBottom: '10px'
            }}>
              Send a Concierge Message
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--color-muted)', marginBottom: '28px' }}>
              Fill out the form below and our styling team will respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '600', display: 'block', marginBottom: '6px' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Victoria Sterling"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid var(--color-border)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    backgroundColor: 'var(--color-ivory)'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '600', display: 'block', marginBottom: '6px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. victoria@example.com"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid var(--color-border)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    backgroundColor: 'var(--color-ivory)'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '600', display: 'block', marginBottom: '6px' }}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Sizing Advice / Custom Order"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid var(--color-border)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    backgroundColor: 'var(--color-ivory)'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '600', display: 'block', marginBottom: '6px' }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How may our concierge assist you today?"
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: '1px solid var(--color-border)',
                    fontSize: '14px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    backgroundColor: 'var(--color-ivory)',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn btn-gold" disabled={loading}>
                {loading ? 'Transmitting...' : 'Send Message'} <Send size={16} />
              </button>
            </form>

            {statusMsg && (
              <div style={{
                marginTop: '20px',
                padding: '14px 18px',
                backgroundColor: 'var(--color-blush)',
                border: '1px solid var(--color-champagne)',
                color: 'var(--color-black)',
                fontSize: '13px'
              }}>
                {statusMsg}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
