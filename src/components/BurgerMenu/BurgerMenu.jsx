import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

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
import { auth } from '@core/firebase';
import { selectCurrentUser } from '@redux/user/user.selectors';
import PropTypes from 'prop-types';


const BurgerMenu = ( { currentUser } ) => {
  const [ checkBoxStatus, setCheckBoStatus ] = useState ( false );
  const { t, i18n } = useTranslation ();
  const burgerMenuLinks = useMemo ( () => (

    burgerMenuLinksData.map ( ( item, idx ) => {
      return {
        key: idx,
        title: t ( (item.title) ),
        path: item.path
      };
    } )

  ), [ i18n ] );

  const handleClick = async () => {
    setCheckBoStatus ( false );
    return await auth.signOut ();
  };

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
        {
          currentUser ?
            (<BurgerMenuLink to='#' onClick={ handleClick }>
              { t ( 'header.links.logout' ) }
            </BurgerMenuLink>)
            :
            (<BurgerMenuLink
              to='/auth'
              onClick={ () => setCheckBoStatus ( false ) }
            >
              { t ( 'header.links.login' ) }
            </BurgerMenuLink>)
        }
      </BurgerMenuNav>
    </BurgerMenuWrapper>
  );
};


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


export default connect ( mapStateToProps ) ( BurgerMenu );

BurgerMenu.propTypes = {
  currentUser: PropTypes.oneOfType ( [ () => null, PropTypes.object ] )
};
