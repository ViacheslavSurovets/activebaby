import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { ab } from '@assets/stripe';


const StripeButton = ( { price } ) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_hUzNhA4UrDu7p7jaXvSQAXi000ackM1ZDU';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Active Baby'
      billingAddress
      shippingAddress
      image={ab}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
