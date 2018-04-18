import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import NavigationBar from './components/navigationBar';

const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(route =>
        <Route key={route.path} path={route.path} component={route.component}/>
      )}
    </Switch>
  );

  return (
    <Router>
      <div id='ui-content'>
        <NavigationBar routes={routes}/>
        {renderSwitch()}
      </div>
    </Router>
  );
};

export default App;
