import React, { Component } from 'react';

import LeftBar  from "./components/leftbar/leftbar";
import MidBar   from "./components/midbar/midbar"
import RightBar from "./components/rightbar/rightbar";


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftBar/>
        <MidBar/>
        <RightBar/>
      </div>
    );
  }
}

export default App;
