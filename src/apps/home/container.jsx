import React from 'react';
import UI from "./uiController";
import Business from "./business"
import Box from "./components/box";
import AppHeader from "./components/appHeader";
import Style from './style.css';

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.business = new Business(this);
  }

  renderApps(){
    var _this = this;
    if(this.state.view == "app") return <AppHeader />;

    return this.state.apps.map(function(app){
      return <Box key={app.name} item={app} />
    })
  }

  render(){
    return <div className="container-fluid mt-4">
      <div className="row">
        {this.renderApps()}
      </div>
    </div>
  }

}

export default Container;
