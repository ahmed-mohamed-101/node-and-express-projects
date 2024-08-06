const fs = require('fs');

const file = fs.readFileSync('output.txt', 'utf8');
console.log (file);