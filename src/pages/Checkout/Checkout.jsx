import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { createStructuredSelector } from 'reselect';
import { CheckoutItem } from '@components';
import { selectCartItems, selectCartTotal } from '@redux/cart/cart.selectors';
import { StripeButton } from '@components';
import {
  CheckoutHeader,
  CheckoutHeaderBlock,
  CheckoutPage,
  HeaderBlockText,
  CheckoutTotal
} from './styles';
import PropTypes from 'prop-types';


const Checkout = ( { cartItems, total } ) => {
  const { t } = useTranslation ();

  return (
    <CheckoutPage>
      <CheckoutHeader>
        <CheckoutHeaderBlock>
          <HeaderBlockText>{ t ( 'checkoutPage.product' ) }</HeaderBlockText>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <HeaderBlockText>{ t ( 'checkoutPage.description' ) }</HeaderBlockText>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <HeaderBlockText>{ t ( 'checkoutPage.quantity' ) }</HeaderBlockText>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <HeaderBlockText>{ t ( 'checkoutPage.price' ) }</HeaderBlockText>
        </CheckoutHeaderBlock>
        <CheckoutHeaderBlock>
          <HeaderBlockText>{ t ( 'checkoutPage.remove' ) }</HeaderBlockText>
        </CheckoutHeaderBlock>
      </CheckoutHeader>
      {
        cartItems.map ( cartItem =>
          <CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
        )
      }
      <CheckoutTotal>{ total }BYN</CheckoutTotal>
      <StripeButton price={ total }/>
    </CheckoutPage>


  );
};

const mapStateToProps = createStructuredSelector ( {
  cartItems: selectCartItems,
  total: selectCartTotal
} );

export default connect ( mapStateToProps ) ( Checkout );


Checkout.propTypes = {
  cartItems: PropTypes.array,
  total: PropTypes.number
};
