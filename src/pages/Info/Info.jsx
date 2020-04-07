import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Payment } from './internal';
import { InfoContent } from './styles';

import PropTypes from 'prop-types';

const Info = ( { match } ) => {


  return (
    <InfoContent>
      <Switch>
        <Route exact path={ `${ match.path }/about` } component={ About } />
        <Route exact path={ `${ match.path }/payments` } component={ Payment } />
      </Switch>
    </InfoContent>
  );
};

export default Info;

Info.propTypes = {
  match: PropTypes.object
};
