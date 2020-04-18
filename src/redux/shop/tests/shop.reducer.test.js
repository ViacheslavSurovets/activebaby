import shopReducer from '@redux/shop/shop.reducer';
import ShopActionTypes from '../shop.types';

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

describe ( 'Shop Reducer', () => {
  it ( 'should return initial state', () => {
    expect ( shopReducer ( initialState, {} ) ).toEqual ( initialState );
  } );

  it ( 'should return isFetching to true when FETCH_COLLECTIONS_START fired', function () {
    expect ( shopReducer ( initialState, { type: ShopActionTypes.FETCH_COLLECTIONS_START } )
      .isFetching ).toBe ( true );
  } );

  it ( 'should return isFetching to false and add collections to initialState.collections', () => {
    const mockCollections = {
      data: 'data'
    };

    expect ( shopReducer ( initialState, {
      type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
      payload: mockCollections
    } ) ).toEqual ( {
      ...initialState,
      isFetching: false,
      collections: mockCollections
    } );
  } );

  it ( 'should return error massage and isFetching to false when FETCH_COLLECTIONS_FAILURE action fired', () => {
    const mockError = 'error';
    const mockPrevState = {
      collections: null,
      isFetching: true,
      errorMessage: undefined
    };

    expect ( shopReducer ( mockPrevState, {
      type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
      payload: mockError
    } ) ).toEqual({
      ...mockPrevState,
      isFetching: false,
      errorMessage: mockError
    });
  } );

} );


