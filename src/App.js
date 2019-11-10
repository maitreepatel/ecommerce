import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import Home from './component/Home/Home';
import './App.css';
import a from "./img/a.jpeg";
import b from "./img/b.jpeg";
import c from "./img/c.jpeg";
import Cart from "./component/Cart/Cart";
import {
BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Mycart from "./component/Cart/Rowcart";

class App extends React.Component
{
    constructor(props) {
        super(props);

        {
            this.state = {
                products:
                    {
                        data: [{
                            id: 1,
                            name: "jacket",
                            image: a,
                            description: 'this is the jacket from india',
                            price: '$20',
                            isSelected: false
                        },
                            {
                                id: 2,
                                name: "jacket",
                                image: b,
                                description: 'this is the jacket from india',
                                price: '$25',
                                isSelected: false
                            },
                            {
                                id: 3,
                                name: "jacket",
                                image: c,
                                description: 'this is the jacket from india',
                                price: '$30',
                                isSelected: false
                            },
                            {
                                id: 4,
                                name: "jacket",
                                image: a,
                                description: 'this is the jacket from india',
                                price: '$20',
                                isSelected: false
                            },
                            {
                                id: 5,
                                name: "jacket",
                                image: b,
                                description: 'this is the jacket from india',
                                price: '$25',
                                isSelected: false
                            },
                            {
                                id: 6,
                                name: "jacket",
                                image: c,
                                description: 'this is the jacket from india',
                                price: '$30',
                                isSelected: false
                            },
                        ]
                    }
            };
        }
    }
  render() {


    return (
        <div className="App">
            <Navbar/>
            <Home data = {this.state.products.data}/>
            {/*<Router>*/}
            {/*<Switch>*/}
            {/*<Route*/}
            {/*      exact*/}
            {/*      path="/Mycart"*/}
            {/*      component={Mycart}*/}
            {/*      goHome={true}*/}
            {/*    />*/}
            {/*</Switch>*/}
            {/*</Router>*/}
        </div>
    )
  }
}

export default App;