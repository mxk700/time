import React, {Component} from 'react';

class Circle extends Component {
  constructor(props){
    super(props);
    this.circle = React.createRef();
    this.state = {
      opts: Array(+this.props.sectors).fill({alfa:0, shiftX:0, shiftY:0}),

    };
    console.log("constructor WORKS! State:");
    console.dir(this.state);
  }
  getAngle(count){
    return Math.round( 360/count );
  }

  render(){
    var t = Array(+this.props.sectors).join("+").split("+");

    return (
      <div id="circleWrapper">
        <div id="circle" ref={this.circle}>
           { t.map( (e, i)=>
             <Sector
               key={i}
               number={i}
               alfa={ this.state.opts[i].alfa }
               shiftX={ this.state.opts[i].shiftX }
               shiftY={ this.state.opts[i].shiftY }
              />
          )}
        </div>
      </div>
    )
  }

  componentDidMount(){
    const RAD = 0.01745329252;        // radians in 1 degree
    const count  = +this.props.sectors;
    const side = Math.round( this.circle.current.offsetHeight / 2);
    let radius = side * Math.sqrt(2);
    radius = Math.round(radius/2);

    const arc = Math.round(360 / count);

    let opts  = [];

    for( let i = 0; i < count; i++){
      let alfa = arc * i;  // rotate angle
      let beta = 45 - Math.round(alfa / 2);   // angle between shift path(hypotenuse) and axisX

      let hypotenuse = 2 * radius * Math.sin( RAD * alfa / 2);
      hypotenuse = Math.round(hypotenuse);

      let shiftX = hypotenuse * Math.cos( RAD * beta );
      let shiftY = hypotenuse * Math.sin( RAD * beta );
      shiftX = Math.round(shiftX);
      shiftY = Math.round(shiftY);
      opts.push({alfa, beta, shiftX, shiftY});
    }

    console.dir(opts);

    this.setState((state, props) => ({
      opts: opts
    }), ()=>{
      console.log(this.state);
    });

  }
};

class Sector extends Component {
  render(){
    console.log("SECTOR RENDERS" + Date.now() );
    console.log(this.props);
    var n = +this.props.number;
    var st = {
      transform: 'rotate('  + +this.props.alfa + 'deg)'+
                ' translate('+ +this.props.shiftX+'px, '+ +this.props.shiftY +'px )',
      backgroundColor: "#" + n*2 + n*2 + n*2,
      zIndex: n
    }

    return (
      <div style={st}>{this.props.number}</div>
    )
  }
}


export default Circle;
