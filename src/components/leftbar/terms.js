import React, {Component} from "react";
import Term from "./termdetails"
import AddTerm from "./addterm"


class Terms extends Component{
  constructor() {
    super();
    this.state = { terms: ["10 min", "15 min", "30 min"] };
  }

  render(){
      return (
        <div className="terms">
        {this.state.terms.map( (str, i) => {
            return (
              <Term value = {str} key={i} />
            )
          }
        )}
        <AddTerm />
        </div>
      )
  }
}

export default Terms;
