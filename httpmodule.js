const http=require("http");
const server=http.createServer(function(req,res){
res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Jai Ho MAA</h1>");
res.end();
   

}).listen(3000,()=>console.log("Server running on port 3000"));