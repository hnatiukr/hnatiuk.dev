import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={MainPage} path='/' exact />
      </Switch>
    </BrowserRouter>
  );
}
