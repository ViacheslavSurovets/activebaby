import React from 'react';
import { SocialLinks, SocialsLinksWrapper } from '@components/Footer/styles';
import { FOOTER_SOCIAL_LINKS_DATA } from '@components/Footer/data';
import { InstagramIcon, VkIcon } from '@icons/index';

const SocialLinksComponent = ( props ) => (
  <SocialLinks>
    <SocialsLinksWrapper href={ FOOTER_SOCIAL_LINKS_DATA.url.vk } target='_blank'>
      <VkIcon width='40' height='40' />
    </SocialsLinksWrapper>
    <SocialsLinksWrapper href={ FOOTER_SOCIAL_LINKS_DATA.url.instagram } target='_blank'>
      <InstagramIcon width='40' height='40' />
    </SocialsLinksWrapper>
  </SocialLinks>
);

export default SocialLinksComponent;
