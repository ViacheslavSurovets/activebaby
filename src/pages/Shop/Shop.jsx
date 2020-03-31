import React  from 'react';
import { Route, Switch } from 'react-router-dom';
import { Categories } from './internal';
import PropTypes from 'prop-types';

const Shop = ( { match } ) => (
  <Route path={ `${ match.path }` } component={ Categories } />
);

export default Shop;

Shop.propTypes = {
  match: PropTypes.object
};
