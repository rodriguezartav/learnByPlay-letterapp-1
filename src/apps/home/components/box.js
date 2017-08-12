import React from 'react';
import UI from "../uiController";

class Box extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    }
  }

  onClick(e){
    var _this = this;
    UI.onAppSelect(this.props.item);
  }

  render() {
    return <div className="col col-md-2">
      <div ref="card" className="card" >
      <div className="card-body">
        <h4 className="card-title">{this.props.item.name}</h4>
        <p className="card-text">{this.props.item.description}</p>
        <a onClick={this.onClick.bind(this)} className="btn btn-primary">Jugar</a>
      </div>


    </div>
    </div>
  }
}


export default Box;
