import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { memoizeWith, identity } from 'ramda';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, OnScrollHeader, Footer, SuspenseComponent } from '@components';
import { Layout, MainContentWrapper } from './styles';
import PropTypes from 'prop-types';

import { auth, createUserProfileDocument, addCollectionsAndDocuments } from '@core/firebase';
import { setCurrentUser } from '@redux/user/user.actions';
import { selectCollectionsForPreview } from '@redux/shop/shop.selecors';
import { createStructuredSelector } from 'reselect';

const lazy = memoizeWith ( identity, ( path ) =>
  React.lazy ( () =>
    import(`@pages/${ path }`) ) );


const Root = ( { setCurrentUser, collectionArray } ) => {
  const [ menuTopVisibility, setMenuTopVisibility ] = useState ( false );


  useEffect ( () => {
    auth.onAuthStateChanged ( async userAuth => {
      if ( userAuth ) {
        const userRef = await createUserProfileDocument ( userAuth );

        userRef.onSnapshot ( snapshot => {
          setCurrentUser ( {
            currentUser: {
              id: snapshot.id,
              ...snapshot.data ()
            }
          } );
        } );

      }

      await setCurrentUser ( userAuth );
      // await addCollectionsAndDocuments (
      //   'collections',
      //   collectionArray.map ( ( { title, items } ) => ({
      //     title,
      //     items
      //   }) ) );
    } );
  } );

  const layout = useRef ( '' );
  const handleScroll = async () => {
    if ( layout.current.scrollTop >= 100 ) {
      await setMenuTopVisibility ( true );

    } else {
      await setMenuTopVisibility ( false );
    }
  };


  return (
    <Layout id='js-layout' ref={ layout } onScroll={ handleScroll }>
      <Header />

      <React.Suspense fallback={ <SuspenseComponent size={ 10 } /> }>
        <MainContentWrapper>

          <OnScrollHeader visible={ !!menuTopVisibility } />

          <Switch>
            <Route exact path='/'>
              <Redirect to='home' />
            </Route>
            <Route path='/home' component={ lazy ( 'Home' ) } />
            <Route path='/map' component={ lazy ( 'Map' ) } />
            <Route path='/auth' component={ lazy ( 'Auth' ) } />
            <Route path='/shop' component={ lazy ( 'Shop' ) } />
            <Route exact path='/checkout' component={ lazy ( 'Checkout' ) } />
            <Route path='/info' component={ lazy ( 'Info' ) } />
            <Route path='/articles' component={ lazy ( 'Articles' ) } />
          </Switch>
        </MainContentWrapper>
        <Footer />
      </React.Suspense>
    </Layout>
  );
};


const mapStateToProps = createStructuredSelector ( {
  collectionArray: selectCollectionsForPreview
} );

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch ( setCurrentUser ( user ) )
});

export default connect ( mapStateToProps, mapDispatchToProps ) ( Root );

Root.propTypes = {
  setCurrentUser: PropTypes.func.isRequired
};
