import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { CustomButton, CustomForm, CustomInput } from '@components';
import {
  LoginContainerButtonWrapper,
  LoginContainerTitle,
  LoginContentWrapper,
  LoginNewCustomerContainer,
  LoginNewCustomerLink,
  LoginNewCustomerText
} from '@pages/Auth/styles';

import { signInWithGoogle, auth, createUserProfileDocument } from '@core/firebase';

import { signUpStart } from '@redux/user/user.actions';

import PropTypes from 'prop-types';

const RegistrationForm = ( { signUpStart } ) => {

  const [ userCredentials, setUserCredentials ] = useState ( {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: true
  } );

  const { t } = useTranslation ();

  const { firstName, lastName, email, password, confirmPassword, checkbox } = userCredentials;

  const handleSubmit = async ( event ) => {
    event.preventDefault ();
    if ( password !== confirmPassword ) {
      alert ( t ( 'authPage.checkPasswords' ) );
      return;
    }

    await signUpStart ( { firstName, lastName, email, password } );

    setUserCredentials ( {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      checkbox: true
    } );
  };

  const handleChange = ( event ) => {
    const { value, name } = event.target;
    setUserCredentials ( { ...userCredentials, [ name ]: value } );
  };

  const dataRegistrationForm = useMemo ( () => {
    return [
      {
        type: 'text',
        name: 'firstName',
        value: firstName,
        autocomplete: 'on',
        label: 'authPage.firstName',
      },
      {
        type: 'text',
        name: 'lastName',
        value: lastName,
        autocomplete: 'on',
        label: 'authPage.lastName',

      },
      {
        type: 'email',
        name: 'email',
        value: email,
        autocomplete: 'on',
        label: 'authPage.email',
      },
      {
        type: 'password',
        name: 'password',
        value: password,
        autocomplete: 'current-password',
        label: 'authPage.password',
      },
      {
        type: 'password',
        name: 'confirmPassword',
        value: confirmPassword,
        label: 'authPage.confirmPassword',
      },
      {
        type: 'checkbox',
        name: 'checkbox',
        value: { checkbox },
        label: null
      }
    ];
  }, [ firstName, email, lastName, password, confirmPassword ] );

  return (
    <>
      <LoginContainerTitle>{ t ( 'authPage.registrationTitle' ) }</LoginContainerTitle>
      <LoginContentWrapper>
        <CustomForm onSubmit={ handleSubmit }>
          {
            dataRegistrationForm.map ( ( item, idx ) =>
              <CustomInput
                key={ idx }
                type={ item.type }
                name={ item.name }
                value={ item.value }
                label={ t ( item.label ) }
                autocomplete={ item.autocomplete }
                onChange={ handleChange }
                inlineBlock
                required
                big
              />
            )
          }
          <LoginContainerButtonWrapper>
            <CustomButton
              type='submit'
              orangeSoft
              marginTop={ .5 }
              width={ '40%' }
              mobile
            >
              { t ( 'authPage.registrationButton' ) }
            </CustomButton>
            <CustomButton
              onClick={ signInWithGoogle }
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
          <LoginNewCustomerText>{ t ( 'authPage.registrationQuestion' ) }</LoginNewCustomerText>
          <LoginNewCustomerLink
            to='/auth'
          >{ t ( 'authPage.loginLink' ) }</LoginNewCustomerLink>
        </LoginNewCustomerContainer>
      </LoginContentWrapper>
    </>
  );
};


const mapDispatchToProps = dispatch => ({
  signUpStart: ( user ) => dispatch ( signUpStart ( user ) )
});


export default connect ( null, mapDispatchToProps ) ( RegistrationForm );

RegistrationForm.propTypes = {
  signUpStart: PropTypes.func
};
