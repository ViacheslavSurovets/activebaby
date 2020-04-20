import styled from 'styled-components';
import { commonStyleTextTwoRem } from '@src/styles/commonStylesAndStyledComponents';
import { mobile } from '@media';

export const CheckoutPage = styled.section`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto 0;
  user-select: none;
  ${ mobile }{
    overflow: auto;
    min-width: 70rem;
  }
`;

export const CheckoutHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid ${ ( { theme } ) => theme.darkGray };
`;

export const CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
     width: 8%;
  }
`;


export const CheckoutTotal = styled.div`
 margin-top: 3rem;
 margin-left: auto;
 font-size: 3.6rem;
`;

export const HeaderBlockText = styled.span`
  ${ commonStyleTextTwoRem };
`;
