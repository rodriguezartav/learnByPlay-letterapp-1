
var Ajax = {
  authorization_code: ""
}

Ajax.getURL = function(path,params){
  if(!params) params = {};

  var url = "http://localhost:3000";

  if( process.env.NODE_ENV === "production" ){
    url = "https://api.rodcocr.com";
    if(params.isLogin) url = "https://login.rodcocr.com";
  }
  else if( process.env.NODE_ENV === "staging" ){
    url = "http://staging-api.rodcocr.com";
    if(params.isLogin) url = "http://staging-login.rodcocr.com";
  }

  return url + path;
}

Ajax.login = function(){
  window.location = Ajax.getURL("?returnTo=" + window.location.href, {isLogin:true})
}

Ajax.get = function(path, params){
  return fetch(Ajax.getURL(path,params),{
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': Ajax.authorization_code
    }),
    mode: "cors",
    method: "GET",
  })
}

Ajax.post = function(path, body, params){
  return fetch(Ajax.getURL(path,params),{
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': Ajax.authorization_code
    }),
    body: JSON.stringify(body),
    mode: "cors",
    method: "POST",
  })
}

Ajax.put = function(path, body, params){
  return fetch(Ajax.getURL(path,params),{
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': Ajax.authorization_code
    }),
    body: JSON.stringify(body),
    mode: "cors",
    method: "PUT",
  })
}

Ajax.delete = function(path,params){
  return fetch(Ajax.getURL(path,params),{
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': Ajax.authorization_code
    }),
    mode: "cors",
    method: "DELETE",
  })
}


Number.prototype.round = function(p) {
  p = p || 10;
  return parseFloat( this.toFixed(p) );
};


module.exports = Ajax;
