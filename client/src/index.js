import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { AppContainer as App } from './App.Container';
import reportWebVitals from './reportWebVitals';
import reducers from './redux/reducers/index';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

// GLOBAL REDUX STORE - window initializes redux dev tools logs
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// USING PROVIDER CONNECTING STORE TO APP
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
