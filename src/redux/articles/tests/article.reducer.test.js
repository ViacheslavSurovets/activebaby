import articlesReducer from '../articles.reducer';
import { ARTICLES_DATA } from '../articles.data';

describe ( 'Article Reducer', () => {
  it ( 'should return state', () => {
    expect ( articlesReducer ( undefined, {} ) ).toEqual ( { articlesData: ARTICLES_DATA } );
  } );
} );
