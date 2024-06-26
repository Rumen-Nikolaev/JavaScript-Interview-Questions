try {
  // Code that may throw an error
throw new Error("Something went wrong");
} catch (error) {
  // Error handling
  console.log("Error occurred: " + error.message);
}
