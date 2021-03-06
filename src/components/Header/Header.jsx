import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  HeaderMainContainer,
  HeaderInfoContainer,
  HeaderItemsWrapperLeft,
  HeaderItemsWrapperRight,
  HeaderItem,
  ShopCartWrapper,
  LogoTabletWrapper,
} from './styles';
import {
  LogoTablet,
  SearchMobile,
  ShopCart,
  LoginHeaderLink,
  HeaderNavContainer,
  LocationMarkerLink,
  BurgerMenu
} from '@components';
import PropTypes from 'prop-types';


const Header = ( { history } ) => {
  return (
    <HeaderMainContainer>
      <HeaderInfoContainer>
        <HeaderItemsWrapperLeft>
          { /*desktop*/ }
          <HeaderItem>+375 33 3765823</HeaderItem>
          <HeaderItem>E-MAIL</HeaderItem>
          <HeaderItem>
            <LocationMarkerLink />
          </HeaderItem>
          { /*Laptop and mobile*/ }

          <BurgerMenu />

        </HeaderItemsWrapperLeft>

        { /*Laptop / mobile*/ }
        <LogoTabletWrapper onClick={ () => history.push ( '/' ) }>
          <LogoTablet />
        </LogoTabletWrapper>

        <HeaderItemsWrapperRight>
          { /*desktop*/ }
          <LoginHeaderLink />
          { /* tablet / mobile*/ }
          <SearchMobile />
          { /*desktop / laptop / mobile*/ }
          <ShopCartWrapper>
            <ShopCart />
          </ShopCartWrapper>

        </HeaderItemsWrapperRight>
      </HeaderInfoContainer>

      <HeaderNavContainer />

    </HeaderMainContainer>
  );
};


export default withRouter ( Header );

Header.propTypes = {
  history: PropTypes.object
};
