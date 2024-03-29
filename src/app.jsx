import 'normalize.css/normalize.css';
import React from 'react';
import 'react-dates/lib/css/_datepicker.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { login, logout } from './actions/auth';
import { startSetExpenses } from './actions/expenses';
import LoadingPage from './components/LoadingPage';
import { firebase } from './firebase/firebase';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/style.scss';

const store = configureStore();

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    const jsx = (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
