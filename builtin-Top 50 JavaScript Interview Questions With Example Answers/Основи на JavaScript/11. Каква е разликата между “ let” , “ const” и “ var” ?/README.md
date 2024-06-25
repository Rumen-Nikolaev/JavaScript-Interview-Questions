let и constса въведени в ES6 и имат блоков обхват. letможе да се преназначава и не constможе  да се преназначава.  var е с функционален обхват и може да бъде предеклариран и преназначаван в цялата функция.

let x = 5;
x = 10;
console.log(x); // Output: 10

const y = 5;
y = 10; // Error: Assignment to constant variable
console.log(y);

var z = 5;
var z = 10;
console.log(z); // Output: 10
