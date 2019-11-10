import React, { Component } from 'react';
import Rowcart from './Rowcart';
class Cart extends Component{
    constructor(props) {
        super(props);

        {
            this.state={ cartdata: this.props.data}
        }
    }
render() {
    return(
        <div>
        <h1> My cart </h1>
            <Rowcart/>
            <Rowcart/>

        </div>

    )
}
}
export default Cart;