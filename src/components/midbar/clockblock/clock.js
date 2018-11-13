import React, {Component} from 'react';

const CTRL_MULT = 5;

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      time: [
        {val:"01", max:"24"},
        {val:"00", max:"60"},
        {val:"00", max:"60"}
      ]
    }
  }

  render(){
      return (
        <div id="clockWrapper">
          <div id="restart">rest</div>
          <div id="clock">
            {this.state.time.map((e, i)=>
              <Input
                key={i}
                value={this.state.time[i].val}
                max={this.state.time[i].max} />)
            }
          </div>
          <div id="start">start</div>
        </div>
      )
  }
};

class Input extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleWheel = this.handleWheel.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.state={value: this.props.value };
  }

  render(){
    return (
      <input
        max={this.props.max}
        value={this.state.value}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        onWheel={this.handleWheel}
        onKeyUp={this.handleKeyUp}
        >
      </input>
    )
  }
  handleChange(e){
    const val = +e.target.value;
    this.manageNewValue(val);
  }
  handleBlur(e){
    this.addZero(+e.target.value);
  }
  handleFocus(e){
    e.target.select();
  }
  handleWheel(e){
    e.preventDefault();
    let change = e.deltaY > 0 ? -1 : 1;
    e.ctrlKey && ( change *= CTRL_MULT );
    const val = +e.target.value + change;
    this.manageNewValue(val);
  }
  handleKeyUp(e){
    console.log(e.which);
    switch (e.which) {
      case 38:      // up
        this.manageNewValue( this.state.value + 1 * (e.ctrlKey ? CTRL_MULT : 1) );
        break;
      case 107:     // +
        this.manageNewValue( this.state.value + 1 * (e.ctrlKey ? 0 : 1));
        break;
      case 40:      // down
        this.manageNewValue( this.state.value - 1* (e.ctrlKey ? CTRL_MULT : 1) );
        break;
      case 109:     // -
        this.manageNewValue( this.state.value - 1 * (e.ctrlKey ? 0 : 1));
        break;
      default:
    }
  }

  manageNewValue(val){
    const max = this.props.max;
    const res = this.format(val, max);

    if( res === "not a number") return;
    this.setState({value: res});
  }

  format(val, max){
    let x = parseInt(val);
    if( isNaN(x)) return "not a number";

    ( x < 0 )   && (x = 0);
    ( x > max ) && (x = max);

    return x;
  }

  addZero(val){
    ( val < 10 )  && this.setState( {value: "0" + val} );
  }
}

export default Clock;
