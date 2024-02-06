require('dotenv').config()
let express = require('express')
let app = express()
let multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/upload')
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null,Date.now()+ "_"+file.originalname)
    }
})


const upload = multer({ storage: storage })

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post('/upload',upload.single('image'),(req,res)=>{

    res.send(req.file.filename)
})

app.post('/uploadMultiple',upload.array('images',5),(req,res)=>{
    let files = req.files
    let fileNames = files.map((file)=>{
        return file.filename
    })
    res.send(fileNames)
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})