import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataGridContainer from './datagrid/datagrid.container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Netflix Originals</h2>
        </div>
        <div className="App-intro">
            <DataGridContainer/>
        </div>
      </div>
    );
  }
}

export default App;
