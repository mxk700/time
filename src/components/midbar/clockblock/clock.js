//// TODO: exclude key up from irrelevant keys;
//// TODO: add zero on blur;

import React, {Component} from 'react';

const CTRL_MULT = 5;
const timeMin = new Date(0,0,0,0,0,0);
const timeMax = new Date(0,0,0,23,59,59);

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: [ "01", "00", "00" ]
    };
    this.handleNewValue = this.handleNewValue.bind(this);
    this.addZero = this.addZero.bind(this);
  }

  render(){
      return (
        <div id="clockWrapper">
          <div id="restart">rest</div>
          <div id="clock">
            {this.state.time.map((e, i)=>
              <Input
                n={i}
                key={i}
                value={e}
                onNewValue={this.handleNewValue}
              />
            )}
          </div>
          <div id="start">start</div>
        </div>
      )
  }

  handleNewValue( n, val, add ){
    let [time] =  [this.state.time] ;
    val && (time[n] = val);
    add && (time[n] = +time[n] +add);
    ( val === 0 && add === 0) && (time[n] = 0);

    let newTime = new Date(0,0,0, +time[0], +time[1], +time[2]);

    (newTime > timeMax) && (newTime = timeMax);
    (newTime < timeMin) && (newTime = timeMin);

    time[0] = this.addZero( newTime.getHours() );
    time[1] = this.addZero( newTime.getMinutes() );
    time[2] = this.addZero( newTime.getSeconds() );

    time[n] = this.removeZero(time[n]);

    this.setState( {time:time} );
  }

  addZero(val){
    if(val < 10 ) return "0" + val;
    return "" + val;
  }

  removeZero(val){
    return '' + +val;
  }
};




class Input extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus  = this.handleFocus.bind(this);
    this.handleBlur   = this.handleBlur.bind(this);
    this.handleWheel  = this.handleWheel.bind(this);
    this.handleKeyUp  = this.handleKeyUp.bind(this);
  }

  render(){
    return (
      <input
        n         = {this.props.n}
        value     = {this.props.value}
        onBlur    = {this.handleBlur}
        onChange  = {this.handleChange}
        onFocus   = {this.handleFocus}
        onWheel   = {this.handleWheel}
        onKeyUp   = {this.handleKeyUp}
      />
    )
  }

  handleChange(e){
    console.log( "handleChange ! " );
    const val = parseInt( e.target.value );
    if( isNaN(val) ) return;

    console.log("From input: val = " + val + "   n = " + this.props.n  );

    this.props.onNewValue( this.props.n, val, 0 );
  }
  handleBlur(e){
    // this.props.onLostFocus(this.props.n)
  }
  handleFocus(e){
    e.target.select();
  }
  handleWheel(e){
    console.log(" handleWheel! ");
    e.preventDefault();
    let change = e.deltaY > 0 ? -1 : 1;
    e.ctrlKey && ( change *= CTRL_MULT );
    this.props.onNewValue( this.props.n, 0,  change );
  }
  handleKeyUp(e){
    console.log("handleKeyUp");
    let x = null;
    switch (e.which) {
      case 38:      // up
        x = +1 * (e.ctrlKey ? CTRL_MULT : 1);
        break;
      case 107:     // +
        x = +1 * (e.ctrlKey ? 0 : 1);
        break;
      case 40:      // down
        x = -1* (e.ctrlKey ? CTRL_MULT : 1);
        break;
      case 109:     // -
        x = -1 * (e.ctrlKey ? 0 : 1);
        break;
      default:
    }
    // console.log([this.props.n, 0, x]);
    this.props.onNewValue( this.props.n, 0,  x );
  }
}

export default Clock;
