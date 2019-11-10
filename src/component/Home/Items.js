import React, { Component } from 'react';
import './Item.css';
class Items extends Component {
    constructor(props) {
        super(props);
        this.state={
            isSelected: this.props.data.isSelected,
        }
        this.addToCart = this.addToCart.bind(this)
    }
    addToCart()
    {
        console.log('clicked')
    this.setState( {isSelected: !this.state.isSelected});
    }
    render() {
        let color = this.state.isSelected ? 'buttonSelected':'buttonUnSelected'
        if(this.props.data!=null) {
            return (

                <div className="card" style={{margin: '15px'}}>
                    <img src={this.props.data.image} className="card-img-top" alt="img 1"
                         style={{objectFit: 'cover', height: '300px', weight: '100px'}}/>
                    <button  className={color}
                    onClick={this.addToCart}><span className="glyphicon glyphicon-plus"></span></button>

                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.name}</h5>
                        <p className="card-text">{this.props.data.description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{this.props.data.price}</small>
                    </div>
                </div>
            )
        }
        else{
            return (<div></div>);
        }
    }
}
export default Items;