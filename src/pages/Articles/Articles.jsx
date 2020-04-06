import React from 'react';
import { Route } from 'react-router-dom';
import { ArticlesList, Article } from './internal';
import { ArticlesContent } from './styles';
import PropTypes from 'prop-types';

const Articles = ( { match } ) => (
  <ArticlesContent>
    <Route exact path={ `${ match.path }` } component={ ArticlesList } />
    <Route exact path={ `${ match.path }/:articleId` } component={ Article } />
  </ArticlesContent>
);

export default Articles;

Articles.propTypes = {
  match: PropTypes.object
};

