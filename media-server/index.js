require('dotenv').config()
let http = require('http')
let url = require('url')
let fs = require('fs')
const path = require("path");
const e = require("express");

let meme ={
    ".html":"text/html",
    ".css":"text/css",
    ".js":"text/javascript",
    ".png":"image/png",
    ".jpg":"image/jpg",
    ".jpeg":"image/jpeg",
    ".gif":"image/gif"
}

let checkFileExist = (filepath)=>{
    return new Promise((resolve,reject)=>{
        fs.access(filepath,fs.F_OK,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(filepath)
            }
        })

    })
}

let readMyFile= (filepath)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}
let router=(req,res)=>{
    let reqUrl= url.parse(req.url,true)
    let originPath = reqUrl.pathname;
    let filepath = originPath === "/" ? __dirname+"/index.html" : __dirname+originPath
    let ext = path.extname(filepath)
    console.log("ext",filepath)
    checkFileExist(filepath).then((filepath)=>{
        readMyFile(filepath).then((data)=>{
            res.writeHead(200,{'Content-Type':meme[ext]});
            res.end(data)

        }).catch((err)=>{
            res.writeHead(500,{'Content-Type':'text/html'});
            res.end('<h1>500 Internal Server Error</h1>')
        })

    })
        .catch((err)=>{
            console.log("err",err)
            res.writeHead(404,{'Content-Type':'text/html'});
            res.end('<h1>404 Not Found</h1>')
        })
    // fs.access(filepath,fs.F_OK,(err,data)=>{
    //     if(err){
    //         res.writeHead(404,{'Content-Type':'text/html'});
    //         res.end('<h1>404 Not Found</h1>')
    //     }else{
    //         fs.readFile(filepath,(err,data)=>{
    //             if(err){
    //                 res.writeHead(500,{'Content-Type':'text/html'});
    //                 res.end('<h1>500 Internal Server Error</h1>')
    //             }else {
    //                 res.writeHead(200,{'Content-Type':meme[ext]});
    //                 res.end(data)
    //             }
    //         })
    //     }
    // })


}
let server = http.createServer(router)

server.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})