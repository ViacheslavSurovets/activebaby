import userReducer from '@redux/user/user.reducer';
import UserActionTypes from '../user.types';

const initialState = {
  currentUser: null,
  error: null
};

describe ( 'User Reducer', () => {
  it ( 'should return initial state', () => {
    expect ( userReducer ( initialState, {} ) ).toEqual ( initialState );
  } );

  it ( 'should set currentUser to payload on signInSuccess action', () => {
    const mockUser = { id: 1, displayName: 'Name' };

    expect (
      userReducer ( initialState, {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: mockUser
      } ).currentUser
    ).toEqual ( mockUser );
  } );

  it ( 'should set currentUser to null on signOutSuccess action', () => {
    expect (
      userReducer ( initialState, {
        type: UserActionTypes.SIGN_OUT_SUCCESS
      } ).currentUser
    ).toBe ( null );
  } );

  it ( 'should set errorMessage to payload on signInFailure, signUpFailure, signOutFailure action', () => {
    const mockError = {
      message: 'errored',
      code: 404
    };

    expect (
      userReducer ( initialState, {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: mockError
      } ).error
    ).toBe ( mockError );

    expect (
      userReducer ( initialState, {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: mockError
      } ).error
    ).toBe ( mockError );

    expect (
      userReducer ( initialState, {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: mockError
      } ).error
    ).toBe ( mockError );
  } );
} );
