import ShopActionTypes from './shop.types';
import { convertCollectionSnapshotToMap, firestore } from '@core/firebase';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionFailure = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection ( 'collections' );
    dispatch ( fetchCollectionsStart () );


    // --------onSnaphot is similar ti the get().them, because it is a promise
    collectionRef.get().then ( snapshot => {
        const collectionsMap = convertCollectionSnapshotToMap ( snapshot );
        dispatch ( fetchCollectionsSuccess ( collectionsMap ) );
      }
    ).catch(error => dispatch(fetchCollectionFailure(error.message)));
  };
};
