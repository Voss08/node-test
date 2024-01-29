// this part its open systen module
const os = require('os')
const user = os.userInfo()

console.log(user);

console.log(`The system uptime is ${os.uptime()/1000} seconds`);


const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);