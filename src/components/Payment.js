import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function Payment({ total, onToken }) {
  return (
    <StripeCheckout
      stripeKey="your-publishable-key-here"
      token={onToken}
      amount={total * 100} // cents
      name="E-commerce Shop"
      currency="USD"
    >
      <button className="btn btn-primary">Pay Now</button>
    </StripeCheckout>
  );
}

export default Payment;
