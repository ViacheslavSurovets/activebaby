import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import CheckoutItem from './CheckoutItem';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('CheckoutItem', ()=> {
  it('CheckoutItem Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <CheckoutItem  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
