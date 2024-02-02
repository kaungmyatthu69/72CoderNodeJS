const http = require('http');
let port = 3000;
let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end("hello world")
});

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})