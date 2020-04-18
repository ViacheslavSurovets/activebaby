import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import RegistrationForm from './RegistrationForm';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('RegistrationForm', ()=> {
  it('RegistrationForm Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <RegistrationForm  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
