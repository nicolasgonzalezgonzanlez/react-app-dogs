import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Home from './containers/home/Home';
import Id from './containers/id/Id';
//controlador de route del proyecto
const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/post/:key" render={(props) => 
        <Id
          name={props.match.params}
        />}
      />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  )
};

export default Router;
