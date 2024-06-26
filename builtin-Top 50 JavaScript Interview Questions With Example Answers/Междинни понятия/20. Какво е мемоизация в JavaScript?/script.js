function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function factorial(n) {
  if (factorialCache[n] !== undefined) {
    return factorialCache[n];
  } else {
    factorialCache[n] = n * factorial(n - 1);
    return factorialCache[n];
  }
}
