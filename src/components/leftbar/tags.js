import React, {Component} from "react";
import Tag from "./tagDetails";

class Tags extends Component{
  constructor(props){
    super(props);
    this.state = { tags:["coding", "guitar", "sport"] };
  }
  render(){
      return (
        <div className="tags">
        {this.state.tags.map( (str, i) => {
            return (
              <Tag value = {str} key={i} />
            )
          }
        )}
        </div>
      )
  }
}
export default Tags;
