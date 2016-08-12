
var http= require('http');
var fs=require('fs');
function onRequest(req,res){
  res.writeHead(200,{'content-type':'text/html'});
  fs.readFile('./index.html','null',function(error,data){
    if(error){
      res.write(401);
      res.end();
    }else{
      res.write(data)
    }
  });
}



http.createServer(onRequest).listen(8000);
