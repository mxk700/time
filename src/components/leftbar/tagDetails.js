import React, {Component} from 'react';

class Tag extends Component{
  // constructor(props){
  //   super();
  // }
  // handleClick (e){
  //   console.log(e);
  // }
  render(){
    return (
      <button className="tag" >{this.props.value}</button>
    )
  }
}

export default Tag;
