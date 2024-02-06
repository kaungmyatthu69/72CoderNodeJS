let express = require('express')
let app = express()
let path = require('path')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'assets')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/api/posts/:id',(req,res)=>{
    let id = req.params.id
    res.send('You are looking for post with id '+id)
})

app.get('/api/posts',(req,res)=>{
    let title = req.query.title
    let author = req.query.author
    res.send('You are looking for all posts with title '+title+' and author '+author)
})

app.post('/api/login',(req,res)=>{
    let body = req.body;
    let username = body.username
    let password = body.password
    res.send('You are trying to login with username '+username+' and password '+password)
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})