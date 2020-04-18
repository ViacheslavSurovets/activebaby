import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import * as Burger from './BurgerMenu';
import configureMockStore  from 'redux-mock-store';


const mockStore = configureMockStore();
const store = mockStore({});

  describe('BurgerMenuComponent', ()=> {
    it('Burger Menu Snapshot', ()=> {
      expect ( shallow (
        <Provider store={store}>
          <Burger  />
        </Provider>
        ) ).toMatchSnapshot();
    });
  });


