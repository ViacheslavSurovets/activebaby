import ShopActionTypes from '@redux/shop/shop.types';
import { fetchCollectionFailure, fetchCollectionsStart, fetchCollectionsSuccess } from '../shop.actions';

describe ( 'Shop Actions', () => {
  it ( 'should create the fetchCollectionsStart action', () => {
    expect ( fetchCollectionsStart ().type ).toEqual (
      ShopActionTypes.FETCH_COLLECTIONS_START
    );
  } );

  it('should create the fetchCollectionsSuccess action', () => {
    const mockCollectionsMap = {
      hats: {
        id: 1
      }
    };

    const action = fetchCollectionsSuccess(mockCollectionsMap);

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTION_SUCCESS);
    expect(action.payload).toEqual(mockCollectionsMap);
  });

  it('should create the fetchCollectionsFailure action', () => {
    const action = fetchCollectionFailure('errored');

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
    expect(action.payload).toEqual('errored');
  });

} );
