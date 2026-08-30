import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, subtotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      backgroundColor: 'rgba(17, 17, 17, 0.6)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      justifyContent: 'flex-end',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '450px',
        height: '100%',
        backgroundColor: 'var(--color-ivory)',
        boxShadow: 'var(--shadow-lift)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'slideLeft 0.35s var(--ease-out)'
      }}>
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} color="var(--color-champagne)" />
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              letterSpacing: '0.05em'
            }}>
              Your Shopping Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            style={{ color: 'var(--color-black)', padding: '4px' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Cart Items List */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-muted)' }}>
              <ShoppingBag size={48} color="var(--color-champagne)" style={{ opacity: 0.5, marginBottom: '16px' }} />
              <p style={{ fontSize: '15px', marginBottom: '20px' }}>Your shopping bag is currently empty.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn btn-primary btn-sm"
              >
                Discover Our Collections
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                gap: '16px',
                paddingBottom: '20px',
                borderBottom: '1px solid var(--color-ivory-dark)'
              }}>
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  style={{
                    width: '80px',
                    height: '100px',
                    objectFit: 'cover',
                    backgroundColor: 'var(--color-ivory-dark)'
                  }}
                />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h4 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '16px',
                        fontWeight: '500',
                        lineHeight: 1.2
                      }}>
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(index)}
                        style={{ color: 'var(--color-muted)', padding: '2px' }}
                        title="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div style={{ fontSize: '12px', color: 'var(--color-muted)', marginTop: '4px' }}>
                      <span>Size: {item.size}</span> &bull; <span>Color: {item.color}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid var(--color-border)',
                      backgroundColor: 'var(--color-white)'
                    }}>
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        style={{ padding: '4px 8px', color: 'var(--color-black)' }}
                      >
                        <Minus size={14} />
                      </button>
                      <span style={{ padding: '0 8px', fontSize: '13px', fontWeight: '600' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        style={{ padding: '4px 8px', color: 'var(--color-black)' }}
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '17px',
                      fontWeight: '600'
                    }}>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Subtotal */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '24px',
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-white)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
              fontSize: '14px'
            }}>
              <span>Subtotal</span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--color-black)'
              }}>
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--color-muted)', marginBottom: '20px' }}>
              Taxes and shipping calculated at checkout. Free worldwide shipping on orders over $250.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link
                to="/cart"
                onClick={() => setIsCartOpen(false)}
                className="btn btn-primary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Proceed to Checkout
              </Link>
              <button
                onClick={() => setIsCartOpen(false)}
                className="btn btn-outline"
                style={{ width: '100%' }}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
