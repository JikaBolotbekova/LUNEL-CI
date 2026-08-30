import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Feather, Heart, Compass, Crown } from 'lucide-react';

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Header */}
      <section style={{
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-ivory)',
        padding: '80px 0 70px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="eyebrow" style={{ color: 'var(--color-champagne-light)' }}>
            The Maison Heritage
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            color: 'var(--color-ivory)',
            fontWeight: '300',
            lineHeight: 1.1,
            marginBottom: '20px'
          }}>
            LUNEL Haute Couture Lingerie
          </h1>
          <p style={{
            fontSize: '17px',
            lineHeight: 1.8,
            color: 'rgba(253, 251, 247, 0.8)',
            margin: '0 auto'
          }}>
            Where fine French lace meets the unyielding strength and delicate grace of modern women.
          </p>
        </div>
      </section>

      {/* Brand Heritage Story */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }} className="about-grid">

            <div>
              <span className="eyebrow">Our Philosophy</span>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: 1.15,
                marginBottom: '24px'
              }}>
                Redefining Intimate Elegance
              </h2>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--color-muted)', marginBottom: '18px' }}>
                Lunel was born out of a desire to create intimate wear that transcends fashion seasonality. Designed as wearable works of art, each garment honors the female body through sculpted silhouettes, French Chantilly lace, and 22-momme pure mulberry silk.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--color-muted)', marginBottom: '24px' }}>
                Our design atelier rejects mass production in favor of limited-batch craftsmanship. Every bra curve, high-waisted briefs seam, and silk slip drape is meticulously prototyped to offer sublime comfort without compromising on sheer sensuality.
              </p>
              <div style={{
                padding: '20px',
                borderLeft: '3px solid var(--color-champagne)',
                backgroundColor: 'var(--color-white)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-display)',
                fontSize: '18px',
                color: 'var(--color-black)'
              }}>
                "Lingerie should never feel like a constraint. It is the intimate armor of confidence worn closest to your heart."
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=1000"
                alt="Lunel Lace Craftsmanship"
                style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  border: '1px solid var(--color-border)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Pillars */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span className="eyebrow">Unwavering Commitment</span>
            <h2 className="section-title">The Pillars of Lunel</h2>
            <p className="section-subtitle">Excellence in materials, artisan technique, and empowering design</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}>
            <div className="luxury-card" style={{ padding: '36px 28px', textAlign: 'center' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-champagne)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <Feather size={24} color="var(--color-champagne-dark)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '12px' }}>Pure Mulberry Silk</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                We source only grade 6A mulberry silk—hypoallergenic, thermoregulating, and heavenly soft against sensitive skin.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '36px 28px', textAlign: 'center' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-champagne)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <Sparkles size={24} color="var(--color-champagne-dark)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '12px' }}>French Lace Mastery</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                Handcrafted Chantilly and Calais lace woven on traditional 19th-century Leavers looms in Northern France.
              </p>
            </div>

            <div className="luxury-card" style={{ padding: '36px 28px', textAlign: 'center' }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--color-ivory)',
                border: '1px solid var(--color-champagne)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <Crown size={24} color="var(--color-champagne-dark)" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '12px' }}>Architectural Fit</h3>
              <p style={{ fontSize: '14px', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                Engineered pattern cutting and flexible boning that provides effortless support and flattering body contours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Founder Line */}
      <section className="section" style={{ backgroundColor: 'var(--color-ivory-dark)' }}>
        <div className="container" style={{ maxWidth: '850px', textAlign: 'center' }}>
          <span className="eyebrow">The Visionary Behind Lunel</span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 4.5vw, 52px)',
            marginBottom: '24px'
          }}>
            A Story of Passion & Perfection
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--color-black)', marginBottom: '20px' }}>
            From sketch to final silk ribbon knot, Lunel represents an intimate journey into elevated luxury. Every design is imbued with dedication to aesthetic harmony, luxurious tactile sensation, and modern female empowerment.
          </p>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '22px',
            fontStyle: 'italic',
            color: 'var(--color-champagne-dark)',
            marginTop: '36px'
          }}>
            Founded by Zhypara Bolotbekova.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 800px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
