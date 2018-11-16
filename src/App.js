import React, { Component } from 'react';
// import {BrowserRouter} from 'react-router-dom';
import Terms from "./components/leftbar/terms";
import Tags from "./components/leftbar/tags";

import MidHeader from "./components/midbar/header"
import ClockBlock from "./components/midbar/clockblock/clockblock"

import NavBar from "./components/rightbar/navbar";
import TagTree from "./components/rightbar/tagtree";




import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <BrowserRouter>
        <div className="App">
          <div className="leftBar">
            <Terms />
            <Tags />
          </div>
          <div className="midBar">
            <MidHeader />
            <ClockBlock />

            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
          <div className="rightBar">
            <NavBar/>
            <TagTree/>
          </div>
        </div>
      // </BrowserRouter>
    );
  }
}

export default App;
