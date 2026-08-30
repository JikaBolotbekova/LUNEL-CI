import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="luxury-card" style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Badges */}
      <div style={{
        position: 'absolute',
        top: '16px',
        left: '16px',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        {product.newArrival && (
          <span style={{
            backgroundColor: 'var(--color-black)',
            color: 'var(--color-ivory)',
            fontSize: '10px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '4px 10px'
          }}>
            New
          </span>
        )}
        {product.bestSeller && (
          <span style={{
            backgroundColor: 'var(--color-champagne)',
            color: 'var(--color-black)',
            fontSize: '10px',
            fontWeight: '600',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            padding: '4px 10px'
          }}>
            Best Seller
          </span>
        )}
      </div>

      {/* Image Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '3/4',
        overflow: 'hidden',
        backgroundColor: 'var(--color-ivory-dark)'
      }}>
        <Link to={`/product/${product.slug || product.id}`}>
          <img
            src={product.imageUrl}
            alt={product.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.8s var(--ease-out)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </Link>
      </div>

      {/* Product Information */}
      <div style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'var(--color-white)'
      }}>
        <div>
          <span style={{
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-champagne)',
            fontWeight: '600',
            display: 'block',
            marginBottom: '6px'
          }}>
            {product.category}
          </span>

          <Link to={`/product/${product.slug || product.id}`}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '20px',
              fontWeight: '500',
              color: 'var(--color-black)',
              marginBottom: '8px',
              lineHeight: 1.3
            }}>
              {product.name}
            </h3>
          </Link>

          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', color: 'var(--color-champagne)' }}>
              <Star size={14} fill="var(--color-champagne)" />
            </div>
            <span style={{ fontSize: '12px', color: 'var(--color-muted)' }}>
              {product.rating} ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Pricing & Quick Add */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '12px',
          borderTop: '1px solid var(--color-ivory-dark)'
        }}>
          <div>
            {product.originalPrice && (
              <span style={{
                fontSize: '13px',
                color: 'var(--color-muted)',
                textDecoration: 'line-through',
                marginRight: '8px'
              }}>
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span style={{
              fontSize: '17px',
              fontWeight: '600',
              fontFamily: 'var(--font-display)',
              color: 'var(--color-black)'
            }}>
              ${product.price ? product.price.toFixed(2) : '0.00'}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <Link
              to={`/product/${product.slug || product.id}`}
              style={{
                width: '36px',
                height: '36px',
                border: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-black)',
                transition: 'all 0.3s'
              }}
              title="Quick View"
            >
              <Eye size={17} />
            </Link>

            <button
              onClick={() => addToCart(product)}
              style={{
                width: '36px',
                height: '36px',
                backgroundColor: 'var(--color-black)',
                color: 'var(--color-ivory)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}
              title="Add to Shopping Bag"
            >
              <ShoppingBag size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
