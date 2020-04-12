import React, { useRef, useState, Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { memoizeWith, identity } from 'ramda';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, OnScrollHeader, Footer, SuspenseComponent } from '@components';
import { Layout, MainContentWrapper } from './styles';
// import { auth, createUserProfileDocument } from '@core/firebase';
import { selectCollectionsForPreview } from '@redux/shop/shop.selecors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from '@redux/user/user.actions';
import PropTypes from 'prop-types';

const lazy = memoizeWith ( identity, ( path ) =>
  React.lazy ( () =>
    import(`@pages/${ path }`) ) );

// const Root = ( { setCurrentUser } ) => {

const Root = ( { checkUserSession } ) => {
  const [ menuTopVisibility, setMenuTopVisibility ] = useState ( false );
  // console.log(collectionArray);

  useEffect(
    () => {
      // ----------------------- checks, is user authenticated on firebase
      checkUserSession();
    },[]
  );


  // useEffect ( () => {
  //
  //   auth.onAuthStateChanged ( async userAuth => {
  //
  //     //------------------------ user authentication
  //
  //     if ( userAuth ) {
  //       const userRef = await createUserProfileDocument ( userAuth );
  //
  //       userRef.onSnapshot ( snapshot => {
  //         setCurrentUser ( {
  //           currentUser: {
  //             id: snapshot.id,
  //             ...snapshot.data ()
  //           }
  //         } );
  //       } );
  //     }
  //
  //     await setCurrentUser ( userAuth );
  //
  //
  //     // --------------- This function is used to upload static shop data to firebase database  path __dirname/src/data/  need to put collectionArray
  //     // await addCollectionsAndDocuments (
  //     //   'collections',
  //     //   collectionArray );
  //   } );
  // }, [] );

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

      <Suspense fallback={ <SuspenseComponent size={ 10 } /> }>
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
      </Suspense>
    </Layout>
  );
};


const mapStateToProps = createStructuredSelector ( {
  collectionArray: selectCollectionsForPreview
} );

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch ( checkUserSession () )
});

export default connect ( mapStateToProps, mapDispatchToProps ) ( Root );

Root.propTypes = {
  collectionArray: PropTypes.array,
  checkUserSession: PropTypes.func
};
