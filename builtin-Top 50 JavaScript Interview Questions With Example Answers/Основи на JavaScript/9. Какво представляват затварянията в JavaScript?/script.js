function outer() {
  var outerVar = "Hello";

  function inner() {
     console.log(outerVar);
  }

  return inner;
}

var closureFn = outer();
closureFn(); // Output: Hello
