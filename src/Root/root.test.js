import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Root from './Root';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

describe('BurgerMenuComponent', ()=> {
  it('Burger Menu Snapshot', ()=> {
    expect ( shallow (
      <Provider store={store}>
        <Root  />
      </Provider>
    ) ).toMatchSnapshot();
  });
});


