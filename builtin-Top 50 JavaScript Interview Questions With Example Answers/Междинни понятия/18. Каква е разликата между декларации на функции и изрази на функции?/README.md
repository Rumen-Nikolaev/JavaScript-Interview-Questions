Функционалните декларации се дефинират с помощта на ключовата дума function, докато функционалните изрази се дефинират чрез присвояване на функция на променлива. Функционалните декларации се повдигат, докато функционалните изрази не са.

// Function declaration
function multiply(a, b) {
  return a * b;
}

// Function expression
const add = function(a, b) {
  return a + b;
};

console.log(multiply(2, 3)); // Output: 6
console.log(add(2, 3)); // Output: 5
