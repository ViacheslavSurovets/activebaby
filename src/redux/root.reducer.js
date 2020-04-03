import { combineReducers } from 'redux';

import userReducer from '@redux/user/user.reducer';
import cartReducer from '@redux/cart/cart.reducer';
import shopReducer from '@redux/shop/shop.reducer';
import previewItemReducer from '@redux/previewItem/previewItem.reducer';

export default combineReducers ( {
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  previewItem: previewItemReducer
} );






















// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
//
// import userReducer from '@src/redux/user/user.reducer';
//
// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: [ 'user' ]
// };
//
// const rootReducer = combineReducers ( {
//   user: userReducer
// } );
//
// export default persistReducer ( persistConfig, rootReducer );
