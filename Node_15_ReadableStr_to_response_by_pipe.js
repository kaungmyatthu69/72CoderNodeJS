/*
    Create readable stream
    Pipe readable stream to response
 */

const http = require('http');
const fs = require('fs');
let port = 3000;


let myReadableStr = fs.createReadStream( 'mine.txt','utf-8');

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    myReadableStr.pipe(res);
});

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})