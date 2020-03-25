import React, { useRef, useState } from 'react';
import { memoizeWith, identity } from 'ramda';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header, OnScrollHeader, Footer } from '@components';
import { Layout, MainContentWrapper } from './styles';

const lazy = memoizeWith ( identity, ( path ) =>
  React.lazy ( () =>
    import(`@pages/${ path }`) ) );


const Root = () => {

  const [ menuTopVisibility, setMenuTopVisibility ] = useState ( false );

  const layout = useRef ( '' );
  const handleScroll = async () => {
    if ( layout.current.scrollTop >= 250 ) {
      await setMenuTopVisibility ( true );

    } else {
      await setMenuTopVisibility ( false );
    }
  };

  return (
    <Layout id='js-layout' ref={ layout } onScroll={ handleScroll }>
      <Header />

      <React.Suspense fallback="Root content suspense">
        <MainContentWrapper>

          <OnScrollHeader visible={ !!menuTopVisibility } />

          <Switch>
            <Route exact path="/">
              <Redirect to="/prams" />
            </Route>
            <Route path="/prams" component={ lazy ( 'Prams' ) } />
            <Route path="/map" component={ lazy ( 'Map' ) } />
          </Switch>
        </MainContentWrapper>
      </React.Suspense>
      <Footer />
    </Layout>
  );
};

export default Root;
