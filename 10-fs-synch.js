const {readFileSync,writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync(
    './content/resultWrite.txt',
    `here is the result of write document text ${first},${second}`,
{ flag: 'a' }
)   

console.log('done with this task');
console.log('starting the next one');

// const write = readFileSync('./content/resultWrite.txt','utf8');


// console.log(first,second);
// console.log(write);



 














