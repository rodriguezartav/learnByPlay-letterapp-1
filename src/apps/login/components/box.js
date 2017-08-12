import React from 'react';

class Box extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      flipped:false
    }
  }

  onClick(e){
    var _this = this;
    if(this.state.flipped){
      this.setState({flipped:false})
    }
    else this.setState({flipped:true})
  }

  render() {
    var colors = ["red","green","blue","yellow","red","green","blue","yellow","red","green","blue","yellow"];
    var pick = parseInt(Math.random()*10);
    var imageUrl = "http://via.placeholder.com/300x150";
    if(this.props.images[this.props.count]) imageUrl = this.props.images[this.props.count].contentUrl;
    var cardClass = "card mb-4";

    if(this.state.flipped) cardClass+= " flipped";
   return <div className="col flip-container">
          <div ref="card" onClick={this.onClick.bind(this)} className={cardClass} >
            <div style={{color: colors[pick] }} className="front letter mx-auto">
              {this.props.letter}
            </div>
            <div className="back  ">
              <img className="img-fluid" src={imageUrl}/>
            </div>
    </div>
    </div>
  }
}


export default Box;
