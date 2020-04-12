import AlertTypes from './alert.types';

export const setAlert = ( msg, type, id ) => ({
  type: AlertTypes.SET_ALERT,
  payload: { msg, type, id }
});

export const removeAlert = () => ({
  type: AlertTypes.REMOVE_ALERT
});
