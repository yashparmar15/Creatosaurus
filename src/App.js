import React, { Component } from 'react';
import './App.css';

import HomePage from './containers/HomePage/HomePage';

import ProfilePage from './containers/ProfilePage/ProfilePage';

class App extends Component {
  render(){
    return (
      <div>
          {/* <HomePage /> */}
        <ProfilePage />
      </div>
    );
  }
  
}

export default App;
