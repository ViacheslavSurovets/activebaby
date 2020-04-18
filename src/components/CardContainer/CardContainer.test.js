import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import CardContainer from './CardContainer';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('CardContainer', ()=> {
  it('CardContainer Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <CardContainer  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});
