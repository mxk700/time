import React, {Component} from "react";

class Tag extends Component{
  render(){
    const props = this.props;
    return (
      <div
        id={props.id}
        className={"tag " + props.depth}
        parent={props.parent}
        depth={props.depth}
        childno={props.childNo}
        collapsed={props.collapsed}
        hidden={props.hidden}
        picture={props.picture}
        sound={props.sound}
        lastterm={props.lastTerm}
      >
        {props.tagval}
      </div>
    )
  }
}

export default Tag;
