require('dotenv').config()

let url = require('url')
let http = require('http')
let qs = require('querystring')
let fs = require('fs')

let responder =(req,res,param)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(param)

}

let myFileReader =(filepath,res)=>{
    fs.access(filepath,fs.F_OK,(err,data)=>{
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            res.end("<h1>404 Not Found</h1>")
        }else{
            fs.readFile(filepath,(err,data)=>{
                    if(err){
                        res.writeHead(500,{'Content-Type':'text/html'});
                        res.end("<h1>500 Internal Server Error</h1>")
                    }else{
                        res.writeHead(200,{'Content-Type':'text/html'});
                        res.end(data)
                    }
                }
            )
        }
    })
}
let routes ={
    "GET":{
        "/":(req,res)=>{
            let filepath = __dirname + '/index.html'
            myFileReader(filepath,res)
            // responder(req,res,filepath)
        }
        ,
        "/about":(req,res)=>{
            let filepath = __dirname+ '/about.html'
            myFileReader(filepath,res)
            // responder(req,res,filepath)
        },


    },
    "POST":{
        // "/api/users":(req,res)=>{
        //   res.writeHead(200,{'Content-Type':'application/json'});
        //     res.end(JSON.stringify({name:"mohamed",age:25,job:"programmer"}))
        '/api/login':(req,res)=>{

            console.log("login",req)
            let body =''
            req.on('data',chunk=>{
                body += chunk
            })
            req.on('end',()=>{
                let result = qs.parse(body)
                console.log("params",result)
            })
            res.end()

        }

    },
    "NAN":(req,res)=>{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end("<h1>404 Not Found</h1>")
    }
}
let start =(req,res)=>{
    let method = req.method;
    let params = url.parse(req.url,true).query;
    console.log(params.name);
    let reqURl = url.parse(req.url).pathname;
    console.log(process.env.PORT);
    let resolveRoute =  routes[method][reqURl];
    console.log(resolveRoute);
    if(resolveRoute != null && resolveRoute != undefined){
        resolveRoute(req,res)
    }else {
        routes["NAN"](req,res);
    }

}

let server = http.createServer(start)
server.listen(process.env.PORT,()=>{
    console.log(`server is running on port 3000`)
})