import { takeLatest, put, call, all } from 'redux-saga/effects';
import { clearCart } from './cart.actions';
import UserActionTypes from '@redux/user/user.types';


function* clearCartOnSignOut () {
  yield put ( clearCart () );
}

function* onSignOutSuccess () {
  yield takeLatest ( UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut );
}

export function* cartSagas () {
  yield all ( [
    call ( onSignOutSuccess )
  ] );
}
