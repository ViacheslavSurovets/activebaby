import {  put, delay } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { removeAlert, setAlert } from '@redux/alert/alert.actions';

export function* setAlertSaga ( msg, type ) {
  const id = uuidv4 ();
  yield put(setAlert (  msg, type, id  ));
  yield delay ( 3000 );
  yield put ( removeAlert () );
}
