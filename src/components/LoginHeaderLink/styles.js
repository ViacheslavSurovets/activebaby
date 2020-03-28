import styled from 'styled-components';
import { desktop } from '@utils/media';
import { styleHeaderItem } from '@components/Header/styles';
import { Link } from 'react-router-dom';

export const WrapperLink = styled ( Link )`
  display: none;
  ${ desktop }{
  ${ styleHeaderItem };
  color: ${ ( { theme } ) => theme.white };
  display: inherit;
  justify-content: space-between;
  text-decoration: none;
  width: 8rem;
  margin-right: 2rem;
  &:hover {
    svg path {
      fill: ${ ( { theme } ) => theme.header.colorOnHover }
    }
  }
  } 
`;

export const LoginText = styled.span` 
`;
