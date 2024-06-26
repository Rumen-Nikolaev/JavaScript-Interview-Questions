Грешките в JavaScript могат да се обработват с помощта на try- catchблокове. Блокът tryсъдържа кода, който може да изведе грешка, и catchблокът обработва грешката и предоставя алтернативен път за изпълнение.

try {
  // Code that may throw an error
throw new Error("Something went wrong");
} catch (error) {
  // Error handling
  console.log("Error occurred: " + error.message);
}
