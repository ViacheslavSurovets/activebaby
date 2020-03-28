import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { commonStyleTextThreeRem, commonStyleTitleText, flexCommon } from '@commonStyles';
import { desktop, mobile, tablet } from '@media';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background: ${ ( { theme } ) => theme.footer.footerBackground };
  color: ${ ( { theme } ) => theme.footer.footerColor };
`;

export const FooterWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${ ( { theme } ) => theme.darkGray };
  ${mobile} {
  flex-direction: column;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  user-select: none;
  &:hover{
      color:  ${ ( { theme } ) => theme.footer.footerColorOnHover };
    }
`;

export const SocialLinks = styled.figure`
  display: flex;
  width: 15rem;
  justify-content: space-around;
  align-items: center;
`;

export const SocialsLinksWrapper = styled.a`
  &:hover {
    svg path {
      fill: ${ ( { theme } ) => theme.header.colorOnHover }
    }
  }
`;

export const FooterContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const FooterNavLink = styled ( Link )`
  ${ commonStyleTextThreeRem };
  ${flexCommon};
  color: ${ ( { theme } ) => theme.footer.footerColor };
  text-decoration: none;
  user-select: none;
  &:hover{
      color:  ${ ( { theme } ) => theme.footer.footerColorOnHover };
    }
`;


export const CustomFormTitle = styled.div`
  color: ${ ( { theme } ) => theme.white } !important;
  ${ commonStyleTitleText };
  display: flex;
  margin-bottom: 3rem;
  text-align: center;
`;

export const FooterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const SocialLinksMediaDesktop = styled.div`
  display: none;
  ${desktop}{
  display: inherit;
  }
`;

export const SocialLinksMediaTablet = styled.div`
  display: none;
  ${tablet}{
  display: inherit;
  margin-top: 1rem;
  margin-bottom: 1rem;
  }
`;

export const FooterNavLinksMediaMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  ${mobile}{
    ${flexCommon};
    flex-direction: column;
    width: 100%;
  }
`;
