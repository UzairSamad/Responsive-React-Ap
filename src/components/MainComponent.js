import React, { Component } from 'react';
import Menu from './Menu'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import DishDetailed from './DishDetailed'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';




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
        this.setState({ selectedDish: dishId });
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                />
            );
        }

        return (
            <div>
                <Navbar />
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />

            </div>
        );
    }
}

export default Main;