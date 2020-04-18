import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ShopCart from './ShopCart';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('ShopCart', ()=> {
  it('ShopCart Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <ShopCart  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
