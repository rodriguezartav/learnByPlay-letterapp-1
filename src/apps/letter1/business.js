
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
    var images = result.images;
    var finalImages = images.map(function(image){
      return image.display_sizes[0].uri;
    })


    _this.app.setState({images: finalImages})
  })
  .catch(function(err){
    console.log(err);
  })
}

Business.instance = null;

Business.prototype.getImages = function(){

  var q = "wildlife";
    var url = "https://api.gettyimages.com/v3/search/images/creative?phrase=wildlife&exclude_nudity=true&page_size=31"
    return fetch(url,{
      headers: new Headers({
        'Content-Type': 'application/json',
        'Api-Key': "enga7zkfu242jnmbvuqk78z8"
      }),
      mode: "cors",
      method: "GET",
    })

}

module.exports = Business;
