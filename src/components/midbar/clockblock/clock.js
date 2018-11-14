//// TODO: dont go down 0:0:0

import React, {Component} from 'react';

const CTRL_MULT = 5;

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: [
        {val:"01", max:"23"},
        {val:"00", max:"59"},
        {val:"00", max:"59"}
      ]
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
                value={this.state.time[i].val}
                max={this.state.time[i].max}
                onNewValue={this.handleNewValue}
                onLostFocus={this.addZero}
              />
            )}
          </div>
          <div id="start">start</div>
        </div>
      )
  }

  handleNewValue( opts ){
    let {n, val, add, blur=false} = opts;

    let nSib = NaN, addSib = null;

    (val === "empty") && (val = this.state.time[n].val);

    let newVal = +val + add;
    const max = +this.state.time[n].max;
    const snapShot = this.checkZeroTime();

    if( newVal > max ){
      if(snapShot === '235959') return;
      if(n === 0){
        newVal = max;
      }else{
        newVal = 0;
        nSib = n-1;
        addSib = 1;
      }
    }else if( newVal < 0 ){
      if(snapShot === '00000') return;
      if(n === 0){
        newVal = 0;
      }else{
        newVal = max;
        nSib = n-1;
        addSib = -1;
      }
    }

    let t = this.state.time.slice();
    t[n].val = newVal;
    this.setState( {time:t} );

    blur && this.addZero(n);

    !(isNaN(nSib)) && this.handleNewValue({ n: nSib, val: "empty", add: addSib, blur:true });
  }

  addZero(n){
    let t = this.state.time.slice();
    t[n].val = +t[n].val;
    if( t[n].val > 9 ) return;

    t[n].val = "0" + t[n].val;
    this.setState( {time:t} );
  }
  checkZeroTime(){
    const t = this.state.time;
    return '' + t[0].val + t[1].val + t[2].val;
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
    this.state        = {value: this.props.value };
  }

  render(){
    return (
      <input
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
    const val = parseInt( e.target.value );
    if( isNaN(val) ) return;

    this.props.onNewValue( {n: this.props.n, val:val, add:0} );
  }
  handleBlur(e){
    this.props.onLostFocus(this.props.n)
  }
  handleFocus(e){
    e.target.select();
  }
  handleWheel(e){
    e.preventDefault();
    let change = e.deltaY > 0 ? -1 : 1;
    e.ctrlKey && ( change *= CTRL_MULT );
    this.props.onNewValue( {n: this.props.n, val:"empty", add: change} );
  }
  handleKeyUp(e){
    console.log(e.which);
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
    this.props.onNewValue( {n: this.props.n, val:"empty", add: x} );
  }
}

export default Clock;
