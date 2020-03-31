import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartToggleHidden = createSelector (
  [ selectCart ],
    cart => cart.hidden
);
