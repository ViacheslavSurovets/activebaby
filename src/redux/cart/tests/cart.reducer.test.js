import cartReducer from '../cart.reducer';
import CartActionTypes from '../cart.types';

const initialState = {
  cartItems: []
};

describe ( 'Cart Reducer', () => {


  it ( 'should return initial state', () => {
    expect ( cartReducer ( undefined, {} ) ).toEqual ( initialState );
  } );

  it ( 'should handle addItem', () => {
    const mockItem = {
      quantity: 1,
      id: 1
    };

    expect ( cartReducer ( initialState, {
      type: CartActionTypes.ADD_ITEM,
      payload: mockItem
    } ) ).toEqual ( { ...initialState, cartItems: [ mockItem ] } );
  } );

  it ( 'should handle clearCart', () => {
    expect ( cartReducer ( initialState, {
      type: CartActionTypes.CLEAR_CART
    } ) ).toEqual ( { ...initialState, cartItems: [] } );
  } );

  it ( 'should handle clearItemFromCart', () => {
    const mockItem = {
      quantity: 2,
      id: 1
    };

    const mockPrevState = {
      cartItems: [ mockItem ]
    };

    expect ( cartReducer ( mockPrevState, {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem
      } ).cartItems.includes ( item => item.id === 1 )
    ).toBe ( false );
  } );

  it ( 'should increase quantity by 1 if addItem action fired with same item as payload', () => {
      const mockItem = {
        quantity: 2,
        id: 1
      };

      const mockPrevState = {
        cartItems: [ mockItem ]
      };

      expect ( cartReducer ( mockPrevState, {
          type: CartActionTypes.ADD_ITEM,
          payload: { id: 1, quantity: 1 }
        } ).cartItems[ 0 ].quantity
      ).toBe ( 3 );
    }
  );

  it ( 'should decrease quantity by 1 removeItem action fired with same item as payload', () => {
    const mockItem = {
      quantity: 2,
      id: 1
    };

    const mockPrevState = {
      cartItems: [ mockItem ]
    };

    expect ( cartReducer ( mockPrevState, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: { id: 1, quantity: 1 }
      } ).cartItems[ 0 ].quantity
    ).toBe ( 1 );
  } );

  it ( 'should remove item from cart if remove item action fired and quantity is equal to 1', () => {
    const mockItem = {
      quantity: 1,
      id: 1
    };

    const mockPrevState = {
      cartItems: [ mockItem ]
    };

    expect ( cartReducer ( mockPrevState, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: { id: 1, quantity: 1 }
      } ).cartItems.length
    ).toBe ( 0 );
  } );

} );
