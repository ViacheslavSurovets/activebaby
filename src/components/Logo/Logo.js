import logo from '@assets/ActiveBabyLogo.png';
import styled, { css } from 'styled-components';
import { desktop, tablet, mobile } from '@utils/media';


const logoStyles = css`
display: flex;
background-image: url(${ logo });
background-repeat: no-repeat;
background-size: contain ;
cursor: pointer;
`;

export const LogoDesktop = styled.div`
  ${ desktop }{
    ${ logoStyles };
    height: 7rem;
    width: 13rem;
    align-self: flex-end;
  }
`;

export const LogoTablet = styled.div`
   ${ tablet },
   ${ mobile }{
    ${ logoStyles };
    height: 3rem;
    width: 8rem;
  }
`;


