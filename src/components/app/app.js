import React from 'react';
import { Route, Router } from 'react-router-dom';
import { HomePage, CardPage } from '../pages';

import './app.css';

const App = () => {
  return (
    <Router>
      <Route
        path='/'
        component={HomePage}
        exact
      />
      <Route
        path='/cart'
        component={CardPage}
        exact
      />
    </Router>
  )
}

export default App;