import React from 'react';
import { useTranslation } from 'react-i18next';
import { InputWrapper } from '@src/styles/commonStylesAndStyledComponents';
import { CustomButton, CustomForm, CustomInput, CustomLabel } from '@components';
import {
  LoginContainerButtonWrapper,
  LoginContainerTitle,
  LoginContentWrapper,
  LoginNewCustomerContainer,
  LoginNewCustomerLink,
  LoginNewCustomerText, RestorePasswordLink
} from '@pages/Auth/styles';

const RegistrationForm = ( props ) => {
  const { t } = useTranslation ();

  return (

    <>
      <LoginContainerTitle>{ t ( 'loginPage.registrationTitle' ) }</LoginContainerTitle>
      <LoginContentWrapper>
        <CustomForm>
          <InputWrapper>
            <CustomInput type='text' inlineBlock big />
            <CustomLabel>{ t ( 'loginPage.firstName' ) }</CustomLabel>
          </InputWrapper>
          <InputWrapper>
            <CustomInput type='text' inlineBlock big />
            <CustomLabel>{ t ( 'loginPage.lastName' ) }</CustomLabel>
          </InputWrapper>
          <InputWrapper>
            <CustomInput type='email' inlineBlock big />
            <CustomLabel>{ t ( 'loginPage.login' ) }</CustomLabel>
          </InputWrapper>
          <InputWrapper>
            <CustomInput type='password' inlineBlock big />
            <CustomLabel>{ t ( 'loginPage.password' ) }</CustomLabel>
          </InputWrapper>
          <LoginContainerButtonWrapper>
            <CustomButton orangeSoft>{ t ( 'loginPage.registrationButton' ) }</CustomButton>
          </LoginContainerButtonWrapper>
        </CustomForm>
        <LoginNewCustomerContainer>
          <LoginNewCustomerText>{ t ( 'loginPage.registrationQuestion' ) }</LoginNewCustomerText>
          <LoginNewCustomerLink
            to='/auth'
          >{ t ( 'loginPage.loginLink' ) }</LoginNewCustomerLink>
        </LoginNewCustomerContainer>
      </LoginContentWrapper>
    </>
  );
};

export default RegistrationForm;
