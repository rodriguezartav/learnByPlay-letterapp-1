
function Business(app){
  var _this = this;
  this.app = app;
  this.app.state={
    images: []
  };
  Business.instance = this;
  this.getImages()
  .then(function(res){
    return res.json();
  })
  .then(function(result){
    console.log(result.images.value);
    _this.app.setState({images: result.images.value})
  })
  .catch(function(err){
    console.log(err);
  })
}

Business.instance = null;

Business.prototype.getImages = function(){

  var q = "wildlife";
    var url = "https://api.cognitive.microsoft.com/bing/v5.0/search?q="+q+"&count=30&offset=0&mkt=en-us&safesearch=Strict"
    return fetch(url,{
      headers: new Headers({
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': "07afda8c3a49414ba494afbfe5d43181"
      }),
      mode: "cors",
      method: "GET",
    })

}

module.exports = Business;
