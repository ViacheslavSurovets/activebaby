import React, { Suspense, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { memoizeWith, identity } from 'ramda';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '@components';

const Layout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainContentWrapper = styled.main`
  height: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const lazy = memoizeWith ( identity, ( path ) =>
  React.lazy ( () =>
    import(`@pages/${ path }`) ) );


const Root = () => {
  const { t, i18n } = useTranslation ();

  const headerCategory = useMemo ( () => ([
    {
      id: 'Прогулки',
      listItems: [
        {
          text: t ( 'header.headerCategory.columnOne.strollers' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnOne.quatro' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnOne.lorelli' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnOne.carello' ),
          path: '#'
        },
      ]
    },
    {
      id: 'Модульные',
      listItems: [
        {
          text: t ( 'header.headerCategory.columnTwo.modules' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnTwo.adamex' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnTwo.used' ),
          path: '#'
        }
      ]
    },
    {
      id: 'Автолюльки',
      listItems: [
        {
          text: t ( 'header.headerCategory.columnThree.carSeats' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnThree.carlo' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnThree.adamex' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnThree.used' ),
          path: '#'
        },
      ]
    },
    {
      id: 'Аксесуары',
      listItems: [
        {
          text: t ( 'header.headerCategory.columnFour.accessories' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnFour.adapters' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnFour.tires' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnFour.cameras' ),
          path: '#'
        }
      ],
    },
    {
      id: 'Постельное белье',
      listItems: [
        {
          text: t ( 'header.headerCategory.columnFive.linens' ),
          path: '#'
        },
        {
          text: t ( 'header.headerCategory.columnFive.individualTailoring' ),
          path: '#'
        }
      ]
    }
  ]), [ i18n.language ] );
  const headerArticles = useMemo ( () => ([
    {
      text: t ( 'header.headerArticle.articleOne.title' ),
      path: '#'
    },
    {
      text: t ( 'header.headerArticle.articleTwo.title' ),
      path: '#'
    },
    {
      text: t ( 'header.headerArticle.articleThree.title' ),
      path: '#'
    }

  ]), [ i18n.language ] );

  return (
    <Layout>
      <Header headerCategory={ headerCategory } headerArticles={ headerArticles } />
      <Suspense fallback='loading'>
      </Suspense>
      <React.Suspense fallback="Root content suspense">
        <MainContentWrapper>
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
