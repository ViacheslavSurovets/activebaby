import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { googleSingInStart, emailSingInStart } from '@redux/user/user.actions';

import { CustomButton, CustomForm, CustomInput } from '@components';
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
  const [ userCredentials, setUserCredentials ] = useState ( {
    email: '',
    password: ''
  } );

  const { t } = useTranslation ();
  const { match, googleSingInStart, emailSingInStart } = props;

  const { email, password } = userCredentials;

  const handleSubmit = async ( event ) => {
    event.preventDefault ();
    emailSingInStart ( email, password );
    setUserCredentials ( { email: '', password: '' } );
  };

  const handleChange = ( event ) => {
    const { name, value } = event.target;
    setUserCredentials ( { ...userCredentials, [ name ]: value } );

  };

  return (
    <>
      <LoginContainerTitle>{ t ( 'authPage.loginTitle' ) }</LoginContainerTitle>
      <LoginContentWrapper>
        <CustomForm onSubmit={ handleSubmit }>
          <CustomInput
            type='email'
            onChange={ handleChange }
            inlineBlock
            name='email'
            value={ email }
            autocomplete='on'
            label={ t ( 'authPage.email' ) }
            required
            big
          />

          <CustomInput
            type='password'
            name='password'
            value={ password }
            onChange={ handleChange }
            inlineBlock
            autocomplete='current-password'
            label={ t ( 'authPage.password' ) }
            required
            big
          >
            <RestorePasswordLink to={ '#' }>{ t ( 'authPage.restorePasswordLink' ) }</RestorePasswordLink>
          </CustomInput>


          <LoginContainerButtonWrapper>
            <CustomButton
              type='submit'
              orangeSoft
              marginTop={ .5 }
              width={ '40%' }
              mobile
            >
              { t ( 'authPage.loginButton' ) }
            </CustomButton>

            <CustomButton
              onClick={ googleSingInStart }
              type='button'
              marginTop={ .5 }
              width={ '40%' }
              googleButton
              mobile
            >
              { t ( 'authPage.enterWithGoogle' ) }
            </CustomButton>
          </LoginContainerButtonWrapper>
        </CustomForm>
        <LoginNewCustomerContainer>
          <LoginNewCustomerText>{ t ( 'authPage.loginQuestion' ) }</LoginNewCustomerText>
          <LoginNewCustomerLink
            to={ `${ match.path }/registration` }
          >{ t ( 'authPage.registrationLink' ) }</LoginNewCustomerLink>
        </LoginNewCustomerContainer>
      </LoginContentWrapper>
    </>
  );
};


const mapDispatchToProps = dispatch => ({
  googleSingInStart: () => dispatch ( googleSingInStart () ),
  emailSingInStart: ( email, password ) => dispatch ( emailSingInStart ( { email, password } ) )
});

export default connect ( null, mapDispatchToProps ) ( LoginForm );


LoginForm.propTypes = {
  match: PropTypes.object.isRequired,
  googleSingInStart: PropTypes.func,
  emailSingInStart: PropTypes.func
};
