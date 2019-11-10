import React, { Component } from 'react';
import a from '../../img/a.jpeg';
import b from '../../img/b.jpeg';
import c from '../../img/c.jpeg';
import Items from "./Items";
class Home extends Component{
    constructor(props)
    {
        super(props);
        this.state = {products:
                {data:[{ id: 1, name: "jacket", image: a, description: 'this is the jacket from india', price:'$20', isSelected: false},
            { id: 2, name: "jacket", image: b , description: 'this is the jacket from india', price:'$25', isSelected: false},
                { id: 3, name: "jacket", image: c, description: 'this is the jacket from india', price:'$30', isSelected: false},
                        { id: 4, name: "jacket", image: a, description: 'this is the jacket from india', price:'$20', isSelected: false},
            { id: 5, name: "jacket", image: b , description: 'this is the jacket from india', price:'$25', isSelected: false},
                { id: 6, name: "jacket", image: c, description: 'this is the jacket from india', price:'$30', isSelected: false},
            ]}
        };

    }
   creatCardView(){
        let x=[]
        let l = this.state.products.data.length

       for (let i=0; i< l;i++)
       {
           x.push(<div className="card-group" style={{marginLeft: '150px',marginRight: '150px' }}>
                   <Items data = {this.state.products.data[i]}/>
                   <Items data = {this.state.products.data[i+1]}/>
                   <Items data = {this.state.products.data[i+2]}/>

                </div>)
            i=i+2
       }
        return x
    }
    render() {
            return(
                <div>
                <h5 style={{align:'center'}}> Home </h5>
                    {this.creatCardView()}

                    </div>
                );
    }

}
export default Home;