import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import LoginHeaderLink from './LoginHeaderLink';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('LoginHeaderLink', ()=> {
  it('LoginHeaderLink Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <LoginHeaderLink  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
