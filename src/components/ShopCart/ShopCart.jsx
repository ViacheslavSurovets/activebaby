import React from 'react';
import { ShopCartIcon } from '@components';
import styled from 'styled-components';
import { desktop, tablet, mobile } from '@utils/media';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const CartWrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${ ( { theme } ) => theme.header.shopCartBackground };
  width: 100%;
  height: 100%;
  &:hover{
    background: ${ ( { theme } ) => theme.header.cartBackground }; 
      svg {
        fill: ${ ( { theme } ) => theme.header.cartColor };
      };
      span {
        color: ${ ( { theme } ) => theme.header.cartColor };
      }
      div {
       opacity: 1;
       visibility: visible;
       transition: .4s all .15s;
      }
 }
`;

const Counter = styled.span`
  ${ tablet },
  ${ mobile }{
    display: none;
  }
  ${ desktop }{
    color:${ ( { theme } ) => theme.white };
    margin-left: .5rem;
  }
`;

const ShopCartInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right:0;
  transform: translateY(100%);
  width: 25rem;
  height: 10rem;
  font-size: 2rem;
  background: ${ ( { theme } ) => theme.header.cartBackground };
  border-bottom: 1px solid ${ ( { theme } ) => theme.header.bordersDropdown };
  border-left: 1px solid ${ ( { theme } ) => theme.header.bordersDropdown };
  color:${ ( { theme } ) => theme.header.linkColor };
  opacity: 0;
  visibility: hidden;
  transition: .4s all .15s;
  z-index: 1;
`;


const ShopCart = ( { count = 0 } ) => {
  const { t, i18n } = useTranslation ();
  return (
    <CartWrapper>
      <ShopCartIcon />
      <Counter>{ count }</Counter>
      <ShopCartInfo>
        <span>{ t ( 'header.headerCart.cartIsEmpty' ) }</span>
      </ShopCartInfo>
    </CartWrapper>
  );
};

export default ShopCart;

ShopCart.propTypes = {
  count: PropTypes.number
};
