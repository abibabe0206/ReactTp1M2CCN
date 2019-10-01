import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import MainPage from './components/layout/MainPage';

import './App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar></Navbar>
        <div className="container">
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
