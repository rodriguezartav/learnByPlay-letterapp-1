var moment = require("moment");
var Business = require("./business");

var UI = {
  business: null
};

UI.onFormClick = function(emailOrPhone){
  var _this = this;
  var phone = parseInt( emailOrPhone );
  if(phone>0){
    Business.instance.loginWithCode(phone)
    .then( function(result){
      if(result.ok) Business.instance.app.setState({view: "celular"})
      else Business.instance.app.setState({view: "register"})
    })
  }
  else{
    Business.instance.login(emailOrPhone)
    .then( function(result){
      if(result.ok) Business.instance.appsetState({view: "complete"})
      else Business.instance.app.setState({view: "register"})
    })
  }
  Business.instance.app.setState( { emailOrPhone: emailOrPhone });
}

UI.onRegister = function(contact){
  return Business.instance.register(contact);
}

UI.handleSalesforceClick = function(){
  return Business.instance.registerWithSalesforce();
}

UI.backToLogin = function(){
  Business.instance.app.setState({view: "form"})
}

UI.onCelularCode = function(code){
  Business.instance.checkCode(code);
}

UI.onLoginWithLink = function(code){
  return Business.instance.loginWithLink(code);
}

module.exports= UI;
