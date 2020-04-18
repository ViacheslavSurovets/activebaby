import menuReducer from '@redux/menu/menu.reducer';

const initialState = {
  categories: { data: 'data' }
};


describe ( 'Menu Reducer', () => {
  it ( 'should return initial state', () => {
    expect ( menuReducer ( initialState, {} ) ).toEqual ( initialState );
  } );
} );
