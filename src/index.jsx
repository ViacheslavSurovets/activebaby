import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import './styles/index.css';

import i18n from './core/i18n';
import theme from './core/theme';

import Root from '@src/Root/Root';

render (
  <Router>
    <ThemeProvider theme={ theme }>
      <I18nextProvider i18n={ i18n }>
        <Root />
      </I18nextProvider>
    </ThemeProvider>
  </Router>
  ,
  document.getElementById ( 'root' )
);

