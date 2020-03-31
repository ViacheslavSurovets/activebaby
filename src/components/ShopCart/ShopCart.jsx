import React, { useState } from 'react';
import { ShopCartIcon } from '@components';
import { ShopCartDropdownComponent } from './internal';
import { CartWrapper, Counter } from './styles';

import PropTypes from 'prop-types';

const ShopCart = ( { count = 0 } ) => {
  const [ hidden, setHidden ] = useState ( true );


  return (
    <CartWrapper onClick={ () => setHidden ( !hidden ) }>
      <ShopCartIcon />
      <Counter>{ count }</Counter>
      {
        !hidden && <ShopCartDropdownComponent transition />
      }
    </CartWrapper>
  );
};


export default ShopCart;

ShopCart.propTypes = {
  count: PropTypes.number,
};

