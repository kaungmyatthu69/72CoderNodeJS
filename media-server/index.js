let url = require('url')
let http = require('http')
let port = 3000;
let routes ={
    "GET":{
        "/":(req,res)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("<h1>GET Home page</h1>")
        },
        "/about":(req,res)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("<h1>GET About page</h1>")
        },


    },
    "POST":{
        "/api/users":(req,res)=>{
          res.writeHead(200,{'Content-Type':'application/json'});
            res.end(JSON.stringify({name:"mohamed",age:25,job:"programmer"}))
        }

    }
}
let start =(req,res)=>{
    let method = req.method;
    let reqURl = url.parse(req.url).pathname;
    console.log(reqURl);
    routes[method][reqURl]();

}

let server = http.createServer(start)
server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})