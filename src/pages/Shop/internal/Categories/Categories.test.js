import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Categories from './Categories';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('Categories', ()=> {
  it('Categories Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <Categories  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
