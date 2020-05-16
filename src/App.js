import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';

import HomePage from './Pages/homepage/homepage_component';
import ShopPage from './Pages/shop/shop_component';
import Header from './Components/header/header_component';
import SignInAndSignUp from './Pages/sign-in_&_sign-up/sign-in_&_sign-up_component';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={SignInAndSignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
