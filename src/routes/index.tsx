import { Redirect, Route, Switch } from 'react-router-dom';
import { useAuth } from 'context/auth';

import Main from 'views/Main';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
import Settings from 'views/Settings';


const Routes = () => {
  const { contentToken, logout } = useAuth();
  const isAuthenticated = Object.keys(contentToken).length !== 0;

  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login">
        {isAuthenticated ? () => <Redirect to="/system/dash" /> : <Login />}
      </Route>
      <Route path="/system">
        {!isAuthenticated && <Redirect to="/login" />}
        {isAuthenticated && (
          <>
            <p>Área Autenticada</p>
            {contentToken.name}
            <p onClick={logout}>Deslogar</p>
            <Switch>
              <Route exact path="/system" component={() => <Redirect to="/system/dash" />} />
              <Route exact path="/system/dash" component={Dashboard} />
              <Route exact path="/system/settings" component={Settings}/>
            </Switch>
          </>
        )}
      </Route>
    </Switch>
  );
};

export default Routes;
