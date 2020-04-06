import { createSelector } from 'reselect';

const selectMenu = state => state.menu;

export const selectMenuData = createSelector(
  [selectMenu],
    menu => menu.menuData
);
