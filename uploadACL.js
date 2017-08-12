
var AWS = require("aws-sdk")
var s3 = new AWS.S3();
var fs = require("fs")
var acl = require("./acl");

var params = {
 Body: JSON.stringify(acl),
 Bucket: "acl.rodcocr.com",
 Key: "acl.json",
 ACL: "public-read"
};


s3.putObject(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
