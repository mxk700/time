import React, {Component} from 'react';
import Clock from './clock.js';
import Circle from './circle.js';
import ClockNavs from './clocknavs.js';


class ClockBlock extends Component {
  render(){
      return (
        <div className="clockBlock">

          <Circle sectors="5"/>
          <Clock />
          <ClockNavs />

        </div>
      )
  }
};


export default ClockBlock;
