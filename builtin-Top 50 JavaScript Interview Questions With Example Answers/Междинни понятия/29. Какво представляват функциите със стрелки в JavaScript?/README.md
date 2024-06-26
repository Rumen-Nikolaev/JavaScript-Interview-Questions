Функциите със стрелки са кратък синтаксис за писане на функции на JavaScript. Те имат по-компактен синтаксис в сравнение с традиционните функционални изрази и наследяват стойността thisот заобикалящия ги обхват.

Например:

const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // Output: 6

const greet = name => {
  console.log("Hello, " + name)'
};
greet("John"); // Output: Hello, John
