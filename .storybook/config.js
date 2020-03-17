import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/core/theme';

const req = require.context ( '../src', true, /\.stories\.js$/ );

function loadStories () {
  req.keys ().map ( req );
}

addDecorator ( ( story ) => (
  <ThemeProvider theme={ theme }>
    { story () }
  </ThemeProvider>
) );

configure ( loadStories, module );