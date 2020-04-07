import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';
import GlobalStyles from './styles/globalStyles';
import { PersistGate } from 'redux-persist/integration/react';


import i18n from './core/i18n';
import theme from './core/theme';

import Root from '@src/Root/Root';

import { store, persistor } from '@redux/store';

render (
  <ReduxProvider store={ store }>
    <Router>
      <ThemeProvider theme={ theme }>
        <I18nextProvider i18n={ i18n }>
          <PersistGate loading={ true } persistor={ persistor }>
            <GlobalStyles />
            <Root />
          </PersistGate>
        </I18nextProvider>
      </ThemeProvider>
    </Router>
  </ReduxProvider>

  ,
  document.getElementById ( 'root' )
);


// import React from 'react';
// import { render } from 'react-dom';
// import { Provider as ReduxProvider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
// import { I18nextProvider } from 'react-i18next';
// import GlobalStyles from './styles/globalStyles';
// import { PersistGate } from 'redux-persist/integration/react';
//
// import i18n from './core/i18n';
// import theme from './core/theme';
//
// import Root from '@src/Root/Root';
//
// import { store, persistor } from '@redux/store';
//
// render (
//   <ReduxProvider store={ store }>
//     <Router>
//       <ThemeProvider theme={ theme }>
//         <I18nextProvider i18n={ i18n }>
//           <GlobalStyles />
//           <PersistGate loading={ true } persistor={ persistor }>
//             <Root />
//           </PersistGate>
//         </I18nextProvider>
//       </ThemeProvider>
//     </Router>
//   </ReduxProvider>
//
//   ,
//   document.getElementById ( 'root' )
// );


