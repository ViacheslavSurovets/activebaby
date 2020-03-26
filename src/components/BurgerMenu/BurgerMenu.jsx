import React, { useMemo, useState } from 'react';

import { useTranslation } from 'react-i18next';
import {
  BurgerMenuNav,
  InputCheckbox,
  BurgerMenuLink,
  BurgerMenuLinesWrapper,
  BurgerMenuLine,
  BurgerMenuLabel,
  BurgerMenuWrapper
} from './styles';
import { burgerMenuLinksData } from './data';




const BurgerMenu = () => {
  const [ checkBoxStatus, setCheckBoStatus ] = useState ( false );
  const { t, i18n } = useTranslation ();
  const burgerMenuLinks = useMemo ( () => (

    burgerMenuLinksData.map ( ( item, idx ) => {
      return {
        key: idx,
        title: t ( item.title ),
        path: item.path
      };
    } )

  ), [ i18n.language ] );
  return (
    <BurgerMenuWrapper>
      <InputCheckbox type='checkbox' id='burger-menu-checkbox' checked={ checkBoxStatus } readOnly />

      <BurgerMenuLinesWrapper>
        <BurgerMenuLine />
        <BurgerMenuLine />
        <BurgerMenuLine />
        <BurgerMenuLine />
      </BurgerMenuLinesWrapper>

      <BurgerMenuLabel htmlFor='burger-menu-checkbox' onClick={ () => setCheckBoStatus ( !checkBoxStatus ) }>
        <span>{ t ( 'header.burgerMenuLabel.menu' ) }</span>
      </BurgerMenuLabel>
      <BurgerMenuNav>
        { burgerMenuLinks.map ( item =>
          <BurgerMenuLink
            key={ item.title }
            to={ item.path }
            onClick={ () => setCheckBoStatus ( false ) }
          >
            { item.title }
          </BurgerMenuLink>
        ) }
      </BurgerMenuNav>
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;
