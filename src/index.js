/*
* Title: React App to add a new doctor onto the blockchain
* Version: 00_01
* Author: Nzwisisa Chidembo <nzwisisa@gmail.com>
*/

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyMain from './MyMain';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <MuiThemeProvider>
    <MyMain />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
