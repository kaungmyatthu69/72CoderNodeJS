let http = require('http');
let fs = require('fs');
let port = 3000;

let server = http.createServer((req,res)=>{
    if(req.url === '/' || req.url === '/index' || req.url === "/home"){
        res.writeHead(200,{'Content-Type':'text/html'});
        let myReadableStr = fs.createReadStream('index.html','utf-8');
        myReadableStr.pipe(res);
    }else if(req.url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        let myReadableStr = fs.createReadStream('about.html','utf-8');
        myReadableStr.pipe(res);}
    else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        let myReadableStr = fs.createReadStream('contact.html','utf-8');
        myReadableStr.pipe(res);
    }else if(req.url === '/api/users') {
        let users = {
            name: 'John Doe',
            age: 25,
            job: 'Web Developer',
        }

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end("Something went wrong!")
    }
})
server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});