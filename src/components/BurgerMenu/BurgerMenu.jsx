import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import { tablet, mobile, desktop } from '@utils/media';
import { styleLink } from '@components/Header/styles';


const styleBurgerMenuWrapper = css`
  display:flex;
  flex: 1;
  justify-content: flex-start;
  height: 100%;
  position: relative;
`;

const BurgerMenuWrapper = styled.div`
  ${ desktop }{
    display:none;
  }
  ${ tablet }{
   ${ styleBurgerMenuWrapper };
  }
  ${ mobile }{
   ${ styleBurgerMenuWrapper };
  }
`;

export const InputCheckbox = styled.input`
  display:none;
`;

const BurgerMenuLinesWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  align-items: center;
  height: 3.5rem;
  width: 3.5rem;
  left: 1rem;
  cursor: pointer;
`;

const BurgerMenuLine = styled.div`
  width: 3rem;
  height: .2rem;
  background-color: ${ ( { theme } ) => theme.header.burgerMenuLineBackground };
  &:nth-child(2),
  &:nth-child(3){
    position: absolute;
    top: 1.65rem;
  }
`;

const styleBurgerMenuLabel = css`
  display: flex;
  justify-content: start;
  align-items: center;
  user-select: none;
  padding-left: 3rem;
  margin-left: 1rem;
  z-index: 1;
`;


const BurgerMenuLabel = styled.label`
  ${ tablet }{
    ${ styleBurgerMenuLabel };
    padding-left: 5rem;
    width: 20%;
  }
  ${ mobile }{
    ${ styleBurgerMenuLabel };
    padding: 0;
    color: transparent;
  } 
`;

const BurgerMenuNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: ${ ( { theme } ) => theme.header.burgerMenuNavBackground };
    transform: translateY(100%);
    opacity: 0;
    visibility: hidden;
    transition: .4s all .15s;
    z-index: 2;
`;

const BurgerMenuLink = styled ( NavLink )`
  ${ styleLink };
   display: flex;
   justify-content: center;
   align-items: center;
   height: 4rem;
   width: 100%;
   
`;

const BurgerMenu = () => {
  const [ checkBoxStatus, setCheckBoStatus ] = useState ( false );
  const { t, i18n } = useTranslation ();
  const burgerMenuLinks = useMemo ( () => ([
    {
      title: t ( 'header.links.main' ),
      path: '/'
    },
    {
      title: t ( 'header.links.categories' ),
      path: '#'
    },
    {
      title: t ( 'header.links.aboutUs' ),
      path: '#'
    },
    {
      title: t ( 'header.links.payments' ),
      path: '#'
    },
    {
      title: t ( 'header.links.articles' ),
      path: '#'
    },
    {
      title: t ( 'header.links.map' ),
      path: '/map'
    },
    {
      title: t ( 'header.links.login' ),
      path: '#'
    }
  ]), [ i18n.language ] );
  return (
    <BurgerMenuWrapper>
      <InputCheckbox type='checkbox' id='burger-menu-checkbox' checked={ checkBoxStatus } readOnly />

      <BurgerMenuLinesWrapper>
        <BurgerMenuLine />
        <BurgerMenuLine />
        <BurgerMenuLine />
        <BurgerMenuLine />
      </BurgerMenuLinesWrapper>

      <BurgerMenuLabel htmlFor='burger-menu-checkbox' onClick={ () => setCheckBoStatus ( !checkBoxStatus ) } >
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
