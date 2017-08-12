import React from 'react';
import UI from "../uiController";

class AppHeader extends React.Component {

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
    return <div className="mb-3">
    <button onClick={UI.backToApp} type="button" className="btn btn-primary">Back</button>
    </div>
  }
}


export default AppHeader;
