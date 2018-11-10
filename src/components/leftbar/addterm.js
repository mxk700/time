import React, {Component} from 'react';

class AddTerm extends Component {
  // constructor(){}

  handleClick(e){
    console.dir(e);
    console.log(e.target);
  }

  render(){
    return (
      <button className="addTerm" tip="add a new term" onClick={this.handleClick}>+</button>
    )
  }

}


export default AddTerm;
