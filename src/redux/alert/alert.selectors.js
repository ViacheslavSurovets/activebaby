import { createSelector } from 'reselect';

const selectAlert = state => state.alert;

export const selectShowAlert = createSelector (
  [ selectAlert ],
  alert => alert.showAlert
);
