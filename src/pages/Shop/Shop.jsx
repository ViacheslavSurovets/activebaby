import React from 'react';
import { Route } from 'react-router-dom';
import { Categories } from './internal';
import { CategoryPage } from './internal';
import PropTypes from 'prop-types';

const Shop = ( { match } ) => (
  <>
    <Route exact path={ `${ match.path }` } component={ Categories } />
    <Route path={ `${ match.path }/:collectionId` } component={ CategoryPage } />
    {/*<Route path={`${ match.path }/:collectionId/:itemID`} component={itemPage}/>*/}
  </>
);

export default Shop;

Shop.propTypes = {
  match: PropTypes.object
};
