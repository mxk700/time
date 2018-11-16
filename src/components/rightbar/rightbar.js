import React, {Component} from "react";

class RightBar extends Component{

  render(){
    return (
      <div className="rightBar">
        <button>log in</button>
        <button>settins</button>
        <button>stats</button>
        <button>sound</button>
      </div>
    )
  }
}

export default RightBar;
