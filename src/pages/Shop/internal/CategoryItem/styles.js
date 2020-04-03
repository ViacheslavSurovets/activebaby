import styled, { css } from 'styled-components';
import { tablet, mobile } from '@media';


const styleCategoryItemBig = css`
  width: 40vw;
`;

const styleCategoryItemSmall = css`
  width: 30vw;
`;

const getSize = ( props ) => {
  if ( props.size === 'big' ) {
    return styleCategoryItemBig;
  }
  if ( props.size === 'small' ) {
    return styleCategoryItemSmall;
  }

  return;
};

const styleItemTransformOnHover = css`
  transform: scale(1.03);
  transition: all 1s ease;
  box-shadow: 4px 4px 4px -3px ${ ( { theme } ) => theme.black };
`;

export const CategoryItemContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  height: 30vw;
  position: relative;
  margin: 1rem;
  transition: all 1s;
  ${ getSize };
  ${ tablet },
  ${ mobile }{
    width: 90vw;
    height: 70vw;
  }
  .js-categoryItemImage:hover {
    ${ styleItemTransformOnHover };
  }
`;

export const CustomButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 10%;
  width: 50%;
  left: 50%;
  margin-left: -25%;
  z-index: 1;
  &:hover{
    ~ .js-categoryItemImage {
      ${ styleItemTransformOnHover };
    }
  }
`;

export const CategoryItemImg = styled.div`
  width: 100%;
  height: 100%; 
  outline: none;
  transition: all 1s;
  background-image: url(${ props => props.background });
  background-size: cover;
  background-position:unset;
`;


// export const CategoryItemTitle = styled.span`
//   ${commonStyleTextFourRem};
//   ${mobile}{
//     ${commonStyleTextThreeRem};
//   }
// `;




