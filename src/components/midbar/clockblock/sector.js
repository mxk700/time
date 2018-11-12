import React, {Component} from 'react';

class Sector extends Component {
  render(){
    var {alfa, maxHovered, number:n, sector: {r, x, y} } = this.props;

    // var n = +this.props.number;
    // var {r, x, y} = this.props.sector;
    var st = {
      transform: 'rotate('  + +alfa + 'deg)',
      zIndex: n
    };

    return (
      <path
        n={n}
        className = {n <= maxHovered ? "hovered":null}
        onMouseOver = {this.props.onHover}
        style={st}
        d={"M" +r+ ","+ r +" L" +r+ ",0  A" + r + "," + r + " 1 0,1 " + x + ", " + y}
        fill={"#" + n*2 + n*2 + n*2}  >
      </path>
    )
  }
}

export default Sector;
