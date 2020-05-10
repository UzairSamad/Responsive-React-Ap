import React, { Component } from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png'

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    navigationItemsData = [
        { id: '0', name: 'Home', icon:'fa fa-home fa-lg' ,route:'/home'},
        { id: '1', name: 'About' ,icon:'fa fa-info fa-lg' ,route:'/about'},
        { id: '3', name: 'Contact Us',icon:'fa fa-address fa-lg' ,route:'/contactUs' },
        { id: '3', name: 'Menu',icon:'fa fa-list fa-lg' ,route:'/menu' }
    ]

    navigationItems =
        this.navigationItemsData.map((val, index) => {
            return (
                <NavItem key={val.id}>
                    <NavLink className="nav-link" to={val.route}><span className={val.icon}></span> {val.name} </NavLink>
                </NavItem>
            )
        })

    render() {
        return (
            <div >
                <Navbar dark color="#512DA8"  >
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src={Logo} height="30" width="41" alt='Ristorante Con Fusion' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                {this.navigationItems}
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}
export default Navigation