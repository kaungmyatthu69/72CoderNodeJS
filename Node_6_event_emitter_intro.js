const event = require('events');
const eventEmitter = new event.EventEmitter();
eventEmitter.on("sayMyName", () => {
    console.log("Your name is: Kaung Myat thu");
}   );


setTimeout(() => {
    eventEmitter.emit("sayMyName");

},3000)
