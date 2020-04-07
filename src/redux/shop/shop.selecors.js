import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector (
  [ selectShop ],
  shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
  createSelector (
    [ selectCollections ],
    collections => collections[ collectionUrlParam ]
  );


export const selectCollectionsForPreview = createSelector (
  [ selectCollections ],
  collections =>
    collections ? Object.keys ( collections ).map ( key => collections[ key ] ) : []
);

export const selectCollectionsLoaded = createSelector (
  [ selectShop ],
  shop => !!shop.collections
);
// const selectCollectionItem = collectionUrlParam => {
//   createSelector(
//     [selectCollections],
//     collections => collections.items.find(
//     item => item.id === collectionUrlParam
//     )
//   )
// };

