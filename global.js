setTimeout (() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

setInterval (() => {
    console.log('in the interval');
}, 1000);

console.log(__dirname)
console.log(__filename)

console.log(document.querySelector);

const { fstat } = require('fs');