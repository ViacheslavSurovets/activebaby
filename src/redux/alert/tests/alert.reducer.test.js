import alertReducer from '../alert.reducer';
import AlertTypes from '../alert.types';

describe ( 'Alert Reducer', () => {

  const id = 1;
  const msg = 'error message';
  const type = 'success';


  it ( 'should return the initial state', () => {
    expect ( alertReducer ( undefined, {} ) ).toEqual ( { showAlert: [] } );
  } );

  it ( 'should handle SET_ALERT', () => {
    expect ( alertReducer ( undefined, {
      type: AlertTypes.SET_ALERT,
      payload: { msg, type, id }
    } ) ).toEqual (
      { showAlert: [ { msg, type, id } ] } );
  } );
  it ( 'should handle REMOVE_ALERT', () => {
    expect ( alertReducer ( undefined, { type: AlertTypes.REMOVE_ALERT } ) ).toEqual ( { showAlert: [] } );
  } );

} );
