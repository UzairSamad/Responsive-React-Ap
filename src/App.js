import React, { Component } from 'react';
import './App.css';
import MainComponent from '../src/components/MainComponent'
import { BrowserRouter } from 'react-router-dom';




class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainComponent />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
