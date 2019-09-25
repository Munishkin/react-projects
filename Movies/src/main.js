import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import App from './App';
import Movie from './Movie';
import About from './About';

class Main extends Component {
  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
        <MuiThemeProvider>
          <Switch>
            <Route exact path='/' component={App} />
            <Route path='/about' component={About} />
            <Route path='/movies/:id' component={Movie} />
            <Redirect from='/movies' to='/' />
            </Switch>
        </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
