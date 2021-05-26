var http = require('http');

http.createServer(function(req,res){
    res.writeHead('200',{'Tontent-Type':'text/plain'});
    res.end("hello world");
    

}).listen("3333","127.0.0.1");
console.log("running");