import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShieldCheck, Heart, Truck, RefreshCw, Plus, Minus, Check } from 'lucide-react';
import { fetchProductBySlug, fetchProductById } from '../services/api.js';
import { useCart } from '../context/CartContext.jsx';

export default function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      let data;
      if (!isNaN(slug)) {
        data = await fetchProductById(slug);
      } else {
        data = await fetchProductBySlug(slug);
      }
      setProduct(data);
      if (data) {
        setActiveImage(data.imageUrl);
        if (data.sizes && data.sizes.length > 0) setSelectedSize(data.sizes[0]);
        if (data.colors && data.colors.length > 0) setSelectedColor(data.colors[0]);
      }
      setLoading(false);
    }
    loadProduct();
  }, [slug]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 0', color: 'var(--color-muted)' }}>
        Loading Lunel Atelier Piece...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '120px 24px' }}>
        <h2>Product Not Found</h2>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: '20px' }}>
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="product-details-page" style={{ padding: '60px 0 100px' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ fontSize: '12px', color: 'var(--color-muted)', marginBottom: '32px' }}>
          <Link to="/">Home</Link> &gt; <Link to="/shop">Shop</Link> &gt; <Link to={`/shop?category=${product.category?.toLowerCase()}`}>{product.category}</Link> &gt; <span style={{ color: 'var(--color-black)' }}>{product.name}</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }} className="product-layout">

          {/* Left Gallery */}
          <div>
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              backgroundColor: 'var(--color-ivory-dark)',
              border: '1px solid var(--color-border)',
              overflow: 'hidden',
              marginBottom: '16px'
            }}>
              <img
                src={activeImage || product.imageUrl}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Gallery Thumbnails */}
            {product.galleryImages && product.galleryImages.length > 1 && (
              <div style={{ display: 'flex', gap: '12px' }}>
                {product.galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    style={{
                      width: '80px',
                      height: '100px',
                      border: activeImage === img ? '2px solid var(--color-champagne)' : '1px solid var(--color-border)',
                      overflow: 'hidden',
                      padding: 0
                    }}
                  >
                    <img src={img} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Product Info */}
          <div>
            <span className="eyebrow">{product.category}</span>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 44px)',
              fontWeight: '400',
              lineHeight: 1.15,
              marginBottom: '16px'
            }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', color: 'var(--color-champagne)' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-champagne)" />
                ))}
              </div>
              <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                {product.rating} ({product.reviewCount} customer reviews)
              </span>
            </div>

            {/* Price */}
            <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'baseline', gap: '12px' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '32px',
                fontWeight: '600',
                color: 'var(--color-black)'
              }}>
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span style={{ fontSize: '18px', color: 'var(--color-muted)', textDecoration: 'line-through' }}>
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'var(--color-muted)',
              marginBottom: '32px',
              paddingBottom: '24px',
              borderBottom: '1px solid var(--color-border)'
            }}>
              {product.description}
            </p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '600', display: 'block', marginBottom: '10px' }}>
                  Color: <span style={{ color: 'var(--color-champagne-dark)' }}>{selectedColor}</span>
                </label>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      style={{
                        padding: '8px 16px',
                        border: selectedColor === c ? '1px solid var(--color-black)' : '1px solid var(--color-border)',
                        backgroundColor: selectedColor === c ? 'var(--color-black)' : 'var(--color-white)',
                        color: selectedColor === c ? 'var(--color-ivory)' : 'var(--color-black)',
                        fontSize: '12px',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '600' }}>
                    Select Size: <span style={{ color: 'var(--color-champagne-dark)' }}>{selectedSize}</span>
                  </label>
                  <Link to="/contacts#size-guide" style={{ fontSize: '12px', color: 'var(--color-muted)', textDecoration: 'underline' }}>
                    Size Guide
                  </Link>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      style={{
                        minWidth: '48px',
                        height: '42px',
                        border: selectedSize === s ? '1px solid var(--color-black)' : '1px solid var(--color-border)',
                        backgroundColor: selectedSize === s ? 'var(--color-black)' : 'var(--color-white)',
                        color: selectedSize === s ? 'var(--color-ivory)' : 'var(--color-black)',
                        fontSize: '13px',
                        fontWeight: '600'
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '40px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-white)'
              }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ padding: '12px 14px' }}
                >
                  <Minus size={16} />
                </button>
                <span style={{ padding: '0 16px', fontSize: '15px', fontWeight: '600' }}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ padding: '12px 14px' }}
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                onClick={() => addToCart(product, selectedSize, selectedColor, quantity)}
                className="btn btn-gold"
                style={{ flex: 1 }}
              >
                Add to Shopping Bag
              </button>
            </div>

            {/* Features list */}
            {product.details && (
              <div style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                padding: '24px',
                marginBottom: '24px'
              }}>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', marginBottom: '14px' }}>
                  Product Details & Craftsmanship
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', color: 'var(--color-muted)' }}>
                  {product.details.map((d, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Check size={14} color="var(--color-champagne)" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Fabric Care */}
            {product.fabricCare && (
              <div style={{ fontSize: '13px', color: 'var(--color-muted)', fontStyle: 'italic' }}>
                <strong>Fabric Care:</strong> {product.fabricCare}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .product-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
