import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Categories } from './internal';
import { CategoryPage } from './internal';
import { selectCollections, selectCollectionsLoaded } from '@redux/shop/shop.selecors';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '@redux/shop/shop.actions';
import PropTypes from 'prop-types';


const Shop = ( { match, fetchCollectionsStartAsync, collectionsLoaded } ) => {

  useEffect ( () => {
    //----------------- pasting data from firebase to redux
    fetchCollectionsStartAsync ();
  }, [] );

  return (
    <>
      {
        collectionsLoaded && (
          <>
            <Route exact path={ `${ match.path }` } component={ Categories } />
            <Route path={ `${ match.path }/:collectionId` } component={ CategoryPage } />
          </>
        )
      }
    </>
  );
};

const mapStateToProps = createStructuredSelector ( {
  collections: selectCollections,
  collectionsLoaded: selectCollectionsLoaded
} );

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch ( fetchCollectionsStartAsync () )
});


export default connect ( mapStateToProps, mapDispatchToProps ) ( Shop );

Shop.propTypes = {
  match: PropTypes.object,
  fetchCollectionsStartAsync: PropTypes.func,
  collectionsLoaded: PropTypes.bool
};
