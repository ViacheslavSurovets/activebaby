import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import HeaderSearchDropdown from './HeaderSearchDropdown';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('HeaderSearchDropdown', ()=> {
  it('HeaderSearchDropdown Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <HeaderSearchDropdown  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
