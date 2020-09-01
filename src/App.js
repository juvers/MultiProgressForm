import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Result from './components/Result';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={Step1} />
          <Route path='/step2' component={Step2} />
          <Route exact path='/step3' component={Step3} />
          <Route exact path='/result' component={Result} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
