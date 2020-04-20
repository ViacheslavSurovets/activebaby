import { takeLatest, put, call, all } from 'redux-saga/effects';
import { clearCart } from './cart.actions';
import UserActionTypes from '@redux/user/user.types';
import CartActionTypes from '@redux/cart/cart.types';
import { setAlertSaga } from '../alert/alert.sagas';


export function* clearCartOnSignOut () {
  yield put ( clearCart () );
}

export function* onSignOutSuccess () {
  yield takeLatest ( UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut );
}

function* addItemAlert () {
  yield setAlertSaga ( 'alert.alertMessages.stuffAdded', 'success' );
}


function* onAddItem () {
  yield takeLatest ( CartActionTypes.ADD_ITEM, addItemAlert );
}

export function* cartSagas () {
  yield all ( [
    call ( onSignOutSuccess ),
    call ( onAddItem )
  ] );
}

