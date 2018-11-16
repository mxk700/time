import React, {Component} from "react";

import Tag from "./tag";

class TagList extends Component{
  constructor(props){
    super(props);
    this.state = [];
  }

  render(){
    return (
      <div className="tagList">
        <Tag />
      </div>
    )
  }
}

export default TagList;
