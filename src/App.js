import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './Containers/Notes/notes' 


class App extends Component {
  render() {
    return (
      <div className="Border">
        <div className="App">
          <div className="sodrag"></div>
          <Notes/>
          <div className="Bottom_Tabs_Switcher">Bottom Tabs Switch</div> 
        </div>
      </div>
    );
  }
}

export default App;
