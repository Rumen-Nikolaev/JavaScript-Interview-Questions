function fetchData() {
  return new Promise(function(resolve, reject) {
    // Simulating an asynchronous operation
    setTimeout(function() {
      const data = "Some data";
      resolve(data);
    }, 2000);
  });
}

fetchData()
  .then(function(data) {
    console.log("Data received: " + data);
  })
.catch(function(error) {
  console.log("Error occurred: " + error);
});
