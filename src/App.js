import React from 'react';
import { Route } from 'react-router-dom';
import Newpage from './pages/Newpage';

const App = () => {
  return <Route path="/:category?" component={Newpage} />;
};

export default App;
