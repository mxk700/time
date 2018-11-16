import React, {Component} from "react";

import MidHeader from "./header";
import ClockBlock from "./clockblock/clockblock";
import ImageBlock from "./imageblock";

 class MidBar extends Component {
   render(){
     return (
       <div className="midBar">
         <MidHeader />
         <ClockBlock />
         <ImageBlock />
       </div>
     )
   }
 }

export default MidBar;
