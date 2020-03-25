import React from 'react';
import { CustomLinkLikeButton } from '@components';
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
      <CustomLinkLikeButton url={'#'}>Button</CustomLinkLikeButton>
    </VisitUsContentContainer>
  </VisitUsWrapper>
);

export default VisitUsContainer;
