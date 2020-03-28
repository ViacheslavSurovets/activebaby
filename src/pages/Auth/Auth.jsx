import React from 'react';
import { identity, memoizeWith } from 'ramda';
import { Route, Switch } from 'react-router-dom';
import { LoginForm, RegistrationForm } from './internal';
import { LoginContainer } from './styles';

import PropTypes from 'prop-types';


const lazy = memoizeWith ( identity, ( path ) =>
  React.lazy ( () =>
    import(`@components/${ path }`) ) );

const Auth = ( props ) => {
  const { match } = props;

  return (
    <LoginContainer>
      <Switch>
        <Route exact path={ `${ match.path }` } component={ LoginForm } />
        <Route path={ `${ match.path }/registration` } component={ RegistrationForm } />
      </Switch>
    </LoginContainer>
  );
};

export default Auth;


Auth.propTypes = {
  match: PropTypes.object.isRequired
};
