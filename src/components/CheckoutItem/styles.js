import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 10rem;
  border-bottom: 1px solid ${ ( { theme } ) => theme.darkGray };
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;
  user-select: none;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 1.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled ( TextContainer )`
  display: flex;

  span {
    margin: 0 1rem;
  }

  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 1.2rem;
  cursor: pointer;
`;

