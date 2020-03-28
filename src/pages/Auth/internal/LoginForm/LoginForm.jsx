import React from 'react';
import { useTranslation } from 'react-i18next';

import { InputWrapper } from '@commonStyles';
import { CustomButton, CustomForm, CustomInput, CustomLabel } from '@components';
import {
  LoginContainerButtonWrapper,
  LoginContainerTitle,
  LoginContentWrapper,
  LoginNewCustomerContainer,
  LoginNewCustomerLink,
  LoginNewCustomerText,
  RestorePasswordLink
} from '@pages/Auth/styles';
import PropTypes from 'prop-types';



const LoginForm = ( props ) => {
  const { t, i18n } = useTranslation ();
  const { match } = props;

  return (
    <>
      <LoginContainerTitle>{ t ( 'loginPage.loginTitle' ) }</LoginContainerTitle>
      <LoginContentWrapper>
        <CustomForm>
          <InputWrapper>
            <CustomInput type='email' inlineBlock big />
            <CustomLabel>{ t ( 'loginPage.login' ) }</CustomLabel>
          </InputWrapper>
          <InputWrapper>
            <RestorePasswordLink to={ '#' }>{ t ( 'loginPage.restorePasswordLink' ) }</RestorePasswordLink>
            <CustomInput type='password' inlineBlock big />
            <CustomLabel>{ t ( 'loginPage.password' ) }</CustomLabel>
          </InputWrapper>
          <LoginContainerButtonWrapper>
            <CustomButton orangeSoft>{ t ( 'loginPage.loginButton' ) }</CustomButton>
          </LoginContainerButtonWrapper>
        </CustomForm>
        <LoginNewCustomerContainer>
          <LoginNewCustomerText>{ t ( 'loginPage.loginQuestion' ) }</LoginNewCustomerText>
          <LoginNewCustomerLink
            to={ `${ match.path }/registration` }
          >{ t ( 'loginPage.registrationLink' ) }</LoginNewCustomerLink>
        </LoginNewCustomerContainer>
      </LoginContentWrapper>
    </>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  match: PropTypes.object.isRequired
};
