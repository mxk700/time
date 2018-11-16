import React, {Component} from "react";

class RuleBar extends Component{
  constructor(props){
    super(props);
    this.state = { tags:["tree", "hot", "edit"] };
  }
  render(){
    return (
      <div className="ruleBar">
      {this.state.tags.map( (str, i) => {
          return (
            <TagRuleButton value = {str} key={i} />
          )
        }
      )}
      </div>
    )
  }
}

class TagRuleButton extends Component{
  render(){
    return (
      <button className="tagRuleButton">{this.props.value}</button>
    )
  }
}

export default RuleBar;
