import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Alert from './Alert';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('Alert', ()=> {
  it('Alert Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <Alert  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
