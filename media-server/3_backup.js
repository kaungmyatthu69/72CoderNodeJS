require('dotenv').config()
let express = require('express')
let app = express()
let server = require('http').createServer(app)
let io = require('socket.io')(server)
let hogan = require('hogan-express')
let path = require('path')


app.engine('html',hogan)
app.set('view engine','html')

app.use(express.static(path.join(__dirname,'assets')))
app.get('/',(req,res)=>{
    res.render('index')
})

let userMap = new Map();
let room1 = 'public'
let room2 = 'private'

let game = io.of('/game')
let book = io.of('/book')

game.on('connection',(socket)=>{
    socket.on('gameStart',(data)=>{
        console.log(data)
        // game.emit('game',data)
    })
})

book.on('connection',(socket)=>{
    socket.on('bookStart',(data)=>{
        console.log(data)
        // book.emit('book',data)
    })
})
io.sockets.on('connection',(socket)=>{
    socket.on('login',(data)=>{
        // console.log(data)
        // io.sockets.connected[socket.id].emit('login_success',data)
        socket.username = data
        userMap.set(socket.username,socket.id)
        if(data === 'w' || data === 'x'){
            socket.join(room1)
            console.log('hello')
            socket.userroom = room1
        }else {
            socket.join(room2)
            socket.userroom = room2
        }
        socket.emit('logged_in',data)

    })
    socket.on('send_message',(data)=>{
        // io.emit('new_message',data)
        io.in(socket.userroom).emit('new_message',socket.username + " : "+data)
    })
})


server.listen(process.env.PORT,()=>{
    console.log("Server is running on port "+process.env.PORT)
})