import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CustomInput, CustomLabel, CustomButton, CustomForm } from '@components';
import {
  FooterContainer,
  FooterContent, FooterInfo,
  FooterWrapper,
  FooterContentItem,
  FooterNavLink,
  InputWrapper,
  CustomFormTitle,
  FooterFormWrapper,
  SocialLinksMediaDesktop,
  SocialLinksMediaTablet,
  FooterNavLinksMediaMobile
} from './styles';
import { burgerMenuLinksData } from './data';
import { SocialLinksComponent } from './internal';


const Footer = ( props ) => {
  const { t, i18n } = useTranslation ();
  const footerNavLinks = useMemo ( () => (

    burgerMenuLinksData.map ( ( item, idx ) => {
      return {
        key: idx,
        title: t ( item.title ),
        path: item.path
      };
    } )

  ), [ i18n.language ] );

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>

          {/* desctop */}
          <SocialLinksMediaDesktop>
            <SocialLinksComponent />
          </SocialLinksMediaDesktop>

          <FooterContentItem>
            <FooterNavLinksMediaMobile>
              { footerNavLinks.map ( ( item, idx ) =>
                <FooterNavLink key={ idx } to={ item.path }>
                  { item.title }
                </FooterNavLink>
              ) }
            </FooterNavLinksMediaMobile>
          </FooterContentItem>
          <FooterContentItem>
            <FooterFormWrapper>

              {/*tablet*/}
              <SocialLinksMediaTablet>
                <SocialLinksComponent />
              </SocialLinksMediaTablet>

              <CustomForm marginBottom='1'>
                <CustomFormTitle>{t('footer.subscribeInfoText')}</CustomFormTitle>
                <InputWrapper>
                  <CustomInput id='footer-form-input' inlineBlock big placeholder={`${' '}` + t('footer.subscribeInputPlaceholder')} />
                  <CustomLabel htmlFor='footer-form-input' fontSize='1.3'>
                    EMAIL
                  </CustomLabel>
                </InputWrapper>

                <CustomButton orangeSoft block marginTop='1'>{t('footer.subscribeButton')}</CustomButton>

              </CustomForm>
            </FooterFormWrapper>

          </FooterContentItem>
        </FooterContent>
        <FooterInfo>
          <span>&#169; ActiveBaby  2020</span>
        </FooterInfo>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
