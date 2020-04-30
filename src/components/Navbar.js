import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react'

class Navigation extends Component {

    navigationItemsData = [
        { id: '0', name: 'Home' },
        { id: '1', name: 'About' },
        { id: '2', name: 'ContactUs' },
    ]

    navigationItems =
        this.navigationItemsData.map((val, index) => {
            return <li style={{ marginRight: '20px', listStyle: 'none',color:'white' ,paddingTop:'5px'}} key={val.id}> {val.name} </li>
        })


    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container" style={{ display: 'flex', flexDirection: 'row' }} >
                        <NavbarBrand href="/">E-Commerce Solutions</NavbarBrand>
                        <ul style={{ display: 'flex' }}>
                            {this.navigationItems}
                        </ul>
                    </div>
                </Navbar>
            </div>
        );
    }
}
export default Navigation