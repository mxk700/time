import React, {Component} from "react";

class Tag extends Component{
  render(){
    const props = this.props;
    return (
      <div
        id={props.id}
        className="tag"
        parent={props.parent}
        depth={props.depth}
        childNo={props.childNo}
        collapsed={props.collapsed}
        picture={props.picture}
        sound={props.sound}
        lastTerm={props.lastTerm}
      >
        {props.tagVal}
      </div>
    )
  }
}

export default Tag;
