import React from 'react';
import { Spinner, SuspenseComponentWrapper } from './styled';


const SuspenseComponent = ( { ...rest } ) => (
  <SuspenseComponentWrapper>
    <Spinner { ...rest }>
      <div />
      <div />
      <div />
      <div />
    </Spinner>
  </SuspenseComponentWrapper>
);

export default SuspenseComponent;
