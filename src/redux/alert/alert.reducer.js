import AlertTypes from './alert.types';

const INITIAL_STATE = {
  showAlert: []
};

const alertReducer = ( state = INITIAL_STATE, action ) => {
  switch ( action.type ) {
    case AlertTypes.SET_ALERT:
      return {
        ...state,
        showAlert: state.showAlert.push ( action.payload )
      };

    case AlertTypes.REMOVE_ALERT:
      return {
        ...state,
        showAlert: []
      };
    default:
      return state;
  }
};

export default alertReducer;
