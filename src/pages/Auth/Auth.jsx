import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { LoginForm, RegistrationForm } from './internal';
import { LoginContainer } from './styles';

import PropTypes from 'prop-types';

const Auth = ( props ) => {
  const { match } = props;

  return (
    <LoginContainer>
      <Switch>
        <Route exact path={ `${ match.path }` } component={ LoginForm } />
        <Route path={`${match.path}/registration`} component={RegistrationForm} />
      </Switch>
    </LoginContainer>
  );
};

export default withRouter(Auth);

Auth.propTypes = {
  match: PropTypes.object.isRequired
};
