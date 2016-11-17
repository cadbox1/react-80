import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from  "./views/main/index.js";

injectTapEventPlugin();

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <Main />
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
