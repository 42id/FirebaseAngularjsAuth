
/*
 * GET home page.
 */

exports.index = function(request, response){
  response.sendfile("./public/index.html");
};