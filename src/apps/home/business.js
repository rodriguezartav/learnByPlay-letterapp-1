
function Business(app){
  var _this = this;
  this.app = app;
  this.app.state={
    apps: [
      {name: "Letras 1", description: "Introduccion a las letras e imagenes",id: "letter1"}
    ],
    view: "list"
  };
  Business.instance = this;
}

Business.instance = null;


module.exports = Business;
