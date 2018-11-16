import React, {Component} from 'react';

class ClockTerms extends Component {
  render(){
      const presets = [ 5, 10, 15, 20, 30, 60, 120, 120, 120, 150 ];

      return (
        <div id="clockTerms">
          {
            presets.map((e, i)=>
              <Term key={i} val={e + " min"}></Term>
            )
          }
        </div>
      )
  }
};

class Term extends Component{
  render(){
    return (
      <button className="term">{this.props.val}</button>
    )
  }
}

export default ClockTerms;
