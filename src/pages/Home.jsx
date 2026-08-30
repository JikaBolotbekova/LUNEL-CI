import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Feather, Heart, Gift } from 'lucide-react';
import ProductCard from '../components/ProductCard.jsx';
import { fetchFeaturedProducts, fetchNewArrivals, fetchBestSellers, fetchCategories } from '../services/api.js';

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadData() {
      const [featData, newData, bestData, catData] = await Promise.all([
        fetchFeaturedProducts(),
        fetchNewArrivals(),
        fetchBestSellers(),
        fetchCategories()
      ]);
      setFeatured(featData);
      setNewArrivals(newData);
      setBestSellers(bestData);
      setCategories(catData);
    }
    loadData();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '85vh',
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-ivory)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to right, rgba(17,17,17,0.85) 30%, rgba(17,17,17,0.4) 100%), url('https://images.unsplash.com/photo-1596475628509-f9c47a06c888?auto=format&fit=crop&q=80&w=1800')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '80px 24px' }}>
          <div style={{ maxWidth: '650px' }}>
            <span className="eyebrow" style={{ color: 'var(--color-champagne-light)' }}>
              Haute Couture Lingerie & Silk Collection
            </span>

            <h1 style={{
              fontSize: 'clamp(44px, 6vw, 72px)',
              fontFamily: 'var(--font-display)',
              fontWeight: '300',
              lineHeight: 1.05,
              color: 'var(--color-ivory)',
              marginBottom: '24px'
            }}>
              Grace in Every Thread, Sensuality in Every Silhouette.
            </h1>

            <p style={{
              fontSize: '16px',
              lineHeight: 1.7,
              color: 'rgba(253, 251, 247, 0.8)',
              marginBottom: '36px',
              maxWidth: '540px'
            }}>
              Indulge in French Chantilly lace, 22-momme pure mulberry silk, and hand-embroidered bodysuits handcrafted for effortless luxury.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/shop" className="btn btn-gold">
                Explore Shop <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn btn-outline-light">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values / Experience Banner */}
      <section style={{
        backgroundColor: 'var(--color-ivory-dark)',
        padding: '40px 0',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '30px',
            textAlign: 'center'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Feather size={24} color="var(--color-champagne)" />
              <h4 style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>100% Mulberry Silk</h4>
              <p style={{ fontSize: '12px', color: 'var(--color-muted)', margin: 0 }}>Utmost softness and breathability against skin.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={24} color="var(--color-champagne)" />
              <h4 style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>French Lace Craft</h4>
              <p style={{ fontSize: '12px', color: 'var(--color-muted)', margin: 0 }}>Authentic Chantilly and Calais eyelash lace.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <Gift size={24} color="var(--color-champagne)" />
              <h4 style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Signature Packaging</h4>
              <p style={{ fontSize: '12px', color: 'var(--color-muted)', margin: 0 }}>Encased in luxury silk ribbons and magnetic boxes.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={24} color="var(--color-champagne)" />
              <h4 style={{ fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Boutique Concierge</h4>
              <p style={{ fontSize: '12px', color: 'var(--color-muted)', margin: 0 }}>Bespoke virtual fitting and personalized care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section">
        <div className="container">
          <span className="eyebrow" style={{ textAlign: 'center' }}>Curated Selections</span>
          <h2 className="section-title">Explore Categories</h2>
          <p className="section-subtitle">Discover artisanal lingerie crafted to celebrate your unique form</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '24px'
          }}>
            {categories.map((cat) => (
              <Link
                key={cat.id || cat.slug}
                to={`/shop?category=${cat.slug}`}
                className="luxury-card"
                style={{
                  position: 'relative',
                  height: '320px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '24px'
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${cat.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.8s var(--ease-out)'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(17,17,17,0.8) 0%, transparent 60%)'
                }} />
                <div style={{ position: 'relative', zIndex: 2, color: 'var(--color-ivory)' }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    color: 'var(--color-ivory)',
                    marginBottom: '4px'
                  }}>
                    {cat.name}
                  </h3>
                  <span style={{
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-champagne)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    View Collection <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '40px',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <span className="eyebrow">Handpicked Masterpieces</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: 0 }}>Featured Collection</h2>
            </div>
            <Link to="/shop" className="btn btn-outline btn-sm">View All Products</Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '28px'
          }}>
            {featured.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Heritage Banner Snippet */}
      <section className="section" style={{
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-ivory)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=1000"
                alt="Lunel Atelier Craftsmanship"
                style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  border: '1px solid var(--color-champagne)'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                backgroundColor: 'var(--color-champagne)',
                color: 'var(--color-black)',
                padding: '20px 28px',
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontStyle: 'italic',
                boxShadow: 'var(--shadow-lift)'
              }}>
                Uncompromising Atelier Perfection
              </div>
            </div>

            <div>
              <span className="eyebrow" style={{ color: 'var(--color-champagne)' }}>The Story of Lunel</span>
              <h2 style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontFamily: 'var(--font-display)',
                color: 'var(--color-ivory)',
                lineHeight: 1.15,
                marginBottom: '24px'
              }}>
                Crafting Intimate Luxury into Art
              </h2>
              <p style={{
                fontSize: '15px',
                lineHeight: 1.8,
                color: 'rgba(253, 251, 247, 0.75)',
                marginBottom: '20px'
              }}>
                Every Lunel design originates from a dedication to delicate craftsmanship, timeless aesthetic purity, and the touch of high-grade silk against the skin.
              </p>
              <p style={{
                fontSize: '15px',
                lineHeight: 1.8,
                color: 'rgba(253, 251, 247, 0.75)',
                marginBottom: '32px'
              }}>
                Founded with a vision to revolutionize intimate wear into wearable couture, Lunel celebrates feminine power, subtle romance, and understated opulence.
              </p>
              <Link to="/about" className="btn btn-gold">
                Discover Our Heritage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals & Best Sellers Grid Tabs */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="eyebrow">Latest Additions & Favorites</span>
            <h2 className="section-title">New Arrivals & Best Sellers</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '28px'
          }}>
            {newArrivals.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
