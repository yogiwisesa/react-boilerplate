import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes/index';
import {renderRoutes} from 'react-router-config';
import configureStore from './redux/store';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

const App = () => (
  <div>
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
