import categoriesReducer from '../categories.reducer';

const initialState = {
  categories: { data: 'data' }
};


describe ( 'Categories Reducer', () => {
  it ( 'should return initial state', () => {
    expect ( categoriesReducer ( initialState, {} ) ).toEqual ( initialState );
  } );
} );
