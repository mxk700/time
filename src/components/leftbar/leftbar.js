import React, {Component} from "react";

import RuleBar from "./rulebar";
import TagList from "./tags/taglist";

class LeftBar extends Component{

  render(){
    return (
      <div className="leftBar">
        <RuleBar />
        <TagList />
      </div>
    )
  }
}

export default LeftBar;
