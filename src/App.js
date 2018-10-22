import React from 'react';
import { Provider } from 'react-redux';
import store from './store/Store';
import Main from './components/Main'
import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Main />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
