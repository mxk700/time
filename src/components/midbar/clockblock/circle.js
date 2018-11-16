import React, {Component} from 'react';
import Sector from './sector';

class Circle extends Component {
  constructor(props){
    super(props);
    this.circle = React.createRef();
    this.state = {
      angles: Array(+this.props.sectors).fill(0),
      sector: { x:0, y:0, r:0},
      maxHovered: 0
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(e){
    console.log(e.target);
    this.setState({maxHovered: e.target.attributes.n.value});
  }

  render(){
    return (
      <div id="circleWrapper">
        <svg id="circle" ref={this.circle}>
           { this.state.angles.map( (e, i)=>
             <Sector
               key={i}
               number={i+1}
               onHover = {this.handleHover}
               maxHovered = {this.state.maxHovered}
               sector = { this.state.sector }
               alfa={e}
              />
          )}
        </svg>
        <div className="circleButton"></div>
      </div>
    )
  }

  componentDidMount(){
    const count  = +this.props.sectors;
    const radius = round( this.circle.current.clientHeight / 2, 3);
    const alfa   = this.getAlfa(count);
    const angles = this.getAngles(count, alfa);
    const sector = this.getSector(count, alfa, radius);

    this.setState((state, props) => ({
      angles: angles,
      sector: sector
    }))
  }

  getAlfa(count){
    return round(360 / count, 1);
  }

  getSector( count, alfa, r ){
    const RAD = 0.01745329252;        // radians in 1 degree
    const halfAlfaRad  = RAD * alfa  / 2;
    const bc = round( 2 * r * Math.sin( halfAlfaRad  ), 3 );
    let x    = round( bc * Math.cos( halfAlfaRad ),     3 );
    let y    = round( bc * Math.sin( halfAlfaRad ),     3 );
    x += r;
    return {r, x, y};
  }

  getAngles(count, alfa){
    let angles  = [], i = 0;
    while(count - i){
      angles.push( alfa*i++ );
    }
    return angles;
  }
};

function round(x, depth){
  return Math.round( x * Math.pow(10, depth) ) / Math.pow(10, depth);
}

export default Circle;
