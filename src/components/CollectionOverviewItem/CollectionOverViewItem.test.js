import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import CollectionOverviewItem from './CollectionOverviewItem';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('CollectionOverviewItem', ()=> {
  it('CollectionOverviewItem Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <CollectionOverviewItem  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
