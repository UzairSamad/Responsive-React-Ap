import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Menu'
import Navigation from './Navbar'
import DishDetailed from './DishDetailed'

import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div>
        <Navigation />
        <Menu dishes={this.state.dishes} onClick={(dishId) =>  this.onDishSelect(dishId)} />
        { this.state.selectedDish != null &&
        <DishDetailed  dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish )} />
        }
      </div>
    );
  }
}

export default Main;