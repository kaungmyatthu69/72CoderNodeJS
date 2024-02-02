let fs = require('fs');
// fs.writeFile('test.txt', 'Hello World', (err) => {
//     if (err) throw err;
//     console.log('File is created successfully.');
// })

fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})


fs.unlink('test.txt')
fs.mkdir('test')



// file delete
let fs = require('fs');
fs.unlink('mine2.txt',(err)=>{
    if(err){
        console.log('err',er)

    }else {
        console.log('successfully deleted')
    }
})
