import React from 'react';
import { LoginIcon } from '@components';
import styled from 'styled-components';
import { desktop, tablet, mobile } from '@utils/media';

import { styleHeaderItem } from '@components/Header/styles';

const Wrapper = styled.div`
  display: none;
  ${desktop}{
  ${ styleHeaderItem };
  display: inherit;
  justify-content: space-between;
  width: 8rem;
  margin-right: 2rem;
  &:hover {
    svg path {
      fill: ${ ( { theme } ) => theme.header.color }
    }
  }
  } 
`;

const LoginText = styled.span` 
`;

const LoginHeaderLink = () => (
  <Wrapper>
    <LoginIcon />
    <LoginText>Логин</LoginText>
  </Wrapper>


);

export default LoginHeaderLink;
