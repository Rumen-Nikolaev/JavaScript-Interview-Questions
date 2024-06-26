// Пример за splice:
const fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grape"); // Remove "banana" and insert "grape" at index 1
console.log(fruits); // Output: ["apple", "grape", "orange"]

// Пример за slice():
const numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(1, 4); // Extract elements from index 1 to 3 (exclusive)
console.log(slicedNumbers); // Output: [2, 3, 4]
