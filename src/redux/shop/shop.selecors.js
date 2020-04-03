import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector (
  [ selectShop ],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections =>
      collections.find(
        collection => collection.id === collectionUrlParam
      )
  );


// const selectCollectionItem = collectionUrlParam => {
//   createSelector(
//     [selectCollections],
//     collections => collections.items.find(
//     item => item.id === collectionUrlParam
//     )
//   )
// };

