import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Shop from './Shop';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('Shop', ()=> {
  it('Shop Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <Shop  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
