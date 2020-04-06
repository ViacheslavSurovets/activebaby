import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from '@src/redux/user/user.reducer';
import cartReducer from '@redux/cart/cart.reducer';
import shopReducer from '@redux/shop/shop.reducer';
import previewItemReducer from '@redux/previewItem/previewItem.reducer';
import categoriesReducer from '@redux/categories/categories.reducer';
import menuReducer from '@redux/menu/menu.reducer';
import headerReducer from '@redux/header/header.reducer';
import articlesReducer from '@redux/articles/articles.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [ 'cart' ]
};

const rootReducer = combineReducers ( {
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  previewItem: previewItemReducer,
  categories: categoriesReducer,
  menu: menuReducer,
  header: headerReducer,
  articles: articlesReducer
} );

export default persistReducer ( persistConfig, rootReducer );


// import { combineReducers } from 'redux';

// import userReducer from '@redux/user/user.reducer';
// import cartReducer from '@redux/cart/cart.reducer';
// import shopReducer from '@redux/shop/shop.reducer';
// import previewItemReducer from '@redux/previewItem/previewItem.reducer';

// export default combineReducers ( {
//   user: userReducer,
//   cart: cartReducer,
//   shop: shopReducer,
//   previewItem: previewItemReducer
// } );














