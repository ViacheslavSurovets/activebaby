import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import HeaderArticles from './HeaderArticles';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('HeaderArticles', ()=> {
  it('HeaderArticles Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <HeaderArticles  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
