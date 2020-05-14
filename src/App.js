import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';

import HomePage from './Pages/homepage/homepage_component';
import ShopPage from './Pages/shop/shop_component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
