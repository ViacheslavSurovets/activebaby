import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setAlertSaga } from '@redux/alert/alert.sagas';
import UserActionTypes from '@redux/user/user.types';
import { auth, googleProvider, createUserProfileDocument, createSubscription } from '@core/firebase';
import { getCurrentUser } from '@core/firebase';

import {
  singInSuccess,
  singInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure
} from '@redux/user/user.actions';


export function* getSnapshotFromUserAuth ( userAuth ) {
  try {
    const userRef = yield call ( createUserProfileDocument, userAuth );
    const userSnapshot = yield userRef.get ();
    yield put (
      singInSuccess ( { id: userSnapshot.id, ...userSnapshot.data () } )
    );
  } catch ( error ) {
    put ( singInFailure ( error.message ) );
  }
}

export function* signInWithGoogle () {
  try {
    // console.log('ok');
    const { user } = yield auth.signInWithPopup ( googleProvider );
    // console.log ( user );
    yield getSnapshotFromUserAuth ( user );
    yield setAlertSaga ( 'alert.alertMessages.userSignInSuccess', 'success' );
  } catch ( error ) {
    yield put ( singInFailure ( error.message ) );
    yield setAlertSaga ( 'alert.alertMessages.userSignOutFailure', 'failure' );
  }
}

export function* onGoogleSignInStart () {
  yield takeLatest ( UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle );
}


function* signInWithEmail ( { payload: { email, password } } ) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword ( email, password );
    yield getSnapshotFromUserAuth ( user );
    yield setAlertSaga ( 'alert.alertMessages.userSignInSuccess', 'success' );
  } catch ( error ) {
    if ( error.code === 'auth/user-not-found' ) {
      yield setAlertSaga ( 'alert.alertMessages.auth/user-not-found', 'failure' );
    } else {
      yield setAlertSaga ( 'alert.alertMessages.userSignInFailure', 'failure' );
    }
    yield put ( singInFailure ( error.message ) );
  }
}

function* onEmailSignInStart () {
  yield takeLatest ( UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail );
}


function* isUserAuthenticated () {
  try {
    const userAuth = yield getCurrentUser ();
    if ( !userAuth ) return;
    yield  getSnapshotFromUserAuth ( userAuth );
    yield setAlertSaga ( 'alert.alertMessages.userSignInSuccess', 'success' );
  } catch ( error ) {
    yield put ( singInFailure ( error.message ) );
  }
}

function* checkUserSession () {
  yield takeLatest ( UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated );
}


function* signOut () {
  try {
    yield auth.signOut ();
    yield put ( signOutSuccess () );
    yield setAlertSaga ( 'alert.alertMessages.userSignOutSuccess', 'success' );
  } catch ( error ) {
    yield signOutFailure ( error.message );
    yield setAlertSaga ( 'alert.alertMessages.userSignOutFailure', 'failure' );
  }
}

function* onSignOutStart () {
  yield takeLatest ( UserActionTypes.SIGN_OUT_START, signOut );
}


function* signUp ( { payload: { email, password, firstName, lastName } } ) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword ( email, password );
    yield createUserProfileDocument ( user, { firstName, lastName } );
    yield getSnapshotFromUserAuth ( user );
    yield setAlertSaga ( 'alert.alertMessages.userSingUpSuccess', 'success' );
  } catch ( error ) {
    if ( error.code === 'auth/email-already-in-use' ) {
      yield setAlertSaga ( 'alert.alertMessages.auth/email-already-in-use', 'failure' );
    }
    if ( error.code === 'auth/invalid-email' ) {
      yield setAlertSaga ( 'alert.alertMessages.auth/invalid-email', 'failure' );
    } else {
      yield setAlertSaga ( 'alert.alertMessages.userSignUpFailure', 'failure' );
    }
    yield put ( signUpFailure ( error.message ) );
  }
}


function* onSignUpStart () {
  yield takeLatest ( UserActionTypes.SIGN_UP_START, signUp );
}


function* subscribeUserSaga ( { payload } ) {
  try {
    const result = yield call ( createSubscription, payload );

    if ( result.type === 'failure' ) {
      return yield setAlertSaga ( result.msg, result.type );
    }

    yield setAlertSaga ( 'alert.alertMessages.userSubscribeSuccess', 'success' );
  } catch ( error ) {
    yield setAlertSaga ( 'alert.alertMessages.userSubscribeFailure', 'failure' );
  }
}

function* onUserSubscribe () {
  yield takeLatest ( UserActionTypes.SUBSCRIBE_USER_START, subscribeUserSaga );
}


export function* userSagas () {
  yield all ( [
    call ( onGoogleSignInStart ),
    call ( onEmailSignInStart ),
    call ( checkUserSession ),
    call ( onSignOutStart ),
    call ( onSignUpStart ),
    call ( onUserSubscribe )
  ] );
}



