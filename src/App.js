import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MainComponent from '../src/components/MainComponent'



class App extends Component {
 
  render(){ 
  return (
    <div className="App">
    <MainComponent />
    </div>
  );
   }
}

export default App;
