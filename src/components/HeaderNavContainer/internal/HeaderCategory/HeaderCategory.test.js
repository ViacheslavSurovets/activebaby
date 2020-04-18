import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import HeaderCategory from './HeaderCategory';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('HeaderCategory', ()=> {
  it('HeaderCategory Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <HeaderCategory  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
