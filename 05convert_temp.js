'use strict';

// Taking input from command line
let celsius = process.argv[2];

console.log(celsius);

// 21 in celsius = 69.8 in fahrenheit 
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius, 'in celsius', '=', fahrenheit, 'in fahrenheit');
