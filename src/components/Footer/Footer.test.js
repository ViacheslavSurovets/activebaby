import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Footer from './Footer';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('Footer', ()=> {
  it('Footer Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <Footer  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
