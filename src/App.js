import React, { Component } from 'react';
import './App.css';

import HomePage from './containers/HomePage/HomePage';

import ProfilePage from './containers/ProfilePage/ProfilePage';

import SignIn from './containers/SignIn/SignIn';

class App extends Component {
  render(){
    return (
      <div>
          {/* <HomePage /> */}
        {/* <ProfilePage /> */}
        <SignIn />
      </div>
    );
  }
  
}

export default App;
