import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataGridComponent from './datagrid/datagrid.component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Netflix Originals</h2>
        </div>
        <div className="App-intro">
            <DataGridComponent/>
        </div>
      </div>
    );
  }
}

export default App;
