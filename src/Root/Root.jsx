import React, { useRef, useState } from 'react';
import { memoizeWith, identity } from 'ramda';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header, OnScrollHeader, Footer, SuspenseComponent } from '@components';
import { Layout, MainContentWrapper } from './styles';

const lazy = memoizeWith ( identity, ( path ) =>
  React.lazy ( () =>
    import(`@pages/${ path }`) ) );


const Root = () => {

  const [ menuTopVisibility, setMenuTopVisibility ] = useState ( false );

  const layout = useRef ( '' );
  const handleScroll = async () => {
    if ( layout.current.scrollTop >= 300 ) {
      await setMenuTopVisibility ( true );

    } else {
      await setMenuTopVisibility ( false );
    }
  };

  return (
    <Layout id='js-layout' ref={ layout } onScroll={ handleScroll }>
      <Header />

      <React.Suspense fallback={<SuspenseComponent size={10} />}>
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
        <Footer />
      </React.Suspense>
    </Layout>
  );
};

export default Root;
