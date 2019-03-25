import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/index';
import configureStore from './redux/store';
import * as serviceWorker from './serviceWorker';
import './index.css';

const store = configureStore();

const App = () => (
  <div>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
