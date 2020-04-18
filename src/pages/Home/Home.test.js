import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Home from './Home';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('Home', ()=> {
  it('Home Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <Home  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
