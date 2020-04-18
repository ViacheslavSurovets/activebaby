import homeDataReducer from '@redux/homeData/homeData.reducer';

const initialState = {
  categories: { data: 'data' }
};

describe ( 'Home Data Reducer', () => {
  it ( 'should return initial state', () => {
    expect ( homeDataReducer ( initialState, {} ) ).toEqual ( initialState );
  } );
} );
