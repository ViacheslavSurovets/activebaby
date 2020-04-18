import headerReducer from '../header.reducer';

const initialState = {
  categories: { data: 'data' }
};


describe ( 'Header Reducer', () => {
  it ( 'should return initial state', () => {
    expect ( headerReducer ( initialState, {} ) ).toEqual ( initialState );
  } );
} );
