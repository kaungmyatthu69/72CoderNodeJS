let http = require('http');
let fs = require('fs');

let port = 3000;

let server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/json'});
    let obj ={
        name:"mohamed",
        age:25,
        job:"programmer",
        family:{
            father:"ahmed",
            mother:"fatma"
        }

    }
    res.end(JSON.stringify(obj))
})

server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})