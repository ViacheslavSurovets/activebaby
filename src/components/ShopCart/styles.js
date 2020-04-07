import styled from 'styled-components';
import { desktop, mobile, tablet } from '@utils/media';
import { flexCommon } from '@commonStyles';

export const CartWrapper = styled.figure`
${flexCommon};
  position: relative;
  background: ${ ( { theme } ) => theme.header.shopCartBackground };
  width: 100%;
  height: 100%;
  &:hover{
    background: ${ ( { theme } ) => theme.header.cartBackground }; 
      svg {
        fill: ${ ( { theme } ) => theme.header.cartColor };
      };
      span {
        color: ${ ( { theme } ) => theme.header.cartColor };
      }
      //div {
      // opacity: 1;
      // visibility: visible;
      // transition: .4s all .15s;
      //}
 }
`;

export const Counter = styled.span`
  ${ tablet },
  ${ mobile }{
    display: none;
  }
  ${ desktop }{
    color:${ ( { theme } ) => theme.white };
    margin-left: .5rem;
  }
`;

// const styleCartDropdownTransition = css`
//    opacity: 1;
//    visibility: visible;
//    transition: 5s all .15s;
// `;

// const getTransition = ( props ) => {
//   if ( props.transition ) {
//     return styleCartDropdownTransition;
//   }
//   return;
// };

export const ShopCartDropdown = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  bottom: 0;
  right:0;
  transform: translateY(100%);
  width: 30rem;
  min-height: 10rem;
  text-align: center;
  font-size: 2rem;
  cursor:initial;
  background: ${ ( { theme } ) => theme.header.cartBackground };
  border-bottom: 1px solid ${ ( { theme } ) => theme.header.bordersDropdown };
  border-left: 1px solid ${ ( { theme } ) => theme.header.bordersDropdown };
  color:${ ( { theme } ) => theme.header.linkColor };
  z-index: 3;
  //opacity: 0;
  //visibility: hidden;
  //transition: .4s all .15s;
`;

export const ShopCartDropdownItemsWrapper = styled.div`
  overflow: scroll;
  max-height: 40rem;
`;

export const CustomButtonWrapper = styled.div`
  height: 5rem;
  width: 75%;
  margin-top: 1rem;
  margin-bottom: .5rem;
`;


export const ShopCartDropDownText = styled.div`
  margin: 5rem auto;
`;
