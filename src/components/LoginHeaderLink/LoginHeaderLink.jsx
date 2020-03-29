import React from 'react';
import { LoginIcon } from '@components';
import { LoginText, WrapperLink } from './styles';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { auth } from '@core/firebase';
import PropTypes from 'prop-types';


const LoginHeaderLink = ( { currentUser } ) => {
  const { t, i18n } = useTranslation ();

  return (
    <>
      {
        currentUser ?
          (<WrapperLink as='div' onClick={ () => auth.signOut () }>
            <LoginIcon />
            <LoginText>{ t ( 'header.links.logout' ) }</LoginText>
          </WrapperLink>)
          :
          (<WrapperLink to='/auth'>
            <LoginIcon />
            <LoginText>{ t ( 'header.links.login' ) }</LoginText>
          </WrapperLink>)
      }
    </>
  );
};

const mapStateToProps = ( { user: { currentUser } } ) => ({
  currentUser
});

// const mapDispatchToProps = dispatch => ({
//   signOut: dispatch(signOut());
// });

export default connect ( mapStateToProps ) ( LoginHeaderLink );

LoginHeaderLink.propTypes = {
  currentUser: PropTypes.oneOfType ( [ () => null, PropTypes.object ] )
};

