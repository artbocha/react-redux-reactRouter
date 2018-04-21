import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import NavigationBar from './components/navigationBar';

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(route =>
        <Route
          key={route.path}
          exact={route.isExact}
          path={route.path}
          component={route.component}
        />
      )}
    </Switch>
  );

  return (
    <Router>
      <React.Fragment>
        <NavigationBar routes={routes.filter(route => route.isNavBar)}/>
        <div id='ui-content'>
          {renderSwitch()}
        </div>
      </React.Fragment>
    </Router>
  );
};

export default App;
