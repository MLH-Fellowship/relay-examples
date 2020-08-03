import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { RelayEnvironmentProvider } from 'react-relay/hooks'
import Environment from './RelayEnvironment'

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={Environment}>
      <Suspense fallback={"Loading"}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
