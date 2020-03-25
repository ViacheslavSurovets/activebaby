import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flexCommon } from '@src/styles/commonStylesAndStyledComponents';
import { mobile, tablet } from '@utils/media';

export const LinkCard = styled ( Link )`
  ${ flexCommon };
  width: 45vw;
  height: 40vw;
  background:url(${ props => props.background });
  background-size: cover;
  text-decoration: none;
  color: ${ ( { theme } ) => theme.main.linkCardHover.linkCardColor };
   ${ tablet }{
    width: 90vw;
    height: 80vw;
  }
  ${ mobile }{
    width: 90vw;
    height: 80vw;
  }
`;

export const LinkCardTitle = styled.span`
  font-size: 4rem;
  background:linear-gradient(currentColor, currentColor) 50% 100% no-repeat;
  background-size:0 1px;
  transform: translateY(1rem);
  transition: all 1s;
`;
export const LinkCardButton = styled.div`
  ${ flexCommon };
  background-color: ${ ( { theme } ) => theme.main.linkCardHover.linkCardButtonBackground };
  height: 6rem;
  min-width: 12rem;
  color: ${ ( { theme } ) => theme.main.linkCardHover.linkCardButtonColor };
  opacity: 0;
  visibility: hidden;
  transition: all .3s;
`;


export const LinkCardContentWrapper = styled.div`
  ${ flexCommon };
  flex-direction: column;
  position:absolute;
  width: 45vw;
  height: 40vw;
  ${ tablet }{
    width: 90vw;
    height: 80vw;
  }
  ${ mobile }{
    width: 90vw;
    height: 80vw;
  }

  &:hover {
    background: rgba(0, 0, 0, .5);
    .js-fakeButton-linkCard {
       opacity: 1;
       visibility: visible;
       transition: all .8s ease-in;
    };
    .js-title-linkCard{
      transform: translateY(-.7rem);
      background-size:100% 2px;
      transition: all .7s;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
