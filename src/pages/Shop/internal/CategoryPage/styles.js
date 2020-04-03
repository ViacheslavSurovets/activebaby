import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { commonStyleTextThreeRem, commonStyleTextTwoRem, commonLinkStyle, commonStyleTextFourRem } from '@commonStyles';
import { tablet, mobile } from '@utils/media';

export const CategoryPageContainer = styled.section`
  width: 95%;
  margin:0 auto;
  display: flex;
  flex-direction: column;
`;

export const CategorySectionTitle = styled.span`
  ${ commonStyleTextFourRem };
`;


export const CategorySectionContainer = styled.section`
  display:flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5rem;
`;

export const CategoryItemTitle = styled.span`
  ${ commonStyleTextThreeRem };
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 250px;
  height: 30vh;
  margin: 1rem;
  transition: all 1s;

  background-color: ghostwhite;
  &:hover{
    transform: scale(1.05);
    transition: all 1s;
    box-shadow: 4px 4px 4px -3px ${ ( { theme } ) => theme.black };
  }
`;


export const CategoryItemImageLink = styled ( Link )`
  ${ commonLinkStyle };
  background-image: url(${ props => props.background });
  background-size: 100% 100%;
  flex: 1;
  margin: .5rem;
`;

export const CategoryItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${tablet},
  ${mobile}{
    justify-content: center;
  }
`;

export const CategoryItemText = styled.span`
  ${ commonStyleTextTwoRem };
  font-weight: bold;
`;

export const CategoryItemPriceText = styled.span`
  font-size: 1.6rem;
  font-weight: lighter;
`;

export const CategoryItemInfoWrapper = styled.div`
  display: flex;
  align-items: center; 
  height: 3rem;
  justify-content: space-between;
`;

export const CategoryItemCustomButtonWrapper = styled.div`
  &:hover {
   svg {
        fill: ${ ( { theme } ) => theme.header.cartColor };
      };
  }
`;
