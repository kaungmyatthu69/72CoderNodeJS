let express = require('express');
let app = express();
let port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World! welcome to my first express app')
})
app.get('/about',(req,res)=>{
    res.send('About page')
})

app.get('/contact',(req,res)=>{
    res.send('Contact page')
})
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})