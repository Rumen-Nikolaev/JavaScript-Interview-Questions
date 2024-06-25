Затварянията ( closureFn) са функции, които имат достъп до променливи от външна функция дори след като външната функция е приключила изпълнението си. Те „помнят” средата, в която са създадени.

function outer() {
  var outerVar = "Hello";

  function inner() {
     console.log(outerVar);
  }

  return inner;
}

var closureFn = outer();
closureFn(); // Output: Hello
