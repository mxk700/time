import React, {Component} from 'react';

class Term extends Component{
  // constructor(props){
  //   super();
  // }
  // handleClick (e){
  //   console.log(e);
  // }
  render(){
    return (
      <button className="term" >{this.props.value}</button>
      // <button className="term" onclick={this.handleClick}>{this.props.term}<button>
    )
  }
}

export default Term;
