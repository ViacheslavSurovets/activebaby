import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { commonStyleTextTwoRem, commonLinkStyle } from '@commonStyles';


export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 30rem;
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
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CategoryItemCustomButtonWrapper = styled.div`

  &:hover {
   svg {
        fill: ${ ( { theme } ) => theme.header.cartColor };
      };
  }
`;
