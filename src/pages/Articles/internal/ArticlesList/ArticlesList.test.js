import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ArticlesList from './ArticlesList';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('ArticlesList', ()=> {
  it('ArticlesList Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <ArticlesList  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
