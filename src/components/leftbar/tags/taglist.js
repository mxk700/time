import React, {Component} from "react";

import AddTagForm from "./addTagForm";
import Tag from "./tag";

class TagList extends Component{
  constructor(props){
    super(props);
    this.state = {
      showFormFlag: "hide",
      tags: [ {
          tagVal: "coding",
          depth: 0,
          parent: 0,
          childNo:0,
          collapsedf: true,
          hidden: false,
          picture: "none",
          sound: "none",
          lastTerm: "none"
        }, {
          tagVal: "sport",
          depth: 0,
          parent: 0,
          childNo:1,
          collapsedf: true,
          hidden: false,
          picture: "none",
          sound: "none",
          lastTerm: "none"
        }, {
          tagVal: "music",
          depth: 0,
          parent: 0,
          childNo:2,
          collapsedf: true,
          hidden: false,
          picture: "none",
          sound: "none",
          lastTerm: "none"
        }
      ]
    };
    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.hideAddForm = this.hideAddForm.bind(this);
  }
  handleAddButtonClick(e){
    this.setState({showFormFlag: null });
    console.log("Button clicked");
    // this.addTag
  }
  hideAddForm(){
    this.setState({showFormFlag:"hide"});
  }

  render(){
    return (
      <div id="tagList">
        {
          this.state.tags.map((e,i)=>
            <Tag
              key={i}
              id={i}
              tagval={this.state.tags[i].tagVal}
              className={"tag " + e.depth}
              parent={e.parent}
              depth={e.depth}
              childNo={e.childNo}
              collapsed={e.collapsed}
              hidden={e.hidden}
              picture={e.picture}
              sound={e.sound}
              lastTerm={e.lastTerm}
            />
          )
        }
        <AddTagForm
          showFormFlag={this.state.showFormFlag}
          hideAddForm={this.hideAddForm}
        />
        <button id="addTagButton" onClick={this.handleAddButtonClick}>
          +
        </button>
      </div>
    )
  }
}

export default TagList;
