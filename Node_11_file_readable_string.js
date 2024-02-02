let fs = require('fs');
let myReadableStr = fs.createReadStream( 'mine.txt');
myReadableStr.on('data',(chunk)=>{
    console.log(chunk);
})