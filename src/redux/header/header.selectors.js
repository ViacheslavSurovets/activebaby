import { createSelector } from 'reselect';

const selectHeader = state => state.header;

export const selectHeaderArticlesData = createSelector (
  [ selectHeader ],
  header => header.headerArticlesData
);

export const selectHeaderCategoriesData = createSelector (
  [ selectHeader ],
  header => header.headerCategoriesData
);

