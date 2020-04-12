import React from 'react';
import { LoginIcon } from '@components';
import { LoginText, WrapperLink } from './styles';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '@redux/user/user.actions';
import PropTypes from 'prop-types';

import { selectCurrentUser } from '@redux/user/user.selectors';

const LoginHeaderLink = ( { currentUser, signOutStart } ) => {
  const { t } = useTranslation ();

  return (
    <>
      {
        currentUser ?
          (<WrapperLink as='div' onClick={ signOutStart }>
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

const mapStateToProps = createStructuredSelector ( {
  currentUser: selectCurrentUser
} );

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch ( signOutStart () )
})
;

export default connect ( mapStateToProps, mapDispatchToProps ) ( LoginHeaderLink );

LoginHeaderLink.propTypes = {
  currentUser: PropTypes.oneOfType ( [ () => null, PropTypes.object ] ),
  signOutStart: PropTypes.func
};

