let http = require('http');
let fs = require('fs');

let port = 3000;

let myReadableStr = fs.createReadStream( 'index.html','utf-8');

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    myReadableStr.pipe(res);
})

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});