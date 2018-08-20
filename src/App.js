import React, { Component } from 'react';
import MyRoutes from './config/Routes'
import './App.css'


class App extends Component {
  render() {
    return (
    	<div>
        <div className="App">
        </div>
        { MyRoutes }
      </div>
    );
  }
}

export default App;
