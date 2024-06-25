function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello, " + this.name);
};

var person = new Person("John");
person.greet(); // Output: "Hello, John
