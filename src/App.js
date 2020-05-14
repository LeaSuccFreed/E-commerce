import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';
import HomePage from './Pages/homepage/homepage_component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
