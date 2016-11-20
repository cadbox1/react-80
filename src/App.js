import React from 'react';
import { HashRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from  "./views/main/index.js";
import './App.css';

injectTapEventPlugin();

const App = () => (
  <HashRouter>
    <MuiThemeProvider>
      <Main />
    </MuiThemeProvider>
  </HashRouter>
);

export default App;
