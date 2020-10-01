import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers/rootReducer';
import authReducer from './reducers/authReducer';
import { Router, useLocation } from "react-router";
import { createBrowserHistory } from "history";
import Loader from './context/appLoaderContext';

import './i18n';
const history = createBrowserHistory();
const reducers = combineReducers({
  root: rootReducer,
  auth: authReducer
});



// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('ecommerce');

//     if (serializedState === null) {
//       return undefined;
//     }

//     return JSON.parse(serializedState);

//   } catch (err) {
//     return undefined;
//   }
// };

// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('ecommerce', serializedState);
//   } catch (err) {

//   }
// };

// const persistedState = loadState();

// const store = createStore(reducers, persistedState)
const store = createStore(reducers)
// store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Loader>
          <Suspense fallback={(<div>Loading</div>)}>
            <App />
          </Suspense>
        </Loader>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
