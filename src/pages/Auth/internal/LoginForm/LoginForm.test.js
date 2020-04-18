import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import LoginForm from './LoginForm';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('LoginForm', ()=> {
  it('LoginForm Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <LoginForm  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
