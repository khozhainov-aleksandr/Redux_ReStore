import React from 'react';
import { widthBookstoreService } from '../hoc';

import './app.css';

const App = ({ bookstoreService }) => {
  console.log('✅', bookstoreService.getBooks());

  return (
    <div className="App">App</div>
  )
}

export default widthBookstoreService()(App);