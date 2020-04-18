import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import CategoryPage from './CategoryPage';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('CategoryPage', ()=> {
  it('CategoryPage Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <CategoryPage  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
