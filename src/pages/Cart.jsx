import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShieldCheck, ShoppingBag, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, clearCart, subtotal } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('cart'); // 'cart', 'checkout', 'success'

  const [shippingDetails, setShippingDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    country: 'United States',
    zipCode: ''
  });

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'LUNEL10' || promoCode.trim().toUpperCase() === 'VIP') {
      setDiscount(subtotal * 0.1);
      setPromoApplied(true);
    } else {
      alert('Invalid promo code. Try "LUNEL10" for 10% off.');
    }
  };

  const shippingCost = subtotal > 250 || cartItems.length === 0 ? 0 : 25;
  const total = subtotal - discount + shippingCost;

  const handleInputChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setCheckoutStep('success');
    clearCart();
  };

  if (checkoutStep === 'success') {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '100px 24px' }}>
        <CheckCircle size={64} color="var(--color-champagne)" style={{ marginBottom: '20px' }} />
        <span className="eyebrow">Order Confirmed</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '42px', marginBottom: '16px' }}>
          Thank You for Your Order
        </h1>
        <p style={{ maxWidth: '540px', margin: '0 auto 32px', color: 'var(--color-muted)' }}>
          Your order has been received and is being prepared with bespoke care by our Atelier team. A confirmation email has been sent to <strong>{shippingDetails.email || 'your email'}</strong>.
        </p>
        <Link to="/shop" className="btn btn-primary">
          Continue Discovering Lunel
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0 && checkoutStep === 'cart') {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '100px 24px' }}>
        <ShoppingBag size={56} color="var(--color-champagne)" style={{ marginBottom: '20px', opacity: 0.6 }} />
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '38px', marginBottom: '16px' }}>
          Your Shopping Bag is Empty
        </h1>
        <p style={{ color: 'var(--color-muted)', marginBottom: '32px' }}>
          Discover our latest collections of silk loungewear, Chantilly lace bras, and bodysuits.
        </p>
        <Link to="/shop" className="btn btn-gold">
          Explore Our Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page" style={{ padding: '60px 0 100px' }}>
      <div className="container">
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4vw, 48px)',
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          {checkoutStep === 'cart' ? 'Shopping Bag & Checkout' : 'Express Boutique Checkout'}
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '40px',
          alignItems: 'start'
        }} className="cart-layout">

          {/* Left Side: Cart Items or Checkout Form */}
          {checkoutStep === 'cart' ? (
            <div>
              <div style={{
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)',
                padding: '24px'
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '20px' }}>
                  Selected Atelier Items ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {cartItems.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      gap: '20px',
                      paddingBottom: '20px',
                      borderBottom: '1px solid var(--color-ivory-dark)'
                    }}>
                      <img
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        style={{
                          width: '100px',
                          height: '130px',
                          objectFit: 'cover',
                          backgroundColor: 'var(--color-ivory-dark)'
                        }}
                      />

                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '500' }}>
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(index)}
                              style={{ color: 'var(--color-muted)' }}
                              title="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>

                          <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '4px' }}>
                            Category: {item.product.category} &bull; Size: {item.size} &bull; Color: {item.color}
                          </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            border: '1px solid var(--color-border)',
                            backgroundColor: 'var(--color-ivory)'
                          }}>
                            <button
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              style={{ padding: '6px 10px' }}
                            >
                              <Minus size={14} />
                            </button>
                            <span style={{ padding: '0 12px', fontSize: '14px', fontWeight: '600' }}>
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              style={{ padding: '6px 10px' }}
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '600' }}>
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleCheckoutSubmit} style={{
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              padding: '32px'
            }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '24px' }}>
                Shipping & Contact Information
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={shippingDetails.firstName}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '10px', border: '1px solid var(--color-border)', marginTop: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={shippingDetails.lastName}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '10px', border: '1px solid var(--color-border)', marginTop: '4px' }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={shippingDetails.email}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '10px', border: '1px solid var(--color-border)', marginTop: '4px' }}
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Shipping Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={shippingDetails.address}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '10px', border: '1px solid var(--color-border)', marginTop: '4px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={shippingDetails.city}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '10px', border: '1px solid var(--color-border)', marginTop: '4px' }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Postal / Zip Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={shippingDetails.zipCode}
                    onChange={handleInputChange}
                    style={{ width: '100%', padding: '10px', border: '1px solid var(--color-border)', marginTop: '4px' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="btn btn-outline"
                >
                  Back to Bag
                </button>
                <button
                  type="submit"
                  className="btn btn-gold"
                  style={{ flex: 1 }}
                >
                  Place Order (${total.toFixed(2)})
                </button>
              </div>
            </form>
          )}

          {/* Right Summary Panel */}
          <div style={{
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            padding: '28px',
            position: 'sticky',
            top: '100px'
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', marginBottom: '20px' }}>
              Order Summary
            </h3>

            {/* Promo code form */}
            <form onSubmit={handleApplyPromo} style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
              <input
                type="text"
                placeholder="Promo Code (e.g. LUNEL10)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  border: '1px solid var(--color-border)',
                  fontSize: '13px',
                  fontFamily: 'var(--font-body)',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn btn-outline btn-sm">Apply</button>
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-muted)' }}>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              {promoApplied && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--color-champagne-dark)' }}>
                  <span>VIP Discount (10%)</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-muted)' }}>Estimated Delivery</span>
                <span>{shippingCost === 0 ? 'COMPLIMENTARY' : `$${shippingCost.toFixed(2)}`}</span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '16px',
              borderTop: '1px solid var(--color-border)',
              marginBottom: '24px'
            }}>
              <span style={{ fontSize: '16px', fontWeight: '600' }}>Total</span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '26px',
                fontWeight: '600',
                color: 'var(--color-black)'
              }}>
                ${total.toFixed(2)}
              </span>
            </div>

            {checkoutStep === 'cart' && (
              <button
                onClick={() => setCheckoutStep('checkout')}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Proceed to Checkout <ArrowRight size={16} />
              </button>
            )}

            <div style={{
              marginTop: '24px',
              paddingTop: '20px',
              borderTop: '1px dashed var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '12px',
              color: 'var(--color-muted)'
            }}>
              <ShieldCheck size={20} color="var(--color-champagne)" />
              <span>Encrypted SSL 256-bit Secure Checkout & Guaranteed Authenticity.</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .cart-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
