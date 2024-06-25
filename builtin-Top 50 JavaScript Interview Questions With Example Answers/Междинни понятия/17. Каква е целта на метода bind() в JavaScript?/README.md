Методът bind()се използва за създаване на нова функция с определена thisстойност и първоначален набор от аргументи. Позволява ви да зададете контекста на функция за постоянно.

const person = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

const greetFn = person.greet;
const boundFn = greetFn.bind(person);
boundFn(); // Output: Hello, John
