Прототипите са механизъм, използван от JavaScript обекти за наследяване. Всеки JavaScript обект има прототип, който предоставя свойства и методи, които могат да бъдат достъпни от този обект.

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

var person = new Person("John");
person.greet(); // Output: "Hello, John
