import { ARTICLES_DATA } from './articles.data';

const INITIAL_DATA = {
  articlesData: ARTICLES_DATA
};

const articlesReducer = ( state = INITIAL_DATA, action ) => {
  switch ( action.type ) {
    default:
      return state;
  }
};

export default articlesReducer;
