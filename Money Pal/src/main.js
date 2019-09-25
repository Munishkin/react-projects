import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './components/App';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function Main() {
  return (
    <Provider store = {store}>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App />
      </MuiThemeProvider>
    </Provider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'));
