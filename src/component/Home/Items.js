import React, { Component } from 'react';
class Items extends Component {
    constructor(props) {
        super(props);



    }
    render() {
        if(this.props.data!=null) {
            return (

                <div className="card" style={{margin: '15px'}}>
                    <img src={this.props.data.image} className="card-img-top" alt="img 1"
                         style={{objectFit: 'cover', height: '300px', weight: '100px'}}/>

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