

import React, { Component } from 'react';
import './rowcart.css'
class Rowcart extends Component{


    render() {
        return(
            <div>
                <div className="shopping-cart">

                    <div className="item">
                        <div className="buttons">
                            <span className="delete-btn"></span>
                            <span className="like-btn"></span>
                        </div>

                        <div className="image">
                            <img src="" alt=""/>
                        </div>

                        <div className="description">
                            <span>Common Projects</span>
                            <span>Bball High</span>
                            <span>White</span>
                        </div>

                        <div className="quantity">
                            <button className="plus-btn" type="button" name="button">
                                <img src="" alt=""/>
                            </button>
                            <input type="text" name="name" value="1"/>
                                <button className="minus-btn" type="button" name="button">
                                    <img src="" alt=""/>
                                </button>
                        </div>

                        <div className="total-price">$549</div>
                    </div>
                </div>
            </div>


        );
    }
}
    export default Rowcart;