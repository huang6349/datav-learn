import React from 'react';
import {
  Router,
  Route,
  Redirect,
  Switch,
} from 'dva/router';
import dynamic from 'dva/dynamic';

export default ({ history, app }) => {
  const GlobalLayout = dynamic({
    app: app,
    models: () => [
      import('./layouts/models/layouts'),
    ],
    component: () => import('./layouts'),
  });
  const GridPage = dynamic({
    app: app,
    models: () => [
      import('./routes/grid/models/grid'),
    ],
    component: () => import('./routes/grid'),
  });
  return (
    <Router history={history}>
      <Switch>
        <GlobalLayout>
          <Switch>
            <Route path="/grid" exact component={GridPage}></Route>
            <Redirect to="/grid" />
          </Switch>
        </GlobalLayout>
      </Switch>
    </Router>
  );
};
