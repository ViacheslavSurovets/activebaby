import React from 'react';
import {
  FooterContainer,
  FooterContent, FooterInfo,
  FooterWrapper,
  SocialLinks,
  SocialsLinksWrapper
} from './styles';
import { VkIcon, InstagramIcon } from '@icons';

const Footer = ( props ) => (
  <FooterContainer>
    <FooterWrapper>
      <FooterContent>
        <SocialLinks>
          <SocialsLinksWrapper to={ '#' }>
            <VkIcon />
          </SocialsLinksWrapper>
          <SocialsLinksWrapper to={ '#' }>
            <InstagramIcon />
          </SocialsLinksWrapper>
        </SocialLinks>
      </FooterContent>
      <FooterInfo>
        Hello
      </FooterInfo>
    </FooterWrapper>
  </FooterContainer>
);

export default Footer;
