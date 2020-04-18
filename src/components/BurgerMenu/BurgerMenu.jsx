import React, { useMemo, useState } from 'react';
import { connect }  from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useTranslation } from 'react-i18next';
import {
  BurgerMenuNav,
  InputCheckbox,
  BurgerMenuLink,
  BurgerMenuLinesWrapper,
  BurgerMenuLine,
  BurgerMenuLabel,
  BurgerMenuWrapper,
  MenuHrefLink
} from './styles';
import { selectCurrentUser } from '@redux/user/user.selectors';
import { selectMenuData } from '@redux/menu/menu.selectors';
import PropTypes from 'prop-types';
import { signOutStart } from '@redux/user/user.actions';


const BurgerMenu = ( { currentUser, menuData, signOutStart } ) => {
  const [ checkBoxStatus, setCheckBoStatus ] = useState ( false );
  const { t } = useTranslation ();
  const burgerMenuLinks = useMemo ( () => (

    menuData.map ( ( item, idx ) => {
      return {
        key: idx,
        title: t ( (item.title) ),
        path: item.path
      };
    } )

  ), [ t, menuData ] );

  const handleClick = async () => {
    await signOutStart ();
    return setCheckBoStatus ( false );
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
        <MenuHrefLink
          href='mailto: strollers@gmail.com'
          onClick={ handleClick }>EMAIL
        </MenuHrefLink>
        <MenuHrefLink
          href='tel: +375 33 3765823'
          onClick={ handleClick }>{ t ( 'header.links.phone' ) }
        </MenuHrefLink>
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


const mapStateToProps = createStructuredSelector ( {
  currentUser: selectCurrentUser,
  menuData: selectMenuData
} );

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch ( signOutStart () )
});

export default connect ( mapStateToProps, mapDispatchToProps ) ( BurgerMenu );

BurgerMenu.propTypes = {
  currentUser: PropTypes.oneOfType ( [ () => null, PropTypes.object ] ),
  menuData: PropTypes.array,
  signOutStart: PropTypes.func
};
