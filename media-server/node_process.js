// console.log(process.argv)
// console.log(process.argv.length)
let qr = require('qr-image');
let fs = require('fs');
let encodedStr= process.argv[2]
let imgname = process.argv[3]
let qrimg = qr.image(encodedStr, { type: 'png' });
qrimg.pipe(fs.createWriteStream(imgname+'.png'));
