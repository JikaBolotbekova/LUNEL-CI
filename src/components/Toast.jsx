import React from 'react';
import { useCart } from '../context/CartContext.jsx';
import { CheckCircle } from 'lucide-react';

export default function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="toast">
      <CheckCircle size={18} color="var(--color-champagne)" />
      <span style={{ fontSize: '13px', letterSpacing: '0.02em' }}>{toastMessage}</span>
    </div>
  );
}
