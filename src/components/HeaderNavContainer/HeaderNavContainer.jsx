import React, { useMemo } from 'react';
import {
  Dropdown,
  DropdownGroup, DropdownGroupArticle,
  DropdownGroupWrapper, DropdownLink,
  HeaderNav,
  HeaderNavLink,
  List,
  ListItem, LogoDesktopWrapper, SearchItemDesktop, HeaderNavWrapper
} from '@components/Header/styles';
import { LogoDesktop } from '@components/Logo';
import { SearchDesktop } from '@components/SearchDesktop';
import { useTranslation } from 'react-i18next';


const HeaderNavContainer = () => {

  const { t, i18n } = useTranslation ();

  const headerCategory = useMemo ( () => ([
    {
      id: 'Прогулки',
      listItems: [
        {
          text: t ( 'header.headerCategory.columnOne.strollers' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnOne.quatro' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnOne.lorelli' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnOne.carello' ),
          path: '#'
        },
      ]
    },
    {
      id: 'Модульные',
      listItems: [
        {
          text: t ( 'header.headerCategory.columnTwo.modules' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnTwo.adamex' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnTwo.used' ),
          path: '#'
        }
      ]
    },
    {
      id: 'Автолюльки',
      listItems: [
        {
          text: t ( 'header.headerCategory.columnThree.carSeats' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnThree.carlo' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnThree.adamex' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnThree.used' ),
          path: '#'
        },
      ]
    },
    {
      id: 'Аксесуары',
      listItems: [
        {
          text: t ( 'header.headerCategory.columnFour.accessories' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnFour.adapters' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnFour.tires' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnFour.cameras' ),
          path: '#'
        }
      ],
    },
    {
      id: 'Постельное белье',
      listItems: [
        {
          text: t ( 'header.headerCategory.columnFive.linens' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnFive.individualTailoring' ),
          path: '#'
        }
      ]
    }
  ]), [ i18n.language ] );
  const headerArticles = useMemo ( () => ([
    {
      text: t ( 'header.headerArticle.articleOne.title' ),
      path: '#'
    },
    {
      text: t ( 'header.headerArticle.articleTwo.title' ),
      path: '#'
    },
    {
      text: t ( 'header.headerArticle.articleThree.title' ),
      path: '#'
    }

  ]), [ i18n.language ] );


  return (
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

        { /* desktop/searchMediaQueryLow*/ }
        <SearchItemDesktop>
          <SearchDesktop />
        </SearchItemDesktop>

      </List>
    </HeaderNav>

  );
};

export default HeaderNavContainer;
