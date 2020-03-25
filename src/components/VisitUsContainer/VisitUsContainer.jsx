import React from 'react';
import { CustomButton } from '@components';
import {
  VisitUsContentContainer,
  VisitUsContentText,
  VisitUsContentTitle,
  VisitUsImageContainer,
  VisitUsWrapper
} from './styles';

const VisitUsContainer = () => (
  <VisitUsWrapper>
    <VisitUsImageContainer to={ '#' } />
    <VisitUsContentContainer>
      <VisitUsContentTitle>Title</VisitUsContentTitle>
      <VisitUsContentText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem consectetur cumque
        cupiditate, dolorem eaque, eos error est eum illo, ipsam labore modi nobis odit perferendis quidem similique
        temporibus voluptatum.</VisitUsContentText>
      <CustomButton><span>Button</span></CustomButton>
    </VisitUsContentContainer>
  </VisitUsWrapper>
);

export default VisitUsContainer;
