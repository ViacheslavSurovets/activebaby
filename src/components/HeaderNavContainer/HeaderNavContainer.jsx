import React from 'react';
import {
  Dropdown,
  DropdownGroupWrapper,
  HeaderNav,
  HeaderNavLink,
  List,
  ListItem, LogoDesktopWrapper, SearchItemDesktop
} from '@components/Header/styles';
import { LogoDesktop } from '@components/Logo';
import { withRouter } from 'react-router-dom';
import { SearchDesktop } from '@components/SearchDesktop';
import { useTranslation } from 'react-i18next';
import { HeaderCategory, HeaderArticles } from './internal';
import PropTypes from 'prop-types';


const HeaderNavContainer = ( { history } ) => {

  const { t } = useTranslation ();

  return (
    <HeaderNav>
      <List>
        <ListItem><HeaderNavLink to='/'>{ t ( 'header.links.main' ) }</HeaderNavLink></ListItem>
        <ListItem><HeaderNavLink to='/shop'>{ t ( 'header.links.categories' ) }</HeaderNavLink>
          <Dropdown>
            <DropdownGroupWrapper>

              <HeaderCategory />

            </DropdownGroupWrapper>
          </Dropdown>
        </ListItem>
        <ListItem><HeaderNavLink to="/info/about">{ t ( 'header.links.aboutUs' ) }</HeaderNavLink></ListItem>
      </List>

      <LogoDesktopWrapper onClick={ () => history.push ( '/' ) }>
        <LogoDesktop />
      </LogoDesktopWrapper>
      <List>
        <ListItem><HeaderNavLink to="/info/payments">{ t ( 'header.links.payments' ) }</HeaderNavLink></ListItem>
        <ListItem><HeaderNavLink to="/articles">{ t ( 'header.links.articles' ) }</HeaderNavLink>
          <Dropdown>
            <DropdownGroupWrapper>

              <HeaderArticles />

            </DropdownGroupWrapper>
          </Dropdown>
        </ListItem>

        { /* desktop/searchMediaQueryLow*/ }
        <SearchItemDesktop>
          <SearchDesktop />
        </SearchItemDesktop>

      </List>
    </HeaderNav>

  );
};

export default withRouter(HeaderNavContainer);

HeaderNavContainer.propTypes = {
  history: PropTypes.object
};
