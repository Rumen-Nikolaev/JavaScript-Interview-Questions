Функциите от по-висок ред са функции, които могат да приемат други функции като аргументи или да връщат функции като техни резултати. Те позволяват мощни модели за функционално програмиране в JavaScript.

function multiplyByTwo(num) {
  return num * 2;
}

function applyOperation(num, operation) {
  return operation(num);
}

const result = applyOperation(5, multiplyByTwo);
console.log(result); // Output: 10
