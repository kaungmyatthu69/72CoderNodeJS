const event = require('events');
const eventEmitter = new event.EventEmitter();

eventEmitter.on("sayMyName", (name) => {
    console.log(`Your name is: ${name}`);
});

eventEmitter.emit("sayMyName", "Kaung Myat Thu");