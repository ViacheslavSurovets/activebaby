import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { CustomInput, CustomButton, CustomForm } from '@components';
import { SocialLinksComponent } from './internal';
import {
  FooterContainer,
  FooterContent, FooterInfo,
  FooterWrapper,
  FooterContentItem,
  FooterNavLink,
  CustomFormTitle,
  FooterFormWrapper,
  SocialLinksMediaDesktop,
  SocialLinksMediaTablet,
  FooterNavLinksMediaMobile
} from './styles';
import { selectMenuData } from '@redux/menu/menu.selectors';
import { createStructuredSelector } from 'reselect';
import Proptypes from 'prop-types';


const Footer = ( { menuData } ) => {
  const { t, i18n } = useTranslation ();
  const footerNavLinks = useMemo ( () => (

    menuData.map ( ( item, idx ) => {
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

          {/* desktop */ }
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

              {/*tablet*/ }
              <SocialLinksMediaTablet>
                <SocialLinksComponent />
              </SocialLinksMediaTablet>

              <CustomForm marginBottom='1'>
                <CustomFormTitle>{ t ( 'footer.subscribeInfoText' ) }</CustomFormTitle>
                <CustomInput
                  inlineBlock
                  big
                  label='EMAIL'
                  placeholder={ t ( 'footer.subscribeInputPlaceholder' ) }
                />
                <CustomButton
                  type='submit'
                  orangeSoft
                  block
                  marginTop='1'
                >
                  { t ( 'footer.subscribeButton' ) }
                </CustomButton>

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

const mapStateToProps = createStructuredSelector ( {
  menuData: selectMenuData
} );

export default connect ( mapStateToProps ) ( Footer );


Footer.propTypes = {
  menuData: Proptypes.array
};
