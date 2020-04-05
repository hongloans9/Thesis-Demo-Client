import React, { Component } from 'react';
import Header from './header/header';
import MainContent from './main-content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainContent/>
      </div>
    );
  }
}

export default App;
