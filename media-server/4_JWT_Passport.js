require('dotenv').config()
let express = require('express')
let app = express()
let jwt = require('jsonwebtoken')
let JwtStrategy = require('passport-jwt').Strategy
let ExtractJwt = require('passport-jwt').ExtractJwt;
let passport = require('passport')



let userMap = new Map();
userMap.set('aa@gmail.com',{username:'aa',email:'aa@gmail.com',password:'123'});
userMap.set('bb@gmail.com',{username:'bb',email:'bb@gmail.com',password:'1234'});

let opts={};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY
let myStrategy = new JwtStrategy(opts,function (payload,done){
    let user = userMap.get(payload.email)
    if(user !== null || user !== undefined){
        done(null,user)
    }else {
        done('No user with this email',null)
    }
})


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
passport.use(myStrategy)

app.post('/login',(req,res)=>{
    // res.send(req.body)
    let name = req.body.username
    let password = req.body.password
    let email = req.body.email
    let payload = {email:email}
    let token = jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'1h'})
    res.json({token:token})
})

app.get('/free',(req,res)=>{
    res.send('You are accessing free route')
})
app.get('/protected',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.send('You are accessing protected route')
})
app.listen(process.env.PORT,()=>{
    console.log("Server is running on port "+process.env.PORT)
})