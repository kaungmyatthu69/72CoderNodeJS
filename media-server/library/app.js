// let help = require('./helper/help')
// exports.hello =(name)=>{
//     return `Hello ${name} ` + help.welcomeBack();
// }


let bcrypt = require('bcrypt')

let encryptPassword = (password)=>{
    return new Promise((resolve, reject) => {
        bcrypt.hash(password,10,(err,hash)=>{
            if(err){
                reject(err)
            }else{
                resolve(hash)
            }
        })

    })
}

let comparePassword = (password,hash)=>{
    return new Promise((resolve, reject) => {
        bcrypt.compare(password,hash,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result)
            }
        })
    })
}
module.exports = {
    encryptPassword,
    comparePassword
}