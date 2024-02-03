let lib = require('./library/app.js')
// console.log(lib.hello("Kaung Myat Thu"))
lib.encryptPassword("123456").then((hash)=>{
    lib.comparePassword("12346",hash)
        .then((result)=>{console.log(result)})
        .catch((err)=>{console.log(err)})
}).catch((err)=>{console.log(err)})

