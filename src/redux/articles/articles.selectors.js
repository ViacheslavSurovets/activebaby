import { createSelector } from 'reselect';

const selectArticles = state => state.articles;

export const selectArticlesData = createSelector(
  [selectArticles],
  articles => articles.articlesData
);

export const selectArticle = collectionUrlParam => createSelector(
  [selectArticlesData],
   articles => articles[collectionUrlParam]
);


export const selectArticlesForOverview = createSelector(
  [selectArticlesData],
  articles =>
    articles ? Object.keys(articles).map(key => articles[key]) : []
);
