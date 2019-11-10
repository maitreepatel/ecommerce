import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import Home from './component/Home/Home';
import './App.css';

class App extends React.Component
{
  render() {


    return (
        <div className="App">
            <Navbar/>
            <Home/>
        </div>
    )
  }
}

export default App;