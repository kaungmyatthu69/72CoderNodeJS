let fs = require('fs');
// let data ="A computer is a machine that can be programmed to carry out sequences of arithmetic or logical operations (computation) automatically. Modern digital electronic computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks. The term computer system may refer to a nominally complete computer that includes the hardware, operating system, software, and peripheral equipment needed and used for full operation; or to a group of computers that are linked and function together, such as a computer network or computer cluster."
// fs.writeFileSync('test.txt', data);

let data = fs.readFileSync('test.txt', 'utf-8');
fs.writeFileSync('mine.txt', data);
fs.appendFileSync('mine.txt', 'Hello World');