import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/Dashboard/DashBoard';
import ProjectDetails from './Components/projects/ProjectDetails';
import SignIn from './Components/Auth/SignIn' ;
import SignUp from './Components/Auth/SignUp' ;
import CreateProject from './Components/projects/CreateProject';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path = '/SignIn' component = {SignIn} />
            <Route path = '/SignUp' component = {SignUp} />
            <Route path = '/Create' component = {CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
