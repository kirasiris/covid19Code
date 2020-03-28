import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/*
 *
 * ROUTES
 *
 */
import PublicRoutes from './components/routing/PublicRoutes';
// Redux
import store from './store';
/*
 *
 * STATIC FILES
 *
 */
import './assets/css/bootstrap.min.css';
import './App.css';
const Public = ({ match }) => <Route component={PublicRoutes} />;

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route path='/' component={Public} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
