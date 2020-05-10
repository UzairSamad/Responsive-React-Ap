import React, { Component } from 'react';
import Menu from './Menu'
import Header from './Header'
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
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) =>  this.onDishSelect(dishId)} />
        { this.state.selectedDish != null &&
        <DishDetailed  dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish )} />
        }
      </div>
    );
  }
}

export default Main;