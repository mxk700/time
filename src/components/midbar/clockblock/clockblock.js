import React, {Component} from 'react';
import Clock from './clock.js';
import Circle from './circle.js';
import ClockTerms from './clockterms.js';


class ClockBlock extends Component {
  render(){
      return (
        <div className="clockBlock">
          <Circle sectors="12"/>
          <Clock />
          <ClockTerms />
        </div>
      )
  }
};


export default ClockBlock;
