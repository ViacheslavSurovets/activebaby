import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background: ${ ( { theme } ) => theme.footer.footerBackground };
  color: ${ ( { theme } ) => theme.footer.footerColor };
`;

export const FooterWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SocialLinks = styled.figure`
  display: flex;
  width: 20rem;
  justify-content: space-between;
`;

export const SocialsLinksWrapper = styled ( Link )`
`;


