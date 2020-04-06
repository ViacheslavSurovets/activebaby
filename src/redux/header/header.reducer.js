import { HEADER_ARTICLE_DATA, HEADER_CATEGORY_DATA } from './header.data';

const INITIAL_STATE = {
  headerArticlesData: HEADER_ARTICLE_DATA,
  headerCategoriesData: HEADER_CATEGORY_DATA
};

const headerReducer = ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    default :
      return state;
  }
};

export default headerReducer;



