import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  HeaderNavLink,
  HeaderNav,
  HeaderMainContainer,
  HeaderInfoContainer,
  HeaderItemsWrapperLeft,
  HeaderItemsWrapperRight,
  Dropdown,
  DropdownGroup,
  DropdownGroupArticle,
  DropdownGroupWrapper,
  DropdownLink,
  HeaderItem,
  ShopCartWrapper,
  HeaderNavContainer,
  ListItem,
  SearchItem,
  LogoDesktopWrapper,
  LogoTabletWrapper,
  List
} from './styles';
import {
  LogoDesktop,
  LogoTablet,
  Search,
  ShopCart,
  LoginHeaderLink,
  LocationMarkerLink,
  BurgerMenu
} from '@components';
import PropTypes from 'prop-types';


const Header = ( props ) => {
  const { t, i18n } = useTranslation ();
  const { headerCategory, headerArticles } = props;
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
        <LogoTabletWrapper>
          <LogoTablet />
        </LogoTabletWrapper>

        <HeaderItemsWrapperRight>
          { /*desktop*/ }
          <LoginHeaderLink />
          { /*desktop / laptop / mobile*/ }
          <ShopCartWrapper>
            <ShopCart />
          </ShopCartWrapper>

        </HeaderItemsWrapperRight>
      </HeaderInfoContainer>

      <HeaderNavContainer>
        <HeaderNav>
          <List>
            <ListItem><HeaderNavLink to="/">{ t ( 'header.links.main' ) }</HeaderNavLink></ListItem>
            <ListItem><HeaderNavLink to="#">{ t ( 'header.links.categories' ) }</HeaderNavLink>
              <Dropdown>
                <DropdownGroupWrapper>
                  { headerCategory.map ( item =>
                    <DropdownGroup key={ item.id }>
                      { item.listItems.map ( listItem =>
                        <ListItem key={ listItem.text }><DropdownLink
                          to={ listItem.path }>{ listItem.text }</DropdownLink></ListItem>
                      ) }
                    </DropdownGroup>
                  ) }
                </DropdownGroupWrapper>
              </Dropdown>
            </ListItem>
            <ListItem><HeaderNavLink to="#">{ t ( 'header.links.aboutUs' ) }</HeaderNavLink></ListItem>
          </List>

          <LogoDesktopWrapper>
            <LogoDesktop />
          </LogoDesktopWrapper>

          <List>
            <ListItem><HeaderNavLink to="/">{ t ( 'header.links.payments' ) }</HeaderNavLink></ListItem>
            <ListItem><HeaderNavLink to="#">{ t ( 'header.links.articles' ) }</HeaderNavLink>
              <Dropdown>
                <DropdownGroupWrapper>
                  { headerArticles.map ( item =>
                    <DropdownGroupArticle key={ item.text }>
                      <ListItem key={ item.text }><DropdownLink
                        to={ item.path }>{ item.text }</DropdownLink></ListItem>
                    </DropdownGroupArticle>
                  ) }
                </DropdownGroupWrapper>
              </Dropdown>
            </ListItem>
            <SearchItem>
              <Search />
            </SearchItem>
          </List>
        </HeaderNav>
      </HeaderNavContainer>
    </HeaderMainContainer>
  )
    ;
};
Header.propTypes = {
  headerCategory: PropTypes.array.isRequired,
  headerArticles: PropTypes.array.isRequired
};

export default Header;
