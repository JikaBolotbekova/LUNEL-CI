import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Pin as Pinterest, Send } from 'lucide-react';
import { subscribeNewsletter } from '../services/api.js';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    const res = await subscribeNewsletter(email);
    setStatusMsg(res.message || 'Thank you for subscribing to Lunel VIP.');
    setEmail('');
    setTimeout(() => setStatusMsg(''), 5000);
  };

  return (
    <footer style={{
      backgroundColor: 'var(--color-black)',
      color: 'var(--color-ivory)',
      paddingTop: '80px',
      paddingBottom: '30px',
      borderTop: '1px solid var(--color-champagne)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          paddingBottom: '60px',
          borderBottom: '1px solid var(--color-border-dark)'
        }}>
          {/* Brand Info */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              letterSpacing: '0.15em',
              color: 'var(--color-ivory)',
              marginBottom: '10px'
            }}>
              LUNEL
            </h2>
            <p style={{
              fontSize: '13px',
              color: 'rgba(253, 251, 247, 0.7)',
              lineHeight: 1.7,
              marginBottom: '20px'
            }}>
              Haute couture lingerie and silk loungewear designed for timeless elegance, sensuality, and absolute comfort.
            </p>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: '15px',
              fontStyle: 'italic',
              color: 'var(--color-champagne)'
            }}>
              Founder: Zhypara Bolotbekova
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-champagne)',
              marginBottom: '20px'
            }}>
              Collections
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li><Link to="/shop?category=bras" style={{ color: 'rgba(253, 251, 247, 0.8)' }}>Lace & Silk Bras</Link></li>
              <li><Link to="/shop?category=knickers" style={{ color: 'rgba(253, 251, 247, 0.8)' }}>Silk Knickers & Briefs</Link></li>
              <li><Link to="/shop?category=bodysuits" style={{ color: 'rgba(253, 251, 247, 0.8)' }}>Embroidered Bodysuits</Link></li>
              <li><Link to="/shop?category=loungewear" style={{ color: 'rgba(253, 251, 247, 0.8)' }}>Silk Robes & Loungewear</Link></li>
              <li><Link to="/shop?category=sets" style={{ color: 'rgba(253, 251, 247, 0.8)' }}>Lingerie Sets</Link></li>
            </ul>
          </div>

          {/* Maison Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-champagne)',
              marginBottom: '20px'
            }}>
              Maison & Care
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
              <li><Link to="/about" style={{ color: 'rgba(253, 251, 247, 0.8)' }}>Brand Heritage</Link></li>
              <li><Link to="/contacts" style={{ color: 'rgba(253, 251, 247, 0.8)' }}>Boutique Concierge</Link></li>
              <li><Link to="/about#sustainability" style={{ color: 'rgba(253, 251, 247, 0.8)' }}>Craftsmanship & Silk</Link></li>
              <li><Link to="/contacts#size-guide" style={{ color: 'rgba(253, 251, 247, 0.8)' }}>Size Fitting Guide</Link></li>
              <li><Link to="/contacts#faq" style={{ color: 'rgba(253, 251, 247, 0.8)' }}>Shipping & Returns</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-champagne)',
              marginBottom: '20px'
            }}>
              The Privé Circle
            </h4>
            <p style={{ fontSize: '13px', color: 'rgba(253, 251, 247, 0.7)', marginBottom: '16px' }}>
              Subscribe to receive exclusive preview access to new collections and private salon invitations.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--color-border-dark)',
                  color: 'var(--color-ivory)',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: 'var(--color-champagne)',
                  color: 'var(--color-black)',
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s'
                }}
              >
                <Send size={16} />
              </button>
            </form>
            {statusMsg && (
              <p style={{ fontSize: '12px', color: 'var(--color-champagne)', marginTop: '8px' }}>
                {statusMsg}
              </p>
            )}

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '14px', marginTop: '24px' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--color-border-dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-champagne)'
              }}>
                <Instagram size={17} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--color-border-dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-champagne)'
              }}>
                <Facebook size={17} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--color-border-dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-champagne)'
              }}>
                <Pinterest size={17} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px', borderRadius: '50%', border: '1px solid var(--color-border-dark)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-champagne)'
              }}>
                <Twitter size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '12px',
          color: 'rgba(253, 251, 247, 0.5)'
        }}>
          <div>
            &copy; {new Date().getFullYear()} Lunel Haute Couture Lingerie. All Rights Reserved. &bull; Founder: Zhypara Bolotbekova
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Preferences</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
