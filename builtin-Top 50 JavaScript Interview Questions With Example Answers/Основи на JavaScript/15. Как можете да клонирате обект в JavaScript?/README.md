Има няколко начина за клониране на обект в JavaScript. Един често срещан метод е използването на Object.assign() метода или оператора за разпространение (...).

const obj1 = {name: "John", age: 30} ;
// Using Object.assign()
const obj2 = Object.assign({}, obj1);

// Using spread operotor
const obj3 = { ...obj1};

console.log(obj2); // Output: { name: "John", age: 30}
console.log(obj3); // Output: { name: "John", age: 30}
