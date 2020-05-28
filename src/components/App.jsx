import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={MainPage} path='/' exact />
        <Redirect to={'/'} />
      </Switch>
    </BrowserRouter>
  );
}
