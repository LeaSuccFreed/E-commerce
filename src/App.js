import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.scss';

import HomePage from './Pages/homepage/homepage_component';
import ShopPage from './Pages/shop/shop_component';
import Header from './Components/header/header_component';
import SignInAndSignUp from './Pages/sign-in_&_sign-up/sign-in_&_sign-up_component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils'



class App extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
       this.setState({currentUser: userAuth})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
