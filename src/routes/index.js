import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './App/App'
export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      {/* <Navigation /> */}
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/app" exact={true} component={App} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
