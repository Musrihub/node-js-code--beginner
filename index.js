const hello = "Hello world";
console.log(hello);

const fs = require('fs');
const text = fs.readFileSync('./text/input.txt', 'utf-8');
console.log(text);

const textout = `This is my greetings:${text}.\n Created ${Date.now()}`;
fs.writeFileSync('./text/output.txt', textout);
console.log("file written");