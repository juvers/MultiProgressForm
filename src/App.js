import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={step1} />
        <Route path='/step2' component={step2} />
        <Route exact path='/step3' component={step3} />
        <Route exact path='/result' component={result} />
      </Switch>
    </Router>
  );
};

export default App;
