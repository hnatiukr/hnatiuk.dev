import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { Loader } from './Loader';

export function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  if (load) {
    return <Loader />;
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={MainPage} path='/' exact />
          <Redirect to={'/'} />
        </Switch>
      </BrowserRouter>
    );
  }
}
