import React, { Component } from 'react';
import Rowcart from "../Cart/Rowcart";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
 class Navbar extends Component
 {
     render() {
         return(
             <div>

                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
                     <a className="navbar-brand" href="#">Ecommerce</a>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                             aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent: 'flex-end'}}>
                         <ul className="navbar-nav">
                             <li className="nav-item active">
                                 <a className="nav-link" href="#">Shop <span className="sr-only">(current)</span></a>
                             </li>
                             <li className="nav-item">
                                 <a className="nav-link" href="/Cart">My cart </a>
                             </li>
                             <li className="nav-item">
                                 <i className="material-icons">shopping_cart</i>
                             </li>

                         </ul>
                     </div>
                 </nav>


             </div>
         )
     }

 }
 export default Navbar;