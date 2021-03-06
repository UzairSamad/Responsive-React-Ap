import React, { Component } from 'react';
import {  Jumbotron } from 'reactstrap';
class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Jumbotron style={{background:'#9575CD',padding:'70px 30px 70px 30px',margin:'0px auto',color:'floralwhite'}} >
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;