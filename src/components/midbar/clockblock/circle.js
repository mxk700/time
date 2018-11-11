import React, {Component} from 'react';

class Circle extends Component {
  constructor(props){
    super(props);
    this.circle = React.createRef();
    this.state = {
      opts: Array(+this.props.sectors).fill({alfa:0, shiftX:0, shiftY:0}),

    };
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

this.calcSectorsGeometry(count, radius);

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

    // console.dir(opts);

    this.setState((state, props) => ({
      opts: opts
    }), ()=>{
      // console.log(this.state);
    });

  }

  calcSectorsGeometry( count, r ){
    const RAD = 0.01745329252;        // radians in 1 degree
    const alfa = round(360 / count, 1);
    const beta = round(45 - alfa/2, 1);
    const bb = round( 2 * r * Math.sin( RAD * alfa  / 2 ), 3 );
    const x = round( bb * Math.cos( RAD * beta), 3 );
    const y = round( bb * Math.sin( RAD * beta), 3 );

    console.log(this);
    this.sectorGeometry = {r, x, y};

    let res  = [];
    for(let i=0; i<count; i++){
      res.push( alfa*i );
    }

    console.log(res);
  }
};

class Sector extends Component {
  render(){
    // console.log("SECTOR RENDERS" + Date.now() );
    // console.log(this.props);
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


function round(x, depth){
  return Math.round( x * Math.pow(10, depth) ) / Math.pow(10, depth);
}


export default Circle;
