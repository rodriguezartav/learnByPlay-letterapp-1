import React from 'react';
import UI from "./uiController";
import Business from "./business"

import Style from '../../style.css';
import Box from "./components/box";

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.business = new Business(this);
  }

  renderLetters(){
    var _this = this;
    var letters = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
    var count =-1;
    return letters.map(function(letter){
      count++;
      return <Box key={letter} letter={letter} count={count} images={_this.state.images} />
    })
  }

  render(){
    return <div className="container-fluid mt-4">
      <div className="row">
        {this.renderLetters()}
      </div>
    </div>
  }

}

export default Container;
