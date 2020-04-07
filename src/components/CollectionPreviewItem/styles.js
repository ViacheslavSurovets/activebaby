import styled from 'styled-components';
import {
  commonStyleTextThreeRem,
  commonStyleTextTwoRem,
  flexCommon
} from '@src/styles/commonStylesAndStyledComponents';
import { tablet, mobile } from '@media';

export const CollectionPreviewItemContainer = styled.section`
  position: absolute;
  top: 50%;
  left:50%;
  margin-left:-27.5rem;
  margin-top: -26rem;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  background-color: ${ ( { theme } ) => theme.ghostWhite };
  z-index: 10;
  width: 55rem;
  ${ tablet }{
    width: 90%;
    margin-left: -46%
  };
  ${ mobile }{
    margin-left:-47%;
  }
`;

export const CollectionPreviewItemTitle = styled.span`
  ${ flexCommon }; 
  ${ commonStyleTextThreeRem };
`;


export const CollectionPreviewItemImage = styled.div`
  background-image: url(${ props => props.background });
  background-size: 100% 100%;
  width: 90%;
`;

export const CollectionPreviewItemHeader = styled.div`
  ${ flexCommon };
  position: relative;
`;

export const CloseIconWrapper = styled.div`
  align-self: flex-start;
  cursor: pointer;
  right:0;
  top:0;
  position: absolute;
`;

export const CollectionPreviewItemImageWrapper = styled.figure`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 40rem;
  ${ mobile }{
    height: 80vw;
  }
`;

export const CustomButtonText = styled.span`
  ${ commonStyleTextTwoRem };
  margin-right: 2rem;
`;

export const CollectionPreviewInfoWrapper = styled.div`
  ${ flexCommon };
  width: 90%;
  margin: 1rem auto;
`;

export const CollectionPreviewInfoText = styled.span`
  ${ commonStyleTextTwoRem };
`;

export const CategoryItemTextWrapper = styled.div`
  margin-right:2rem;
`;

export const PreviewItemInfoWrapper = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between;
  flex-wrap: wrap;
  ${ mobile }{
    justify-content: center;
  }
`;

export const PreviewItemCustomButtonWrapper = styled.div`
  width: 19rem;
  ${ mobile }{
    width: 100%;
    margin-top:.5rem;
  };
   &:hover {
   svg {
        fill: ${ ( { theme } ) => theme.header.cartColor };
      };
  }
`;
