import React from 'react';
import { LoginIcon } from '@components';
import { LoginText, WrapperLink } from './styles';
import { useTranslation } from 'react-i18next';


const LoginHeaderLink = () => {
  const { t, i18n } = useTranslation ();
  return (
    <WrapperLink to='/auth'>
      <LoginIcon />
      <LoginText>{t('header.links.login')}</LoginText>
    </WrapperLink>
  );
};

export default LoginHeaderLink;
