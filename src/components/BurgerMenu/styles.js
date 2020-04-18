import styled, { css } from 'styled-components';
import { desktop, mobile, tablet } from '@utils/media';
import { NavLink } from 'react-router-dom';
import { styleLink } from '@components/Header/styles';
import { flexCommon } from '@src/styles/commonStylesAndStyledComponents';

const styleBurgerMenuWrapper = css`
  display:flex;
  flex: 1;
  justify-content: flex-start;
  height: 100%;
  position: relative;
`;

export const BurgerMenuWrapper = styled.div`
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

export const BurgerMenuLinesWrapper = styled.figure`
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

export const BurgerMenuLine = styled.div`
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


export const BurgerMenuLabel = styled.label`
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

export const BurgerMenuNav = styled.nav`
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




export const BurgerMenuLink = styled ( NavLink )`
  ${ styleLink };
   ${flexCommon};
   height: 4rem;
   width: 100%;
`;

export const MenuHrefLink = styled.a`
  ${ styleLink };
   ${flexCommon};
   height: 4rem;
   width: 100%;
`;


