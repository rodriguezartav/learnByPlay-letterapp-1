var moment = require("moment");
var Business = require("./business");

var UI = {
  business: null
};

UI.backToApp = function(){
  document.querySelector("#app").innerHTML="";
  Business.instance.app.setState({view: "list"});
}

UI.onAppSelect = function(app){
  Business.instance.app.setState({view: "app"});
  document.querySelector("#app").innerHTML="";
  var url = "/";
  var script = document.createElement('script');
  script.setAttribute('src',url+app.id+'.js');
  document.head.appendChild(script);
}


module.exports= UI;
