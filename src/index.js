import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ParamChild from './components/paramChild'

const Routing = () => {
  const isProduction = true;
  const url = isProduction ? '/tweets/' : '/';
  const routeChild = url + ':id';

  return (
    <Router>
      <Switch>
        <Route exact path={url} component={App} />
        <Route path={routeChild} component={ParamChild} />
      </Switch>
    </Router>

  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

