import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Categories } from './internal';
import { CategoryPage } from './internal';
import { ShopContainer } from './styles';
import { selectCollections, selectCollectionsLoaded } from '@redux/shop/shop.selecors';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStart } from '@redux/shop/shop.actions';
import PropTypes from 'prop-types';


const Shop = ( { match, fetchCollectionsStart, collectionsLoaded } ) => {

  useEffect ( () => {
    //----------------- pasting data from firebase to redux
    fetchCollectionsStart ();
  }, [] );

  return (
    <ShopContainer>
      {
        collectionsLoaded && (
          <>
            <Route exact path={ `${ match.path }` } component={ Categories } />
            <Route path={ `${ match.path }/:collectionId` } component={ CategoryPage } />
          </>
        )
      }
    </ShopContainer>
  );
};

const mapStateToProps = createStructuredSelector ( {
  collections: selectCollections,
  collectionsLoaded: selectCollectionsLoaded
} );

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch ( fetchCollectionsStart () )
});


export default connect ( mapStateToProps, mapDispatchToProps ) ( Shop );

Shop.propTypes = {
  match: PropTypes.object,
  fetchCollectionsStart: PropTypes.func,
  collectionsLoaded: PropTypes.bool
};
