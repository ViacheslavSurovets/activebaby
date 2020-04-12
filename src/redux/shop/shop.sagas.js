import { takeLatest, call, put, all } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import { convertCollectionSnapshotToMap, firestore } from '@core/firebase';
import { fetchCollectionsSuccess, fetchCollectionFailure } from './shop.actions';

function* fetchCollectionsAsync () {

  try {
    const collectionRef = yield firestore.collection ( 'collections' );
    const snapShot = yield  collectionRef.get ();
    // yield console.log(snapShot);
    const collectionsMap = yield call ( convertCollectionSnapshotToMap, snapShot );
    // yield console.log(collectionsMap);
    yield put ( fetchCollectionsSuccess ( collectionsMap ) );
  } catch ( error ) {
    yield put ( fetchCollectionFailure ( error.message ) );
  }

}

export function* fetchCollectionsStart () {
  yield takeLatest (
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas () {
  yield all ( [ call ( fetchCollectionsStart ) ] );
}
