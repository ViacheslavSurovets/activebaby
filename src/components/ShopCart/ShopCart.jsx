import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ShopCartIcon } from '@components';
import { ShopCartDropdownComponent } from './internal';
import { CartWrapper, Counter } from './styles';
import { selectCartItemsCount } from '@redux/cart/cart.selectors';

import PropTypes from 'prop-types';


const ShopCart = ( { itemCount } ) => {
  const [ hidden, setHidden ] = useState ( true );


  return (
    <CartWrapper onClick={ () => setHidden ( !hidden ) }>
      <ShopCartIcon />
      <Counter>{ itemCount }</Counter>
      {
        !hidden && <ShopCartDropdownComponent />
      }

    </CartWrapper>
  );
};

const mapStateToProps = createStructuredSelector ( {
  itemCount: selectCartItemsCount
} );

export default connect ( mapStateToProps ) ( ShopCart );

ShopCart.propTypes = {
  itemCount: PropTypes.number
};

