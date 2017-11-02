import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import NotFound from './NotFound';

// This prototype is built to allow for dynamic lookups (however I only
// made the one product entry per the instructions)

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path="/product/:id" component={Product} />
    <Route path='*' component={NotFound}/>
  </Switch>
)

export default Routes;