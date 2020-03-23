import React, { useRef, useState } from 'react';
import { memoizeWith, identity } from 'ramda';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Header, OnScrollHeader } from '@components';



const Layout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
`;

const MainContentWrapper = styled.main`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const lazy = memoizeWith ( identity, ( path ) =>
  React.lazy ( () =>
    import(`@pages/${ path }`) ) );


const Root = () => {

  const [ menuTopVisibility, setMenuTopVisibility ] = useState ( false );

  const layout = useRef ( '' );
  const handleScroll = async () => {
    if ( layout.current.scrollTop >= 250 ) {
      await setMenuTopVisibility ( true );
      return console.log ( menuTopVisibility );
    } else {
      await setMenuTopVisibility ( false );
      return console.log ( menuTopVisibility );
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
    </Layout>
  );
};

export default Root;
