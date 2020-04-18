import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Checkout from './Checkout';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('Checkout', ()=> {
  it('Checkout Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <Checkout  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
