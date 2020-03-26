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
import { SearchDesktop } from '@components/SearchDesktop';
import { useTranslation } from 'react-i18next';
import { headerCategoryData, headerArticlesData } from '@components/HeaderNavContainer/data';
import { HeaderCategory, HeaderArticles } from './internal';


const HeaderNavContainer = () => {

  const { t } = useTranslation ();

  return (
    <HeaderNav>
      <List>
        <ListItem><HeaderNavLink to="/">{ t ( 'header.links.main' ) }</HeaderNavLink></ListItem>
        <ListItem><HeaderNavLink to="#">{ t ( 'header.links.categories' ) }</HeaderNavLink>
          <Dropdown>
            <DropdownGroupWrapper>

              <HeaderCategory headerCategoryData={ headerCategoryData } />

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

              <HeaderArticles headerArticlesData={ headerArticlesData } />

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

export default HeaderNavContainer;
