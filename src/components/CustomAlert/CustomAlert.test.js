import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import CustomAlert from './CustomAlert';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('CustomAlert', ()=> {
  it('CustomAlert Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <CustomAlert  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
