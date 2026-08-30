import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="navbar-container" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(253, 251, 247, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--color-border)'
    }}>
      {/* Top Banner */}
      <div style={{
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-champagne-light)',
        padding: '6px 0',
        fontSize: '11px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        textAlign: 'center'
      }}>
        Complimentary Express Worldwide Delivery on Orders Over $250 &bull; Complimentary Gift Wrapping
      </div>

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px'
      }}>
        {/* Mobile Menu Icon */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ display: 'none', color: 'var(--color-black)' }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link to="/" style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Home
          </Link>
          <Link to="/shop" style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Shop
          </Link>
          <Link to="/about" style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            About Us
          </Link>
          <Link to="/contacts" style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Contact Us
          </Link>
        </nav>

        {/* Brand Logo */}
        <Link to="/" style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '36px',
            fontWeight: '400',
            letterSpacing: '0.18em',
            lineHeight: 1
          }}>
            LUNEL
          </h1>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '9px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--color-champagne)',
            display: 'block',
            marginTop: '2px'
          }}>
            HAUTE COUTURE LINGERIE
          </span>
        </Link>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            style={{ color: 'var(--color-black)', padding: '4px' }}
            title="Search"
          >
            <Search size={20} />
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              position: 'relative',
              color: 'var(--color-black)',
              padding: '4px',
              display: 'flex',
              alignItems: 'center'
            }}
            title="Shopping Bag"
          >
            <ShoppingBag size={21} />
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-6px',
                backgroundColor: 'var(--color-champagne)',
                color: 'var(--color-black)',
                fontSize: '10px',
                fontWeight: '700',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Inline Search Bar */}
      {isSearchOpen && (
        <div style={{
          backgroundColor: 'var(--color-white)',
          borderTop: '1px solid var(--color-border)',
          borderBottom: '1px solid var(--color-border)',
          padding: '16px 0'
        }}>
          <div className="container">
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Search bras, bodysuits, silk loungewear..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: '1px solid var(--color-border)',
                  outline: 'none',
                  fontSize: '14px',
                  fontFamily: 'var(--font-body)',
                  backgroundColor: 'var(--color-ivory)'
                }}
              />
              <button type="submit" className="btn btn-primary btn-sm">Search</button>
              <button type="button" onClick={() => setIsSearchOpen(false)} style={{ color: 'var(--color-muted)' }}>
                <X size={20} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--color-ivory)',
          borderTop: '1px solid var(--color-border)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Home
          </Link>
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Shop All Collections
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            About Us
          </Link>
          <Link to="/contacts" onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Contact Us
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
