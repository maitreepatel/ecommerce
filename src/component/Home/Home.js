import React, { Component } from 'react';
import a from '../../img/a.jpeg';
import b from '../../img/b.jpeg';
import c from '../../img/c.jpeg';
import Items from "./Items";
class Home extends Component{

    constructor(props) {
        super(props);

        {
            this.state={ homedata: this.props.data}
        }
    }
   creatCardView(){
        let x=[]
        let l = this.state.homedata.length

       for (let i=0; i< l;i++)
       {
           x.push(<div className="card-group" style={{marginLeft: '150px',marginRight: '150px' }}>
                   <Items data = {this.state.homedata[i]}/>
                   <Items data = {this.state.homedata[i+1]}/>
                   <Items data = {this.state.homedata[i+2]}/>

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