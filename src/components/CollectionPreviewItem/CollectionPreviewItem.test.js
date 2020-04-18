import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import CollectionPreviewItem from './CollectionPreviewItem';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('CollectionPreviewItem', ()=> {
  it('CollectionPreviewItem Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <CollectionPreviewItem  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
