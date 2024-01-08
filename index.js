const hello = "Hello world";
console.log(hello);

const fs = require('fs');
const text = fs.readFileSync('./text/input.txt', 'utf-8');
console.log(text);