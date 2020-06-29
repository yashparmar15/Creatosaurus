import React, { Component } from 'react';
import './App.css';

import HomePage from './containers/HomePage/HomePage';

import ProfilePage from './containers/ProfilePage/ProfilePage';

import SignIn from './containers/SignIn/SignIn';

import SignUp from './containers/SignUp/SignUp';

import OTP from './components/OTP/OTP';

import Dummy from './components/PageOne/dummy/dummy';

class App extends Component {
  render(){
    return (
      <div>
          {/* <HomePage /> */}
          {/* <ProfilePage /> */}
          {/* <SignIn /> */}
          {/* <SignUp /> */}
          <OTP />
          <Dummy />
      </div>
    );
  }
  
}

export default App;
