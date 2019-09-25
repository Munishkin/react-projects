import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

const Main = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
