import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'
import Navigation from './components/Navbar'
import { DISHES } from './shared/dishes';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render(){ 
  return (
    <div className="App">
      <Navigation />
      <Menu dishes={this.state.dishes} />
    </div>
  );
   }
}

export default App;
